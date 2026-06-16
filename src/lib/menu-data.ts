import logo from "@/assets/Logo.jpeg";

import Chana from "@/assets/Chany.jpeg";
import MurghChana from "@/assets/Murgh chany.jpeg";
import AndaChana from "@/assets/Anda chnay.jpeg";
import AlooQeema from "@/assets/Aloo Qema.jpeg";
import Haleem from "@/assets/Haleem.jpeg";
import MixSabzi from "@/assets/Mix Sabazi.jpeg";
import DaalChana from "@/assets/Daal chana.jpeg";
import DaalMash from "@/assets/Daal Mash.jpeg";
import ChickenQorma from "@/assets/Chicken Qorma.jpeg";
import DaalLobia from "@/assets/Daal lobia.jpeg";
import MixDaal from "@/assets/Mix Daal.jpeg";
import CurryPakora from "@/assets/curry.jpg";
import TawaKaleeji from "@/assets/Tawa kalejii.jpeg";

import Chai from "@/assets/Chai.jpeg";
import ShakarChai from "@/assets/Shakar chai.jpeg";
import SpecialChai from "@/assets/Special Chai.jpeg";
import KashmiriChai from "@/assets/Kashmiri Chai.jpeg";
import GreenTea from "@/assets/Green Tea.jpeg";
import Paratha from "@/assets/Paratha.jpeg";
import AlooParatha from "@/assets/Aloo Partha.jpeg";
import OmeletteParatha from "@/assets/Omelette Partha.jpeg";
import TandooriParatha from "@/assets/Tandoori Partha.jpeg";
import AndaFry from "@/assets/Anda fry.jpeg";
import AndaOmelette from "@/assets/Anda omelette.jpeg";
import Lassi from "@/assets/Lassi.jpeg";

import Naan from "@/assets/Nan.jpeg";
import Roti from "@/assets/Roti.jpeg";
import RoghniNaan from "@/assets/Rogni Nan.jpeg";
import Kulcha from "@/assets/Kulcha.jpeg";

import ChickenKarahi from "@/assets/Chicken Karahi.jpeg";
import WhiteChickenKarahi from "@/assets/White Chicken Karahi.jpeg";
import ChickenMakhni from "@/assets/Chicken Makhni.jpeg";

import ChickenBiryani from "@/assets/Chicken Biryani.jpeg";
import Pulao from "@/assets/Pulao.jpeg";

import ChickenReshmiKabab from "@/assets/Chicken Reshmi kabab.jpeg";
import ChickenTurkishKabab from "@/assets/Chicken Turkish Kabab.jpeg";
import ChickenBoti from "@/assets/Chicken Boti.jpeg";
import ChickenMalaiBoti from "@/assets/Chicken Malai Boti.jpeg";
import ChickenTikka from "@/assets/Chicken Tikaa Leg Piece.jpeg";
import ChickenChest from "@/assets/Chicken Chest piece.jpeg";

import Drink1 from "@/assets/Regular Drinks 120.jpeg";
import Drink2 from "@/assets/1 Litre drinks 180.jpeg";
import Drink3 from "@/assets/1.5 Litre drinks 220.jpeg";
import Water from "@/assets/Mineral water 500 ML.jpeg";
import Water2 from "@/assets/Mineral waer.jpeg";

import Salad from "@/assets/Fresh Salad 30.jpeg";
import Raita from "@/assets/Mint Raita 30.jpeg";
import Shami from "@/assets/Shami kabab 50.jpeg";

