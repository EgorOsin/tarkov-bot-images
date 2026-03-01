# Tarkov Bot Images

Публичный репозиторий изображений и Mini App для Telegram-бота [Tarkov AI Helper](https://t.me/EFTGuidebot).

## Структура

```
tarkov-bot-images/
├── maps/           # Карты локаций с обозначениями
│   ├── customs.jpg
│   ├── factory.jpg
│   └── ...
├── quests/         # Скриншоты для квестов
│   └── {quest_name}/
├── webapp/         # 🗺️ Telegram Mini App - интерактивные карты
│   ├── index.html
│   └── maps/
│       └── maps-data.js
└── README.md
```

## 🗺️ Интерактивные карты (Mini App)

**URL:** `https://egorosin.github.io/tarkov-bot-images/webapp/`

Telegram Mini App с интерактивными картами всех локаций:
- Развязка, Таможня, Лес, Береговая линия
- Резерв, Завод, Лаборатория, Маяк
- Улицы Таркова, Эпицентр

### Маркеры:
- 🚪 Выходы PMC/Scav
- 💀 Спавны боссов
- 🔒 Запертые двери
- ❗ Квестовые точки
- 🔑 Спавн ключей
- 🔘 Рычаги/кнопки

### Настройка GitHub Pages:

1. Перейди в **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **/ (root)**
4. Save

После активации Mini App будет доступен по адресу:
```
https://egorosin.github.io/tarkov-bot-images/webapp/
```

### Добавление в бота:

Добавь в `.env`:
```env
WEBAPP_URL=https://egorosin.github.io/tarkov-bot-images/webapp/
```

## Использование изображений

Все изображения доступны по прямым ссылкам:

```
https://raw.githubusercontent.com/EgorOsin/tarkov-bot-images/main/maps/customs.jpg
```

## Источники

- [Escape from Tarkov Wiki (Fandom)](https://escapefromtarkov.fandom.com/wiki/)
- [tarkov.dev](https://tarkov.dev/maps)
- [Map Genie](https://mapgenie.io/tarkov)
- [wiki-tarkov.ru](https://wiki-tarkov.ru/)

## Лицензия

Изображения принадлежат Battlestate Games и используются в образовательных целях.
