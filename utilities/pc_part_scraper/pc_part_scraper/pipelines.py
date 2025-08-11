# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import re
from pymongo import MongoClient
from dotenv import load_dotenv
import os


# class PcPartScraperPipeline:
#     def open_spider(self, spider):
#         self.files = {
#             'link': open('cpu_list.csv', 'w', newline='', encoding='utf-8'),
#             'no_link': open('cpu_unlinked_list.csv', 'w', newline='', encoding='utf-8')
#         }

#         self.writers = {}
    
#     def close_spider(self, spider):
#         for file in self.files.values():
#             file.close()
    
#     def process_item(self, item, spider):
#         adapter = ItemAdapter(item)
#         key = 'link' if adapter.get('link') else 'no_link'
#         file = self.files[key]
        
#         # Initialize writer if needed
#         if key not in self.writers:
#             fieldnames = item.keys()
#             writer = csv.DictWriter(file, fieldnames=fieldnames)
#             writer.writeheader()
#             self.writers[key] = writer

#         self.writers[key].writerow(item)
#         return item

class PcBuilderCPUPipeline:
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        dirty_ints = ['cores', 'tdp']
        dirty_floats = ['core_clock', 'boost_clock']
        # Extracts the int from the string
        for data in dirty_ints:
            clean_data = re.search(r'\d+', adapter.get(data))
            if clean_data is None:
                adapter[data] = 'N/A'
            else:
                adapter[data] = int(clean_data.group())
        # Extracts the float from the string
        for data in dirty_floats:
            clean_data = re.search(r'\d+(?:\.\d+)?', adapter.get(data))
            if clean_data is None:
                adapter[data] = 'N/A'
            else:
                adapter[data] = float(clean_data.group())
        return item


class MongoPipeline:
    def __init__(self):
        # Load environment variables
        load_dotenv()
        self.mongo_uri = os.getenv("MONGO_URI")

        # Connect to MongoDB
        self.client = MongoClient(self.mongo_uri)

        # Pick database and collection
        self.db = self.client["silicon_guide"]
        self.collection = self.db["parts"]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        self.collection.insert_one(item)
        return item
