import logo from "@/assets/img_50.jpeg.asset.json";

export const IMG = {
  logo: logo.url,
  };

export type MenuItem = {
  name: string;
  /** Single price (when no variants). */
  price?: string;
  /** Half / Full pricing variants. */
  half?: string;
  full?: string;
  /** BBQ piece pricing variants. */
  single?: string;
  halfDozen?: string;
  fullDozen?: string;
  desc?: string;
  image: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "desi-salan",
    name: "Desi Salan",
    items: [
      { name: "Chana", half: "Rs. 150", full: "Rs. 200", desc: "Slow-cooked chickpeas in aromatic masala.", image:"src/assets/Chany.jpeg"  },
      { name: "Murgh Chana", half: "Rs. 200", full: "Rs. 300", desc: "Tender chicken & chickpea curry.", image: "src/assets/Murgh chany.jpeg" },
      { name: "Anda Chana", half: "Rs. 150", full: "Rs. 250", desc: "Egg & chickpea desi classic.", image: "src/assets/Anda chnay.jpeg" },
      { name: "Aloo Qeema", half: "Rs. 200", full: "Rs. 400", desc: "Minced meat with potatoes & spice.", image: "src/assets/Aloo Qema.jpeg" },
      { name: "Chana Haleem", half: "Rs. 200", full: "Rs. 300", desc: "Hearty haleem with chickpeas.", image: "src/assets/Haleem.jpeg" },
      { name: "Mix Sabzi", half: "Rs. 150", full: "Rs. 200", desc: "Mixed seasonal vegetables.", image: "src/assets/Mix Sabazi.jpeg" },
      { name: "Daal Chana", half: "Rs. 150", full: "Rs. 200", desc: "Slow-simmered chana daal.", image: "src/assets/Daal chana.jpeg" },
      { name: "Daal Mash", half: "Rs. 150", full: "Rs. 200", desc: "Buttery urad daal.", image: "src/assets/Daal Mash.jpeg" },
      { name: "Chicken Qorma", half: "Rs. 200", full: "Rs. 400", desc: "Royal Mughlai qorma.", image: "src/assets/Chicken Qorma.jpeg" },
      { name: "Daal Lobia", half: "Rs. 150", full: "Rs. 200", desc: "Black-eyed beans simmered desi style.", image: "src/assets/Daal Lobia.jpeg" },
      { name: "Mix Daal", half: "Rs. 150", full: "Rs. 200", desc: "Five-lentil house special.", image:"src/assets/Mix Daal.jpeg" },
      { name: "Curry Pakora", half: "Rs. 150", full: "Rs. 200", desc: "Yogurt curry with pakoras.", image: "src/assets/curry.jpg" },
      { name: "Tawa Kaleeji", half: "Rs. 200", full: "Rs. 400", desc: "Roasted okra with onions.", image: "src/assets/Tawa kalejii.jpeg" },
    ],
  },
  {
    id: "channay",
    name: "Chai & Breakfast",
    items: [
      { name: "Chai", price: "Rs. 60", desc: "Classic doodh patti chai.", image: "src/assets/Chai.jpeg" },
      { name: "Shakar Chai", price: "Rs. 70", desc: "Sweetened karak chai.", image: "src/assets/Shakar chai.jpeg" },
      { name: "Special Chai", price: "Rs. 100", desc: "Zaiqah signature masala chai.", image: "src/assets/Special Chai.jpeg" },
      { name: "Kashmiri Chai", price: "Rs. 150", desc: "Pink Kashmiri chai with nuts.", image: "src/assets/Kashmiri Chai.jpeg" },
      { name: "Green Tea", price: "Rs. 60", desc: "Freshly brewed kashmiri green tea.", image: "src/assets/Green Tea.jpeg" },
      { name: "Paratha", price: "Rs. 60", desc: "Flaky desi ghee paratha.", image: "src/assets/Paratha.jpeg" },
      { name: "Aloo Paratha", price: "Rs. 100", desc: "Stuffed spiced potato paratha.", image:"src/assets/Aloo Partha.jpeg" },
      { name: "Omelette Paratha", price: "Rs. 150", desc: "Egg omelette folded in flaky paratha.", image:"src/assets/Omelette Partha.jpeg" },
      { name: "Tandoori Paratha", price: "Rs. 80", desc: "Clay-oven crisp tandoori paratha.", image: "src/assets/Tandoori Partha.jpeg" },
      { name: "Anda Fry", price: "Rs. 60", desc: "Sunny side-up desi-style fry.", image: "src/assets/Anda fry.jpeg" },
      { name: "Anda Omelette", price: "Rs. 80", desc: "Fluffy onion-chilli omelette.", image: "src/assets/Anda omelette.jpeg" },
      { name: "Lassi", price: "Rs. 180", desc: "Chilled sweet yogurt lassi.", image: "src/assets/Lassi.jpeg" },
    ],
  },
  {
    id: "tandoor",
    name: "Tandoor",
    items: [
      { name: "Naan", price: "Rs. 25", desc: "Soft clay-oven naan.", image: "src/assets/Nan.jpeg" },
      { name: "Roti", price: "Rs. 20", desc: "Whole-wheat tandoori roti.", image: "src/assets/Roti.jpeg" },
      { name: "Roghni Naan", price: "Rs. 60", desc: "Sesame-topped roghni naan.", image: "src/assets/Rogni Nan.jpeg" },
      { name: "Kulcha", price: "Rs. 30", desc: "Crispy kulcha from the tandoor.", image: "src/assets/Kulcha.jpeg" },
    ],
  },
  {
    id: "chicken-karahi",
    name: "Chicken Karahi",
    items: [
      { name: "Chicken Karahi", half: "Rs. 1,000", full: "Rs. 1,800", desc: "Classic black-pepper chicken karahi.", image: "src/assets/Chicken Karahi.jpeg" },
      { name: "White Chicken Karahi", half: "Rs. 1,200", full: "Rs. 2,000", desc: "Creamy peshawari white karahi.", image: "src/assets/White Chicken Karahi.jpeg" },
      { name: "Chicken Makhni Karahi", half: "Rs. 1,300", full: "Rs. 2,500", desc: "Buttery makhni karahi indulgence.", image: "src/assets/Chicken Makhni.jpeg" },
    ],
  },
  {
    id: "biryani",
    name: "Biryani",
    items: [
      { name: "Chicken Single Biryani", price: "Rs. 170", desc: "Signature chicken biryani, single plate.", image: "src/assets/Chicken Biryani.jpeg" },
      { name: "Chicken Full Biryani", price: "Rs. 350", desc: "Full chicken biryani platter.", image: "src/assets/Chicken Biryani.jpeg" },
      { name: "Single Biryani", price: "Rs. 150", desc: "Classic house biryani, single plate.", image: "src/assets/Chicken Biryani.jpeg" },
      { name: "Full Biryani", price: "Rs. 300", desc: "Family-size house biryani.", image: "src/assets/Chicken Biryani.jpeg" },
    ],
  },
  {
    id: "bbq",
    name: "BBQ",
    items: [
      { name: "Chicken Kabab", single: "Rs. 150", halfDozen: "Rs. 800", fullDozen: "Rs. 1,600", desc: "Charcoal-grilled seekh kabab.", image: "src/assets/Chicken Reshmi kabab.jpeg" },
      { name: "Chicken Reshmi Kabab", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Silky-soft reshmi kabab.", image: "src/assets/Chicken Reshmi kabab.jpeg" },
      { name: "Chicken Turkish Kabab", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Spiced tikka-style kabab.", image: "src/assets/Chicken Turkish Kabab.jpeg" },
      { name: "Chicken Boti", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Flame-kissed boti pieces.", image: "src/assets/Chicken Boti.jpeg" },
      { name: "Chicken Malai Boti", single: "Rs. 220", halfDozen: "Rs. 1,200", fullDozen: "Rs. 2,400", desc: "Creamy malai boti melt-in-mouth.", image: "src/assets/Chicken Malai Boti.jpeg" },
      { name: "Chicken Tikka Leg Pieces", single: "Rs. 320", halfDozen: "Rs. 1,800", fullDozen: "Rs. 3,600", desc: "Bone-in marinated tikka.", image: "src/assets/Chicken Tikaa Leg Piece.jpeg" },
      { name: "Chicken Chest Pieces", single: "Rs. 350", halfDozen: "Rs. 2,000", fullDozen: "Rs. 4,000", desc: "Premium boneless chest cuts.", image: "src/assets/Chicken Chest piece.jpeg" },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Regular Drinks", price: "Rs. 120", desc: "Chilled regular soft drink bottle.", image: "src/assets/Regular Drinks 120.jpeg" },
      { name: "1 Litre Drinks", price: "Rs. 180", desc: "1 litre soft drink bottle.", image: "src/assets/1 Litre drinks 180.jpeg" },
      { name: "1.5 Litre Drinks", price: "Rs. 220", desc: "1.5 litre soft drink bottle.", image: "src/assets/1.5 Litre drinks 220.jpeg" },
      { name: "Mineral Water 500 ML", price: "Rs. 60", desc: "Chilled mineral water 500ml.", image: "src/assets/Mineral water 500 ML.jpeg" },
      { name: "Mineral Water 1500 ML", price: "Rs. 120", desc: "Chilled mineral water 1.5L.", image: "src/assets/Mineral waer.jpeg" },
    ],
  },
  {
    id: "side-orders",
    name: "Side Orders",
    items: [
      { name: "Fresh Salad", price: "Rs. 30", desc: "Crisp seasonal fresh salad.", image: "src/assets/Fresh Salad 30.jpeg" },
      { name: "Mint Raita", price: "Rs. 30", desc: "Cool mint yogurt raita.", image: "src/assets/Mint Raita 30.jpeg" },
      { name: "Shami Kabab", price: "Rs. 50", desc: "Traditional pan-fried shami kabab.", image: "src/assets/Shami kabab 50.jpeg" },
    ],
  },
  {
    id: "deals",
    name: "Deals",
    items: [
      { name: "Zaiqah Deal 1", price: "Rs. 1,050", desc: "Full Biryani + 2 Kabab + 4 Boti + Salad + 1L Drink.", image: "src/assets/Deal.jpeg" },
      { name: "Zaiqah Deal 2", price: "Rs. 2,050", desc: "2 Full Biryani + 4 Kabab + 8 Boti + 8 Malai Boti + Salad + 1.5L Drink.", image: "src/assets/Deal2.jpeg" },
    ],
  },
];

//make galllery images
export const galleryImages = [
  "/src/assets/Chicken Biryani.jpeg",
  "/src/assets/Chicken Karahi.jpeg",
  "/src/assets/Chicken Qorma.jpeg",
  "/src/assets/Chicken Malai Boti.jpeg",
];

export const RESTAURANT = {
  name: "Zaiqah Foods",
  tagline: "Authentic Pakistani Taste Since Day One",
  address: "Shop #10, Rehman Plaza, Mughal Market, Street 53, G-13/2 Islamabad",
  landmark: "Opposite Asian Mall",
  phone: "+92 339 5000363",
  whatsapp: "923395000363",
  whatsappDisplay: "0339-5000363",
  email: "zaiqahfoodss@gmail.com",
  hours: [
    { day: "Mon – Thu", time: "11:00 AM – 12:00 AM" },
    { day: "Fri", time: "02:00 PM – 01:00 AM" },
    { day: "Sat – Sun", time: "11:00 AM – 01:00 AM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=G-13/2+Islamabad+Rehman+Plaza+Mughal+Market&output=embed",
};