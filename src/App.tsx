/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { 
  Pizza, 
  ChefHat, 
  User, 
  ArrowRight, 
  Star, 
  MapPin, 
  Phone, 
  Instagram, 
  Twitter, 
  Youtube,
  Search,
  Utensils,
  Leaf,
  Wine,
  Menu,
  X,
  Mail,
  Send
} from "lucide-react";

// Contact View Component
const ContactView = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    className="max-w-7xl mx-auto px-4 py-20 relative z-10"
  >
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic tilted inline-block">Kapcsolat</h2>
      <div className="h-2 bg-primary w-40 mx-auto rounded-full opacity-20"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20 items-start">
      <div className="space-y-12">
        <div className="flex gap-8 group">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <MapPin className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-mono font-black uppercase tracking-widest text-sm mb-2 opacity-50">Címünk</h4>
            <p className="text-2xl font-bold leading-tight">6500 Baja,<br/>Tóth Kálmán tér 5.</p>
          </div>
        </div>

        <div className="flex gap-8 group">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <Phone className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-mono font-black uppercase tracking-widest text-sm mb-2 opacity-50">Telefonszám</h4>
            <p className="text-2xl font-bold leading-tight">+36 30 755 6846</p>
          </div>
        </div>

        <div className="flex gap-8 group">
          <div className="w-16 h-16 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500">
            <Mail className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-mono font-black uppercase tracking-widest text-sm mb-2 opacity-50">E-mail</h4>
            <p className="text-2xl font-bold leading-tight">info@pinocchiopizza.hu</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 md:p-16 rounded-[48px] solid-shadow-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
        
        <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2">Vezetéknév</label>
              <input type="text" className="w-full bg-surface-container border-2 border-surface-dim rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors font-medium" />
            </div>
            <div className="space-y-2">
              <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2">Keresztnév</label>
              <input type="text" className="w-full bg-surface-container border-2 border-surface-dim rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors font-medium" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2">Email *</label>
            <input type="email" required className="w-full bg-surface-container border-2 border-surface-dim rounded-2xl px-6 py-4 focus:border-primary outline-none transition-colors font-medium" />
          </div>

          <div className="space-y-2">
            <label className="font-mono font-bold uppercase tracking-widest text-[10px] opacity-60 ml-2">Üzenet</label>
            <textarea rows={4} className="w-full bg-surface-container border-2 border-surface-dim rounded-3xl px-6 py-4 focus:border-primary outline-none transition-colors font-medium resize-none"></textarea>
          </div>

          <button className="w-full py-6 bg-on-surface text-surface font-mono font-bold uppercase tracking-[0.3em] rounded-2xl solid-shadow-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-4">
            Küldés <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>

    <div className="w-full h-[500px] rounded-[48px] overflow-hidden solid-shadow-dark border-4 border-white">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2757.2504265737527!2d18.951555176882203!3d46.18555557110185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4742f1bcb1000001%3A0xc319223e745679ac!2sPinocchio%20Pizzeria!5e0!3m2!1shu!2shu!4v1716020000000!5m2!1shu!2shu" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </motion.div>
);

const CATEGORIES = [
  { id: "pizza", name: "Pizza", icon: Pizza },
  { id: "teszta", name: "Tészta", icon: Utensils },
  { id: "salata", name: "Saláta", icon: Leaf },
  { id: "italok", name: "Italok", icon: Wine },
];

const POPULAR_ITEMS = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Házi paradicsomszósz, bivalymozzarella, friss bazsalikom, extra szűz olívaolaj.",
    price: "2890 Ft",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad38?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Bacon & Cheese",
    description: "Tejfölös alap, dupla bacon, mozzarella, cheddar, lilahagyma.",
    price: "3490 Ft",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Pesto Tészta",
    description: "Penne tészta, házi bazsalikomos pesto, fenyőmag, parmezán forgács.",
    price: "3190 Ft",
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?auto=format&fit=crop&q=80&w=800",
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    name: "Kovács Anna",
    text: "A legjobb pizza a városban! A tészta pont olyan vékony és ropogós, amilyennek lennie kell.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
  },
  {
    id: 2,
    name: "Nagy Gábor",
    text: "Végre egy hely, ahol nem spórolnak a feltétekkel! A Bacon & Cheese pizza valami fenomenális.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Gabor",
  },
  {
    id: 3,
    name: "Tóth Eszter",
    text: "A tészták is zseniálisak, nem csak a pizzák. A Pesto Tészta friss és ízletes. Imádom!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Eszter",
  },
];

