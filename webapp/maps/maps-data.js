// Данные интерактивных карт Escape from Tarkov
// Источник: https://github.com/V-Power-Inc/wiki-tarkov

// Прямые ссылки на изображения карт (GitHub raw)
const MAP_IMAGES = {
  factory: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/zavod_map.jpg",
  customs: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/karta_tamozhnya_preview.png",
  woods: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/forest_prev.jpg",
  shoreline: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/karta_bereg_preview.png",
  interchange: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/razvyazka_small.jpg",
  reserve: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/rezerv.jpg",
  labs: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/terra-group.png",
  lighthouse: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/lighthouse.jpg",
  streets: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/streets-of-tarkov.jpg",
  ground_zero: "https://raw.githubusercontent.com/V-Power-Inc/wiki-tarkov/master/web/img/maps/epicenter.png",
};

const MAPS_DATA = {
  factory: {
    name_ru: "Завод",
    mapImage: MAP_IMAGES.factory,
    mapBounds: [[0, 0], [3000, 2000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [2500, 500], popup: { title: "Ворота 3", description: "Нужен ключ Factory Exit Key" }},
      { categoryId: "exfil_pmc", position: [500, 1500], popup: { title: "Подвал", description: "Через подвал" }},
      { categoryId: "exfil_pmc", position: [1500, 1800], popup: { title: "Окно офиса", description: "Нужен Factory Exit Key" }},
      { categoryId: "exfil_scav", position: [2600, 600], popup: { title: "Камера 3", description: "Для Диких" }},
      { categoryId: "spawn_boss", position: [1500, 1000], popup: { title: "Тагилла", description: "Босс с кувалдой" }},
    ]
  },
  
  customs: {
    name_ru: "Таможня",
    mapImage: MAP_IMAGES.customs,
    mapBounds: [[0, 0], [8000, 4500]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "locked", name: "Двери", color: "#ff3399" },
      { id: "quest", name: "Квесты", color: "#ffff00" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [7500, 2200], popup: { title: "ЗБ-1011", description: "Бункер" }},
      { categoryId: "exfil_pmc", position: [7800, 1000], popup: { title: "Перекрёсток", description: "Основной" }},
      { categoryId: "exfil_pmc", position: [200, 3500], popup: { title: "КПП ООН", description: "Не всегда" }},
      { categoryId: "exfil_pmc", position: [300, 2000], popup: { title: "Лодка", description: "7000₽" }},
      { categoryId: "exfil_pmc", position: [500, 800], popup: { title: "Трейлер парк", description: "Основной" }},
      { categoryId: "spawn_boss", position: [4500, 2800], popup: { title: "Решала", description: "В Дормах" }},
      { categoryId: "spawn_boss", position: [3500, 1500], popup: { title: "Решала", description: "Газохранилище" }},
      { categoryId: "locked", position: [4600, 2900], popup: { title: "Дормы 204", description: "Marked Room" }},
      { categoryId: "locked", position: [4700, 2950], popup: { title: "Дормы 303", description: "Marked Room" }},
      { categoryId: "quest", position: [4500, 2700], popup: { title: "Часы", description: "Квест: Проверка" }},
    ]
  },
  
  woods: {
    name_ru: "Лес",
    mapImage: MAP_IMAGES.woods,
    mapBounds: [[0, 0], [7000, 7000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "quest", name: "Квесты", color: "#ffff00" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [6500, 500], popup: { title: "Окраина", description: "Основной" }},
      { categoryId: "exfil_pmc", position: [500, 6500], popup: { title: "КПП ООН", description: "Основной" }},
      { categoryId: "exfil_pmc", position: [3500, 200], popup: { title: "Место мертвеца", description: "Не всегда" }},
      { categoryId: "spawn_boss", position: [3500, 4000], popup: { title: "Штурман", description: "На лесопилке" }},
      { categoryId: "quest", position: [3400, 3800], popup: { title: "Лесопилка", description: "Квестовые предметы" }},
      { categoryId: "quest", position: [5500, 2500], popup: { title: "Лагерь USEC", description: "Квест: Шейкер" }},
    ]
  },
  
  shoreline: {
    name_ru: "Берег",
    mapImage: MAP_IMAGES.shoreline,
    mapBounds: [[0, 0], [9000, 6000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "locked", name: "Двери", color: "#ff3399" },
      { id: "quest", name: "Квесты", color: "#ffff00" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [8500, 3000], popup: { title: "Тоннель", description: "Восток" }},
      { categoryId: "exfil_pmc", position: [500, 3000], popup: { title: "Дорога на Таможню", description: "Запад" }},
      { categoryId: "spawn_boss", position: [5500, 4000], popup: { title: "Санитар", description: "В Здравнице" }},
      { categoryId: "locked", position: [5600, 4200], popup: { title: "Восток 310", description: "LEDX" }},
      { categoryId: "locked", position: [5400, 4100], popup: { title: "Запад 301", description: "Редкий лут" }},
      { categoryId: "quest", position: [5500, 4100], popup: { title: "Здравница", description: "Много квестов" }},
    ]
  },
  
  interchange: {
    name_ru: "Развязка",
    mapImage: MAP_IMAGES.interchange,
    mapBounds: [[0, 0], [9600, 5402]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "exfil_transit", name: "Транзит", color: "#0099ff" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "lever", name: "Рычаги", color: "#9900ff" },
      { id: "locked", name: "Двери", color: "#ff3399" },
      { id: "quest", name: "Квесты", color: "#ffff00" },
    ],
    markers: [
      { categoryId: "exfil_transit", position: [1551, 60], popup: { title: "Транзит Таможня", description: "Через 1 мин" }},
      { categoryId: "exfil_transit", position: [1613, 4643], popup: { title: "Транзит Улицы", description: "Через 1 мин" }},
      { categoryId: "exfil_pmc", position: [4592, 4314], popup: { title: "Электростанция", description: "20,000₽" }},
      { categoryId: "exfil_pmc", position: [6190, 2145], popup: { title: "Сейфрум", description: "Карта #11SR" }},
      { categoryId: "exfil_pmc", position: [4711, 894], popup: { title: "Эмерком", description: "Основной" }},
      { categoryId: "exfil_pmc", position: [531, 4636], popup: { title: "Ж/Д", description: "Основной" }},
      { categoryId: "exfil_scav", position: [538, 4636], popup: { title: "Ж/Д", description: "Для Дикого" }},
      { categoryId: "spawn_boss", position: [7389, 2636], popup: { title: "Килла", description: "В ТЦ ULTRA" }},
      { categoryId: "spawn_boss", position: [6778, 3205], popup: { title: "Тагилла", description: "В ТЦ" }},
      { categoryId: "lever", position: [4104, 4262], popup: { title: "Рубильник", description: "Питание ТЦ" }},
      { categoryId: "locked", position: [7593, 2538], popup: { title: "Киба", description: "Оружейный магазин" }},
      { categoryId: "locked", position: [8814, 2169], popup: { title: "ULTRA Медблок", description: "LEDX" }},
      { categoryId: "quest", position: [7669, 2902], popup: { title: "KOSTIN", description: "Большая распродажа" }},
    ]
  },
  
  reserve: {
    name_ru: "Резерв",
    mapImage: MAP_IMAGES.reserve,
    mapBounds: [[0, 0], [6000, 6000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "lever", name: "Рычаги", color: "#9900ff" },
      { id: "locked", name: "Двери", color: "#ff3399" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [5500, 500], popup: { title: "Бронепоезд", description: "Случайно" }},
      { categoryId: "exfil_pmc", position: [500, 3000], popup: { title: "Скала", description: "Парашют" }},
      { categoryId: "exfil_pmc", position: [3000, 5500], popup: { title: "Д-2", description: "Генератор" }},
      { categoryId: "spawn_boss", position: [3000, 3000], popup: { title: "Глухарь", description: "С охраной" }},
      { categoryId: "lever", position: [2800, 5200], popup: { title: "Генератор Д-2", description: "Включает выход" }},
      { categoryId: "locked", position: [3200, 2800], popup: { title: "РБ-СТ", description: "Военный лут" }},
    ]
  },
  
  labs: {
    name_ru: "Лаборатория",
    mapImage: MAP_IMAGES.labs,
    mapBounds: [[0, 0], [4000, 3000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы", color: "#00ff00" },
      { id: "lever", name: "Рычаги", color: "#9900ff" },
      { id: "locked", name: "Двери", color: "#ff3399" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [3500, 1500], popup: { title: "Грузовой лифт", description: "Активация" }},
      { categoryId: "exfil_pmc", position: [500, 1500], popup: { title: "Главный лифт", description: "Активация" }},
      { categoryId: "exfil_pmc", position: [2000, 2500], popup: { title: "Парковка", description: "Активация" }},
      { categoryId: "exfil_pmc", position: [2000, 500], popup: { title: "Канализация", description: "" }},
      { categoryId: "locked", position: [3000, 2000], popup: { title: "Зелёная", description: "LEDX" }},
      { categoryId: "locked", position: [1000, 1000], popup: { title: "Синяя", description: "Оружие" }},
      { categoryId: "locked", position: [2500, 1500], popup: { title: "Чёрная", description: "Военка" }},
    ]
  },
  
  lighthouse: {
    name_ru: "Маяк",
    mapImage: MAP_IMAGES.lighthouse,
    mapBounds: [[0, 0], [8000, 5000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "locked", name: "Двери", color: "#ff3399" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [7500, 2500], popup: { title: "Южная дорога", description: "Основной" }},
      { categoryId: "exfil_pmc", position: [500, 2500], popup: { title: "Северный КПП", description: "Основной" }},
      { categoryId: "spawn_boss", position: [5000, 3500], popup: { title: "Роги (USEC)", description: "Водоочистка" }},
      { categoryId: "locked", position: [5200, 3700], popup: { title: "Водоочистка", description: "Ценный лут" }},
    ]
  },
  
  streets: {
    name_ru: "Улицы Таркова",
    mapImage: MAP_IMAGES.streets,
    mapBounds: [[0, 0], [10000, 8000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "exfil_transit", name: "Транзит", color: "#0099ff" },
      { id: "spawn_boss", name: "Босс", color: "#ff0000" },
      { id: "locked", name: "Двери", color: "#ff3399" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [9500, 4000], popup: { title: "Подземный переход", description: "" }},
      { categoryId: "exfil_pmc", position: [500, 4000], popup: { title: "Рухнувший кран", description: "" }},
      { categoryId: "exfil_pmc", position: [5000, 7500], popup: { title: "Такси", description: "Платный" }},
      { categoryId: "exfil_transit", position: [8500, 2000], popup: { title: "Транзит Развязка", description: "Через 1 мин" }},
      { categoryId: "spawn_boss", position: [5000, 5000], popup: { title: "Кабан", description: "С охраной" }},
      { categoryId: "locked", position: [6000, 4500], popup: { title: "Конкордия", description: "Апартаменты" }},
      { categoryId: "locked", position: [4000, 5500], popup: { title: "Тарбанк", description: "Сейфы" }},
    ]
  },
  
  ground_zero: {
    name_ru: "Эпицентр",
    mapImage: MAP_IMAGES.ground_zero,
    mapBounds: [[0, 0], [5000, 4000]],
    categories: [
      { id: "exfil_pmc", name: "Выходы ЧВК", color: "#00ff00" },
      { id: "exfil_scav", name: "Выходы Дикий", color: "#00cc00" },
      { id: "quest", name: "Квесты", color: "#ffff00" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [4500, 2000], popup: { title: "Проспект Мира", description: "Восток" }},
      { categoryId: "exfil_pmc", position: [500, 2000], popup: { title: "Полицейский КПП", description: "Запад" }},
      { categoryId: "quest", position: [2500, 2000], popup: { title: "Центр", description: "Квесты новичков" }},
    ]
  },
};
