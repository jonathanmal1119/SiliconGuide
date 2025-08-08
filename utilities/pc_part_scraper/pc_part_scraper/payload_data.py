from enum import Enum
import json

cpu_filter = [
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
                ]

motherboard_filter = [
                    { "filter_name": "Manufacturer", "items": ["selectAll"] },
                    { "filter_name": "avg_ratings", "items": ["selectAll"] },
                    { "filter_name": "Socket / CPU", "items": ["selectAll"] },
                    { "filter_name": "Form Factor", "items": ["selectAll"] },
                    { "filter_name": "Chipset", "items": ["selectAll"] },
                    { "filter_name": "Memory Type", "items": ["selectAll"] },
                    { "filter_name": "Color", "items": ["selectAll"] },
                    { "filter_name": "SLI/CrossFire", "items": ["selectAll"] },
                    { "filter_name": "Onboard Ethernet", "items": ["selectAll"] },
                    { "filter_name": "Onboard Video", "items": ["selectAll"] },
                    { "filter_name": "Supports ECC", "items": ["selectAll"] },
                    { "filter_name": "Wireless Networking", "items": ["selectAll"] }
                ]

cooler_filter = [
                    {"filter_name": "Manufacturer", "items": ["selectAll"]},
                    {"filter_name": "avg_ratings", "items": ["selectAll"]},
                    {"filter_name": "Color", "items": ["selectAll"]},
                    {"filter_name": "Bearing", "items": ["selectAll"]},
                    {"filter_name": "CPU Socket", "items": ["selectAll"]},
                    {"filter_name": "Water Cooled", "items": ["selectAll"]},
                    {"filter_name": "Fanless", "items": ["selectAll"]}
                ]

ram_filter = [
                    {"filter_name": "Manufacturer", "items": ["selectAll"]},
                    {"filter_name": "avg_ratings", "items": ["selectAll"]},
                    {"filter_name": "Form Factor", "items": ["selectAll"]},
                    {"filter_name": "Modules", "items": ["selectAll"]},
                    {"filter_name": "Color", "items": ["selectAll"]},
                    {"filter_name": "ECC / Registered", "items": ["selectAll"]},
                    {"filter_name": "Heat Spreader", "items": ["selectAll"]}
                ]

storage_filter = [
                    {"filter_name": "Manufacturer", "items": ["selectAll"]},
                    {"filter_name": "avg_ratings", "items": ["selectAll"]},
                    {"filter_name": "Type", "items": ["selectAll"]},
                    {"filter_name": "Form Factor", "items": ["selectAll"]},
                    {"filter_name": "Interface", "items": ["selectAll"]},
                    {"filter_name": "NVME", "items": ["selectAll"]}
                ]

filters = [ cpu_filter, cooler_filter, motherboard_filter, ram_filter, storage_filter ]

class Part(Enum):
    CPU = 1
    COOLER = 2
    MOTHERBOARD = 3
    RAM = 4
    STORAGE = 5

def get_form_data(token, start, part_type):
    return {
        "draw": str(start // 100),
        "start": str(start),
        "length": "100",
        "_token": token,
        "category_id": str(part_type.value),
        "compatibility_filter": "true",
        "filter_status": "initial",
        "checkbox_filters": json.dumps(filters[part_type.value - 1]),
        "range_filters": "[]",
        "search_query": "",
        "search[value]": "",
        "search[regex]": "false"
    }