const products = [
  {
    index: 0,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "SUPER FRUIT POWDER BAOBAB",
    price: "814.0",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "814.0",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 8,
    ingredients: ["voluptate", "culpa", "ad", "dolore", "aute"],
    description:
      "quis excepteur qui deserunt laboris reprehenderit ullamco deserunt esse pariatur sint in consequat non incididunt",
    benefits: [
      "laborum laborum nisi",
      "cupidatat exercitation Lorem",
      "fugiat ipsum in",
      "sunt et dolor",
      "magna labore non"
    ],
    date_add: "Thursday, January 2, 2020 8:44 AM",
    date_update: "Friday, January 10, 2020 1:50 AM"
  },
  {
    index: 1,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BAOBAB FRUIT POWDER",
    price: "646.5",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 3,
    ingredients: ["amet", "et", "veniam", "consequat", "aliqua"],
    description:
      "consequat incididunt aute dolore enim officia ut elit laboris non velit do enim nulla laborum",
    benefits: [
      "sint qui exercitation",
      "sint ad id",
      "minim eu ullamco",
      "dolor aliqua incididunt",
      "aute est aliquip"
    ],
    date_add: "Thursday, January 30, 2020 10:15 AM",
    date_update: "Friday, January 10, 2020 1:52 AM"
  },
  {
    index: 2,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "ACTIVATED CHARCOAL",
    price: "900.7",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 9,
    ingredients: ["enim", "sunt", "est", "esse", "tempor"],
    description:
      "ea exercitation Lorem deserunt excepteur enim cillum qui pariatur cupidatat est ad consectetur aliquip aute",
    benefits: [
      "aliqua mollit consectetur",
      "cillum esse exercitation",
      "ea pariatur laboris",
      "incididunt cupidatat aliqua",
      "consectetur cillum et"
    ],
    date_add: "Wednesday, February 5, 2020 1:50 PM",
    date_update: "Friday, February 7, 2020 8:25 AM"
  },
  {
    index: 3,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "HIBISCUS",
    price: "467.0",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["incididunt", "cupidatat", "dolor", "officia", "nisi"],
    description:
      "ipsum pariatur consequat officia sint excepteur est dolore deserunt eiusmod aliqua velit reprehenderit irure officia",
    benefits: [
      "laboris quis sint",
      "laboris elit deserunt",
      "labore labore pariatur",
      "nulla incididunt nisi",
      "consectetur quis do"
    ],
    date_add: "Tuesday, January 28, 2020 11:18 PM",
    date_update: "Tuesday, February 4, 2020 4:20 AM"
  },
  {
    index: 4,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "PILAU MASALA",
    price: "949.7",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 9,
    ingredients: ["cillum", "ex", "ea", "eiusmod", "pariatur"],
    description:
      "duis excepteur cillum magna dolor esse adipisicing quis duis tempor excepteur enim enim sint proident",
    benefits: [
      "dolore adipisicing esse",
      "voluptate non consequat",
      "duis amet commodo",
      "nostrud ex laborum",
      "nisi irure fugiat"
    ],
    date_add: "Tuesday, February 11, 2020 2:46 AM",
    date_update: "Friday, February 14, 2020 12:03 AM"
  },
  {
    index: 5,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "LEMON GRASS",
    price: "861.1",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 10,
    ingredients: ["laborum", "tempor", "anim", "Lorem", "id"],
    description:
      "nisi enim adipisicing veniam et laborum tempor est ipsum ad sunt ut nulla mollit dolor",
    benefits: [
      "cupidatat sint culpa",
      "non culpa quis",
      "ex id excepteur",
      "laborum proident incididunt",
      "deserunt laborum dolore"
    ],
    date_add: "Wednesday, January 29, 2020 11:42 AM",
    date_update: "Wednesday, February 12, 2020 8:04 PM"
  },
  {
    index: 6,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "ROSE MARY",
    price: "727.1",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 5,
    ingredients: ["veniam", "et", "cillum", "anim", "voluptate"],
    description:
      "amet laborum eu nisi reprehenderit pariatur elit culpa cupidatat et deserunt adipisicing dolor sit ea",
    benefits: [
      "ut non mollit",
      "elit quis laborum",
      "labore et ad",
      "id occaecat labore",
      "voluptate excepteur excepteur"
    ],
    date_add: "Monday, January 13, 2020 10:29 PM",
    date_update: "Saturday, January 18, 2020 3:43 PM"
  },
  {
    index: 7,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "MILK THISTLE",
    price: "847.1",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 8,
    ingredients: ["eu", "sint", "ad", "elit", "consequat"],
    description:
      "irure qui amet fugiat exercitation esse occaecat in occaecat culpa consectetur nostrud ea in culpa",
    benefits: [
      "sit laborum proident",
      "sint nostrud anim",
      "id voluptate Lorem",
      "consequat do sit",
      "nostrud nisi eu"
    ],
    date_add: "Friday, January 3, 2020 1:10 PM",
    date_update: "Monday, February 3, 2020 2:47 AM"
  },
  {
    index: 8,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "AVOCADO SEEDS",
    price: "203.3",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 7,
    ingredients: ["eiusmod", "ipsum", "nostrud", "ea", "irure"],
    description:
      "proident qui labore aliquip Lorem consectetur commodo sint exercitation anim laboris laboris aliqua ad anim",
    benefits: [
      "ullamco incididunt velit",
      "mollit incididunt excepteur",
      "sit sint non",
      "ullamco pariatur qui",
      "adipisicing velit irure"
    ],
    date_add: "Thursday, January 30, 2020 3:07 PM",
    date_update: "Monday, January 13, 2020 10:03 AM"
  },
  {
    index: 9,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CAYENNE",
    price: "917.4",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 7,
    ingredients: ["occaecat", "aute", "esse", "quis", "adipisicing"],
    description:
      "occaecat exercitation laboris cillum ipsum consequat aliqua dolore officia do aliquip amet id nisi est",
    benefits: [
      "non ipsum ullamco",
      "nostrud aliquip ex",
      "labore nostrud officia",
      "do nulla in",
      "laborum anim exercitation"
    ],
    date_add: "Saturday, February 15, 2020 9:34 AM",
    date_update: "Friday, January 17, 2020 10:54 PM"
  },
  {
    index: 10,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CINNAMON",
    price: "690.9",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 4,
    ingredients: ["deserunt", "pariatur", "culpa", "eu", "in"],
    description:
      "id anim aliqua sint ad consequat occaecat occaecat reprehenderit deserunt irure nostrud ullamco dolor deserunt",
    benefits: [
      "adipisicing laboris et",
      "ad occaecat elit",
      "laboris ad minim",
      "culpa eu fugiat",
      "deserunt sunt elit"
    ],
    date_add: "Sunday, January 19, 2020 9:43 PM",
    date_update: "Friday, January 31, 2020 3:57 AM"
  },
  {
    index: 11,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "TEA MASALA",
    price: "81.4",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 3,
    ingredients: ["tempor", "cupidatat", "adipisicing", "est", "minim"],
    description:
      "in labore do duis mollit ad sunt qui ipsum id dolor eu ex officia cillum",
    benefits: [
      "non eu excepteur",
      "nisi qui elit",
      "dolore sunt ex",
      "aliquip nostrud dolor",
      "nostrud aliquip aliqua"
    ],
    date_add: "Monday, January 6, 2020 6:39 PM",
    date_update: "Saturday, January 11, 2020 7:07 PM"
  },
  {
    index: 12,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "GARLIC",
    price: "365.7",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["deserunt", "duis", "qui", "mollit", "proident"],
    description:
      "et ut eu sit enim veniam laborum aliqua nostrud elit nostrud nostrud laborum nostrud ex",
    benefits: [
      "sint deserunt qui",
      "dolor esse eu",
      "esse commodo ex",
      "commodo labore eiusmod",
      "excepteur cillum dolor"
    ],
    date_add: "Friday, January 24, 2020 8:44 PM",
    date_update: "Sunday, January 5, 2020 5:30 PM"
  },
  {
    index: 13,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "STINGING NETTLE",
    price: "921.9",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 3,
    ingredients: ["sit", "Lorem", "quis", "adipisicing", "aliquip"],
    description:
      "duis dolor aliquip ut esse cillum consequat cillum minim quis id commodo laborum proident esse",
    benefits: [
      "aute in in",
      "sunt do id",
      "adipisicing esse culpa",
      "quis occaecat anim",
      "qui ad sunt"
    ],
    date_add: "Wednesday, January 15, 2020 9:35 PM",
    date_update: "Wednesday, January 15, 2020 2:58 AM"
  },
  {
    index: 14,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "TUMERIC",
    price: "587.9",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["aute", "amet", "minim", "non", "sint"],
    description:
      "tempor cillum elit magna aliquip ut laboris Lorem ullamco amet esse aliqua do ad nostrud",
    benefits: [
      "enim officia fugiat",
      "qui quis do",
      "esse amet laboris",
      "duis occaecat eiusmod",
      "occaecat non officia"
    ],
    date_add: "Thursday, January 23, 2020 1:47 AM",
    date_update: "Wednesday, February 12, 2020 8:40 PM"
  },
  {
    index: 15,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "DANDELION",
    price: "410.1",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 3,
    ingredients: ["officia", "do", "quis", "mollit", "veniam"],
    description:
      "dolore est cillum exercitation labore culpa ad ipsum irure dolore nisi mollit velit cupidatat aliqua",
    benefits: [
      "nulla veniam in",
      "aliqua amet non",
      "adipisicing consequat veniam",
      "tempor excepteur non",
      "cupidatat exercitation qui"
    ],
    date_add: "Saturday, February 15, 2020 7:08 PM",
    date_update: "Tuesday, January 21, 2020 6:38 PM"
  },
  {
    index: 16,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "GINGER",
    price: "408.3",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 9,
    ingredients: ["sint", "qui", "id", "minim", "ullamco"],
    description:
      "ipsum dolore irure laboris exercitation sit quis aliqua amet velit Lorem est nostrud culpa exercitation",
    benefits: [
      "enim ut labore",
      "occaecat id minim",
      "laboris occaecat est",
      "incididunt qui do",
      "irure tempor ad"
    ],
    date_add: "Tuesday, January 14, 2020 2:23 PM",
    date_update: "Saturday, January 18, 2020 1:09 PM"
  },
  {
    index: 17,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "JO'S FARM FREE CHILLI PUREE",
    price: "733.3",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 8,
    ingredients: ["minim", "irure", "dolor", "proident", "mollit"],
    description:
      "qui incididunt consequat adipisicing Lorem esse elit eiusmod consequat Lorem duis minim eu sit ad",
    benefits: [
      "et nulla non",
      "irure occaecat laboris",
      "voluptate cillum labore",
      "sint ipsum consequat",
      "aliquip ut nulla"
    ],
    date_add: "Sunday, February 2, 2020 7:14 PM",
    date_update: "Sunday, January 19, 2020 12:52 AM"
  },
  {
    index: 18,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "JO'S FARM FREE GROUND CHILLI",
    price: "863.3",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 7,
    ingredients: ["adipisicing", "anim", "nisi", "esse", "in"],
    description:
      "nostrud adipisicing elit ea mollit eiusmod eiusmod nulla adipisicing irure ut eiusmod duis aliquip deserunt",
    benefits: [
      "id veniam ut",
      "deserunt eu aute",
      "nulla excepteur adipisicing",
      "minim ea sit",
      "fugiat ipsum officia"
    ],
    date_add: "Monday, February 3, 2020 9:46 AM",
    date_update: "Wednesday, February 5, 2020 12:29 AM"
  },
  {
    index: 19,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "JO'S FARM FREE TOMATO PUREE",
    price: "611.2",
    quantity: 1,
    category: "Herb and Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 8,
    ingredients: ["tempor", "culpa", "cupidatat", "Lorem", "dolor"],
    description:
      "amet ex dolore exercitation sunt duis minim excepteur duis eu proident proident non ullamco et",
    benefits: [
      "nulla anim Lorem",
      "excepteur aute nulla",
      "ea minim consectetur",
      "consectetur occaecat commodo",
      "laboris aute consectetur"
    ],
    date_add: "Tuesday, January 7, 2020 11:31 AM",
    date_update: "Saturday, January 18, 2020 5:19 PM"
  },
  {
    index: 20,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "OLIVE OIL",
    price: "491.9",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 3,
    ingredients: ["ullamco", "laborum", "et", "velit", "ut"],
    description:
      "veniam dolor non veniam proident cillum magna enim enim in nisi velit proident dolor reprehenderit",
    benefits: [
      "ut proident tempor",
      "non id pariatur",
      "aliqua elit nisi",
      "anim laborum amet",
      "aliquip consectetur nostrud"
    ],
    date_add: "Monday, January 27, 2020 6:16 AM",
    date_update: "Sunday, January 26, 2020 1:47 AM"
  },
  {
    index: 21,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "COCONUT OIL",
    price: "158.9",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 9,
    ingredients: ["ex", "quis", "dolor", "quis", "exercitation"],
    description:
      "labore non eu ipsum id irure duis cillum laborum sunt laborum incididunt eu labore velit",
    benefits: [
      "ut proident tempor",
      "non id pariatur",
      "aliqua elit nisi",
      "anim laborum amet",
      "aliquip consectetur nostrud"
    ],
    date_add: "Friday, January 31, 2020 12:14 PM",
    date_update: "Wednesday, January 22, 2020 10:50 PM"
  },
  {
    index: 22,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "EUCALYPYUS OIL",
    price: "993.0",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 8,
    ingredients: ["elit", "sit", "incididunt", "exercitation", "sit"],
    description:
      "duis consequat mollit ullamco anim ullamco do irure duis nisi magna sint non et aute",
    benefits: [
      "mollit labore exercitation",
      "nulla fugiat nulla",
      "ad do est",
      "ad sint quis",
      "reprehenderit sit voluptate"
    ],
    date_add: "Friday, January 3, 2020 7:54 AM",
    date_update: "Friday, January 17, 2020 5:27 AM"
  },
  {
    index: 23,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "ONION OIL",
    price: "727.6",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["aute", "officia", "non", "exercitation", "est"],
    description:
      "quis occaecat esse non tempor occaecat ad quis qui irure pariatur eu exercitation sunt est",
    benefits: [
      "sunt duis deserunt",
      "pariatur dolor pariatur",
      "velit minim sunt",
      "occaecat cupidatat laboris",
      "velit consectetur occaecat"
    ],
    date_add: "Saturday, January 18, 2020 11:57 AM",
    date_update: "Tuesday, January 14, 2020 9:48 PM"
  },
  {
    index: 24,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CARROT OIL",
    price: "778.7",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 6,
    ingredients: ["sit", "esse", "tempor", "anim", "dolore"],
    description:
      "duis commodo ex consectetur tempor dolor nostrud mollit quis proident dolor dolor sit aliqua laborum",
    benefits: [
      "laboris duis ut",
      "exercitation et tempor",
      "nisi ut fugiat",
      "ad culpa enim",
      "cillum id est"
    ],
    date_add: "Friday, January 3, 2020 9:23 PM",
    date_update: "Sunday, January 19, 2020 5:09 AM"
  },
  {
    index: 25,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "MIZIZI VEGATABLE GLYCERINE",
    price: "473.6",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 10,
    ingredients: ["quis", "deserunt", "ipsum", "nisi", "laborum"],
    description:
      "et eu sit nostrud sunt irure et laboris cupidatat mollit laborum aliqua ullamco excepteur eu",
    benefits: [
      "pariatur proident laborum",
      "tempor esse cupidatat",
      "eu aliquip ex",
      "laborum sit amet",
      "officia sint excepteur"
    ],
    date_add: "Monday, February 10, 2020 10:20 AM",
    date_update: "Friday, January 10, 2020 4:18 PM"
  },
  {
    index: 26,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CANOLA OIL",
    price: "409.2",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 10,
    ingredients: ["ad", "anim", "labore", "nulla", "ipsum"],
    description:
      "laboris consequat pariatur ad elit occaecat sint adipisicing enim magna qui laboris occaecat occaecat irure",
    benefits: [
      "aliquip laborum id",
      "cillum non tempor",
      "pariatur amet anim",
      "anim dolor pariatur",
      "reprehenderit aute laboris"
    ],
    date_add: "Thursday, January 16, 2020 12:06 PM",
    date_update: "Thursday, February 13, 2020 10:45 PM"
  },
  {
    index: 27,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BLACK SOAP",
    price: "465.7",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 3,
    ingredients: ["Lorem", "reprehenderit", "ex", "do", "adipisicing"],
    description:
      "voluptate fugiat est culpa nostrud reprehenderit magna esse magna minim duis ex tempor id minim",
    benefits: [
      "occaecat ipsum in",
      "voluptate cillum commodo",
      "ad ullamco nisi",
      "do voluptate mollit",
      "fugiat non deserunt"
    ],
    date_add: "Sunday, February 9, 2020 9:04 AM",
    date_update: "Tuesday, January 21, 2020 9:12 PM"
  },
  {
    index: 28,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CUCUMBER SOAP",
    price: "697.2",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["Lorem", "excepteur", "aute", "Lorem", "qui"],
    description:
      "do labore anim reprehenderit cillum eiusmod commodo dolor excepteur aliquip occaecat laboris magna laboris dolore",
    benefits: [
      "officia magna ut",
      "eiusmod proident nulla",
      "adipisicing exercitation dolor",
      "adipisicing deserunt consectetur",
      "nulla aliqua consectetur"
    ],
    date_add: "Tuesday, February 11, 2020 2:33 PM",
    date_update: "Friday, February 7, 2020 12:38 PM"
  },
  {
    index: 29,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "EXFOLIATING SOPA",
    price: "889.8",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 9,
    ingredients: ["incididunt", "tempor", "officia", "eu", "eiusmod"],
    description:
      "nostrud consectetur do pariatur dolore cupidatat labore velit nostrud anim ullamco reprehenderit fugiat veniam incididunt",
    benefits: [
      "ea quis et",
      "qui pariatur tempor",
      "amet nostrud ut",
      "veniam veniam veniam",
      "sit ut culpa"
    ],
    date_add: "Tuesday, January 28, 2020 8:41 PM",
    date_update: "Thursday, January 9, 2020 11:04 PM"
  },
  {
    index: 30,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "SHEA BUTTER",
    price: "77.8",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 9,
    ingredients: ["laboris", "consectetur", "ex", "nisi", "non"],
    description:
      "sunt amet ullamco excepteur duis minim pariatur reprehenderit ut reprehenderit ullamco nostrud sint velit sint",
    benefits: [
      "tempor ut proident",
      "magna qui culpa",
      "nisi excepteur enim",
      "consequat eu consequat",
      "aliquip exercitation eu"
    ],
    date_add: "Thursday, January 2, 2020 9:39 PM",
    date_update: "Wednesday, January 8, 2020 4:51 PM"
  },
  {
    index: 31,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CARROT TUMERIC SOAP",
    price: "75.1",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 7,
    ingredients: ["ipsum", "tempor", "minim", "officia", "elit"],
    description:
      "dolor veniam Lorem irure dolore mollit nostrud deserunt laboris ipsum laboris excepteur adipisicing commodo exercitation",
    benefits: [
      "occaecat commodo veniam",
      "consectetur sit laborum",
      "nostrud dolore sit",
      "laboris proident elit",
      "dolore amet aute"
    ],
    date_add: "Thursday, February 6, 2020 6:18 PM",
    date_update: "Saturday, February 8, 2020 2:38 AM"
  },
  {
    index: 32,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BENTOWHE CLAY",
    price: "655.8",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 7,
    ingredients: ["voluptate", "ut", "veniam", "reprehenderit", "do"],
    description:
      "velit aute culpa anim consectetur officia eiusmod aliqua eiusmod voluptate Lorem elit dolor in Lorem",
    benefits: [
      "labore eu reprehenderit",
      "pariatur Lorem ea",
      "proident adipisicing eu",
      "tempor officia eu",
      "deserunt mollit ullamco"
    ],
    date_add: "Thursday, February 13, 2020 11:56 PM",
    date_update: "Friday, February 7, 2020 9:16 PM"
  },
  {
    index: 33,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "NEEN WITH BEES WAX",
    price: "675.2",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 5,
    ingredients: ["enim", "ipsum", "magna", "ex", "dolor"],
    description:
      "duis laboris veniam irure cillum amet adipisicing duis sint commodo laborum dolor veniam eiusmod tempor",
    benefits: [
      "commodo nulla culpa",
      "aute voluptate mollit",
      "et nulla incididunt",
      "excepteur magna anim",
      "sunt minim culpa"
    ],
    date_add: "Monday, January 20, 2020 8:36 AM",
    date_update: "Tuesday, February 4, 2020 1:12 PM"
  },
  {
    index: 34,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "ACTIVATER CHARCOAL",
    price: "679.8",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 5,
    ingredients: ["elit", "ullamco", "eu", "proident", "magna"],
    description:
      "pariatur et consectetur occaecat reprehenderit nisi consectetur ut excepteur dolor tempor amet cillum non elit",
    benefits: [
      "incididunt amet occaecat",
      "nostrud laboris proident",
      "culpa elit reprehenderit",
      "ad non esse",
      "adipisicing sint esse"
    ],
    date_add: "Monday, January 27, 2020 12:55 PM",
    date_update: "Sunday, February 16, 2020 7:57 PM"
  },
  {
    index: 35,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BAOBAB",
    price: "186.8",
    quantity: 1,
    category: "Soaps",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 8,
    ingredients: ["laboris", "deserunt", "culpa", "pariatur", "consectetur"],
    description:
      "adipisicing minim ipsum excepteur elit aliqua mollit ea occaecat velit nisi non anim duis eiusmod",
    benefits: [
      "ex elit fugiat",
      "ea ipsum laboris",
      "tempor nulla cupidatat",
      "minim aliquip adipisicing",
      "quis incididunt aliqua"
    ],
    date_add: "Thursday, January 2, 2020 6:40 PM",
    date_update: "Monday, January 20, 2020 11:46 PM"
  },
  {
    index: 36,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CASSAVA FLOOR",
    price: "464.1",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 3,
    ingredients: ["veniam", "non", "deserunt", "exercitation", "incididunt"],
    description:
      "voluptate fugiat velit anim ex voluptate non deserunt qui tempor mollit ex laborum aliqua excepteur",
    benefits: [
      "consectetur irure amet",
      "sunt nulla exercitation",
      "amet sit nostrud",
      "exercitation fugiat Lorem",
      "eu aliquip quis"
    ],
    date_add: "Sunday, February 16, 2020 12:30 PM",
    date_update: "Sunday, January 26, 2020 9:26 PM"
  },
  {
    index: 37,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "GLUTEN FREE FLOUR CHAPATI MIX",
    price: "805.2",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 4,
    ingredients: ["nulla", "aliquip", "commodo", "excepteur", "dolore"],
    description:
      "fugiat irure cillum consequat non ullamco enim ex eu irure dolor esse anim cillum Lorem",
    benefits: [
      "pariatur magna sit",
      "reprehenderit culpa laboris",
      "pariatur elit aliquip",
      "esse laborum dolor",
      "eiusmod est reprehenderit"
    ],
    date_add: "Saturday, February 1, 2020 3:34 AM",
    date_update: "Saturday, February 8, 2020 12:34 AM"
  },
  {
    index: 38,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "GLUTEN FREE FLOUR BAKING FLOUR",
    price: "794.0",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 5,
    ingredients: ["mollit", "occaecat", "non", "officia", "sint"],
    description:
      "non mollit deserunt aute tempor elit exercitation deserunt in in proident tempor laborum consectetur dolore",

    benefits: [
      "voluptate commodo Lorem",
      "Lorem quis et",
      "elit fugiat non",
      "ullamco occaecat ipsum",
      "sint commodo consequat"
    ],
    date_add: "Friday, January 3, 2020 8:25 PM",
    date_update: "Wednesday, February 12, 2020 3:35 AM"
  },
  {
    index: 39,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "GLUTEN FREE FLOUR PANCAKE FLOUR",
    price: "636.5",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 7,
    ingredients: ["labore", "ex", "Lorem", "velit", "amet"],
    description:
      "amet cillum reprehenderit proident Lorem laborum sint ipsum laboris veniam sit sit fugiat tempor consequat",

    benefits: [
      "quis magna laboris",
      "enim aliqua proident",
      "ad deserunt id",
      "fugiat consequat sunt",
      "excepteur et duis"
    ],
    date_add: "Thursday, January 16, 2020 4:57 PM",
    date_update: "Thursday, January 30, 2020 2:01 AM"
  },
  {
    index: 40,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "DRIED BASIL LEAVES",
    price: "367.1",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["adipisicing", "incididunt", "fugiat", "ipsum", "sit"],
    description:
      "mollit qui Lorem enim ex dolor minim ut enim occaecat dolore cillum officia Lorem nostrud",

    benefits: [
      "duis est deserunt",
      "irure consectetur qui",
      "magna proident irure",
      "tempor adipisicing et",
      "deserunt minim magna"
    ],
    date_add: "Wednesday, January 1, 2020 7:27 AM",
    date_update: "Saturday, January 11, 2020 3:52 AM"
  },
  {
    index: 41,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "DRIED THYME LEAVES",
    price: "523.1",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 5,
    ingredients: ["fugiat", "pariatur", "magna", "tempor", "excepteur"],
    description:
      "ullamco commodo veniam reprehenderit elit qui pariatur Lorem veniam tempor ea laboris duis non eu",

    benefits: [
      "ullamco est velit",
      "Lorem magna ea",
      "sit excepteur non",
      "veniam aute aliquip",
      "ea dolore id"
    ],
    date_add: "Wednesday, January 22, 2020 8:28 PM",
    date_update: "Friday, February 7, 2020 11:19 PM"
  },
  {
    index: 42,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BLACK SEED OIL",
    price: "673.8",
    quantity: 1,
    category: "Natural Oils",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 8,
    ingredients: ["elit", "sit", "sint", "irure", "qui"],
    description:
      "officia cupidatat sint cupidatat adipisicing et et nisi dolore aliquip non ea elit cillum culpa",
    benefits: [
      "minim duis dolore",
      "commodo consequat enim",
      "veniam excepteur sit",
      "sit anim quis",
      "id Lorem anim"
    ],
    date_add: "Sunday, January 12, 2020 9:28 AM",
    date_update: "Thursday, January 16, 2020 2:56 PM"
  },
  {
    index: 43,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "SIM SIM PEANUT BUTTER",
    price: "991.1",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 6,
    ingredients: ["nostrud", "laboris", "nulla", "proident", "ut"],
    description:
      "sit officia ipsum tempor voluptate nostrud do incididunt ad officia deserunt cillum labore anim incididunt",
    benefits: [
      "non ullamco ut",
      "excepteur voluptate qui",
      "est laborum deserunt",
      "ad excepteur ut",
      "quis aute eiusmod"
    ],
    date_add: "Tuesday, February 4, 2020 1:05 AM",
    date_update: "Friday, January 17, 2020 1:17 AM"
  },
  {
    index: 44,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BUTTER SPREAD PEANUT",
    price: "969.2",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 10,
    ingredients: ["elit", "sint", "commodo", "sunt", "exercitation"],
    description:
      "amet dolor pariatur dolore Lorem aute magna do magna in nisi aliqua duis voluptate nisi",
    benefits: [
      "non ullamco ut",
      "excepteur voluptate qui",
      "est laborum deserunt",
      "ad excepteur ut",
      "quis aute eiusmod"
    ],
    date_add: "Monday, January 20, 2020 9:02 PM",
    date_update: "Saturday, February 1, 2020 6:40 PM"
  },
  {
    index: 45,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "BLACK STRAP MOLASSES SPREAD",
    price: "556.9",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 7,
    ingredients: ["dolore", "cupidatat", "velit", "sint", "ad"],
    description:
      "nostrud qui proident sunt proident reprehenderit ullamco adipisicing amet magna eiusmod duis cupidatat amet elit",
    benefits: [
      "veniam veniam pariatur",
      "anim dolore officia",
      "proident elit nisi",
      "aute occaecat non",
      "velit irure ex"
    ],
    date_add: "Monday, January 6, 2020 5:07 AM",
    date_update: "Saturday, February 15, 2020 3:31 AM"
  },
  {
    index: 46,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "CHIA SEED",
    price: "329.3",
    quantity: 1,
    category: "Herb & Spices",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 5,
    ingredients: ["aute", "enim", "culpa", "magna", "non"],
    description:
      "quis duis consequat voluptate consectetur elit nisi sit duis ut ex ut reprehenderit non minim",
    benefits: [
      "qui veniam minim",
      "laboris ut est",
      "qui velit commodo",
      "ipsum occaecat cillum",
      "velit id ex"
    ],
    date_add: "Wednesday, January 1, 2020 10:27 AM",
    date_update: "Monday, February 10, 2020 12:30 AM"
  },
  {
    index: 47,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "Bush Dry Bean",
    price: "864.1",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 5,
    inStock: 3,
    ingredients: ["ea", "irure", "exercitation", "officia", "occaecat"],
    description:
      "ut aute veniam irure esse nulla officia proident qui anim irure commodo officia occaecat laboris",
    benefits: [
      "qui veniam minim",
      "laboris ut est",
      "qui velit commodo",
      "ipsum occaecat cillum",
      "velit id ex"
    ],
    date_add: "Tuesday, February 11, 2020 7:00 AM",
    date_update: "Monday, January 27, 2020 12:26 PM"
  },
  {
    index: 48,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "Garden Peas",
    price: "830.0",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 3,
    inStock: 7,
    ingredients: ["aute", "pariatur", "elit", "tempor", "ea"],
    description:
      "labore occaecat ea labore esse anim velit exercitation irure pariatur eu consectetur occaecat deserunt eu",
    benefits: [
      "non ullamco ut",
      "excepteur voluptate qui",
      "est laborum deserunt",
      "ad excepteur ut",
      "quis aute eiusmod"
    ],
    date_add: "Saturday, February 1, 2020 12:35 AM",
    date_update: "Friday, January 24, 2020 6:50 PM"
  },
  {
    index: 49,
    isAvailable: true,
    image: "http://placehold.it/250x250",
    imageLg: "http://placehold.it/1080x1080",
    name: "Chickpeas",
    price: "139.7",
    quantity: 1,
    category: "Food and Nutrition",
    prices: {
      price: "This is price",
      quantity: "",
      subTotal: "total price plus quantity",
      sale: "for sale purpose",
      compare: "Original price"
    },
    rate: 4,
    inStock: 3,
    ingredients: ["non", "nulla", "deserunt", "aliqua", "et"],
    description:
      "eiusmod sint est deserunt enim officia veniam nostrud elit pariatur ullamco consequat non nisi fugiat",
    benefits: [
      "anim do velit",
      "officia non laboris",
      "ullamco qui tempor",
      "commodo pariatur esse",
      "mollit do cillum"
    ],
    date_add: "Monday, January 6, 2020 8:37 PM",
    date_update: "Thursday, February 13, 2020 4:14 PM"
  }
];

export function getProducts() {
  return products.filter(product => product);
}

export function getProduct(index) {
  return  products.find(product => product.index == index )
}