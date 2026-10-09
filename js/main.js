(() => {
  const WA_NUMBER = "251911653468";
  const PAGE_SIZE = 6;
  const hasCatalog = !!document.getElementById("productGrid");

  const products = [
    { id: "cable-25", cat: "electrical", brand: "—", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=70", name: { en: "2.5mm copper cable", am: "2.5ሚሜ የመዳብ ኬብል" }, desc: { en: "Insulated coils for house and site wiring", am: "ለቤትና ጣቢያ ሽቦ" } },
    { id: "cable-40", cat: "electrical", brand: "—", img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=800&q=70", name: { en: "4.0mm power cable", am: "4.0ሚሜ የኃይል ኬብል" }, desc: { en: "Heavy runs for panels and machines", am: "ለፓነል እና ማሽን" } },
    { id: "breaker-chint", cat: "electrical", brand: "CHINT", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=70", name: { en: "MCB circuit breakers", am: "የወረዳ ብሬከር" }, desc: { en: "Modular breakers for distribution boards", am: "ለዲስትሪቢሽን ቦርድ" } },
    { id: "switch-legrand", cat: "electrical", brand: "Legrand", img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=70", name: { en: "Switches & sockets", am: "ስዊች እና ሶኬት" }, desc: { en: "Wall modules for homes and offices", am: "ለቤትና ቢሮ" } },
    { id: "drill-hammer", cat: "tools", brand: "—", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=70", name: { en: "Rotary hammer drill", am: "የማሽን ድሪል" }, desc: { en: "Concrete and brick — site duty", am: "ለኮንክሪት እና ጡብ" } },
    { id: "drill-cordless", cat: "tools", brand: "—", img: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=70", name: { en: "Cordless drill driver", am: "ባትሪ ድሪል" }, desc: { en: "Jobsite fastening without cords", am: "ያለ ገመድ" } },
    { id: "saw-circ", cat: "tools", brand: "—", img: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=800&q=70", name: { en: "Circular saw", am: "ክብ መጋዝ" }, desc: { en: "Timber and board cutting", am: "እንጨት እና ቦርድ" } },
    { id: "hat", cat: "safety", brand: "—", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=70", name: { en: "Safety hard hat", am: "የደህንነት ራስ ቁር" }, desc: { en: "Protect the crew on active sites", am: "ለጣቢያ ሰራተኞች" } },
    { id: "vest", cat: "safety", brand: "—", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=70", name: { en: "Hi-vis reflective vest", am: "አንጸባራቂ ጃኬት" }, desc: { en: "High visibility for night and road work", am: "ለምሽትና መንገድ" } },
    { id: "boot", cat: "safety", brand: "—", img: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=70", name: { en: "Leather work boots", am: "የቆዳ የስራ ጫማ" }, desc: { en: "Durable soles for construction floors", am: "ለግንባታ ወለል" } },
    { id: "ext", cat: "safety", brand: "—", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=70", name: { en: "Fire extinguisher", am: "የእሳት አጥፊ" }, desc: { en: "Shop and site fire readiness", am: "ለሱቅና ጣቢያ" } },
    { id: "flood-philips", cat: "lighting", brand: "Philips", img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&w=800&q=70", name: { en: "LED floodlight", am: "LED ፍሉድላይት" }, desc: { en: "Bright coverage for yards and sites", am: "ለግቢና ጣቢያ" } },
    { id: "lamp-osram", cat: "lighting", brand: "OSRAM", img: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=70", name: { en: "OSRAM lamps & tubes", am: "OSRAM መብራቶች" }, desc: { en: "Replacement stock for offices and halls", am: "ለቢሮ እና አዳራሽ" } },
    { id: "weld", cat: "industrial", brand: "—", img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=70", name: { en: "Welding machine", am: "የብየዳ ማሽን" }, desc: { en: "Portable unit for workshop and field", am: "ተንቀሳቃሽ" } },
    { id: "comp", cat: "industrial", brand: "—", img: "https://images.unsplash.com/photo-1581094794329-cdc3510b0b25?auto=format&fit=crop&w=800&q=70", name: { en: "Air compressor", am: "አየር ኮምፕረሰር" }, desc: { en: "Power pneumatic tools on site", am: "ለአየር መሳሪያዎች" } },
    { id: "gen", cat: "industrial", brand: "—", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=70", name: { en: "Portable generator", am: "ተንቀሳቃሽ ጀነሬተር" }, desc: { en: "Backup power for sites and shops", am: "ለጣቢያና ሱቅ" } },
    { id: "level", cat: "construction", brand: "—", img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=70", name: { en: "Spirit level & tape", am: "ደረጃ እና መለኪያ" }, desc: { en: "Layout essentials for every crew", am: "ለጣቢያ ቡድን" } },
    { id: "barrow", cat: "construction", brand: "—", img: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=70", name: { en: "Wheelbarrow", am: "ጋሪ" }, desc: { en: "Move cement, sand, and rubble", am: "ሲሚንቶና አሸዋ" } },
  ];

  const strings = {
    en: {
      brandName: "Kalon",
      logoSub: "Engineering & Trading PLC",
      navHome: "Home",
      navProducts: "Products",
      navBrands: "Brands",
      navAbout: "About Us",
      navContact: "Contact",
      navQuote: "Request a Quote",
      navList: "Request list",
      topAddress: "SengaTera, Worku Abeba Building, 2nd Floor",
      heroKicker: "Your trusted partner in industrial solutions",
      heroTitle: "Quality Engineering &amp; <em>Electrical Supplies</em> for a Stronger Tomorrow",
      heroLead: "We supply high-quality engineering tools, electrical components, safety equipment and industrial solutions — all in one place.",
      ctaProducts: "Explore Products",
      ctaQuote: "Request a Quote",
      val1Title: "Reliable Products",
      val1Desc: "Top brands, genuine products, long-lasting quality.",
      val2Title: "Fast Delivery",
      val2Desc: "Get your orders on time, every time.",
      val3Title: "Expert Support",
      val3Desc: "Professional advice to help you find the right solution.",
      val4Title: "One-Stop Solution",
      val4Desc: "Tools, electrical, safety and industrial supplies — all in one place.",
      prodKicker: "Catalog",
      prodTitle: "Products We Supply",
      prodSub: "Browse categories — open the full list to request stock.",
      cat1Title: "Power Tools",
      cat1Desc: "Drills, saws and jobsite tools",
      cat2Title: "Electrical Supplies",
      cat2Desc: "Breakers, switches and panel parts",
      cat3Title: "Lighting Solutions",
      cat3Desc: "Floodlights, lamps and fixtures",
      cat4Title: "Safety Equipment",
      cat4Desc: "PPE, vests, hats and extinguishers",
      cat5Title: "Cables & Wiring",
      cat5Desc: "Copper cable for house and site",
      cat6Title: "Generators & Equipment",
      cat6Desc: "Power, welding and workshop gear",
      brandsHomeTitle: "Top Brands We Supply",
      footerTag: "Your Partner in Engineering and Electrical Solutions",
      footerLegal: "© {y} Kalon Engineering & Trading PLC · Addis Ababa",
      pageProdTitle: "Products",
      pageProdLead: "Add lines to a request list. We confirm price and availability — no fake checkout.",
      pageBrandsTitle: "Brands",
      pageBrandsLead: "Global names contractors already specify on Ethiopian sites.",
      brandEyebrow: "Partners",
      pageAboutTitle: "About Us",
      pageAboutLead: "One trading desk covering electrical, tools, safety and industrial needs from Sengatera.",
      aboutEyebrow: "Who we are",
      aboutTitle: "Built for Ethiopian sites.",
      pageContactTitle: "Contact",
      pageContactLead: "Call the shop or send a stock request. We confirm price, availability and pickup.",
      contactEyebrow: "Get in touch",
      searchLabel: "Search",
      searchPlaceholder: "Search products or brands…",
      filterAll: "All",
      catElectrical: "Electrical",
      catTools: "Power tools",
      catSafety: "Safety",
      catLight: "Lighting",
      catIndustrial: "Industrial",
      catBuild: "Construction",
      resultCount: "{n} products",
      resultCountFilter: "{n} in {cat}",
      showMore: "View more products",
      catalogEmpty: "No products match your search.",
      addBtn: "Add to list",
      addedBtn: "Added",
      priceAsk: "Ask for price",
      aboutP1: "Kalon Engineering & Trading PLC supplies electrical materials, power tools, safety gear, lighting and industrial equipment to contractors, workshops and project teams in Addis Ababa.",
      aboutP2: "From Sengatera we help you specify trusted brands and confirm stock before you travel — so pickup is faster and fewer trips are wasted.",
      aboutPoint1: "Electrical materials & accessories",
      aboutPoint2: "Power tools & site equipment",
      aboutPoint3: "Safety, lighting & industrial gear",
      brand1Title: "Philips",
      brand1Desc: "Lighting and electrical solutions for sites, halls and offices.",
      brand2Title: "Legrand",
      brand2Desc: "Switches, sockets and wiring devices for homes and buildings.",
      brand3Title: "ABB",
      brand3Desc: "Industrial and electrical components for reliable distribution.",
      brand4Title: "OSRAM",
      brand4Desc: "Lamps and tubes for replacement stock and continuous supply.",
      brand5Title: "CHINT",
      brand5Desc: "Circuit breakers and modular protection for panels.",
      contactPhoneLabel: "Phone",
      contactAddressLabel: "Address",
      address: "SengaTera · Worku Abeba Building · 2nd floor",
      hoursLabel: "Hours",
      hoursValue: "Mon–Sat · 8:30 – 18:00",
      ctaWa: "WhatsApp",
      ctaMap: "Open map",
      formTitle: "Quick stock request",
      formName: "Name",
      formPhone: "Phone",
      formNeed: "What do you need?",
      formNeedPh: "e.g. 200m cable, 10 breakers, 4 hard hats…",
      formSubmit: "Send on WhatsApp",
      formNote: "Opens WhatsApp with your message ready to send.",
      formNoteLabel: "Note",
      formNotePh: "Pickup time…",
      orderTitle: "Request list",
      orderEmpty: "No items yet — add products above.",
      orderLead: "We confirm price & stock. You receive a request ID.",
      orderSubmit: "Send request",
      orderCall: "Call instead",
      confirmIdLabel: "Request ID",
      confirmTitle: "Request ready",
      confirmCopy: "WhatsApp opened with your list. Kalon will confirm price and pickup.",
      confirmDone: "Close",
      confirmAgain: "New list",
      fabLabel: "Request list",
      stickyList: "List",
      stickyWa: "WhatsApp",
      stickyCall: "Call",
      toastAdded: "Added to request list",
      toastCleared: "List cleared",
      langLabel: "አማ",
    },
    am: {
      brandName: "ካሎን",
      logoSub: "ኢንጂነሪንግ እና ትሬዲንግ ኃ.የተ.የግ.ማ",
      navHome: "መነሻ",
      navProducts: "ምርቶች",
      navBrands: "ብራንዶች",
      navAbout: "ስለ እኛ",
      navContact: "ያግኙን",
      navQuote: "ዋጋ ጠይቅ",
      navList: "የጥያቄ ዝርዝር",
      topAddress: "ሰንጋተራ፣ ወርቁ አበባ ሕንፃ፣ 2ኛ ፎቅ",
      heroKicker: "በኢንዱስትሪያል መፍትሄዎች የታመነ አጋርዎ",
      heroTitle: "ጥራት ያለው ኢንጂነሪንግ እና <em>ኤሌክትሪክ አቅርቦት</em> ለጠንካራ ነገ",
      heroLead: "ከፍተኛ ጥራት ያላቸው የኢንጂነሪንግ መሳሪያዎች፣ የኤሌክትሪክ ክፍሎች፣ የደህንነት እቃ እና ኢንዱስትሪያል መፍትሄዎች — በአንድ ቦታ።",
      ctaProducts: "ምርቶችን ይመልከቱ",
      ctaQuote: "ዋጋ ጠይቅ",
      val1Title: "አስተማማኝ ምርቶች",
      val1Desc: "ከፍተኛ ብራንዶች፣ እውነተኛ ምርቶች፣ ዘላቂ ጥራት።",
      val2Title: "ፈጣን አቅርቦት",
      val2Desc: "ትዕዛዞችዎ በሰዓቱ ይደርሳሉ።",
      val3Title: "ባለሙያ ድጋፍ",
      val3Desc: "ትክክለኛውን መፍትሄ ለማግኘት ሙያዊ ምክር።",
      val4Title: "አንድ ቦታ መፍትሄ",
      val4Desc: "መሳሪያ፣ ኤሌክትሪክ፣ ደህንነት እና ኢንዱስትሪያል — በአንድ ቦታ።",
      prodKicker: "ካታሎግ",
      prodTitle: "የምናቀርባቸው ምርቶች",
      prodSub: "ምድቦችን ይመልከቱ — ሙሉ ዝርዝር ለመጠየቅ ይክፈቱ።",
      cat1Title: "የኃይል መሳሪያዎች",
      cat1Desc: "ድሪል፣ መጋዝ እና የጣቢያ መሳሪያ",
      cat2Title: "የኤሌክትሪክ እቃ",
      cat2Desc: "ብሬከር፣ ስዊች እና የፓነል ክፍሎች",
      cat3Title: "የመብራት መፍትሄዎች",
      cat3Desc: "ፍሉድላይት፣ መብራት እና ፊክስቸር",
      cat4Title: "የደህንነት እቃ",
      cat4Desc: "PPE፣ ጃኬት፣ ራስ ቁር እና እሳት አጥፊ",
      cat5Title: "ኬብል እና ሽቦ",
      cat5Desc: "ለቤትና ጣቢያ የመዳብ ኬብል",
      cat6Title: "ጀነሬተር እና እቃ",
      cat6Desc: "ኃይል፣ ብየዳ እና ወርክሾፕ",
      brandsHomeTitle: "የምናቀርባቸው ብራንዶች",
      footerTag: "በኢንጂነሪንግ እና ኤሌክትሪክ መፍትሄዎች አጋርዎ",
      footerLegal: "© {y} ካሎን ኢንጂነሪንግ እና ትሬዲንግ · አዲስ አበባ",
      pageProdTitle: "ምርቶች",
      pageProdLead: "ወደ የጥያቄ ዝርዝር ይጨምሩ። ዋጋ እና መገኘት እናረጋግጣለን።",
      pageBrandsTitle: "ብራንዶች",
      pageBrandsLead: "ኮንትራክተሮች በኢትዮጵያ ጣቢያዎች የሚጠቀሙባቸው።",
      brandEyebrow: "አጋሮች",
      pageAboutTitle: "ስለ እኛ",
      pageAboutLead: "ከሰንጋተራ የኤሌክትሪክ፣ መሳሪያ፣ ደህንነት እና ኢንዱስትሪያል ፍላጎቶች።",
      aboutEyebrow: "ማን ነን",
      aboutTitle: "ለኢትዮጵያ ጣቢያዎች የተሰራ።",
      pageContactTitle: "ያግኙን",
      pageContactLead: "ይደውሉ ወይም የእቃ ጥያቄ ይላኩ። ዋጋ፣ መገኘት እና ማንሳት እናረጋግጣለን።",
      contactEyebrow: "ያግኙን",
      searchLabel: "ፈልግ",
      searchPlaceholder: "ምርት ወይም ብራንድ ይፈልጉ…",
      filterAll: "ሁሉም",
      catElectrical: "ኤሌክትሪክ",
      catTools: "መሳሪያዎች",
      catSafety: "ደህንነት",
      catLight: "መብራት",
      catIndustrial: "ኢንዱስትሪያል",
      catBuild: "ግንባታ",
      resultCount: "{n} ምርቶች",
      resultCountFilter: "{n} በ{cat}",
      showMore: "ተጨማሪ ምርቶች",
      catalogEmpty: "ምንም አልተገኘም።",
      addBtn: "ወደ ዝርዝር ጨምር",
      addedBtn: "ተጨምሯል",
      priceAsk: "ዋጋ ይጠይቁ",
      aboutP1: "ካሎን ኢንጂነሪንግ እና ትሬዲንግ ኃ.የተ.የግ.ማ ለኮንትራክተሮች፣ ወርክሾፖች እና ፕሮጀክት ቡድኖች የኤሌክትሪክ ቁሳቁስ፣ መሳሪያ፣ ደህንነት፣ መብራት እና ኢንዱስትሪያል እቃ ያቀርባል።",
      aboutP2: "ከሰንጋተራ ታማኝ ብራንዶችን ለመምረጥ እና ከመጓዝዎ በፊት እቃን ለማረጋገጥ እንረዳለን።",
      aboutPoint1: "የኤሌክትሪክ ቁሳቁሶች",
      aboutPoint2: "የኃይል መሳሪያዎች",
      aboutPoint3: "ደህንነት፣ መብራት እና ኢንዱስትሪያል",
      brand1Title: "Philips",
      brand1Desc: "ለጣቢያ፣ አዳራሽ እና ቢሮ የመብራት መፍትሄዎች።",
      brand2Title: "Legrand",
      brand2Desc: "ስዊች፣ ሶኬት እና የሽቦ መሳሪያዎች።",
      brand3Title: "ABB",
      brand3Desc: "ለአስተማማኝ ዲስትሪቢሽን የኢንዱስትሪ ክፍሎች።",
      brand4Title: "OSRAM",
      brand4Desc: "መብራቶች እና ቱቦዎች ለቀጣይ አቅርቦት።",
      brand5Title: "CHINT",
      brand5Desc: "የወረዳ ብሬከሮች እና የፓነል ጥበቃ።",
      contactPhoneLabel: "ስልክ",
      contactAddressLabel: "አድራሻ",
      address: "ሰንጋተራ · ወርቁ አበባ ሕንፃ · 2ኛ ፎቅ",
      hoursLabel: "ሰዓት",
      hoursValue: "ሰኞ–ቅዳሜ · 8:30 – 18:00",
      ctaWa: "ዋትስአፕ",
      ctaMap: "ካርታ ክፈት",
      formTitle: "ፈጣን የእቃ ጥያቄ",
      formName: "ስም",
      formPhone: "ስልክ",
      formNeed: "ምን ይፈልጋሉ?",
      formNeedPh: "ለምሳሌ 200ሜ ኬብል፣ 10 ብሬከር…",
      formSubmit: "በዋትስአፕ ላክ",
      formNote: "መልእክትዎ ዝግጁ ሆኖ ዋትስአፕ ይከፈታል።",
      formNoteLabel: "ማስታወሻ",
      formNotePh: "የማንሳት ሰዓት…",
      orderTitle: "የጥያቄ ዝርዝር",
      orderEmpty: "እስካሁን ምንም የለም።",
      orderLead: "ዋጋና እቃ እናረጋግጣለን። የጥያቄ መለያ ያገኛሉ።",
      orderSubmit: "ጥያቄ ላክ",
      orderCall: "ይልቁን ይደውሉ",
      confirmIdLabel: "የጥያቄ መለያ",
      confirmTitle: "ጥያቄ ዝግጁ ነው",
      confirmCopy: "ዝርዝርዎ በዋትስአፕ ተከፍቷል።",
      confirmDone: "ዝጋ",
      confirmAgain: "አዲስ ዝርዝር",
      fabLabel: "የጥያቄ ዝርዝር",
      stickyList: "ዝርዝር",
      stickyWa: "ዋትስአፕ",
      stickyCall: "ደውል",
      toastAdded: "ወደ ዝርዝር ተጨምሯል",
      toastCleared: "ዝርዝር ተጽፏል",
      langLabel: "EN",
    },
  };

  let lang = localStorage.getItem("kalon-lang") || "en";
  let filter = "all";
  let query = "";
  let visibleCount = PAGE_SIZE;
  let cart = JSON.parse(localStorage.getItem("kalon-cart") || "{}");

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function t(key, vars = {}) {
    let s = strings[lang][key] ?? strings.en[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => { s = s.replace(`{${k}}`, v); });
    return s;
  }

  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = t(key, { y: new Date().getFullYear() });
      if (val.includes("<")) el.innerHTML = val;
      else el.textContent = val;
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    const langLabel = $("[data-lang-label]");
    if (langLabel) langLabel.textContent = t("langLabel");
    localStorage.setItem("kalon-lang", lang);
    if (hasCatalog) {
      renderProducts();
      renderCart();
    } else {
      updateBadges();
    }
  }

  function catLabel(id) {
    const map = {
      all: "filterAll", electrical: "catElectrical", tools: "catTools",
      safety: "catSafety", lighting: "catLight", industrial: "catIndustrial",
      construction: "catBuild",
    };
    return t(map[id] || "filterAll");
  }

  function filtered() {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      if (filter !== "all" && p.cat !== filter) return false;
      if (!q) return true;
      const hay = `${p.name.en} ${p.name.am} ${p.desc.en} ${p.desc.am} ${p.brand} ${p.cat}`.toLowerCase();
      return hay.includes(q);
    });
  }

  function renderProducts() {
    const list = filtered();
    const grid = $("#productGrid");
    const wrap = $("#productWrap");
    const empty = $("#catalogEmpty");
    const more = $("#catalogMore");
    const countEl = $("#resultCount");
    if (!grid) return;

    if (filter === "all") countEl.textContent = t("resultCount", { n: list.length });
    else countEl.textContent = t("resultCountFilter", { n: list.length, cat: catLabel(filter) });

    if (!list.length) {
      grid.innerHTML = "";
      empty.hidden = false;
      more.hidden = true;
      wrap?.classList.remove("is-collapsed");
      return;
    }
    empty.hidden = true;
    const shown = list.slice(0, visibleCount);
    const hasMore = list.length > visibleCount;
    more.hidden = !hasMore;
    wrap?.classList.toggle("is-collapsed", hasMore && visibleCount <= PAGE_SIZE);

    grid.innerHTML = shown.map((p) => {
      const inCart = !!cart[p.id];
      return `
        <article class="product" data-id="${p.id}">
          <div class="product-media" style="background-image:url('${p.img}')">
            ${p.brand !== "—" ? `<span class="product-brand-tag">${p.brand}</span>` : ""}
          </div>
          <div class="product-body">
            <span class="product-cat">${catLabel(p.cat)}</span>
            <h3>${p.name[lang]}</h3>
            <p class="product-desc">${p.desc[lang]}</p>
            <div class="product-foot">
              <span class="product-price">${t("priceAsk")}</span>
              <button type="button" class="product-add${inCart ? " is-added" : ""}" data-add="${p.id}">
                ${inCart ? t("addedBtn") : t("addBtn")}
              </button>
            </div>
          </div>
        </article>`;
    }).join("");
  }

  function saveCart() { localStorage.setItem("kalon-cart", JSON.stringify(cart)); }
  function cartCount() { return Object.values(cart).reduce((n, q) => n + q, 0); }

  function updateBadges() {
    const n = cartCount();
    ["cartBadge", "fabBadge"].forEach((id) => {
      const el = $(`#${id}`);
      if (!el) return;
      el.textContent = String(n);
      el.hidden = n === 0;
    });
    const sticky = $("#stickyCount");
    if (sticky) sticky.textContent = n ? `(${n})` : "";
  }

  function renderCart() {
    const lines = $("#orderLines");
    const empty = $("#orderEmpty");
    const form = $("#orderForm");
    if (!lines) { updateBadges(); return; }
    const ids = Object.keys(cart);
    if (!ids.length) {
      lines.innerHTML = "";
      empty.hidden = false;
      if (form) form.hidden = true;
      updateBadges();
      return;
    }
    empty.hidden = true;
    if (form) form.hidden = false;
    lines.innerHTML = ids.map((id) => {
      const p = products.find((x) => x.id === id);
      if (!p) return "";
      return `
        <li class="order-line" data-line="${id}">
          <span class="order-line-name">${p.name[lang]}</span>
          <span class="order-line-meta">${p.brand !== "—" ? p.brand + " · " : ""}${catLabel(p.cat)}</span>
          <div class="qty-controls">
            <button type="button" data-qty="-1" data-id="${id}">−</button>
            <span>${cart[id]}</span>
            <button type="button" data-qty="1" data-id="${id}">+</button>
          </div>
        </li>`;
    }).join("");
    updateBadges();
  }

  function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderCart();
    renderProducts();
    showToast(t("toastAdded"));
  }

  function changeQty(id, delta) {
    const next = (cart[id] || 0) + delta;
    if (next <= 0) delete cart[id];
    else cart[id] = next;
    saveCart();
    renderCart();
    renderProducts();
  }

  function clearCart() {
    cart = {};
    saveCart();
    renderCart();
    renderProducts();
  }

  function requestId() {
    return `K-${Math.floor(1000 + Math.random() * 9000)}`;
  }

  function openDrawer() {
    const drawer = $("#orderDrawer");
    const backdrop = $("#drawerBackdrop");
    if (!drawer) {
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    drawer.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.hidden = false;
    document.body.classList.add("drawer-open");
    const panel = $("#confirmPanel");
    const body = $("#drawerBody");
    if (panel) panel.hidden = true;
    if (body) body.hidden = false;
  }

  function setFilter(next) {
    filter = next || "all";
    visibleCount = PAGE_SIZE;
    $$("#filterRow .filter").forEach((b) => b.classList.toggle("is-active", b.dataset.filter === filter));
    renderProducts();
  }

  function closeDrawer() {
    const drawer = $("#orderDrawer");
    const backdrop = $("#drawerBackdrop");
    if (!drawer) return;
    drawer.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.hidden = true;
    document.body.classList.remove("drawer-open");
  }

  function showToast(msg) {
    const el = $("#toast");
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add("is-show"));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      el.classList.remove("is-show");
      setTimeout(() => { el.hidden = true; }, 250);
    }, 1800);
  }

  function buildWaList(extra = "") {
    const lines = Object.keys(cart).map((id) => {
      const p = products.find((x) => x.id === id);
      return `• ${p.name[lang]} × ${cart[id]}`;
    });
    return [
      lang === "am" ? "ሰላም ካሎን — የእቃ ጥያቄ፡" : "Hello Kalon — stock request:",
      "",
      ...lines,
      extra ? `\n${extra}` : "",
    ].filter(Boolean).join("\n");
  }

  const params = new URLSearchParams(location.search);
  if (params.get("cat")) filter = params.get("cat");

  $("#langToggle")?.addEventListener("click", () => {
    lang = lang === "en" ? "am" : "en";
    applyI18n();
  });

  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  menuBtn?.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    mobileNav.hidden = open;
    document.body.classList.toggle("menu-open", !open);
  });
  mobileNav?.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      menuBtn.setAttribute("aria-expanded", "false");
      mobileNav.hidden = true;
      document.body.classList.remove("menu-open");
    }
  });

  // Scroll-spy active nav
  const sections = [
    { id: "top", nav: "home" },
    { id: "products", nav: "products" },
    { id: "brands", nav: "brands" },
    { id: "about", nav: "about" },
    { id: "contact", nav: "contact" },
  ];
  function updateActiveNav() {
    const y = window.scrollY + 120;
    let current = "home";
    sections.forEach(({ id, nav }) => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) current = nav;
    });
    $$("[data-nav]").forEach((a) => a.classList.toggle("is-active", a.dataset.nav === current));
  }
  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // Category cards jump + filter
  $$("[data-jump-cat]").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      setFilter(a.dataset.jumpCat);
      document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
    });
  });

  if (hasCatalog) {
    $$("#filterRow .filter").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.filter === filter);
    });

    $("#filterRow")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-filter]");
      if (!btn) return;
      setFilter(btn.dataset.filter);
    });

    $("#productSearch")?.addEventListener("input", (e) => {
      query = e.target.value;
      visibleCount = PAGE_SIZE;
      renderProducts();
    });

    $("#showMoreBtn")?.addEventListener("click", () => {
      visibleCount += PAGE_SIZE;
      renderProducts();
    });

    $("#productGrid")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-add]");
      if (btn) addToCart(btn.dataset.add);
    });

    $("#orderLines")?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-qty]");
      if (btn) changeQty(btn.dataset.id, Number(btn.dataset.qty));
    });

    ["cartOpen", "fab", "stickyOrder"].forEach((id) => {
      $(`#${id}`)?.addEventListener("click", openDrawer);
    });
    $("#cartClose")?.addEventListener("click", closeDrawer);
    $("#drawerBackdrop")?.addEventListener("click", closeDrawer);
    $("#confirmClose")?.addEventListener("click", closeDrawer);
    $("#confirmAgain")?.addEventListener("click", () => {
      clearCart();
      showToast(t("toastCleared"));
      $("#confirmPanel").hidden = true;
      $("#drawerBody").hidden = false;
    });
    $("#orderCall")?.addEventListener("click", () => {
      window.location.href = "tel:+251911653468";
    });

    $("#orderForm")?.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!cartCount()) return;
      const fd = new FormData(e.target);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const note = String(fd.get("note") || "").trim();
      if (!name || !phone) return;
      const id = requestId();
      const body = [
        buildWaList(note ? (lang === "am" ? `ማስታወሻ: ${note}` : `Note: ${note}`) : ""),
        "",
        lang === "am" ? `ስም: ${name}` : `Name: ${name}`,
        lang === "am" ? `ስልክ: ${phone}` : `Phone: ${phone}`,
        lang === "am" ? `የጥያቄ መለያ: ${id}` : `Request ID: ${id}`,
      ].join("\n");
      window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
      $("#confirmId").textContent = id;
      $("#drawerBody").hidden = true;
      $("#confirmPanel").hidden = false;
    });
  }

  $("#quoteForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const need = String(fd.get("need") || "").trim();
    if (!name || !phone || !need) return;
    const id = requestId();
    const body = [
      lang === "am" ? "ሰላም ካሎን — የእቃ ጥያቄ፡" : "Hello Kalon — stock request:",
      "", need, "",
      lang === "am" ? `ስም: ${name}` : `Name: ${name}`,
      lang === "am" ? `ስልክ: ${phone}` : `Phone: ${phone}`,
      lang === "am" ? `የጥያቄ መለያ: ${id}` : `Request ID: ${id}`,
    ].join("\n");
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(body)}`, "_blank", "noopener");
    e.target.reset();
    showToast(lang === "am" ? `ጥያቄ ${id}` : `Request ${id}`);
  });

  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  applyI18n();
})();