import Deal1 from "@/assets/Deal.jpeg";
import Deal2 from "@/assets/Deal2.jpeg";
export const IMG = {
  logo: logo,
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
      { name: "Chana", half: "Rs. 150", full: "Rs. 200", desc: "Slow-cooked chickpeas in aromatic masala.", image:Chana  },
      { name: "Murgh Chana", half: "Rs. 200", full: "Rs. 300", desc: "Tender chicken & chickpea curry.", image:MurghChana },
      { name: "Anda Chana", half: "Rs. 150", full: "Rs. 250", desc: "Egg & chickpea desi classic.", image:AndaChana },
      { name: "Aloo Qeema", half: "Rs. 200", full: "Rs. 400", desc: "Minced meat with potatoes & spice.", image:AlooQeema },
      { name: "Chana Haleem", half: "Rs. 200", full: "Rs. 300", desc: "Hearty haleem with chickpeas.", image:Haleem },
      { name: "Mix Sabzi", half: "Rs. 150", full: "Rs. 200", desc: "Mixed seasonal vegetables.", image:MixSabzi },
      { name: "Daal Chana", half: "Rs. 150", full: "Rs. 200", desc: "Slow-simmered chana daal.", image:DaalChana },
      { name: "Daal Mash", half: "Rs. 150", full: "Rs. 200", desc: "Buttery urad daal.", image: DaalMash },
      { name: "Chicken Qorma", half: "Rs. 200", full: "Rs. 400", desc: "Royal Mughlai qorma.", image: ChickenQorma },
      { name: "Daal Lobia", half: "Rs. 150", full: "Rs. 200", desc: "Black-eyed beans simmered desi style.", image: DaalLobia },
      { name: "Mix Daal", half: "Rs. 150", full: "Rs. 200", desc: "Five-lentil house special.", image: MixDaal },
      { name: "Curry Pakora", half: "Rs. 150", full: "Rs. 200", desc: "Yogurt curry with pakoras.", image: CurryPakora },
      { name: "Tawa Kaleeji", half: "Rs. 200", full: "Rs. 400", desc: "Roasted okra with onions.", image: TawaKaleeji },
    ],
  },
  {
    id: "channay",
    name: "Chai & Breakfast",
    items: [
      { name: "Chai", price: "Rs. 60", desc: "Classic doodh patti chai.", image: Chai },
      { name: "Shakar Chai", price: "Rs. 70", desc: "Sweetened karak chai.", image: ShakarChai },
      { name: "Special Chai", price: "Rs. 100", desc: "Zaiqah signature masala chai.", image: SpecialChai },
      { name: "Kashmiri Chai", price: "Rs. 150", desc: "Pink Kashmiri chai with nuts.", image: KashmiriChai },
      { name: "Green Tea", price: "Rs. 60", desc: "Freshly brewed kashmiri green tea.", image: GreenTea },
      { name: "Paratha", price: "Rs. 60", desc: "Flaky desi ghee paratha.", image: Paratha },
      { name: "Aloo Paratha", price: "Rs. 100", desc: "Stuffed spiced potato paratha.", image: AlooParatha },
      { name: "Omelette Paratha", price: "Rs. 150", desc: "Egg omelette folded in flaky paratha.", image: OmeletteParatha },
      { name: "Tandoori Paratha", price: "Rs. 80", desc: "Clay-oven crisp tandoori paratha.", image: TandooriParatha },
      { name: "Anda Fry", price: "Rs. 60", desc: "Sunny side-up desi-style fry.", image: AndaFry },
      { name: "Anda Omelette", price: "Rs. 80", desc: "Fluffy onion-chilli omelette.", image: AndaOmelette },
      { name: "Lassi", price: "Rs. 180", desc: "Chilled sweet yogurt lassi.", image: Lassi },
    ],
  },
  {
    id: "tandoor",
    name: "Tandoor",
    items: [
      { name: "Naan", price: "Rs. 25", desc: "Soft clay-oven naan.", image: Naan },
      { name: "Roti", price: "Rs. 20", desc: "Whole-wheat tandoori roti.", image: Roti },
      { name: "Roghni Naan", price: "Rs. 60", desc: "Sesame-topped roghni naan.", image: RoghniNaan },
      { name: "Kulcha", price: "Rs. 30", desc: "Crispy kulcha from the tandoor.", image: Kulcha },
    ],
  },
  {
    id: "chicken-karahi",
    name: "Chicken Karahi",
    items: [
      { name: "Chicken Karahi", half: "Rs. 1,000", full: "Rs. 1,800", desc: "Classic black-pepper chicken karahi.", image: ChickenKarahi },
      { name: "White Chicken Karahi", half: "Rs. 1,200", full: "Rs. 2,000", desc: "Creamy peshawari white karahi.", image: WhiteChickenKarahi },
      { name: "Chicken Makhni Karahi", half: "Rs. 1,300", full: "Rs. 2,500", desc: "Buttery makhni karahi indulgence.", image: ChickenMakhni },
    ],
  },
  {
    id: "biryani",
    name: "Biryani and Pulao",
    items: [
      { name: "Chicken Single Biryani", price: "Rs. 170", desc: "Signature chicken biryani, single plate.", image: ChickenBiryani },
      { name: "Chicken Full Biryani", price: "Rs. 350", desc: "Full chicken biryani platter.", image: ChickenBiryani },
      { name: "Single Biryani", price: "Rs. 150", desc: "Classic house biryani, single plate.", image: ChickenBiryani },
      { name: "Full Biryani", price: "Rs. 300", desc: "Family-size house biryani.", image: ChickenBiryani },
      { name: "Single Pulao", price: "Rs. 150", desc: "Classic house pulao, single plate.", image: Pulao },
      { name: "Full Pulao", price: "Rs. 300", desc: "Full plate pulao.", image: Pulao },
    ],
  },
  {
    id: "bbq",
    name: "BBQ",
    items: [
      { name: "Chicken Kabab", single: "Rs. 150", halfDozen: "Rs. 800", fullDozen: "Rs. 1,600", desc: "Charcoal-grilled seekh kabab.", image: ChickenReshmiKabab },
      { name: "Chicken Reshmi Kabab", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Silky-soft reshmi kabab.", image: ChickenReshmiKabab },
      { name: "Chicken Turkish Kabab", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Spiced tikka-style kabab.", image: ChickenTurkishKabab },
      { name: "Chicken Boti", single: "Rs. 200", halfDozen: "Rs. 1,100", fullDozen: "Rs. 2,200", desc: "Flame-kissed boti pieces.", image: ChickenBoti },
      { name: "Chicken Malai Boti", single: "Rs. 220", halfDozen: "Rs. 1,200", fullDozen: "Rs. 2,400", desc: "Creamy malai boti melt-in-mouth.", image: ChickenMalaiBoti },
      { name: "Chicken Tikka Leg Pieces", single: "Rs. 320", halfDozen: "Rs. 1,800", fullDozen: "Rs. 3,600", desc: "Bone-in marinated tikka.", image: ChickenTikka },
      { name: "Chicken Chest Pieces", single: "Rs. 350", halfDozen: "Rs. 2,000", fullDozen: "Rs. 4,000", desc: "Premium boneless chest cuts.", image: ChickenChest },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      { name: "Regular Drinks", price: "Rs. 120", desc: "Chilled regular soft drink bottle.", image: Drink1 },
      { name: "1 Litre Drinks", price: "Rs. 180", desc: "1 litre soft drink bottle.", image: Drink2 },
      { name: "1.5 Litre Drinks", price: "Rs. 220", desc: "1.5 litre soft drink bottle.", image: Drink3 },
      { name: "Mineral Water 500 ML", price: "Rs. 60", desc: "Chilled mineral water 500ml.", image: Water },
      { name: "Mineral Water 1500 ML", price: "Rs. 120", desc: "Chilled mineral water 1.5L.", image: Water2 },
    ],
  },
  {
    id: "side-orders",
    name: "Side Orders",
    items: [
      { name: "Fresh Salad", price: "Rs. 30", desc: "Crisp seasonal fresh salad.", image: Salad },
      { name: "Mint Raita", price: "Rs. 30", desc: "Cool mint yogurt raita.", image: Raita },
      { name: "Shami Kabab", price: "Rs. 50", desc: "Traditional pan-fried shami kabab.", image: Shami },
    ],
  },
  {
    id: "deals",
    name: "Deals",
    items: [
      { name: "Zaiqah Deal 1", price: "Rs. 1,050", desc: "Full Biryani + 2 Kabab + 4 Chicken Boti + 4 Malai Boti  + Salad + 1L Drink.", image: Deal1 },
      { name: "Zaiqah Deal 2", price: "Rs. 2,050", desc: "2 Full Biryani + 4 Kabab + 8 Chicken Boti + 8 Malai Boti + Salad + 1.5L Drink.", image: Deal2 },
    ],
  },
];

//make galllery images
export const galleryImages = [
  ChickenBiryani,
  ChickenKarahi,
  ChickenQorma,
  ChickenMalaiBoti,
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
    { day: "All week", time: "04:00 AM – 11:00 PM" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=G-13/2+Islamabad+Rehman+Plaza+Mughal+Market&output=embed",
};