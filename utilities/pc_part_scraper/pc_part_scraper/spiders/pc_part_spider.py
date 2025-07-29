import scrapy
import json
from scrapy import Selector

class PcBuilderCPUSpider(scrapy.Spider):
    name = 'pc_builder_cpus'

    def start_requests(self):
        yield scrapy.Request(
            url="https://pc-builder.io/cpu",  # or the category page
            callback=self.parse_token
        )

    def parse_token(self, response):
        # Extract token from hidden input or meta tag
        token = response.css('meta[name="csrf-token"]::attr(content)').get()
        # Or if it’s in a meta tag: response.css('meta[name="csrf-token"]::attr(content)').get()

        if not token:
            self.logger.error("CSRF token not found!")
            return

        for start in range(0, 1500, 100):
            form_data = {
                "draw": str(start/100),
                "start": str(start),
                "length": "100",
                "_token": token,  # this may expire or change per session
                "category_id": "1",
                "compatibility_filter": "true",
                "filter_status": "initial",
                "checkbox_filters": json.dumps([
                    {"filter_name": "Manufacturer", "items": ["selectAll"]},
                    {"filter_name": "avg_ratings", "items": ["selectAll"]},
                    {"filter_name": "Series", "items": ["selectAll"]},
                    {"filter_name": "Microarchitecture", "items": ["selectAll"]},
                    {"filter_name": "Core Family", "items": ["selectAll"]},
                    {"filter_name": "Socket", "items": ["selectAll"]},
                    {"filter_name": "Integrated Graphics", "items": ["selectAll"]},
                    {"filter_name": "Simultaneous Multithreading", "items": ["selectAll"]},
                    {"filter_name": "ECC Support", "items": ["selectAll"]},
                    {"filter_name": "Includes Cooler", "items": ["selectAll"]}
                ]),
                "range_filters": "[]",
                "search_query": "",
                "search[value]": "",
                "search[regex]": "false",
            }

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

            yield {
                'name': product_html.css('a::text').get(),
                'rating': product_html.css('p.rating span::text').get(),
                'price': price_html.css('div.price-box p::text').get(),
                'cores': product_html.css('div.spec-content div span:nth-of-type(2)::text').get(),
                'core_clock': product_html.css('div.spec-content div:nth-of-type(2) span:nth-of-type(2)::text').get(),
                'boost_clock': product_html.css('div.spec-content div:nth-of-type(3) span:nth-of-type(2)::text').get(),
                'tdp': product_html.css('div.spec-content div:nth-of-type(4) span:nth-of-type(2)::text').get(),
                'link': price_html.css('a::attr(href)').get()
            }