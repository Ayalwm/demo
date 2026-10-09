(() => {
  const WA_NUMBER = "251911653468";

  const products = [
    { id: "cable-25", cat: "electrical", visual: "v-cable", brand: "—", specs: { en: ["2.5mm copper", "Multi-color coils", "House & site wiring"], am: ["2.5ሚሜ መዳብ", "ባለብዙ ቀለም", "ለቤትና ጣቢያ"] }, name: { en: "2.5mm copper cable", am: "2.5ሚሜ የመዳብ ኬብል" }, desc: { en: "Insulated wire coils for reliable runs", am: "ለአስተማማኝ ሽቦ ስራ" } },
    { id: "cable-40", cat: "electrical", visual: "v-cable", brand: "—", specs: { en: ["4.0mm", "Heavy duty", "Panels & machines"], am: ["4.0ሚሜ", "ከባድ ስራ", "ፓነልና ማሽን"] }, name: { en: "4.0mm power cable", am: "4.0ሚሜ የኃይል ኬብል" }, desc: { en: "For panels and machine feeds", am: "ለፓነል እና ማሽን" } },
    { id: "breaker-chint", cat: "electrical", visual: "v-breaker", brand: "CHINT", specs: { en: ["MCB modules", "Distribution ready", "CHINT stock"], am: ["MCB", "ለዲስትሪቢሽን", "CHINT"] }, name: { en: "Circuit breaker set", am: "የወረዳ ብሬከር" }, desc: { en: "Modular breakers for boards", am: "ለቦርድ ሞጁሎች" } },
    { id: "switch-legrand", cat: "electrical", visual: "v-breaker", brand: "Legrand", specs: { en: ["Switches", "Sockets", "Legrand"], am: ["ስዊች", "ሶኬት", "Legrand"] }, name: { en: "Switches & sockets", am: "ስዊች እና ሶኬት" }, desc: { en: "Wall modules contractors specify", am: "ተቋራጮች የሚጠይቁት" } },
    { id: "drill-hammer", cat: "tools", visual: "v-drill", brand: "—", specs: { en: ["Rotary hammer", "Concrete & brick", "Site duty"], am: ["ማሽን ድሪል", "ኮንክሪት", "ጣቢያ"] }, name: { en: "Heavy duty drill", am: "ከባድ ድሪል" }, desc: { en: "Rotary hammer for hard materials", am: "ለጠንካራ ቁሳቁስ" } },
    { id: "drill-cordless", cat: "tools", visual: "v-drill", brand: "—", specs: { en: ["Cordless", "Driver kit", "Jobsite"], am: ["ባትሪ", "ድራይቨር", "ጣቢያ"] }, name: { en: "Cordless drill driver", am: "ባትሪ ድሪል" }, desc: { en: "Fasten without the cord tangle", am: "ያለ ገመድ" } },
    { id: "saw-circ", cat: "tools", visual: "v-saw", brand: "—", specs: { en: ["Circular saw", "Timber & board", "Clean cuts"], am: ["ክብ መጋዝ", "እንጨት", "ንፁህ ቁረጥ"] }, name: { en: "Circular saw", am: "ክብ መጋዝ" }, desc: { en: "Board and timber cutting", am: "ቦርድና እንጨት" } },
    { id: "hat", cat: "safety", visual: "v-hat", brand: "—", specs: { en: ["Hard hat", "Site yellow", "Crew protection"], am: ["ራስ ቁር", "ቢጫ", "ደህንነት"] }, name: { en: "Safety hard hat", am: "የደህንነት ራስ ቁር" }, desc: { en: "Helmet for every active site", am: "ለእያንዳንዱ ጣቢያ" } },
    { id: "vest", cat: "safety", visual: "v-vest", brand: "—", specs: { en: ["Hi-vis", "Reflective", "Orange"], am: ["ብርሃን", "አንጸባራቂ", "ብርቱካናማ"] }, name: { en: "Hi-vis reflective vest", am: "አንጸባራቂ ጃኬት" }, desc: { en: "Be seen on night and road work", am: "በምሽት ስራ ይታዩ" } },
    { id: "boot", cat: "safety", visual: "v-boot", brand: "—", specs: { en: ["Leather", "Work boot", "Durable sole"], am: ["ቆዳ", "የስራ ጫማ", "ጠንካራ"] }, name: { en: "Leather work boots", am: "የቆዳ የስራ ጫማ" }, desc: { en: "Built for construction floors", am: "ለግንባታ ወለል" } },
    { id: "ext", cat: "safety", visual: "v-ext", brand: "—", specs: { en: ["Fire class", "Shop & site", "Ready mount"], am: ["እሳት", "ሱቅና ጣቢያ", "ዝግጁ"] }, name: { en: "Fire extinguisher", am: "የእሳት አጥፊ" }, desc: { en: "Essential for shop compliance", am: "ለሱቅ አስፈላጊ" } },
    { id: "flood-philips", cat: "lighting", visual: "v-light", brand: "Philips", specs: { en: ["LED flood", "Outdoor ready", "Philips"], am: ["LED ፍሉድ", "ውጭ", "Philips"] }, name: { en: "LED floodlight", am: "LED ፍሉድላይት" }, desc: { en: "Bright coverage for yards & sites", am: "ለግቢና ጣቢያ" } },
    { id: "lamp-osram", cat: "lighting", visual: "v-light", brand: "OSRAM", specs: { en: ["Lamps & tubes", "Office / hall", "OSRAM"], am: ["መብራት", "ቢሮ", "OSRAM"] }, name: { en: "OSRAM lamps & tubes", am: "OSRAM መብራቶች" }, desc: { en: "Replacement stock that lasts", am: "ረጅም ጊዜ የሚቆይ" } },
    { id: "weld", cat: "industrial", visual: "v-weld", brand: "—", specs: { en: ["Portable", "Workshop / field", "Welder"], am: ["ተንቀሳቃሽ", "ወርክሾፕ", "ብየዳ"] }, name: { en: "Welding machine", am: "የብየዳ ማሽን" }, desc: { en: "Field and workshop welding", am: "መስክና ወርክሾፕ" } },
    { id: "comp", cat: "industrial", visual: "v-comp", brand: "—", specs: { en: ["Air compressor", "Tools & spray", "Orange unit"], am: ["ኮምፕረሰር", "መሳሪያ", "ስፕሬይ"] }, name: { en: "Air compressor", am: "አየር ኮምፕረሰር" }, desc: { en: "Power pneumatic tools on site", am: "ለአየር መሳሪያዎች" } },
    { id: "fan", cat: "industrial", visual: "v-fan", brand: "—", specs: { en: ["Ventilation", "Square body", "Exhaust / cool"], am: ["አየር ማስወጫ", "ካሬ", "ማቀዝቀዝ"] }, name: { en: "Industrial fan", am: "የኢንዱስትሪ ፋን" }, desc: { en: "Move air in hot workshops", am: "በሞቃት ወርክሾፕ" } },
    { id: "level", cat: "construction", visual: "v-breaker", brand: "—", specs: { en: ["Spirit level", "Tape measure", "Layout kit"], am: ["ደረጃ", "መለኪያ", "አቀማመጥ"] }, name: { en: "Level & tape kit", am: "ደረጃ እና መለኪያ" }, desc: { en: "Everyday layout essentials", am: "የዕለት ተዕለት" } },
    { id: "barrow", cat: "construction", visual: "v-comp", brand: "—", specs: { en: ["Wheelbarrow", "Cement / sand", "Site haul"], am: ["ጋሪ", "ሲሚንቶ", "ጣቢያ"] }, name: { en: "Wheelbarrow", am: "ጋሪ" }, desc: { en: "Move materials without delay", am: "ቁሳቁስ በፍጥነት" } },
  ];

  const strings = {
    en: {
      brandName: "Kalon",
      logoSub: "Engineering & Trading",
      navCatalog: "Catalog",
      navHow: "How it works",
      navBrands: "Brands",
      navVisit: "Find us",
      navList: "My list",
      navCall: "Call shop",
      heroEyebrow: "Sengatera · Addis Ababa",
      heroTag: "Your industrial & electrical partner",
      heroLine: "Build a stock list in seconds. We confirm price & availability — then you pick up at the shop.",
      ctaShop: "Browse catalog",
      ctaList: "Open my list",
      howKicker: "Simple flow",
      howTitle: "From catalog to confirmation",
      howSub: "No fake checkout. You request stock — Kalon confirms. Clear for both sides.",
      how1Title: "Pick what you need",
      how1Desc: "Filter cables, tools, safety, lighting, industrial — add to your list.",
      how2Title: "Send the request",
      how2Desc: "Name, phone, optional note. One tap opens WhatsApp to the shop.",
      how3Title: "Get confirmation",
      how3Desc: "You get a request ID. Kalon replies with price, stock, and pickup.",
      catalogKicker: "Stock board",
      catalogTitle: "Product catalog",
      catalogSub: "Sample lines from what Kalon carries — add to your list, then request confirmation.",
      searchLabel: "Search",
      searchPlaceholder: "Search ABB, cable, drill…",
      filterAll: "All",
      catElectrical: "Electrical",
      catTools: "Power tools",
      catSafety: "Safety",
      catLight: "Lighting",
      catIndustrial: "Industrial",
      catBuild: "Construction",
      catalogEmpty: "Nothing matches — try another search.",
      addBtn: "Add to list",
      addedBtn: "On list",
      priceAsk: "Price on confirm",
      brandsKicker: "Trusted names",
      brandsTitle: "Brands on the shelf",
      brandsSub: "Specify them on drawings — we stock the lines contractors already trust.",
      visitKicker: "Walk-in ready",
      visitTitle: "Find Kalon",
      visitSub: "Worku Abeba Building, Sengatera — 2nd floor. Bring your list or send it ahead on WhatsApp.",
      address: "Sengatera · Worku Abeba Building · 2nd floor",
      hoursLabel: "Hours",
      hoursValue: "Mon–Sat · 8:30 – 18:00 · Large lists: send ahead",
      phoneLabel: "Line",
      ctaWa: "WhatsApp shop",
      ctaMap: "Maps",
      panelPlace: "Sengatera",
      panelFloor: "2nd floor",
      panelNote: "Cables · breakers · tools · safety · lighting — ask for Kalon Engineering & Trading.",
      footerLegal: "Engineering & Trading PLC",
      footerMeta: '© <span id="year"></span> · Addis Ababa, Ethiopia',
      fabLabel: "My list",
      stickyList: "My list",
      stickyWa: "WhatsApp",
      stickyCall: "Call",
      orderKicker: "Stock request",
      orderTitle: "Your list",
      orderEmpty: "List is empty — add items from the catalog.",
      orderLead: "We’ll confirm price & stock. You get a request ID.",
      formName: "Your name",
      formNamePh: "Name / company",
      formPhone: "Phone",
      formNote: "Note",
      formNotePh: "Pickup time, site name…",
      orderSubmit: "Send request",
      orderCall: "Or call to confirm",
      confirmTitle: "Request sent",
      confirmIdLabel: "Your request ID",
      confirmCopy: "WhatsApp opened with your list. Kalon will reply with price, availability, and pickup.",
      confirmDone: "Done",
      confirmAgain: "Build another list",
      toastAdded: "Added to your list",
      toastEmpty: "Add at least one item first",
      langLabel: "አማ",
      tickItems: ["Philips", "Legrand", "ABB", "OSRAM", "CHINT", "Cables", "Power tools", "Safety", "Lighting", "Industrial"],
    },
    am: {
      brandName: "ካሎን",
      logoSub: "ኢንጅነሪንግ እና ትሬዲንግ",
      navCatalog: "ካታሎግ",
      navHow: "እንዴት ነው",
      navBrands: "ብራንዶች",
      navVisit: "ያግኙን",
      navList: "ዝርዝሬ",
      navCall: "ወደ ሱቁ ይደውሉ",
      heroEyebrow: "ሠንጋ ተራ · አዲስ አበባ",
      heroTag: "የኢንዱስትሪ እና ኤሌክትሪክ አጋርዎ",
      heroLine: "የእቃ ዝርዝር በሰከንዶች ይስሩ። ዋጋና መኖር እናረጋግጣለን — ከዚያ ከሱቁ ይውሰዱ።",
      ctaShop: "ካታሎግ ይመልከቱ",
      ctaList: "ዝርዝሬን ክፈት",
      howKicker: "ቀላል ፍሰት",
      howTitle: "ከካታሎግ እስከ ማረጋገጫ",
      howSub: "ሀሰተኛ ክፍያ የለም። እቃ ይጠይቃሉ — ካሎን ያረጋግጣል።",
      how1Title: "የሚፈልጉትን ይምረጡ",
      how1Desc: "ኬብል፣ መሳሪያ፣ ደህንነት፣ መብራት — ወደ ዝርዝር ያክሉ።",
      how2Title: "ጥያቄውን ይላኩ",
      how2Desc: "ስም፣ ስልክ፣ ማስታወሻ። አንድ ጠቅታ WhatsApp ይከፍታል።",
      how3Title: "ማረጋገጫ ያግኙ",
      how3Desc: "የጥያቄ መታወቂያ ያገኛሉ። ካሎን ዋጋና መውሰጃ ይመልሳል።",
      catalogKicker: "የእቃ ሰሌዳ",
      catalogTitle: "የምርት ካታሎግ",
      catalogSub: "ካሎን ከሚይዘው ናሙና — ወደ ዝርዝር ያክሉ፣ ማረጋገጫ ይጠይቁ።",
      searchLabel: "ፈልግ",
      searchPlaceholder: "ABB፣ ኬብል፣ ድሪል…",
      filterAll: "ሁሉም",
      catElectrical: "ኤሌክትሪክ",
      catTools: "መሳሪያዎች",
      catSafety: "ደህንነት",
      catLight: "መብራት",
      catIndustrial: "ኢንዱስትሪያል",
      catBuild: "ግንባታ",
      catalogEmpty: "አልተገኘም — ሌላ ይፈልጉ።",
      addBtn: "ወደ ዝርዝር",
      addedBtn: "አለ",
      priceAsk: "ዋጋ በማረጋገጫ",
      brandsKicker: "ታማኝ ስሞች",
      brandsTitle: "በመደርደሪያ ላይ ያሉ ብራንዶች",
      brandsSub: "በስዕል ላይ ይግለጹ — ተቋራጮች የሚያምኗቸውን እናከማቻለን።",
      visitKicker: "ይምጡ",
      visitTitle: "ካሎንን ያግኙ",
      visitSub: "ወርቅ አበባ ህንፃ፣ ሠንጋ ተራ — 2ኛ ፎቅ። ዝርዝርዎን አስቀድመው በWhatsApp ይላኩ።",
      address: "ሠንጋ ተራ · ወርቅ አበባ ህንፃ · 2ኛ ፎቅ",
      hoursLabel: "ሰዓት",
      hoursValue: "ሰኞ–ቅዳሜ · 8:30 – 18:00 · ትልቅ ዝርዝር አስቀድመው ይላኩ",
      phoneLabel: "መስመር",
      ctaWa: "WhatsApp",
      ctaMap: "ካርታ",
      panelPlace: "ሠንጋ ተራ",
      panelFloor: "2ኛ ፎቅ",
      panelNote: "ኬብል · ብሬከር · መሳሪያ · ደህንነት · መብራት — ካሎን ይጠይቁ።",
      footerLegal: "ኢንጅነሪንግ እና ትሬዲንግ ሃላፊነቱ የተወሰነ የግል ማህበር",
      footerMeta: '© <span id="year"></span> · አዲስ አበባ፣ ኢትዮጵያ',
      fabLabel: "ዝርዝሬ",
      stickyList: "ዝርዝሬ",
      stickyWa: "WhatsApp",
      stickyCall: "ይደውሉ",
      orderKicker: "የእቃ ጥያቄ",
      orderTitle: "ዝርዝርዎ",
      orderEmpty: "ዝርዝር ባዶ ነው — ከካታሎግ ያክሉ።",
      orderLead: "ዋጋና መኖር እናረጋግጣለን። የጥያቄ መታወቂያ ያገኛሉ።",
      formName: "ስምዎ",
      formNamePh: "ስም / ኩባንያ",
      formPhone: "ስልክ",
      formNote: "ማስታወሻ",
      formNotePh: "የመውሰጃ ሰዓት…",
      orderSubmit: "ጥያቄ ላክ",
      orderCall: "ወይም ይደውሉ",
      confirmTitle: "ጥያቄ ተልኳል",
      confirmIdLabel: "የጥያቄ መታወቂያ",
      confirmCopy: "ዝርዝርዎ በWhatsApp ተከፍቷል። ካሎን ዋጋና መውሰጃ ይመልሳል።",
      confirmDone: "ተጠናቋል",
      confirmAgain: "ሌላ ዝርዝር",
      toastAdded: "ወደ ዝርዝር ታክሏል",
      toastEmpty: "መጀመሪያ ቢያንስ አንድ ያክሉ",
      langLabel: "EN",
      tickItems: ["Philips", "Legrand", "ABB", "OSRAM", "CHINT", "ኬብል", "መሳሪያ", "ደህንነት", "መብራት", "ኢንዱስትሪያል"],
    },
  };

  let lang = localStorage.getItem("kalon-lang") || "en";
  let filter = "all";
  let query = "";
  /** @type {Record<string, number>} */
  let cart = JSON.parse(localStorage.getItem("kalon-cart") || "{}");

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const t = (key) => strings[lang][key] ?? key;

  const catLabel = (cat) => {
    const map = {
      electrical: "catElectrical",
      tools: "catTools",
      safety: "catSafety",
      lighting: "catLight",
      industrial: "catIndustrial",
      construction: "catBuild",
    };
    return t(map[cat] || cat);
  };

  const applyLang = () => {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (strings[lang][key] != null) el.innerHTML = strings[lang][key];
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (strings[lang][key] != null) el.setAttribute("placeholder", strings[lang][key]);
    });
    const label = $("[data-lang-label]");
    if (label) label.textContent = t("langLabel");
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());
    localStorage.setItem("kalon-lang", lang);
    renderTicker();
    renderProducts();
    renderCart();
  };

  const renderTicker = () => {
    const track = $("#tickerTrack");
    if (!track) return;
    const items = strings[lang].tickItems || [];
    const doubled = [...items, ...items];
    track.innerHTML = doubled.map((s) => `<span>${s}</span>`).join("");
  };

  const saveCart = () => {
    localStorage.setItem("kalon-cart", JSON.stringify(cart));
    updateBadges();
  };

  const cartCount = () => Object.values(cart).reduce((a, b) => a + b, 0);

  const updateBadges = () => {
    const n = cartCount();
    ["#cartBadge", "#fabBadge"].forEach((sel) => {
      const el = $(sel);
      if (!el) return;
      el.hidden = n === 0;
      el.textContent = String(n);
    });
    const sticky = $("#stickyCount");
    if (sticky) sticky.textContent = n ? `(${n})` : "";
  };

  const showToast = (msg) => {
    const toast = $("#toast");
    if (!toast) return;
    toast.textContent = msg;
    toast.hidden = false;
    requestAnimationFrame(() => toast.classList.add("is-show"));
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => {
      toast.classList.remove("is-show");
      setTimeout(() => { toast.hidden = true; }, 280);
    }, 2000);
  };

  const filteredProducts = () =>
    products.filter((p) => {
      if (filter !== "all" && p.cat !== filter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      const blob = `${p.name.en} ${p.name.am} ${p.desc.en} ${p.brand} ${p.cat}`.toLowerCase();
      return blob.includes(q);
    });

  const renderProducts = () => {
    const grid = $("#productGrid");
    const empty = $("#catalogEmpty");
    if (!grid) return;
    const list = filteredProducts();
    empty.hidden = list.length > 0;
    grid.innerHTML = list
      .map((p, i) => {
        const inCart = cart[p.id] > 0;
        const specs = (p.specs[lang] || p.specs.en).map((s) => `<li>${s}</li>`).join("");
        return `
        <article class="product" style="animation-delay:${i * 35}ms">
          <div class="product-visual ${p.visual}" aria-hidden="true"></div>
          <div class="product-meta">
            <span class="product-cat">${catLabel(p.cat)}</span>
            ${p.brand !== "—" ? `<span class="product-brand">${p.brand}</span>` : ""}
          </div>
          <h3>${p.name[lang]}</h3>
          <ul class="product-specs">${specs}</ul>
          <div class="product-foot">
            <span class="product-price">${t("priceAsk")}</span>
            <button type="button" class="product-add ${inCart ? "is-added" : ""}" data-add="${p.id}">
              ${inCart ? t("addedBtn") : t("addBtn")}
            </button>
          </div>
        </article>`;
      })
      .join("");
  };

  const renderCart = () => {
    const lines = $("#orderLines");
    const empty = $("#orderEmpty");
    const form = $("#orderForm");
    if (!lines) return;
    const ids = Object.keys(cart).filter((id) => cart[id] > 0);
    empty.hidden = ids.length > 0;
    if (form) form.hidden = ids.length === 0;
    lines.innerHTML = ids
      .map((id) => {
        const p = products.find((x) => x.id === id);
        if (!p) return "";
        return `
        <li class="order-line">
          <span class="order-line-name">${p.name[lang]}</span>
          <span class="order-line-meta">${catLabel(p.cat)}${p.brand !== "—" ? " · " + p.brand : ""}</span>
          <div class="qty-controls">
            <button type="button" data-dec="${id}" aria-label="-">−</button>
            <span>${cart[id]}</span>
            <button type="button" data-inc="${id}" aria-label="+">+</button>
          </div>
        </li>`;
      })
      .join("");
    updateBadges();
  };

  const addToCart = (id) => {
    cart[id] = (cart[id] || 0) + 1;
    saveCart();
    renderProducts();
    renderCart();
    showToast(t("toastAdded"));
  };

  const setQty = (id, qty) => {
    if (qty <= 0) delete cart[id];
    else cart[id] = qty;
    saveCart();
    renderProducts();
    renderCart();
  };

  const showConfirm = (on) => {
    const body = $("#drawerBody");
    const panel = $("#confirmPanel");
    if (!body || !panel) return;
    body.hidden = on;
    panel.hidden = !on;
  };

  const openDrawer = () => {
    const drawer = $("#orderDrawer");
    const backdrop = $("#drawerBackdrop");
    drawer?.classList.add("is-open");
    drawer?.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.hidden = false;
    $("#cartOpen")?.setAttribute("aria-expanded", "true");
    document.body.classList.add("drawer-open");
    renderCart();
  };

  const closeDrawer = () => {
    const drawer = $("#orderDrawer");
    const backdrop = $("#drawerBackdrop");
    drawer?.classList.remove("is-open");
    drawer?.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.hidden = true;
    $("#cartOpen")?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("drawer-open");
    showConfirm(false);
  };

  const makeRequestId = () => {
    const n = Math.floor(1000 + Math.random() * 9000);
    return `K-${n}`;
  };

  const buildMessage = (id, name, phone, note) => {
    const lines = Object.keys(cart)
      .filter((i) => cart[i] > 0)
      .map((i) => {
        const p = products.find((x) => x.id === i);
        return `• ${p ? p.name.en : i} × ${cart[i]}`;
      });
    return [
      `Kalon stock request ${id}`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      "",
      "Items:",
      ...lines,
      note ? `\nNote: ${note}` : "",
      "",
      "Please confirm price & availability. Thank you.",
    ]
      .filter((x) => x !== "")
      .join("\n");
  };

  /* Events */
  $("#langToggle")?.addEventListener("click", () => {
    lang = lang === "en" ? "am" : "en";
    applyLang();
  });

  const menuBtn = $("#menuBtn");
  const mobileNav = $("#mobileNav");
  const closeMenu = () => {
    menuBtn?.setAttribute("aria-expanded", "false");
    if (mobileNav) mobileNav.hidden = true;
    document.body.classList.remove("menu-open");
  };
  menuBtn?.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!open));
    if (mobileNav) mobileNav.hidden = open;
    document.body.classList.toggle("menu-open", !open);
  });
  mobileNav?.querySelectorAll("a,button").forEach((el) => {
    el.addEventListener("click", () => {
      closeMenu();
      if (el.id === "cartOpenMobile") openDrawer();
    });
  });

  ["#cartOpen", "#fab", "#stickyOrder", "#heroListBtn"].forEach((sel) => {
    $(sel)?.addEventListener("click", openDrawer);
  });
  $("#cartClose")?.addEventListener("click", closeDrawer);
  $("#drawerBackdrop")?.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });

  $("#filterRow")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    filter = btn.getAttribute("data-filter");
    $$("#filterRow .filter").forEach((b) => b.classList.toggle("is-active", b === btn));
    renderProducts();
  });

  $("#productSearch")?.addEventListener("input", (e) => {
    query = e.target.value.trim();
    renderProducts();
  });

  $("#productGrid")?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (btn) addToCart(btn.getAttribute("data-add"));
  });

  $("#orderLines")?.addEventListener("click", (e) => {
    const inc = e.target.closest("[data-inc]");
    const dec = e.target.closest("[data-dec]");
    if (inc) setQty(inc.getAttribute("data-inc"), (cart[inc.getAttribute("data-inc")] || 0) + 1);
    if (dec) setQty(dec.getAttribute("data-dec"), (cart[dec.getAttribute("data-dec")] || 0) - 1);
  });

  $("#orderForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cartCount() === 0) {
      showToast(t("toastEmpty"));
      return;
    }
    const fd = new FormData(e.target);
    const name = String(fd.get("name") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const note = String(fd.get("note") || "").trim();
    if (!name || !phone) return;

    const id = makeRequestId();
    const msg = buildMessage(id, name, phone, note);
    $("#confirmId").textContent = id;
    showConfirm(true);
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");

    cart = {};
    saveCart();
    e.target.reset();
    renderProducts();
  });

  $("#orderCall")?.addEventListener("click", () => {
    window.location.href = "tel:+251911653468";
  });

  $("#confirmClose")?.addEventListener("click", () => {
    showConfirm(false);
    closeDrawer();
  });

  $("#confirmAgain")?.addEventListener("click", () => {
    showConfirm(false);
    renderCart();
  });

  /* Reveal */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = $$("[data-reveal]");
  if (prefersReduced) {
    nodes.forEach((n) => n.classList.add("is-in"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
    requestAnimationFrame(() => {
      $$(".hero [data-reveal]").forEach((n) => n.classList.add("is-in"));
    });
  }

  applyLang();
})();
