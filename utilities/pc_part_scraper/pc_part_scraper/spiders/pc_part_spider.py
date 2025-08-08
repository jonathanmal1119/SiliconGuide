import scrapy
import pc_part_scraper.payload_data as payload_data
from scrapy import Selector

class PcBuilderSpider(scrapy.Spider):
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

            yield parsed

class PcBuilderCPUSpider(PcBuilderSpider):
    name = 'pc_builder_cpus'
    url = 'https://pc-builder.io/cpu'
    part_type = payload_data.Part.CPU
    max_items = 1500
    field_map = {
        'name': 'a::text',
        'rating': 'p.rating span::text',
        'price': 'div.price-box p::text',
        'cores': 'div.spec-content div span:nth-of-type(2)::text',
        'core clock': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'boost clock': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'tdp': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderMotherboardSpider(PcBuilderSpider):
    name = 'pc_builder_motherboards'
    url = 'https://pc-builder.io/motherboard'
    part_type = payload_data.Part.MOTHERBOARD
    max_items = 4900
    field_map = {
        'name': 'a::text',
        'rating': 'p.rating span::text',
        'price': 'div.price-box p::text',
        'socket/cpu': 'div.spec-content div span:nth-of-type(2)::text',
        'form factor': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'memory max': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'memory slots': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderCoolerSpider(PcBuilderSpider):
    name = 'pc_builder_coolers'
    url = 'https://pc-builder.io/cpu-cooler'
    part_type = payload_data.Part.COOLER
    max_items = 2800
    field_map = {
        'name': 'a::text',
        'rating': 'p.rating span::text',
        'price': 'div.price-box p::text',
        'fan rpm': 'div.spec-content div span:nth-of-type(2)::text',
        'noise level': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

#filter out DDR3s
class PcBuilderRAMSpider(PcBuilderSpider):
    name = 'pc_builder_rams'
    url = 'https://pc-builder.io/ram'
    part_type = payload_data.Part.RAM
    max_items = 13400
    field_map = {
        'name': 'a::text',
        'rating': 'p.rating span::text',
        'price': 'div.price-box p::text',
        'modules': 'div.spec-content div span:nth-of-type(2)::text',
        'price/gb': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'color': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'first word latency': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'cas latency': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }

class PcBuilderStorageSpider(PcBuilderSpider):
    name = 'pc_builder_storage'
    url = 'https://pc-builder.io/storage'
    part_type = payload_data.Part.STORAGE
    max_items = 6000
    field_map = {
        'name': 'a::text',
        'rating': 'p.rating span::text',
        'price': 'div.price-box p::text',
        'capacity': 'div.spec-content div span:nth-of-type(2)::text',
        'price/gb': 'div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text',
        'type': 'div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text',
        'cache': 'div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text',
        'form factor': 'div.spec-content div:nth-of-type(5) span:nth-of-type(2)::text',
        'interface': 'div.spec-content div:nth-of-type(6) span:nth-of-type(2)::text',
        'link': 'a::attr(href)'
    }