const PIZZA_MENU_DATA = [
  { id: 1, name: "MARGHERITA", ingredients: "Paradicsomszósz, mozzarella", price: "2690,- Ft" },
  { id: 2, name: "SALAME", ingredients: "Paradicsomszósz, mozzarella, olasz (dolce) szalámi", price: "3090,- Ft" },
  { id: 3, name: "SALAME PICCANTE", ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi", price: "3090,- Ft" },
  { id: 4, name: "FUNGHI", ingredients: "Paradicsomszósz, mozzarella, gomba", price: "2790,- Ft" },
  { id: 5, name: "PINOCCHIO", ingredients: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, parmezán forgács", price: "3590,- Ft" },
  { id: 6, name: "AMORE", ingredients: "Paradicsomszósz, mozzarella, rukkola, pármai sonka, koktélparadicsom", price: "3590,- Ft" },
  { id: 7, name: "UNGHERESE", ingredients: "Paradicsomszósz, mozzarella, lilahagyma, olasz csípős szalámi, bacon, csípős pepperoni", price: "3590,- Ft" },
  { id: 8, name: "SALAME PICCANTE E GORGONZOLA", ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, gorgonzola sajt", price: "3290,- Ft" },
  { id: 9, name: "TONNO E CIPOLLA", ingredients: "Paradicsomszósz, mozzarella, lilahagyma, tonhal, olívaolaj", price: "3290,- Ft" },
  { id: 10, name: "4 FORMAGGI", ingredients: "Paradicsomszósz, mozzarella, parmezán sajt, pecorino sajt, gorgonzola sajt", price: "3290,- Ft" },
  { id: 11, name: "COTTO", ingredients: "Paradicsomszósz, mozzarella, olasz főtt sonka", price: "3190,- Ft" },
  { id: 12, name: "COTTO E FUNGHI", ingredients: "Paradicsomszósz, mozzarella, olasz főtt sonka, gomba", price: "3290,- Ft" },
  { id: 13, name: "PROSCIUTTO DI PARMA", ingredients: "Paradicsomszósz, mozzarella, pármai sonka", price: "3290,- Ft" },
  { id: 14, name: "VALMAR", ingredients: "Paradicsomszósz, 4 sajtos alap, olasz csípős szalámi", price: "3590,- Ft" },
  { id: 15, name: "BRUNO", ingredients: "Paradicsomszósz, 4 sajtos alap, olasz főtt sonka", price: "3590,- Ft" },
  { id: 16, name: "DOPPIO", ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, olasz főtt sonka, fokhagymás olívaolaj", price: "3590,- Ft" },
  { id: 17, name: "DIAVOLA VERDE", ingredients: "Paradicsomszósz, mozzarella, olasz csípős szalámi, rukkola, koktélparadicsom", price: "3590,- Ft" },
  { id: 18, name: "VEGA", ingredients: "Paradicsomszósz, mozzarella, gomba, lilahagyma, rukkola, olívabogyó, koktélparadicsom", price: "3490,- Ft" },
  { id: 19, name: "CAPRICCIOSA", ingredients: "Paradicsomszósz, mozzarella, articsóka, olasz főtt sonka, fekete olívabogyó", price: "3590,- Ft" },
  { id: 20, name: "TARTUFO E N'DUJA", ingredients: "Tejszínes szarvasgomba krém, mozzarella, gomba, olasz csípős kolbászkrém (N'duja)", price: "3890,- Ft" },
];

const PASTA_MENU_DATA = [
  { id: 1, name: "ARABIATA", ingredients: "Paradicsomszósz, fokhagymás olívaolaj, chili, koktélparadicsom, parmezán, spagetti", price: "2990,- Ft" },
  { id: 2, name: "POMODORO", ingredients: "Paradicsomszósz, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti", price: "2890,- Ft" },
  { id: 3, name: "CARBONARA", ingredients: "Tojássárgája, parmezán, guancile (olasz tokaszalonna), feketebors, spagetti (kérésre tejszínes változatban is elkészítjük)", price: "3390,- Ft" },
  { id: 4, name: "BOLOGNAI", ingredients: "Paradicsomszósz, tradicionális bolognai ragu, parmezán, taglietelle", price: "3390,- Ft" },
  { id: 5, name: "PASTA AL TARTUFO", ingredients: "Szarvasgomba, tejszín, fokhagymás olívaolaj, shiitake gomba, parmezán, taglietelle", price: "3690,- Ft" },
  { id: 6, name: "PASTA CON ZUCCHINE", ingredients: "Grillezett cukkini, fokhagymás olívaolaj, parmezán, taglietelle", price: "3190,- Ft" },
  { id: 7, name: "GNOCCHI AL FORMAGGI", ingredients: "Tejszínes gnocchi, parmezán, gorgonzola", price: "3190,- Ft" },
  { id: 8, name: "GNOCCHI E FUNGHI", ingredients: "Tejszínes gnocchi, gomba, fokhagymás olívaolaj, feketebors", price: "3190,- Ft" },
  { id: 9, name: "PI'GNOCCHIO", ingredients: "Paradicsomszósz, fehérbor, fokhagymás olívaolaj, parmezán, rukkola", price: "2990,- Ft" },
  { id: 10, name: "PASTA AL PESTO", ingredients: "Pesto, fokhagymás olívaolaj, koktélparadicsom, parmezán, spagetti", price: "3190,- Ft" },
  { id: 11, name: "AGLIO E VEGETABLE", ingredients: "Fokhagymás olívaolaj, grillezett cukkini, koktélparadicsom, fekete olívabogyó, rukkola, spagetti", price: "3990,- Ft" },
];

const SALAD_MENU_DATA = [
  { id: 1, name: "VEGETARIANA", ingredients: "Jégsaláta, rukkola, fekete olívabogyó, mozzarella, parmezán sajt, olívaolaj, balzsamkrém, koktélparadicsom, Focaccia (pizzakenyér)", price: "2890,- Ft" },
  { id: 2, name: "TONNO E OLIVE", ingredients: "Vegetáriánus saláta alap, tonhal, fokhagymás olívaolaj, Focaccia (pizzakenyér)", price: "2990,- Ft" },
  { id: 3, name: "PARMA E POMODORI", ingredients: "Vegetáriánus saláta alap, pármai sonka, Focaccia (pizzakenyér)", price: "2990,- Ft" },
];

const DRINKS_MENU_DATA = {
  alcohol: [
    { id: 1, name: "BIRRA MORETTI CSAPOLT SÖR (pohár/korsó)", price: "800/1200,- Ft" },
    { id: 2, name: "PERONI SÖR (0.33 l)", price: "700,- Ft" },
    { id: 3, name: "HEINEKEN (0.33 l)", price: "800,- Ft" },
    { id: 4, name: "HEINEKEN 0.0% (0.33 l)", price: "800,- Ft" },
    { id: 5, name: "GÖSSER CITROM 2% (dobozos)", price: "700,- Ft" },
    { id: 6, name: "GÖSSER CITROM 0.0% (dobozos)", price: "700,- Ft" },
    { id: 7, name: "JÄGER (2 cl/4 cl)", price: "660/1100,- Ft" },
    { id: 8, name: "UNICUM (2 cl/4 cl)", price: "660/1100,- Ft" },
    { id: 9, name: "PÁLINKA (2 cl/4 cl)", price: "750/1500,- Ft" },
  ],
  soft_drinks: [
    { id: 1, name: "ÜDÍTŐK 0,33l", ingredients: "Coca Cola, Coca Cola Zéró, Fanta, Sprite", price: "700,- Ft" },
    { id: 2, name: "CAPPY JUICE-ok 0,25l", ingredients: "Alma, Eper, Körte, Őszibarack, Narancs", price: "700,- Ft" },
    { id: 3, name: "FUZETEA 0,25l", ingredients: "Citrom, Őszibarack", price: "700,- Ft" },
    { id: 4, name: "LEMONSODA 0,33l", ingredients: "Lemon, Mijito, Oran, Zeró", price: "700,- Ft" },
    { id: 5, name: "NATURAQUA 0,33l üveges", ingredients: "Szénsavas, szénsavmentes", price: "400,- Ft" },
  ],
  coffee: [
    { id: 1, name: "ESPRESSO KÁVÉ", price: "600,- Ft" },
    { id: 2, name: "HOSSZÚ KÁVÉ", price: "600,- Ft" },
    { id: 3, name: "CAPPUCCINO", price: "700,- Ft" },
    { id: 4, name: "LATTE", price: "900,- Ft" },
    { id: 5, name: "MELANGE", price: "1000,- Ft" },
  ]
};

  const NavItem = ({ name, activeTab, setActiveTab, setMenuMode }: { 
  name: string; 
  activeTab: string; 
  setActiveTab: (t: string) => void;
  setMenuMode: (m: "full" | "category") => void;
  key?: string;
}) => (
  <button 
    onClick={() => {
      setActiveTab(name);
      if (name === "Étlap") setMenuMode("full");
    }}
    className={`font-mono text-sm font-bold uppercase tracking-widest transition-colors relative group ${activeTab === name ? "text-primary" : "hover:text-primary"}`}
  >
    {name}
    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${activeTab === name ? "w-full" : "w-0 group-hover:w-full"}`}></span>
  </button>
);

interface LandingViewProps {
  setActiveTab: (t: string) => void;
  setActiveCategory: (c: string) => void;
  setMenuMode: (m: "full" | "category") => void;
  activeCategory: string;
}

const LandingView = ({ setActiveTab, setActiveCategory, setMenuMode, activeCategory }: LandingViewProps) => (
  <>
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 scale-105">
        <img 
          src={`${import.meta.env.BASE_URL}images/pizzakep.png`} 
          alt="Authentic wood-fired pizza" 
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-6 py-2 bg-secondary text-white font-mono font-bold uppercase tracking-[0.3em] text-xs rounded-full mb-8 shadow-xl">
            Valódi olasz ízek
          </span>
          
          <h1 className="text-6xl md:text-9xl font-black text-white italic tracking-tighter leading-[0.9] mb-8 tilted origin-left">
            Toszkána íze <br/>
            <span className="text-primary not-italic">Baján</span>
          </h1>
          
          <div className="space-y-4 mb-12">
            <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Kemencében sült pizzák és friss pasták.
            </p>
            <p className="text-xl text-white/80 font-medium italic">
              Eredeti toszkán recept.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => window.location.href = "tel:+36307556846"}
              className="px-8 py-4 md:px-12 md:py-6 bg-primary text-white font-mono font-bold uppercase tracking-[0.2em] rounded-full solid-shadow text-base md:text-lg flex items-center gap-4 group"
            >
              Rendelj most
              <Phone className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    <section className="pt-12 pb-6 md:py-20 px-4 max-w-7xl mx-auto w-full relative z-10">
      <div className="text-center mb-12 md:mb-16">
        <div className="inline-block relative mb-8 md:mb-12">
          <h2 className="text-5xl md:text-7xl font-black">Kategóriák</h2>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-secondary rounded-full opacity-30"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(cat.id);
                setMenuMode("category");
                setActiveTab("Étlap");
              }}
              className={`flex flex-col items-center gap-4 p-6 md:p-10 rounded-[32px] w-32 md:w-44 transition-all duration-500 ${
                activeCategory === cat.id 
                ? "bg-primary text-white solid-shadow-dark scale-105 md:scale-110 z-10 shadow-2xl" 
                : "bg-surface-container/50 backdrop-blur-sm hover:bg-surface-container-high hover:shadow-xl"
              }`}
            >
              <div className={`p-4 md:p-6 rounded-full transition-colors duration-500 ${activeCategory === cat.id ? "bg-white/20 rotate-12" : "bg-primary/5 text-primary group-hover:rotate-12"}`}>
                <cat.icon className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <span className="font-mono font-bold uppercase tracking-[0.2em] text-xs md:text-sm">{cat.name}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>

    <AboutView />
  </>
);

interface MenuViewProps {
  menuMode: "full" | "category";
  activeCategory: string;
  setMenuMode: (m: "full" | "category") => void;
}

const MenuView = ({ menuMode, activeCategory, setMenuMode }: MenuViewProps) => {
  const isPasta = activeCategory === "teszta";
  const isSalad = activeCategory === "salata";
  const isDrinks = activeCategory === "italok";
  const isPizza = activeCategory === "pizza";

  const MenuSection = ({ items, sectionTitle }: { items: any[], sectionTitle?: string }) => (
    <div className="mb-12 last:mb-0">
      {sectionTitle && (
        <div className="flex items-center gap-6 mb-10">
          <div className="h-0.5 bg-primary/20 flex-grow"></div>
          <h3 className="text-3xl font-black italic tracking-tighter whitespace-nowrap">{sectionTitle}</h3>
          <div className="h-0.5 bg-primary/20 flex-grow"></div>
        </div>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12 relative z-10">
        {items.map((item) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group flex justify-between items-start border-b border-surface-dim pb-6 last:border-0 hover:border-primary transition-colors"
          >
            <div className="space-y-1 pr-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] font-black text-primary opacity-40">{item.id}.</span>
                <h4 className="text-xl font-black group-hover:text-primary transition-colors">{item.name}</h4>
              </div>
              {item.ingredients && (
                <p className="text-sm text-on-surface-variant font-medium leading-relaxed italic">{item.ingredients}</p>
              )}
            </div>
            <div className="font-mono font-bold text-lg text-primary whitespace-nowrap bg-primary/5 px-4 py-2 rounded-xl border border-primary/10">
              {item.price}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="max-w-7xl mx-auto px-4 py-20 relative z-10"
    >
      <div className="text-center mb-16 relative">
        <h2 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter italic tilted inline-block cursor-default">ÉTLAP</h2>
        <div className="h-2 bg-primary w-40 mx-auto rounded-full opacity-20"></div>
      </div>

      <div className="bg-surface/50 backdrop-blur-xl border-2 border-surface-dim rounded-[48px] p-8 md:p-16 solid-shadow-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        {menuMode === "full" ? (
          <>
            <MenuSection items={PIZZA_MENU_DATA} sectionTitle="PIZZA" />
            
            <div className="mt-12 mb-20 pt-10 border-t border-dashed border-surface-dim grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { label: "Csomagolás", price: "200,- Ft" },
                { label: "Pizzaszósz", price: "300,- Ft" },
                { label: "Csípős pizzaszósz", price: "300,- Ft" }
              ].map((extra, i) => (
                <div key={i} className="flex justify-between items-center py-4 px-6 bg-surface rounded-2xl border border-surface-dim group hover:border-secondary transition-colors">
                  <span className="font-mono font-bold uppercase tracking-widest text-xs">{extra.label}</span>
                  <span className="font-mono font-bold text-secondary">{extra.price}</span>
                </div>
              ))}
            </div>

            <div className="my-20"></div>
            <MenuSection items={PASTA_MENU_DATA} sectionTitle="PASTA" />
            
            <div className="my-20"></div>
            <MenuSection items={SALAD_MENU_DATA} sectionTitle="IN SALATE" />
            
            <div className="my-20 h-px bg-surface-dim"></div>
            
            <MenuSection items={DRINKS_MENU_DATA.alcohol} sectionTitle="ITALOK" />
            <div className="my-12"></div>
            <MenuSection items={DRINKS_MENU_DATA.soft_drinks} sectionTitle="ÜDÍTŐK" />
            <div className="my-12"></div>
            <MenuSection items={DRINKS_MENU_DATA.coffee} sectionTitle="KÁVÉK" />
          </>
        ) : (
          <>
            {isPizza && (
              <>
                <MenuSection items={PIZZA_MENU_DATA} sectionTitle="PIZZA" />
                <div className="mt-12 pt-10 border-t border-dashed border-surface-dim grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Csomagolás", price: "200,- Ft" },
                    { label: "Pizzaszósz", price: "300,- Ft" },
                    { label: "Csípős pizzaszósz", price: "300,- Ft" }
                  ].map((extra, i) => (
                    <div key={i} className="flex justify-between items-center py-4 px-6 bg-surface rounded-2xl border border-surface-dim group hover:border-secondary transition-colors">
                      <span className="font-mono font-bold uppercase tracking-widest text-xs">{extra.label}</span>
                      <span className="font-mono font-bold text-secondary">{extra.price}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {isPasta && <MenuSection items={PASTA_MENU_DATA} sectionTitle="PASTA" />}
            {isSalad && <MenuSection items={SALAD_MENU_DATA} sectionTitle="IN SALATE" />}
            {isDrinks && (
              <>
                <MenuSection items={DRINKS_MENU_DATA.alcohol} sectionTitle="ITALOK" />
                <div className="my-12"></div>
                <MenuSection items={DRINKS_MENU_DATA.soft_drinks} sectionTitle="ÜDÍTŐK" />
                <div className="my-12"></div>
                <MenuSection items={DRINKS_MENU_DATA.coffee} sectionTitle="KÁVÉK" />
              </>
            )}
            <div className="mt-20 flex justify-center">
              <button 
                onClick={() => setMenuMode("full")}
                className="px-8 py-4 border-2 border-primary text-primary font-mono font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all shadow-lg"
              >
                Teljes étlap megtekintése
              </button>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

const AboutView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto px-4 py-20 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>
        <motion.div initial={{ scale: 0.9, rotate: -2 }} animate={{ scale: 1, rotate: 0 }} className="rounded-[40px] overflow-hidden solid-shadow-dark">
          <img src={`${import.meta.env.BASE_URL}images/rolunk.jpeg`} alt="Cooking" className="w-full h-[600px] object-cover" />
        </motion.div>
        <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-[32px] solid-shadow max-w-[280px]">
          <p className="font-display font-black text-2xl leading-tight italic">
            "A Pinocchio nem csak egy étterem, hanem egy történet."
          </p>
        </div>
      </div>

      <div className="space-y-10">
        <div>
          <span className="font-mono font-bold uppercase tracking-[0.3em] text-primary text-sm mb-4 block">Rólunk szól</span>
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tighter italic">Pinocchio</h2>
          <p className="text-2xl font-bold text-on-surface leading-snug">
            Vannak helyek, amelyek csupán éttermek. És vannak helyek, amelyek történetekből születnek.
          </p>
        </div>

        <div className="space-y-6 text-lg text-on-surface-variant leading-relaxed font-medium">
          <p>
            A Pinocchio egy ilyen hely. Egy család vagyunk akiket az olasz konyha iránti szenvedély kötött össze, még mielőtt tudtuk volna, hogy egyszer közösen álmodunk majd éttermet.
          </p>
          <p>
            Az évek során megtanultuk, hogy az igazi olasz kézműves konyha titka nem csupán a recept – hanem a figyelem, a türelem és az a megmagyarázhatatlan többlet, amelyet csak akkor ad az ember, ha igazán szívügyének tekinti a munkáját.
          </p>
          <div className="p-8 bg-surface-container rounded-3xl border-2 border-dashed border-primary/20 relative group">
            <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest">Hitvallásunk</div>
            <p className="text-on-surface font-bold text-xl mb-4 italic">
              "Nálunk minden pizza és minden tészta kézzel, gondosan, szívvel és lélekkel készül."
            </p>
            <p className="text-sm">Nem kompromisszumokból, hanem meggyőződésből.</p>
          </div>
          <p>
            Hiszünk abban, hogy egy jól elkészített étel több mint táplálék – pillanat, amelyre vissza lehet emlékezni. Ezért törekszünk arra, hogy minden egyes tányér, amelyet az asztalra teszünk, ezt az érzést hordozza magában.
          </p>
          <div className="pt-10">
            <p className="text-primary font-black text-3xl italic mb-2">Köszönjük, hogy betértél hozzánk.</p>
            <p className="font-mono font-bold uppercase tracking-widest text-xs">Reméljük, hogy nemcsak egyszer.</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const [activeTab, setActiveTab] = useState("Kezdőlap");
  const [menuMode, setMenuMode] = useState<"full" | "category">("full");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [activeTab, activeCategory]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary selection:text-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-5 z-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-primary-container rounded-full blur-[100px]"></div>
        <div className="absolute top-[60%] -right-20 w-96 h-96 bg-secondary-container rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-tertiary-container rounded-full blur-[80px]"></div>
      </div>

      <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-surface-dim">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <h1 className="text-3xl font-display font-black text-primary italic tilted cursor-pointer" onClick={() => setActiveTab("Kezdőlap")}>Pinocchio</h1>
            <div className="hidden md:flex items-center gap-8">
              {["Kezdőlap", "Étlap", "Rólunk", "Kapcsolat"].map((item) => (
                <NavItem key={item} name={item} activeTab={activeTab} setActiveTab={setActiveTab} setMenuMode={setMenuMode} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href = "tel:+36307556846"}
              className="hidden lg:block px-6 py-3 bg-primary text-white font-mono font-bold uppercase tracking-widest rounded-full solid-shadow transition-all hover:-translate-y-1 active:translate-y-0 shadow-lg"
            >
              Rendelés Most
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-primary"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-surface border-b border-surface-dim overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-6">
                {["Kezdőlap", "Étlap", "Rólunk", "Kapcsolat"].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setActiveTab(item);
                      if (item === "Étlap") setMenuMode("full");
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-mono text-xl font-black uppercase tracking-widest text-left p-2 transition-colors ${activeTab === item ? "text-primary italic translate-x-2" : "text-on-surface-variant"}`}
                  >
                    {item}
                  </button>
                ))}
                <button 
                  onClick={() => window.location.href = "tel:+36307556846"}
                  className="mt-4 px-8 py-5 bg-primary text-white font-mono font-bold uppercase tracking-[0.2em] rounded-2xl solid-shadow text-center"
                >
                  Rendelés Most
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="flex-grow">
        {activeTab === "Kapcsolat" ? (
          <ContactView />
        ) : activeTab === "Rólunk" ? (
          <AboutView />
        ) : activeTab === "Étlap" ? (
          <MenuView menuMode={menuMode} activeCategory={activeCategory} setMenuMode={setMenuMode} />
        ) : (
          <LandingView setActiveTab={setActiveTab} setActiveCategory={setActiveCategory} setMenuMode={setMenuMode} activeCategory={activeCategory} />
        )}
      </main>


      <section className="py-20 px-4 bg-surface-container border-t border-surface-dim relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-black text-primary mb-8 italic tilted inline-block cursor-pointer" onClick={() => setActiveTab("Kezdőlap")}>Pinocchio</h3>
            <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">
              A hagyományos recept és a modern életérzés találkozása minden egyes szeletben.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-on-surface text-surface rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-mono font-black uppercase tracking-widest mb-8 text-sm">Elérhetőség</h4>
            <ul className="space-y-6">
              <li className="flex gap-4"><MapPin className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">6500 Baja, Tóth Kálmán tér 5.</span></li>
              <li className="flex gap-4"><Phone className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">+36 30 755 6846</span></li>
              <li className="flex gap-4"><Mail className="w-5 h-5 text-primary" /> <span className="text-sm font-medium">info@pinocchiopizza.hu</span></li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="bg-on-surface text-surface py-8 px-4 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono font-bold uppercase tracking-widest opacity-60">
          <p>© 2024 Pinocchio Pizza & Pasta. Minden jog fenntartva.</p>
        </div>
      </footer>
    </div>
  );
}
