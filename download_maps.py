"""Скрипт для скачивания карт Tarkov из публичных источников."""
import os
import urllib.request
import ssl

# Прямые ссылки на карты (imgur - надёжный хостинг)
# Эти ссылки нужно заменить на реальные после ручной загрузки
MAPS = {
    "customs.png": "https://gamepedia.cursecdn.com/escapefromtarkov_gamepedia/thumb/b/bf/Customs_Map_Updated_12.9_%28by_Jindouz%29.png/1200px-Customs_Map_Updated_12.9_%28by_Jindouz%29.png",
}

MAPS_DIR = os.path.join(os.path.dirname(__file__), "maps")

def download_maps():
    os.makedirs(MAPS_DIR, exist_ok=True)
    
    # Отключаем проверку SSL для тестов
    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE
    
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
    }
    
    for filename, url in MAPS.items():
        filepath = os.path.join(MAPS_DIR, filename)
        print(f"Downloading {filename}...")
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, context=ctx, timeout=30) as response:
                with open(filepath, 'wb') as f:
                    f.write(response.read())
            size = os.path.getsize(filepath)
            print(f"  OK: {size} bytes")
        except Exception as e:
            print(f"  ERROR: {e}")

if __name__ == "__main__":
    download_maps()
    print("\\nDone! Upload maps manually from:")
    print("  https://escapefromtarkov.fandom.com/wiki/Map:Customs")
    print("  https://mapgenie.io/tarkov/maps/customs")
