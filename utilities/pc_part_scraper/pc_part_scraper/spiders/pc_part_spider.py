import scrapy
import pc_part_scraper.payload_data as payload_data
from scrapy import Selector

class PcBuilderSpider(scrapy.Spider):
    name = None
    url = None
    part_type = None
    max_items = 0
    field_map = {}

    def start_requests(self):
        yield scrapy.Request(
            url=self.url,  # or the category page
            callback=self.parse_token
        )
    
    def parse_token(self, response):
        # Extract token from hidden input or meta tag
        token = response.css('meta[name="csrf-token"]::attr(content)').get()

        if not token:
            self.logger.error("CSRF token not found!")
            return

        for start in range(0, self.max_items, 100):
            form_data = payload_data.get_form_data(token, start, self.part_type)

            yield scrapy.FormRequest(
                url="https://pc-builder.io/products/data",
                method="POST",
                formdata=form_data,
                callback=self.parse,
                headers={
                    "Content-Type": "application/x-www-form-urlencoded",
                    "X-Requested-With": "XMLHttpRequest",
                }
            )
    
    def parse(self,response):
        data = response.json()   

        for item in data['data']:
            product_html = Selector(text=item['Name'])
            price_html = Selector(text=item['Add to Build'])

            parsed = {
                field: sel.css(selector).get()
                for field, selector in self.field_map.items()
                for sel in [product_html if field != 'price' and field != 'link' else price_html]
            }
            
            parsed['part_type'] = self.name

            yield parsed

class PcBuilderCPUSpider(PcBuilderSpider):
    name = 'cpu'
    url = 'https://pc-builder.io/cpu'
    part_type = payload_data.Part.CPU
    max_items = 1500
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'cores': 'div.spec-content div span:nth-of-type(2)::text',
        'core_clock': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'boost_clock': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'tdp': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderMotherboardSpider(PcBuilderSpider):
    name = 'motherboard'
    url = 'https://pc-builder.io/motherboard'
    part_type = payload_data.Part.MOTHERBOARD
    max_items = 4900
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'socket/cpu': 'div.spec-content div span:nth-of-type(2)::text',
        'form_factor': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'memory_max': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'memory_slots': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderCoolerSpider(PcBuilderSpider):
    name = 'cooler'
    url = 'https://pc-builder.io/cpu-cooler'
    part_type = payload_data.Part.COOLER
    max_items = 2800
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'fan_rpm': 'div.spec-content div span:nth-of-type(2)::text',
        'noise_level': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

#filter out DDR3s
class PcBuilderRAMSpider(PcBuilderSpider):
    name = 'ram'
    url = 'https://pc-builder.io/ram'
    part_type = payload_data.Part.RAM
    max_items = 13400
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'modules': 'div.spec-content div span:nth-of-type(2)::text',
        'price/gb': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'first_word_latency': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'cas_latency': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderStorageSpider(PcBuilderSpider):
    name = 'storage'
    url = 'https://pc-builder.io/storage'
    part_type = payload_data.Part.STORAGE
    max_items = 6000
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'capacity': 'div.spec-content div span:nth-of-type(2)::text',
        'price/gb': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'type': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'cache': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'form_factor': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'interface': 'div.spec-content div:nth-of-type(6) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderGPUSpider(PcBuilderSpider):
    name = 'gpu'
    url = 'https://pc-builder.io/gpu'
    part_type = payload_data.Part.GPU
    max_items = 6300
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'chipset': 'div.spec-content div span:nth-of-type(2)::text',
        'memory': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'core_clock': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'boost_clock': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'length': 'div.spec-content div:nth-of-type(6) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderCaseSpider(PcBuilderSpider):
    name = 'case'
    url = 'https://pc-builder.io/case'
    part_type = payload_data.Part.CASE
    max_items = 6400
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'type': 'div.spec-content div span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'power_supply': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'side_panel': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'external_5.25"_bays': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'internal_3.5"_bays': 'div.spec-content div:nth-of-type(6) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderPowerSupplySpider(PcBuilderSpider):
    name = 'power'
    url = 'https://pc-builder.io/power-supply'
    part_type = payload_data.Part.POWERSUPPLY
    max_items = 3400
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'type': 'div.spec-content div span:nth-of-type(2)::text',
        'efficiency_rating': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'wattage':'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'modular': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderMonitorSpider(PcBuilderSpider):
    name = 'monitor'
    url = 'https://pc-builder.io/monitor'
    part_type = payload_data.Part.MONITOR
    max_items = 5000
    field_map = {
        'name': 'a::text',
        'price': 'div.price-box p::text',
        'screen_size': 'div.spec-content div span:nth-of-type(2)::text',
        'resolution': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'refresh_rate': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'response_time (G2G)': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'panel_type': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'aspect_ratio': 'div.spec-content div:nth-of-type(6) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }