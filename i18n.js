/* ============================================================
   VINYL CAFE — i18n.js (ПОЛНАЯ ВЕРСИЯ С КАРТИНКАМИ В МЕНЮ)
   ============================================================ */

const I18N = {
  ru: {
    // ─── Навигация ───
    nav_home: "Главная",
    nav_menu: "Меню",
    nav_about: "О нас",
    nav_events: "Афиша",
    nav_contacts: "Контакты",

    // ─── Hero ───
    hero_btn_menu: "Смотреть меню",
    hero_btn_about: "О заведении",
    hero_scroll: "Листай ниже",

    hero_states: [
      { l1: "Эспрессо", l2: "под <em>винил</em>", l3: "", sub: "Вкусный кофе и тёплый аналоговый звук. Место, куда хочется возвращаться снова." },
      { l1: "Звук, который", l2: "<em>чувствуешь</em>", l3: "кожей", sub: "Каждая бороздка — это история. Каждый глоток — момент, который нельзя повторить дважды." },
      { l1: "Музыка живёт", l2: "в тишине", l3: "<em>между нотами</em>", sub: "Тёплый аналоговый звук, который возвращает вас туда, где всё началось." },
      { l1: "33⅓ оборота", l2: "<em>в минуту —</em>", l3: "жизнь в звуке", sub: "Тридцать три с третью оборота. Целая жизнь в каждой канавке каждой пластинки." }
    ],

    // ─── Статистика ───
    stats: [
      { num: 480, suffix: "+", label: "Пластинок в коллекции" },
      { num: 27, suffix: "", label: "Сортов кофе" },
      { num: 6, suffix: "", label: "Лет на районе" },
      { num: 3, suffix: "", label: "Языка меню" }
    ],

    // ─── О нас ───
    about_eyebrow: "Наша история",
    about_title: "Кофе и винил — одна и та же история",
    about_p1: "Vinyl Cafe — это пространство, где аромат свежесваренного кофе встречается с тёплым звуком аналоговой музыки. Мы верим, что хороший кофе и хорошая музыка — это одно и то же: оба требуют времени, внимания и правильного момента.",
    about_p2: "Наша коллекция виниловых пластинок постоянно растёт. Каждый день — новый диск, новое настроение, новая история. Приходите и услышите разницу.",

    // ─── Меню (превью на главной) ───
    menu_eyebrow: "Что в чашке",
    menu_title: "Меню в двух словах",
    menu_desc: "Полная карта напитков, десертов и закусок — на отдельной странице.",
    menu_cards: [
      { title: "Кофе", desc: "Эспрессо, американо, капучино и авторские напитки", num: "01", image: "assets/images/пример.jpeg" },
      { title: "Чай и матча", desc: "Листовой чай, матча-латте, авторские матча-напитки", num: "02", image: "assets/images/пример.jpeg" },
      { title: "Десерты", desc: "Наполеон, медовик, чизкейк, круассаны и пироги", num: "03", image: "assets/images/пример.jpeg" },
      { title: "Завтраки", desc: "Овсяная каша, сэндвичи, сосиски в тесте", num: "04", image: "assets/images/пример.jpeg" },
      { title: "Напитки", desc: "Лимонады, смузи, милкшейки, фреши", num: "05", image: "assets/images/пример.jpeg" },
      { title: "Горячие закуски", desc: "Сэндвичи, пироги, сосиски в тесте", num: "06", image: "assets/images/пример.jpeg" }
    ],
    menu_cta: "Полное меню",

    // ─── Афиша ───
    events_eyebrow: "Куда сходить",
    events_title: "Афиша ближайших вечеров",
    events_desc: "Вечера винила, дегустации кофе и живые выступления — раз в неделю у нас что-то происходит.",
    events: [
      { d: "14", m: "авг", title: "Вечер винила: джаз 60-х", desc: "Подборка редких джазовых пластинок из личной коллекции бариста.", tag: "19:00" },
      { d: "21", m: "авг", title: "Дегустация: кофе Эфиопии", desc: "Три обжарки, один регион — сравниваем вкусы вместе с обжарщиком.", tag: "18:30" },
      { d: "28", m: "авг", title: "Живой сет: акустика", desc: "Живое выступление локальных музыкантов в формате unplugged.", tag: "20:00" }
    ],

    // ─── Контакты ───
    contacts_eyebrow: "На связи",
    contacts_title: "Заходите на чашку",
    contacts_desc: "Мы в двух шагах от метро — приходите на кофе или пишите заранее, если хотите занять столик у пластинок.",
    contacts_phone: "Телефон",
    contacts_email: "Email",
    contacts_address: "Адрес",
    contacts_address_val: "Ташкент, ул. Ниёзбек Йули, 12",
    contacts_hours: "Часы работы",
    contacts_hours_val: "Пн–Вс: 08:00 — 23:00",
    contacts_map_label: "Карта появится здесь",

    // ─── Футер ───
    footer_desc: "Пространство, где кофе встречается с виниловой музыкой.",
    footer_nav: "Навигация",
    footer_contacts: "Контакты",
    footer_rights: "Все права защищены.",

    // ─── Страница меню (ПОЛНОЕ МЕНЮ С КАРТИНКАМИ) ───
    menu_page_eyebrow: "Приятного аппетита",
    menu_page_title: "Полное меню",
    menu_page_desc: "От эспрессо до редких виниловых дисков за барной стойкой — всё, что у нас есть, на одной странице.",
    menu_back: "На главную",

    menu_categories: [
      // ════════════════════════════════════════
      // 01 — КОФЕ
      // ════════════════════════════════════════
      {
        id: "coffee",
        title: "Кофе",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Эспрессо", desc: "30/60 мл", price: "35к/40к", image: "assets/images/пример.jpeg" },
          { name: "Американо", desc: "170/250 мл", price: "35к/40к", image: "assets/images/пример.jpeg" },
          { name: "Капучино", desc: "200/260 мл", price: "40к/45к", image: "assets/images/пример.jpeg" },
          { name: "Латте", desc: "300 мл", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Флэт Уайт", desc: "250 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Раф", desc: "300 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Горячий Шоколад", desc: "200 мл", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Какао с маршмеллоу", desc: "300 мл", price: "40к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 02 — АЙС КОФЕ
      // ════════════════════════════════════════
      {
        id: "ice-coffee",
        title: "Айс Кофе",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Американо", desc: "500 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Капучино", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Латте", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Капучино на альт. молоке", desc: "500 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Латте на альт. молоке", desc: "500 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Колдбрю Классик", desc: "250 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Колдбрю с молоком", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Колдбрю Тоник", desc: "500 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Колдбрю Бамбл", desc: "500 мл", price: "70к", image: "assets/images/пример.jpeg" },
          { name: "Фраппучино", desc: "500 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Эспрессо Тоник", desc: "500 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Бамбл Кофе", desc: "500 мл", price: "60к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 03 — МАТЧА
      // ════════════════════════════════════════
      {
        id: "matcha",
        title: "Matcha",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Matcha Классик", desc: "150 мл", price: "35к", image: "assets/images/пример.jpeg" },
          { name: "Matcha Латте", desc: "300 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Айс Matcha Манго", desc: "450 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Айс Matcha Кокос", desc: "450 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Айс Matcha Смородина", desc: "450 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Matcha Тоник Манго", desc: "450 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Matcha Тоник Вишня", desc: "450 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Matcha Тоник Кокос", desc: "450 мл", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Matcha Тоник Смородина", desc: "450 мл", price: "60к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 04 — ЧАЙ
      // ════════════════════════════════════════
      {
        id: "tea",
        title: "Чай листовой",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Ассам", desc: "1 л", price: "30к", image: "assets/images/пример.jpeg" },
          { name: "Сенча", desc: "1 л", price: "30к", image: "assets/images/пример.jpeg" },
          { name: "Эрл Грей", desc: "1 л", price: "35к", image: "assets/images/пример.jpeg" },
          { name: "Красный дракон", desc: "1 л", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Ройбуш карамель", desc: "1 л", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Ромашка", desc: "1 л", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Пуэр", desc: "1 л", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Молочный улун", desc: "1 л", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Марокканский", desc: "1 л, авторский", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Лесные ягоды", desc: "1 л, авторский", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Имбирный", desc: "1 л, авторский", price: "50к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 05 — СМУЗИ И ФРЕШИ
      // ════════════════════════════════════════
      {
        id: "smoothies",
        title: "Смузи и фреши",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Смузи Ананас-кокос", desc: "500 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Смузи Огурец-базилик", desc: "500 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Смузи Ягодный блеск", desc: "500 мл", price: "55к", image: "assets/images/пример.jpeg" },
          { name: "Милкшейк Банановый", desc: "500 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Милкшейк Ягодный", desc: "500 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Милкшейк Шоколадный", desc: "500 мл", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Фреш Апельсиновый", desc: "300 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Фреш Яблочный", desc: "300 мл", price: "40к", image: "assets/images/пример.jpeg" },
          { name: "Фреш Морковный", desc: "300 мл", price: "35к", image: "assets/images/пример.jpeg" },
          { name: "Фреш Яблоко-сельдерей", desc: "300 мл", price: "45к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 06 — ЛИМОНАДЫ
      // ════════════════════════════════════════
      {
        id: "lemonades",
        title: "Лимонады",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Ананас-кокос", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Ежевика-вишня", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Имбирный", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Клюква-смородина", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Манго-маракуйя", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Мохито классик", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Мохито ароматный", desc: "500 мл", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Кола", desc: "250 мл", price: "20к", image: "assets/images/пример.jpeg" },
          { name: "Тоник Уэпс", desc: "250 мл", price: "20к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 07 — ЗАВТРАКИ
      // ════════════════════════════════════════
      {
        id: "breakfast",
        title: "Завтраки",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Овсяная каша", desc: "400 гр. Молоко на выбор: коровье, овсяное, кокосовое, безлактозное, миндальное", price: "50к/60к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 08 — ГОРЯЧИЕ ЗАКУСКИ
      // ════════════════════════════════════════
      {
        id: "hot-snacks",
        title: "Горячие закуски",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Сендвич с курицей", desc: "420 гр. Фермерская курица, помидоры, огурцы, айсберг, сыр, соус тартар", price: "80к", image: "assets/images/пример.jpeg" },
          { name: "Куриный пирог с картофелем", desc: "300 гр. Домашний пирог с куриной грудкой и специями", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Сосиски в тесте", desc: "120 гр", price: "25к", image: "assets/images/пример.jpeg" }
        ]
      },
      // ════════════════════════════════════════
      // 09 — ДЕСЕРТЫ
      // ════════════════════════════════════════
      {
        id: "desserts",
        title: "Десерты",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Наполеон", desc: "250 гр. Тончайшие слои теста с заварным кремом", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Медовик", desc: "250 гр. Ароматные коржи с мёдом и сливками", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Карамельный чизкейк", desc: "250 гр. Нежный сыр с карамельной нугой", price: "60к", image: "assets/images/пример.jpeg" },
          { name: "Яблочный пирог с суфле", desc: "250 гр. Печеные яблоки с суфле", price: "45к", image: "assets/images/пример.jpeg" },
          { name: "Банановый пудинг", desc: "250 гр. Сливочно-банановый с имбирным печеньем", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Круассан с миндалём", desc: "200 гр", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Круассан с фисташками", desc: "200 гр", price: "50к", image: "assets/images/пример.jpeg" },
          { name: "Круассан пустой", desc: "200 гр", price: "30к", image: "assets/images/пример.jpeg" }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // ENGLISH
  // ════════════════════════════════════════════════════════
  en: {
    nav_home: "Home",
    nav_menu: "Menu",
    nav_about: "About",
    nav_events: "Events",
    nav_contacts: "Contacts",
    hero_btn_menu: "View menu",
    hero_btn_about: "About the place",
    hero_scroll: "Scroll down",
    hero_states: [
      { l1: "Espresso", l2: "on <em>vinyl</em>", l3: "", sub: "Great coffee and warm analog sound." },
      { l1: "Sound you", l2: "<em>feel</em>", l3: "on your skin", sub: "Every groove is a story." },
      { l1: "Music lives", l2: "in the silence", l3: "<em>between notes</em>", sub: "Warm analog sound." },
      { l1: "33⅓ turns", l2: "<em>per minute —</em>", l3: "a life in sound", sub: "A whole life in every groove." }
    ],
    stats: [
      { num: 480, suffix: "+", label: "Records in collection" },
      { num: 27, suffix: "", label: "Coffee varieties" },
      { num: 6, suffix: "", label: "Years in neighborhood" },
      { num: 3, suffix: "", label: "Menu languages" }
    ],
    about_eyebrow: "Our story",
    about_title: "Coffee and vinyl are the same story",
    about_p1: "Vinyl Cafe is a space where the aroma of freshly brewed coffee meets the warm sound of analog music.",
    about_p2: "Our vinyl collection keeps growing. Every day — a new record, a new mood, a new story.",
    menu_eyebrow: "In the cup",
    menu_title: "The menu, in short",
    menu_desc: "The full list of drinks, desserts and snacks on its own page.",
    menu_cards: [
      { title: "Coffee", desc: "Espresso bar and alternative brews", num: "01", image: "assets/images/пример.jpeg" },
      { title: "Tea & Matcha", desc: "Loose-leaf tea, matcha lattes", num: "02", image: "assets/images/пример.jpeg" },
      { title: "Desserts", desc: "Napoleon, honey cake, cheesecake", num: "03", image: "assets/images/пример.jpeg" },
      { title: "Breakfast", desc: "Oatmeal, sandwiches, sausages", num: "04", image: "assets/images/пример.jpeg" },
      { title: "Drinks", desc: "Lemonades, smoothies, milkshakes", num: "05", image: "assets/images/пример.jpeg" },
      { title: "Hot snacks", desc: "Sandwiches, pies, sausages in dough", num: "06", image: "assets/images/пример.jpeg" }
    ],
    menu_cta: "Full menu",
    events_eyebrow: "What's on",
    events_title: "Upcoming evenings",
    events_desc: "Vinyl nights, coffee tastings and live sets every week.",
    events: [
      { d: "14", m: "Aug", title: "Vinyl night: 60s jazz", desc: "Rare jazz records from our barista's collection.", tag: "7:00 PM" },
      { d: "21", m: "Aug", title: "Tasting: Ethiopian coffee", desc: "Three roasts, one origin.", tag: "6:30 PM" },
      { d: "28", m: "Aug", title: "Live set: acoustic", desc: "Unplugged performance by local musicians.", tag: "8:00 PM" }
    ],
    contacts_eyebrow: "Get in touch",
    contacts_title: "Come by for a cup",
    contacts_desc: "Two minutes from the metro — drop by or message ahead.",
    contacts_phone: "Phone",
    contacts_email: "Email",
    contacts_address: "Address",
    contacts_address_val: "12 Niyozbek Yuli St, Tashkent",
    contacts_hours: "Opening hours",
    contacts_hours_val: "Mon–Sun: 8:00 AM — 11:00 PM",
    contacts_map_label: "Map will appear here",
    footer_desc: "A space where coffee meets vinyl music.",
    footer_nav: "Navigation",
    footer_contacts: "Contacts",
    footer_rights: "All rights reserved.",
    menu_page_eyebrow: "Bon appetit",
    menu_page_title: "Full menu",
    menu_page_desc: "From espresso to rare vinyl behind the bar — everything on one page.",
    menu_back: "Back home",

    menu_categories: [
      {
        id: "coffee", title: "Coffee",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Espresso", desc: "30/60 ml", price: "35k/40k", image: "assets/images/пример.jpeg" },
          { name: "Americano", desc: "170/250 ml", price: "35k/40k", image: "assets/images/пример.jpeg" },
          { name: "Cappuccino", desc: "200/260 ml", price: "40k/45k", image: "assets/images/пример.jpeg" },
          { name: "Latte", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Flat White", desc: "250 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Raf", desc: "300 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Hot Chocolate", desc: "200 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Cocoa with marshmallow", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "ice-coffee", title: "Iced Coffee",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Americano", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Cappuccino", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Latte", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Cappuccino alt. milk", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Latte alt. milk", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Classic", desc: "250 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew with milk", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Tonic", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Bumble", desc: "500 ml", price: "70k", image: "assets/images/пример.jpeg" },
          { name: "Frappuccino", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Espresso Tonic", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Bumble Coffee", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "matcha", title: "Matcha",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Matcha Classic", desc: "150 ml", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Latte", desc: "300 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Iced Matcha Mango", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Iced Matcha Coconut", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Iced Matcha Currant", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonic Mango", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonic Cherry", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonic Coconut", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonic Currant", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "tea", title: "Loose-leaf Tea",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Assam", desc: "1 L", price: "30k", image: "assets/images/пример.jpeg" },
          { name: "Sencha", desc: "1 L", price: "30k", image: "assets/images/пример.jpeg" },
          { name: "Earl Grey", desc: "1 L", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Red Dragon", desc: "1 L", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Rooibos caramel", desc: "1 L", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Chamomile", desc: "1 L", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Pu-erh", desc: "1 L", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Milk oolong", desc: "1 L", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Moroccan", desc: "1 L, signature", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Forest berries", desc: "1 L, signature", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Ginger", desc: "1 L, signature", price: "50k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "smoothies", title: "Smoothies & Juices",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Smoothie Pineapple-coconut", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Smoothie Cucumber-basil", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Smoothie Berry shine", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Banana", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Berry", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Chocolate", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Orange", desc: "300 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Apple", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Carrot", desc: "300 ml", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Apple-celery", desc: "300 ml", price: "45k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "lemonades", title: "Lemonades",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Pineapple-coconut", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Blackberry-cherry", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Ginger", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Cranberry-currant", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mango-passionfruit", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mojito classic", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mojito aromatic", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Cola", desc: "250 ml", price: "20k", image: "assets/images/пример.jpeg" },
          { name: "Tonic", desc: "250 ml", price: "20k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "breakfast", title: "Breakfast",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Oatmeal", desc: "400g. Choice of milk", price: "50k/60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "hot-snacks", title: "Hot Snacks",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Chicken sandwich", desc: "420g. Grilled chicken, tomatoes, lettuce", price: "80k", image: "assets/images/пример.jpeg" },
          { name: "Chicken pie with potatoes", desc: "300g. Homemade pie", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Sausages in dough", desc: "120g", price: "25k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "desserts", title: "Desserts",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Napoleon", desc: "250g. Thin layers with custard", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Medovik (Honey cake)", desc: "250g. Aromatic layers", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Caramel cheesecake", desc: "250g. Cream cheese with caramel", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Apple pie with soufflé", desc: "250g", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Banana pudding", desc: "250g", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Croissant with almonds", desc: "200g", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Croissant with pistachios", desc: "200g", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Plain croissant", desc: "200g", price: "30k", image: "assets/images/пример.jpeg" }
        ]
      }
    ]
  },

  // ════════════════════════════════════════════════════════
  // O'ZBEKCHA
  // ════════════════════════════════════════════════════════
  uz: {
    nav_home: "Bosh sahifa",
    nav_menu: "Menyu",
    nav_about: "Biz haqimizda",
    nav_events: "Afisha",
    nav_contacts: "Kontaktlar",
    hero_btn_menu: "Menyuni ko'rish",
    hero_btn_about: "Kafe haqida",
    hero_scroll: "Pastga o'ting",
    hero_states: [
      { l1: "Espresso", l2: "<em>vinil</em> ostida", l3: "", sub: "Mazali qahva va issiq tovush." },
      { l1: "Terida", l2: "<em>his qilinadigan</em>", l3: "tovush", sub: "Har bir egatcha — bir hikoya." },
      { l1: "Musiqa", l2: "notalar orasidagi", l3: "<em>sukunatda yashaydi</em>", sub: "Issiq analog tovush." },
      { l1: "Daqiqasiga", l2: "<em>33⅓ aylanish —</em>", l3: "tovushdagi umr", sub: "Har bir plastinkada butun bir umr." }
    ],
    stats: [
      { num: 480, suffix: "+", label: "To'plamdagi plastinkalar" },
      { num: 27, suffix: "", label: "Qahva turlari" },
      { num: 6, suffix: "", label: "Mahallada yillar" },
      { num: 3, suffix: "", label: "Menyu tillari" }
    ],
    about_eyebrow: "Bizning tariximiz",
    about_title: "Qahva va vinil — bitta hikoya",
    about_p1: "Vinyl Cafe — yangi damlangan qahva hidi analog musiqaning issiq tovushi bilan uchrashadigan makon.",
    about_p2: "Bizning vinil plastinkalar to'plamimiz doimo o'sib bormoqda.",
    menu_eyebrow: "Piyoladagi narsa",
    menu_title: "Menyu qisqacha",
    menu_desc: "Ichimliklar, desertlar va gazaklarning to'liq ro'yxati alohida sahifada.",
    menu_cards: [
      { title: "Qahva", desc: "Espresso va muqobil damlash", num: "01", image: "assets/images/пример.jpeg" },
      { title: "Choy va Matcha", desc: "Barg choy, matcha ichimliklar", num: "02", image: "assets/images/пример.jpeg" },
      { title: "Desertlar", desc: "Napoleon, medovik, chizkeyk", num: "03", image: "assets/images/пример.jpeg" },
      { title: "Nonushta", desc: "Yorma, sendvich, sosiskalar", num: "04", image: "assets/images/пример.jpeg" },
      { title: "Ichimliklar", desc: "Limonad, smuzi, milkshake", num: "05", image: "assets/images/пример.jpeg" },
      { title: "Issiq gazaklar", desc: "Sendvich, pirog, xamirdagi sosiskalar", num: "06", image: "assets/images/пример.jpeg" }
    ],
    menu_cta: "To'liq menyu",
    events_eyebrow: "Qayerga borish mumkin",
    events_title: "Yaqin kunlardagi afisha",
    events_desc: "Vinil kechalari, qahva degustatsiyasi va jonli chiqishlar.",
    events: [
      { d: "14", m: "avg", title: "Vinil kechasi: 60-yillar jazi", desc: "Noyob jaz plastinkalari tanlovi.", tag: "19:00" },
      { d: "21", m: "avg", title: "Degustatsiya: Efiopiya qahvasi", desc: "Uchta qovurish, bitta hudud.", tag: "18:30" },
      { d: "28", m: "avg", title: "Jonli chiqish: akustika", desc: "Mahalliy musiqachilar chiqishi.", tag: "20:00" }
    ],
    contacts_eyebrow: "Aloqa",
    contacts_title: "Bir piyola uchun kiring",
    contacts_desc: "Biz metrodan ikki qadam narida — qahvaga kiring yoki oldindan yozing.",
    contacts_phone: "Telefon",
    contacts_email: "Email",
    contacts_address: "Manzil",
    contacts_address_val: "Toshkent, Niyozbek Yo'li ko'chasi, 12",
    contacts_hours: "Ish vaqti",
    contacts_hours_val: "Dush–Yak: 08:00 — 23:00",
    contacts_map_label: "Xarita shu yerda ko'rinadi",
    footer_desc: "Qahva vinil musiqa bilan uchrashadigan makon.",
    footer_nav: "Navigatsiya",
    footer_contacts: "Kontaktlar",
    footer_rights: "Barcha huquqlar himoyalangan.",
    menu_page_eyebrow: "Yoqimli ishtaha",
    menu_page_title: "To'liq menyu",
    menu_page_desc: "Espressodan tortib bar ortidagi noyob vinil disklargacha.",
    menu_back: "Bosh sahifaga",

    menu_categories: [
      {
        id: "coffee", title: "Qahva",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Espresso", desc: "30/60 ml", price: "35k/40k", image: "assets/images/пример.jpeg" },
          { name: "Amerikano", desc: "170/250 ml", price: "35k/40k", image: "assets/images/пример.jpeg" },
          { name: "Kapuchino", desc: "200/260 ml", price: "40k/45k", image: "assets/images/пример.jpeg" },
          { name: "Latte", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Flat White", desc: "250 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Raf", desc: "300 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Issiq Shokolad", desc: "200 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Marshmello bilan kakao", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "ice-coffee", title: "Muzli Qahva",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Amerikano", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Kapuchino", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Latte", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Kapuchino (muqobil sut)", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Latte (muqobil sut)", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Classic", desc: "250 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew sut bilan", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Tonik", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Cold Brew Bumble", desc: "500 ml", price: "70k", image: "assets/images/пример.jpeg" },
          { name: "Frappuccino", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Espresso Tonik", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Bumble Coffee", desc: "500 ml", price: "60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "matcha", title: "Matcha",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Matcha Classic", desc: "150 ml", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Latte", desc: "300 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Muzli Matcha Mango", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Muzli Matcha Kokos", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Muzli Matcha Smorodina", desc: "450 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonik Mango", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonik Olcha", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonik Kokos", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Matcha Tonik Smorodina", desc: "450 ml", price: "60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "tea", title: "Barg choy",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Assam", desc: "1 l", price: "30k", image: "assets/images/пример.jpeg" },
          { name: "Sencha", desc: "1 l", price: "30k", image: "assets/images/пример.jpeg" },
          { name: "Earl Grey", desc: "1 l", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Qizil ajdaho", desc: "1 l", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Rooibos karamel", desc: "1 l", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Moychechak", desc: "1 l", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Pu-er", desc: "1 l", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Sutli ulun", desc: "1 l", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Marokashcha", desc: "1 l, mualliflik", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "O'rmon mevalari", desc: "1 l, mualliflik", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Zanjabil", desc: "1 l, mualliflik", price: "50k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "smoothies", title: "Smuzi va fresh",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Smuzi Ananas-kokos", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Smuzi Bodring-rayhon", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Smuzi Rezavor yaltiroq", desc: "500 ml", price: "55k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Banan", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Rezavor", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Milkshake Shokolad", desc: "500 ml", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Apelsin", desc: "300 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Olma", desc: "300 ml", price: "40k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Sabzi", desc: "300 ml", price: "35k", image: "assets/images/пример.jpeg" },
          { name: "Fresh Olma-selderey", desc: "300 ml", price: "45k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "lemonades", title: "Limonadlar",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Ananas-kokos", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Maymunjon-gilos", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Zanjabil", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Klyukva-smorodina", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mango-marakuyya", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mohito classic", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Mohito xushbo'y", desc: "500 ml", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Kola", desc: "250 ml", price: "20k", image: "assets/images/пример.jpeg" },
          { name: "Tonik", desc: "250 ml", price: "20k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "breakfast", title: "Nonushta",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Sutli bo'tqa", desc: "400 gr. Sut tanlovi", price: "50k/60k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "hot-snacks", title: "Issiq gazaklar",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Tovuqli sendvich", desc: "420 gr", price: "80k", image: "assets/images/пример.jpeg" },
          { name: "Tovuqli kartoshkali pirog", desc: "300 gr", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Xamirdagi sosiskalar", desc: "120 gr", price: "25k", image: "assets/images/пример.jpeg" }
        ]
      },
      {
        id: "desserts", title: "Desertlar",
        image: "assets/images/пример.jpeg",
        items: [
          { name: "Napoleon", desc: "250 gr", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Medovik", desc: "250 gr", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Karamelli chizkeyk", desc: "250 gr", price: "60k", image: "assets/images/пример.jpeg" },
          { name: "Olma sufleli pirog", desc: "250 gr", price: "45k", image: "assets/images/пример.jpeg" },
          { name: "Bananli puding", desc: "250 gr", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Bodomli kruassan", desc: "200 gr", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Pista bilan kruassan", desc: "200 gr", price: "50k", image: "assets/images/пример.jpeg" },
          { name: "Bo'sh kruassan", desc: "200 gr", price: "30k", image: "assets/images/пример.jpeg" }
        ]
      }
    ]
  }
};

// ════════════════════════════════════════════════════════
// SYSTEM
// ════════════════════════════════════════════════════════

const LANG_STORAGE_KEY = "vinylcafe_lang";
let currentLang = (function() {
  try {
    const saved = localStorage.getItem(LANG_STORAGE_KEY);
    if (saved && I18N[saved]) return saved;
  } catch(e) {}
  return "ru";
})();

function t(key) {
  const dict = I18N[currentLang] || I18N.ru;
  return dict[key] !== undefined ? dict[key] : (I18N.ru[key] !== undefined ? I18N.ru[key] : key);
}

function setLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch(e) {}
  document.documentElement.setAttribute("lang", lang);
  applyTranslations();
  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function(el) {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (typeof val === "string") el.innerHTML = val;
  });
  
  document.querySelectorAll("[data-i18n-attr]").forEach(function(el) {
    const pairs = el.getAttribute("data-i18n-attr").split(",");
    pairs.forEach(function(pair) {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (attr && key) el.setAttribute(attr, t(key));
    });
  });
  
  document.title = t("meta_title") || "Vinyl Cafe";
  
  document.querySelectorAll(".lang__item").forEach(function(item) {
    item.classList.toggle("active", item.getAttribute("data-lang") === currentLang);
  });
  
  const currentLabel = document.getElementById("langCurrent");
  if (currentLabel) currentLabel.textContent = currentLang.toUpperCase();
}

document.addEventListener("DOMContentLoaded", function() {
  document.documentElement.setAttribute("lang", currentLang);
  applyTranslations();
});