const defaultParts = {
    "CPU": [
        { "name": "Intel Core i9-13900K", "ratings": 5.0, "price": 429.99, "wattage": 125, "link": "https://www.amazon.com/Intel-i9-13900K-Desktop-Processor-P-cores/dp/B0BCF54SR1" },
        { "name": "AMD Ryzen 9 7950X3D", "ratings": 2.1, "price": 599.99, "wattage": 120, "link": "https://www.amazon.com/AMD-Ryzen-7950X3D-Hexadeca-core-Processor/dp/B0BTRH9MNS" },
        { "name": "Intel Core i7-13700K", "ratings": 3.2, "price": 349.99, "wattage": 100, "link": "https://www.amazon.com/Intel-i7-13700K-Desktop-Processor-P-cores/dp/B0BCF57FL5" },
        { "name": "AMD Ryzen 7 7700X", "ratings": 4.4, "price": 399.99, "wattage": 85, "link": "https://www.amazon.com/AMD-7700X-16-Thread-Unlocked-Processor/dp/B0BBHHT8LY?th=1" },
        { "name": "Intel Core i5-13600K", "ratings": 3.9, "price": 249.99, "wattage": 65, "link": "https://www.amazon.com/Intel-i5-13600K-Desktop-Processor-P-cores/dp/B0BCDR9M33" }
    ],
    "Motherboard": [
        { "name": "ASUS ROG Strix Z790-E", "ratings": 4.8, "price": 379.99, "wattage": 25, "link": "https://www.amazon.com/ASUS-ROG-Strix-Z790-E-Gaming/dp/B0BCF6KPHX" },
        { "name": "MSI MPG B650 Carbon WiFi", "ratings": 4.3, "price": 289.99, "wattage": 22, "link": "https://www.amazon.com/MSI-B650-Carbon-WiFi-Motherboard/dp/B0BHQVCJXJ" }
    ],
    "Memory": [
        { "name": "Corsair Vengeance DDR5 32GB (2x16GB) 6000MHz", "ratings": 4.9, "price": 159.99, "wattage": 10, "link": "https://www.amazon.com/Corsair-Vengeance-32GB-6000MHz-Desktop/dp/B0BHZQ19VW" },
        { "name": "G.SKILL Trident Z5 RGB Series 32GB (2x16GB) 6400MHz", "ratings": 4.7, "price": 199.99, "wattage": 10, "link": "https://www.amazon.com/G-SKILL-Trident-PC5-51200-CL32-39-39-1024/dp/B0BHZVPYRC" }
    ],
    "Storage": [
        { "name": "Samsung 980 PRO 2TB NVMe SSD", "ratings": 4.9, "price": 159.99, "wattage": 8, "link": "https://www.amazon.com/SAMSUNG-980-PRO-SSD-2TB/dp/B08RK2SR23" },
        { "name": "Crucial P5 Plus 1TB NVMe SSD", "ratings": 4.6, "price": 89.99, "wattage": 7, "link": "https://www.amazon.com/Crucial-Plus-5000MB-PCIe-Internal/dp/B098WL46RS" }
    ],
    "Graphics Card": [
        { "name": "NVIDIA GeForce RTX 4090", "ratings": 4.8, "price": 1599.99, "wattage": 450, "link": "https://www.amazon.com/ASUS-GeForce-Graphics-DisplayPort-TUF-RTX4090-O24G-GAMING/dp/B0BHYWJNK1" },
        { "name": "AMD Radeon RX 7900 XTX", "ratings": 4.5, "price": 999.99, "wattage": 355, "link": "https://www.amazon.com/Sapphire-21322-01-20G-NITRO-Graphics/dp/B0BNVZ7N5V" }
    ],
    "Case": [
        { "name": "NZXT H7 Flow", "ratings": 4.7, "price": 129.99, "wattage": 0, "link": "https://www.amazon.com/NZXT-H7-Flow-Mid-Tower-White/dp/B09V9B2J3N" },
        { "name": "Fractal Design Meshify 2 Compact", "ratings": 4.8, "price": 109.99, "wattage": 0, "link": "https://www.amazon.com/Fractal-Design-Meshify-Compact-TG/dp/B08PP2F6LK" }
    ],
    "Power Supply": [
        { "name": "Corsair RM850x 850W 80+ Gold", "ratings": 4.9, "price": 139.99, "wattage": 850, "link": "https://www.amazon.com/Corsair-RM850x-Certified-Fully-Modular-Supply/dp/B08RXQHZR4" },
        { "name": "Seasonic Focus GX-750W 80+ Gold", "ratings": 4.8, "price": 119.99, "wattage": 750, "link": "https://www.amazon.com/Seasonic-FOCUS-GX-750-Full-Modular/dp/B07H2RR55Q" }
    ],
    "CPU Cooler": [
        { "name": "Noctua NH-D15", "ratings": 4.9, "price": 99.99, "wattage": 5, "link": "https://www.amazon.com/Noctua-NH-D15-Premium-Cooler-NF-A15/dp/B00L7UZMAK" },
        { "name": "Corsair iCUE H150i Elite Capellix Liquid CPU Cooler", "ratings": 4.7, "price": 169.99, "wattage": 10, "link": "https://www.amazon.com/Corsair-iCUE-H150i-ELITE-CAPELLIX/dp/B08C78VZ9Z" }
    ],
    "Case Fans": [
        { "name": "ARCTIC F12 PWM - 120mm Case Fan", "ratings": 4.8, "price": 9.99, "wattage": 2, "link": "https://www.amazon.com/ARCTIC-F12-PWM-Case-Fan/dp/B002KTVFTE" },
        { "name": "Corsair LL120 RGB 120mm Fan", "ratings": 4.6, "price": 39.99, "wattage": 3, "link": "https://www.amazon.com/Corsair-LL120-RGB-120mm-Light/dp/B075VGN4M1" }
    ]



}


export default defaultParts;