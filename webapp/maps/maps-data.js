// Данные интерактивных карт Escape from Tarkov
// Источник: https://escapefromtarkov.fandom.com/wiki/

// Прямые ссылки на изображения карт (CDN)
const MAP_IMAGES = {
  interchange: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/b/b4/Interchange_Interactive_Map_Base.webp",
  customs: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/4/4c/Customs_Interactive_Map_Base.webp",
  woods: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/f/f5/Woods_Interactive_Map_Base.webp",
  shoreline: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a3/Shoreline_Interactive_Map_Base.webp",
  reserve: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/9d/Reserve_Interactive_Map_Base.webp",
  factory: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/7/7e/Factory_Interactive_Map_Base.webp",
  labs: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/9/96/Labs_Interactive_Map_Base.webp",
  lighthouse: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/5/5a/Lighthouse_Interactive_Map_Base.webp",
  streets: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/e/e3/Streets_Interactive_Map_Base.webp",
  ground_zero: "https://static.wikia.nocookie.net/escapefromtarkov_gamepedia/images/a/a1/Ground_Zero_Interactive_Map_Base.webp",
};

const MAPS_DATA = {
  interchange: {
    name_en: "interchange",
    mapImage: MAP_IMAGES.interchange,
    mapBounds: [[0, 0], [9600, 5402]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "exfil_transit", name: "Транзит", color: "#0099ff", icon: "🚌" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_scav", name: "Спавн Scav", color: "#ffcc00", icon: "🎭" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "lever", name: "Рычаги", color: "#9900ff", icon: "🔘" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
      { id: "quest", name: "Квестовые точки", color: "#ffff00", icon: "❗" },
      { id: "loot_key", name: "Спавн ключей", color: "#ffd700", icon: "🔑" },
      { id: "loot_keycard", name: "Спавн карт доступа", color: "#ff1493", icon: "💳" },
      { id: "stationarygun", name: "Станковое оружие", color: "#8b0000", icon: "🔫" },
    ],
    markers: [
      { categoryId: "exfil_transit", position: [1551, 60], popup: { title: "Транзит на Таможню", description: "Доступен через 1 мин после начала рейда" }},
      { categoryId: "exfil_transit", position: [1613, 4643], popup: { title: "Транзит на Улицы Таркова", description: "Доступен через 1 мин после начала рейда" }},
      { categoryId: "exfil_pmc", position: [4592.5, 4314], popup: { title: "Power Station V-Ex", description: "Требуется ~20,000 рублей" }},
      { categoryId: "exfil_pmc", position: [6190.875, 2145], popup: { title: "Saferoom Exfil", description: "1. Включить питание на подстанции\n2. Смыть унитаз в Burger Spot\n3. Провести картой #11SR\n4. Закрыть дверь изнутри" }},
      { categoryId: "exfil_pmc", position: [4711.8, 894.8], popup: { title: "Emercom Checkpoint", description: "Основной выход для PMC" }},
      { categoryId: "exfil_pmc", position: [531.25, 4636.25], popup: { title: "Railway Exfil", description: "Выход у ж/д путей" }},
      { categoryId: "exfil_pmc", position: [6462, 2725], popup: { title: "Scav Camp (Co-Op)", description: "Требуется PMC + Scav" }},
      { categoryId: "exfil_scav", position: [538.5, 4636.25], popup: { title: "Railway Exfil", description: "Выход у ж/д путей" }},
      { categoryId: "exfil_scav", position: [4722.4, 894.8], popup: { title: "Emercom Checkpoint", description: "Основной выход" }},
      { categoryId: "exfil_pmc", position: [225, 1894], popup: { title: "Path to River (Flare)", description: "Требуется зелёная сигнальная ракета" }},
      { categoryId: "exfil_pmc", position: [6671.4, 3283.5], popup: { title: "Smugglers' Tunnel", description: "Требуется план подземных коммуникаций" }},
      
      { categoryId: "spawn_pmc", position: [3550, 831], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [1248.8, 2911.9], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [4852.2, 971.6], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [1074.1, 4453.4], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [2260, 4522], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [2219.5, 385.5], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [4313, 2285], popup: { title: "Спавн PMC", description: "" }},
      { categoryId: "spawn_pmc", position: [4663.4, 2950], popup: { title: "Спавн PMC", description: "" }},
      
      { categoryId: "spawn_boss", position: [7389.5, 2636], popup: { title: "Спавн Килы", description: "Босс Killa" }},
      { categoryId: "spawn_boss", position: [8966.1, 2677.8], popup: { title: "Спавн Килы", description: "Босс Killa" }},
      { categoryId: "spawn_boss", position: [7535, 1600], popup: { title: "Спавн Килы", description: "Босс Killa" }},
      { categoryId: "spawn_boss", position: [7648, 3601.5], popup: { title: "Спавн Килы", description: "Босс Killa" }},
      { categoryId: "spawn_boss", position: [6778.7, 3205.7], popup: { title: "Спавн Тагиллы", description: "Босс Tagilla" }},
      
      { categoryId: "spawn_scav", position: [671, 1829], popup: { title: "Спавн Scav", description: "" }},
      { categoryId: "spawn_scav", position: [7579, 1710], popup: { title: "Спавн Scav", description: "" }},
      { categoryId: "spawn_scav", position: [7536, 2636], popup: { title: "Спавн Scav", description: "" }},
      { categoryId: "spawn_scav", position: [8971.8, 2620.5], popup: { title: "Спавн Scav", description: "" }},
      
      { categoryId: "lever", position: [4104.8, 4262.1], popup: { title: "Рубильник питания ULTRA", description: "Включает электричество в ТЦ" }},
      { categoryId: "lever", position: [9423.97, 3019.1], popup: { title: "Кнопка смыва в Burger Spot", description: "Открывает панель для карты #11SR" }},
      { categoryId: "lever", position: [7885.75, 2089.4], popup: { title: "Кнопка отключения сигнализации", description: "Отключает все сигнализации в ТЦ" }},
      
      { categoryId: "locked", position: [7368.75, 2921.25], popup: { title: "EMERCOM Medical Unit", description: "Требуется: EMERCOM medical unit key" }},
      { categoryId: "locked", position: [4094.5, 4215], popup: { title: "Grumpy's Hideout", description: "Требуется: Grumpy's hideout key" }},
      { categoryId: "locked", position: [7593.75, 2538.5], popup: { title: "Kiba Arms (внутренняя дверь)", description: "Требуется: Kiba Arms inner grate door key" }},
      { categoryId: "locked", position: [7590.5, 2538.5], popup: { title: "Kiba Arms (внешняя дверь)", description: "Требуется: Kiba Arms outer door key + питание" }},
      { categoryId: "locked", position: [8814.125, 2169.375], popup: { title: "ULTRA Medical Storage", description: "Требуется: ULTRA medical storage key + питание" }},
      { categoryId: "locked", position: [7108.6, 1826.5], popup: { title: "OLI Administration Office", description: "Требуется: OLI administration office key" }},
      { categoryId: "locked", position: [7115.5, 1767.5], popup: { title: "OLI Logistics Department", description: "Требуется: OLI logistics department office key" }},
      
      { categoryId: "loot_keycard", position: [4096, 4197.25], popup: { title: "Зелёная карта Labs", description: "На полу между шкафчиками" }},
      { categoryId: "loot_key", position: [3133.2, 4105.8], popup: { title: "IDEA Cash Register Key", description: "На сиденье в белом автобусе" }},
      { categoryId: "loot_key", position: [7090.5, 1709.4], popup: { title: "OLI Cash Register Key", description: "На столе" }},
      { categoryId: "loot_key", position: [4158.8, 4272.5], popup: { title: "Kiba Arms Outer Door Key", description: "В нижнем отсеке металлической полки" }},
      
      { categoryId: "quest", position: [2310, 884.2], popup: { title: "Спрятать туалетную бумагу", description: "Квест: Provocation" }},
      { categoryId: "quest", position: [2088.8, 2573.9], popup: { title: "Спрятать броню BNTI Gzhel-K", description: "Квест: Hot Delivery" }},
      { categoryId: "quest", position: [6219, 2067.2], popup: { title: "Место для маркера", description: "Квест: Minibus - третий микроавтобус" }},
      { categoryId: "quest", position: [5874.6, 2501.4], popup: { title: "Место для маркера", description: "Квест: Minibus - второй микроавтобус" }},
      { categoryId: "quest", position: [2461.4, 807.5], popup: { title: "Место для маркера", description: "Квест: Minibus - первый микроавтобус" }},
      { categoryId: "quest", position: [3954.5, 4270.5], popup: { title: "Место для маркера", description: "Квест: The Blood of War - Part 1, третья цистерна" }},
      { categoryId: "quest", position: [7645, 2477.25], popup: { title: "Спрятать сосиску Salty Dog", description: "Квест: Provocation" }},
      { categoryId: "quest", position: [7499.5, 2550.125], popup: { title: "Установить Wi-Fi камеру", description: "Квест: Informed Means Armed" }},
      { categoryId: "quest", position: [7669, 2902], popup: { title: "Найти магазин KOSTIN", description: "Квест: Big Sale" }},
      { categoryId: "quest", position: [7935.875, 3168.75], popup: { title: "Получить манифесты Goshan", description: "Квест: Database - Part 1" }},
      { categoryId: "quest", position: [7348.5, 1608.75], popup: { title: "Получить манифесты OLI", description: "Квест: Database - Part 1" }},
      
      { categoryId: "stationarygun", position: [4127, 4193], popup: { title: "Пулемёт НСВ «Утёс»", description: "На крыше" }},
      { categoryId: "stationarygun", position: [4062.25, 4212], popup: { title: "Пулемёт НСВ «Утёс»", description: "На крыше" }},
    ]
  },
  
  customs: {
    name_en: "customs",
    mapImage: MAP_IMAGES.customs,
    mapBounds: [[0, 0], [8000, 4500]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_scav", name: "Спавн Scav", color: "#ffcc00", icon: "🎭" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
      { id: "quest", name: "Квестовые точки", color: "#ffff00", icon: "❗" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [7500, 2200], popup: { title: "ZB-1011", description: "Подземный бункер, иногда закрыт" }},
      { categoryId: "exfil_pmc", position: [7800, 1000], popup: { title: "Crossroads", description: "Основной выход" }},
      { categoryId: "exfil_pmc", position: [200, 3500], popup: { title: "RUAF Roadblock", description: "Не всегда доступен" }},
      { categoryId: "exfil_pmc", position: [300, 2000], popup: { title: "Smuggler's Boat", description: "Требуется 7000 рублей" }},
      { categoryId: "exfil_pmc", position: [500, 800], popup: { title: "Trailer Park", description: "Основной выход" }},
      
      { categoryId: "spawn_boss", position: [4500, 2800], popup: { title: "Спавн Решалы", description: "Босс Reshala с охраной в Дормах" }},
      { categoryId: "spawn_boss", position: [3500, 1500], popup: { title: "Спавн Решалы", description: "Босс Reshala в новом газохранилище" }},
      
      { categoryId: "locked", position: [4600, 2900], popup: { title: "Dorms 204", description: "Marked Room - ценный лут" }},
      { categoryId: "locked", position: [4550, 2850], popup: { title: "Dorms 214", description: "Комната с сейфом" }},
      { categoryId: "locked", position: [4700, 2950], popup: { title: "Dorms 303", description: "Marked Room 3 этаж" }},
      
      { categoryId: "quest", position: [4500, 2700], popup: { title: "Спрятать часы", description: "Квест: Checking" }},
      { categoryId: "quest", position: [3000, 2000], popup: { title: "Получить документы", description: "Квест: Delivery from the Past" }},
    ]
  },
  
  woods: {
    name_en: "woods",
    mapImage: MAP_IMAGES.woods,
    mapBounds: [[0, 0], [7000, 7000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "quest", name: "Квестовые точки", color: "#ffff00", icon: "❗" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [6500, 500], popup: { title: "Outskirts", description: "Основной выход" }},
      { categoryId: "exfil_pmc", position: [500, 6500], popup: { title: "UN Roadblock", description: "Основной выход" }},
      { categoryId: "exfil_pmc", position: [3500, 200], popup: { title: "Dead Man's Place", description: "Не всегда активен" }},
      
      { categoryId: "spawn_boss", position: [3500, 4000], popup: { title: "Спавн Штурмана", description: "Босс Shturman у лесопилки" }},
      
      { categoryId: "quest", position: [3400, 3800], popup: { title: "Лесопилка", description: "Много квестовых предметов" }},
      { categoryId: "quest", position: [5500, 2500], popup: { title: "USEC Camp", description: "Квест: Shaking up Teller" }},
    ]
  },
  
  shoreline: {
    name_en: "shoreline",
    mapImage: MAP_IMAGES.shoreline,
    mapBounds: [[0, 0], [9000, 6000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
      { id: "quest", name: "Квестовые точки", color: "#ffff00", icon: "❗" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [8500, 3000], popup: { title: "Tunnel", description: "Основной выход восток" }},
      { categoryId: "exfil_pmc", position: [500, 3000], popup: { title: "Road to Customs", description: "Основной выход запад" }},
      
      { categoryId: "spawn_boss", position: [5500, 4000], popup: { title: "Спавн Санитара", description: "Босс Sanitar в Здравнице" }},
      
      { categoryId: "locked", position: [5600, 4200], popup: { title: "East Wing 310", description: "Ledx, медикаменты" }},
      { categoryId: "locked", position: [5400, 4100], popup: { title: "West Wing 301", description: "Редкий лут" }},
      { categoryId: "locked", position: [5500, 4300], popup: { title: "East Wing 226", description: "Комната с сейфом" }},
      
      { categoryId: "quest", position: [5500, 4100], popup: { title: "Health Resort", description: "Много квестовых предметов" }},
    ]
  },
  
  reserve: {
    name_en: "reserve",
    mapImage: MAP_IMAGES.reserve,
    mapBounds: [[0, 0], [6000, 6000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "lever", name: "Рычаги", color: "#9900ff", icon: "🔘" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [5500, 500], popup: { title: "Armored Train", description: "Прибывает в случайное время" }},
      { categoryId: "exfil_pmc", position: [500, 3000], popup: { title: "Cliff Descent", description: "Требуется парашют" }},
      { categoryId: "exfil_pmc", position: [3000, 5500], popup: { title: "D-2", description: "Включить генератор и рубильник" }},
      
      { categoryId: "spawn_boss", position: [3000, 3000], popup: { title: "Спавн Глухаря", description: "Босс Glukhar с охраной" }},
      
      { categoryId: "lever", position: [2800, 5200], popup: { title: "Генератор D-2", description: "Включает выход D-2" }},
      
      { categoryId: "locked", position: [3200, 2800], popup: { title: "RB-ST", description: "Ценный военный лут" }},
      { categoryId: "locked", position: [2900, 3100], popup: { title: "RB-VO", description: "Военное снаряжение" }},
    ]
  },
  
  factory: {
    name_en: "factory",
    mapImage: MAP_IMAGES.factory,
    mapBounds: [[0, 0], [3000, 2000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [2500, 500], popup: { title: "Gate 3", description: "Требуется ключ" }},
      { categoryId: "exfil_pmc", position: [500, 1500], popup: { title: "Cellars", description: "Через подвал" }},
      { categoryId: "exfil_pmc", position: [1500, 1800], popup: { title: "Office Window", description: "Требуется Factory Exit Key" }},
      
      { categoryId: "spawn_boss", position: [1500, 1000], popup: { title: "Спавн Тагиллы", description: "Босс Tagilla" }},
    ]
  },
  
  labs: {
    name_en: "labs",
    mapImage: MAP_IMAGES.labs,
    mapBounds: [[0, 0], [4000, 3000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "lever", name: "Рычаги", color: "#9900ff", icon: "🔘" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
      { id: "loot_keycard", name: "Карты доступа", color: "#ff1493", icon: "💳" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [3500, 1500], popup: { title: "Cargo Elevator", description: "Требуется активация" }},
      { categoryId: "exfil_pmc", position: [500, 1500], popup: { title: "Main Elevator", description: "Требуется активация" }},
      { categoryId: "exfil_pmc", position: [2000, 2500], popup: { title: "Parking Gate", description: "Требуется активация" }},
      { categoryId: "exfil_pmc", position: [2000, 500], popup: { title: "Sewage Conduit", description: "Через канализацию" }},
      
      { categoryId: "locked", position: [3000, 2000], popup: { title: "Green Keycard Room", description: "Ledx, стимуляторы" }},
      { categoryId: "locked", position: [1000, 1000], popup: { title: "Blue Keycard Room", description: "Редкое оружие" }},
      { categoryId: "locked", position: [2500, 1500], popup: { title: "Black Keycard Room", description: "Военное снаряжение" }},
    ]
  },
  
  lighthouse: {
    name_en: "lighthouse",
    mapImage: MAP_IMAGES.lighthouse,
    mapBounds: [[0, 0], [8000, 5000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [7500, 2500], popup: { title: "Southern Road", description: "Основной выход" }},
      { categoryId: "exfil_pmc", position: [500, 2500], popup: { title: "Northern Checkpoint", description: "Основной выход" }},
      
      { categoryId: "spawn_boss", position: [5000, 3500], popup: { title: "Спавн Рогов", description: "USEC Rogues на водоочистке" }},
      
      { categoryId: "locked", position: [5200, 3700], popup: { title: "Water Treatment", description: "Много ценного лута" }},
    ]
  },
  
  streets: {
    name_en: "streets",
    mapImage: MAP_IMAGES.streets,
    mapBounds: [[0, 0], [10000, 8000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "exfil_transit", name: "Транзит", color: "#0099ff", icon: "🚌" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "spawn_boss", name: "Спавн Босса", color: "#ff0000", icon: "💀" },
      { id: "locked", name: "Запертые двери", color: "#ff3399", icon: "🔒" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [9500, 4000], popup: { title: "Underpass", description: "Через подземный переход" }},
      { categoryId: "exfil_pmc", position: [500, 4000], popup: { title: "Collapsed Crane", description: "Через кран" }},
      { categoryId: "exfil_pmc", position: [5000, 7500], popup: { title: "Сheck Taxi V-Ex", description: "Требуется оплата" }},
      
      { categoryId: "exfil_transit", position: [8500, 2000], popup: { title: "Транзит на Развязку", description: "Через 1 мин после старта" }},
      
      { categoryId: "spawn_boss", position: [5000, 5000], popup: { title: "Спавн Кабана", description: "Босс Kaban с охраной" }},
      
      { categoryId: "locked", position: [6000, 4500], popup: { title: "Concordia", description: "Апартаменты с лутом" }},
      { categoryId: "locked", position: [4000, 5500], popup: { title: "Tarbank", description: "Сейфы и ценности" }},
    ]
  },
  
  ground_zero: {
    name_en: "ground_zero",
    mapImage: MAP_IMAGES.ground_zero,
    mapBounds: [[0, 0], [5000, 4000]],
    origin: "bottom-left",
    categories: [
      { id: "exfil_pmc", name: "Выходы PMC", color: "#00ff00", icon: "🚪" },
      { id: "exfil_scav", name: "Выходы Scav", color: "#00cc00", icon: "🚪" },
      { id: "spawn_pmc", name: "Спавн PMC", color: "#ff6600", icon: "👤" },
      { id: "quest", name: "Квестовые точки", color: "#ffff00", icon: "❗" },
    ],
    markers: [
      { categoryId: "exfil_pmc", position: [4500, 2000], popup: { title: "Mira Avenue", description: "Восточный выход" }},
      { categoryId: "exfil_pmc", position: [500, 2000], popup: { title: "Police Checkpoint", description: "Западный выход" }},
      
      { categoryId: "quest", position: [2500, 2000], popup: { title: "Центральная площадь", description: "Квесты для новичков" }},
    ]
  },
};
