"""Скрипт для скачивания карт Tarkov из публичных источников."""
import os
import urllib.request

MAPS = {
    "customs.jpg": "https://tarkov.dev/maps/customs.jpg",
    "factory.jpg": "https://tarkov.dev/maps/factory.jpg",
    "woods.jpg": "https://tarkov.dev/maps/woods.jpg",
    "shoreline.jpg": "https://tarkov.dev/maps/shoreline.jpg",
    "interchange.jpg": "https://tarkov.dev/maps/interchange.jpg",
    "reserve.jpg": "https://tarkov.dev/maps/reserve.jpg",
    "labs.jpg": "https://tarkov.dev/maps/labs.jpg",
    "lighthouse.jpg": "https://tarkov.dev/maps/lighthouse.jpg",
    "streets.jpg": "https://tarkov.dev/maps/streets-of-tarkov.jpg",
    "ground-zero.jpg": "https://tarkov.dev/maps/ground-zero.jpg",
}

MAPS_DIR = os.path.join(os.path.dirname(__file__), "maps")

def download_maps():
    os.makedirs(MAPS_DIR, exist_ok=True)
    
    for filename, url in MAPS.items():
        filepath = os.path.join(MAPS_DIR, filename)
        print(f"Downloading {filename}...")
        try:
            urllib.request.urlretrieve(url, filepath)
            print(f"  ✓ Saved to {filepath}")
        except Exception as e:
            print(f"  ✗ Error: {e}")

if __name__ == "__main__":
    download_maps()
