/* ============================================================
   VINYL CAFE — script.js (С КАРТИНКАМИ У КАЖДОЙ ПОЗИЦИИ МЕНЮ)
   ============================================================ */

document.addEventListener("DOMContentLoaded", function () {

  /* ─── NAV ─── */
  const nav = document.querySelector(".nav");
  const burger = document.querySelector(".nav__burger");
  const drawer = document.querySelector(".nav__drawer");
  const drawerClose = document.querySelector(".nav__drawer-close");
  const overlay = document.querySelector(".nav__overlay");

  window.addEventListener("scroll", function () {
    nav && nav.classList.toggle("is-scrolled", window.scrollY > 40);
  }, { passive: true });

  function openDrawer() {
    drawer && drawer.classList.add("is-open");
    overlay && overlay.classList.add("is-open");
    burger && burger.classList.add("is-active");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    drawer && drawer.classList.remove("is-open");
    overlay && overlay.classList.remove("is-open");
    burger && burger.classList.remove("is-active");
    document.body.style.overflow = "";
  }
  burger && burger.addEventListener("click", function () {
    drawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
  });
  drawerClose && drawerClose.addEventListener("click", closeDrawer);
  overlay && overlay.addEventListener("click", closeDrawer);
  document.querySelectorAll(".nav__drawer-links a").forEach(function (a) {
    a.addEventListener("click", closeDrawer);
  });

  /* ─── Language Switcher ─── */
  const langWrap = document.querySelector(".lang");
  const langBtn = document.querySelector(".lang__btn");
  if (langWrap && langBtn) {
    langBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      langWrap.classList.toggle("is-open");
    });
    document.querySelectorAll(".lang__item").forEach(function (item) {
      item.addEventListener("click", function () {
        const lang = item.getAttribute("data-lang");
        setLang(lang);
        langWrap.classList.remove("is-open");
      });
    });
    document.addEventListener("click", function () {
      langWrap.classList.remove("is-open");
    });
  }

  /* ─── HERO ─── */
  const hero = document.getElementById("hero");
  const vinylDisc = document.getElementById("vinylDisc");
  const centerLabel = document.getElementById("centerLabel");
  const vinylGlow = document.getElementById("vinylGlow");
  const heroTag = document.getElementById("heroTag");
  const sloganLine1 = document.getElementById("sloganLine1");
  const sloganLine2 = document.getElementById("sloganLine2");
  const sloganLine3 = document.getElementById("sloganLine3");
  const heroSub = document.getElementById("heroSub");

  const stateColors = [
    { bg: "#E8D5B0", center: "#975a2f", tag: "#8B4A2A" },
    { bg: "#dec293", center: "#845b25", tag: "#6B3820" },
    { bg: "#c6ba94", center: "#574d27", tag: "#4A2E12" },
    { bg: "#ceac7f", center: "#523514", tag: "#2C1A06" }
  ];

  let heroState = 0;
  let heroTimer = null;

  function getHeroStates() {
    const dict = (typeof I18N !== "undefined") ? (I18N[currentLang] || I18N.ru) : null;
    return dict ? dict.hero_states : null;
  }

  function applyHeroState(idx, animate) {
    const states = getHeroStates();
    if (!states || !hero) return;
    const text = states[idx];
    const color = stateColors[idx];

    hero.style.backgroundColor = color.bg;
    if (centerLabel) centerLabel.setAttribute("fill", color.center);
    if (heroTag) heroTag.style.color = color.tag;
    if (vinylGlow) vinylGlow.style.background =
      "radial-gradient(circle, " + color.center + " 0%, transparent 68%)";

    const write = function () {
      if (sloganLine1) sloganLine1.innerHTML = text.l1 || "";
      if (sloganLine2) sloganLine2.innerHTML = text.l2 || "";
      if (sloganLine3) sloganLine3.innerHTML = text.l3 || "";
      if (heroSub) heroSub.textContent = text.sub || "";
    };

    if (!animate) { write(); return; }

    const heroSlogan = document.getElementById("heroSlogan");
    if (heroSlogan) heroSlogan.style.opacity = "0";
    if (heroSub) heroSub.style.opacity = "0";
    setTimeout(function () {
      write();
      if (heroSlogan) heroSlogan.style.opacity = "1";
      if (heroSub) heroSub.style.opacity = "1";
    }, 300);
  }

  function spinVinyl() {
    if (!vinylDisc) return;
    vinylDisc.style.transformOrigin = "250px 250px";
    vinylDisc.style.transition = "none";
    void vinylDisc.getBoundingClientRect();
    vinylDisc.style.transition = "transform 0.9s cubic-bezier(0.45,0.05,0.15,1)";
    vinylDisc.style.transform = "rotate(360deg)";
  }

  function advanceHero() {
    spinVinyl();
    setTimeout(function () {
      if (vinylDisc) {
        vinylDisc.style.transition = "none";
        vinylDisc.style.transform = "rotate(0deg)";
      }
      const states = getHeroStates();
      heroState = (heroState + 1) % (states ? states.length : 4);
      applyHeroState(heroState, true);
    }, 900);
  }

  function startHeroCycle() {
    if (heroTimer) clearInterval(heroTimer);
    applyHeroState(heroState, false);
    heroTimer = setInterval(advanceHero, 3600);
  }

  if (hero && typeof I18N !== "undefined") {
    startHeroCycle();
    document.addEventListener("langchange", function () {
      applyHeroState(heroState, true);
    });
  }

  /* ─── Dust on Vinyl ─── */
  const dustLayer = document.querySelector(".hero__dust");
  if (dustLayer) {
    for (let i = 0; i < 26; i++) {
      const dot = document.createElement("span");
      const r = 30 + Math.random() * 62;
      const angle = Math.random() * Math.PI * 2;
      const x = 50 + Math.cos(angle) * r * 0.42;
      const y = 50 + Math.sin(angle) * r * 0.42;
      dot.style.left = x + "%";
      dot.style.top = y + "%";
      dot.style.opacity = (0.15 + Math.random() * 0.35).toFixed(2);
      dot.style.animation = "noteFloat " + (4 + Math.random() * 4).toFixed(1) + "s ease-in-out infinite";
      dot.style.animationDelay = (Math.random() * 4).toFixed(1) + "s";
      dustLayer.appendChild(dot);
    }
  }

  /* ─── Dynamic Lists ─── */
  const STAT_ICONS = [
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6" fill="currentColor" stroke="none"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M7 10l1 10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-10"/><path d="M6 10h12"/><path d="M10 7c-1-1-1-2 0-3s1-2 0-3"/><path d="M14 7c-1-1-1-2 0-3s1-2 0-3"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M4 21V10l8-6 8 6v11"/><path d="M9 21v-7h6v7"/></svg>',
    '<svg viewBox="0 0 24 24"><path d="M5 8h14M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2M5 8v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M9 12h6M9 16h4"/></svg>'
  ];

const MENU_ICONS = [
    // 1. Стакан с дымом (паром)
    '<svg viewBox="0 0 24 24"><path d="M7 10l1 10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2l1-10"/><path d="M6 10h12"/><path d="M10 7c-1-1-1-2 0-3s1-2 0-3"/><path d="M14 7c-1-1-1-2 0-3s1-2 0-3"/></svg>',
    
    // 2. Оставлено как есть
    '<svg viewBox="0 0 24 24"><path d="M6 3c0 3 3 3 3 6s-3 3-3 6 3 3 3 6M12 3c0 3 3 3 3 6s-3 3-3 6 3 3 3 6" transform="translate(1 0)"/></svg>',
    
    // 3. Красивый пирожок с более квадратными, но сглаженными формами
    '<svg viewBox="0 0 24 24"><path d="M4 17V9a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8"/><path d="M2 17h20"/><path d="M8 10v4"/><path d="M12 10v4"/><path d="M16 10v4"/></svg>',
    
    // 4. Оставлено как есть (смайлик)
    '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M8 13c1 1.3 2.3 2 4 2s3-0.7 4-2"/><circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r="0.8" fill="currentColor" stroke="none"/></svg>',
    
    // 5. Бутылка
    '<svg viewBox="0 0 24 24"><path d="M10 2v4l-3 4v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10l-3-4V2"/><path d="M9 2h6"/><path d="M7 14h10"/></svg>',
    
    // 6. Просто 1 нож
    '<svg viewBox="0 0 24 24"><path d="M11 22v-7"/><path d="M11 15V2c3 0 4 2 4 5v8z"/></svg>'
];

  function renderStats() {
    const grid = document.getElementById("statsGrid");
    if (!grid || typeof I18N === "undefined") return;
    const dict = I18N[currentLang] || I18N.ru;
    grid.innerHTML = dict.stats.map(function (s, i) {
      return '<div class="stat">' +
        '<div class="stat__icon">' + STAT_ICONS[i % STAT_ICONS.length] + '</div>' +
        '<div class="stat__num" data-target="' + s.num + '">0<span class="suffix">' + (s.suffix || "") + '</span></div>' +
        '<div class="stat__label">' + s.label + '</div>' +
        '</div>';
    }).join("");
    observeReveal(grid.querySelectorAll(".stat"));
    observeCount(grid.querySelectorAll(".stat__num[data-target]"));
  }

  function renderMenuCards() {
    const grid = document.getElementById("menuGrid");
    if (!grid || typeof I18N === "undefined") return;
    const dict = I18N[currentLang] || I18N.ru;
    grid.innerHTML = dict.menu_cards.map(function (c, i) {
      return '<div class="menu-card">' +
        '<span class="menu-card__num">' + c.num + '</span>' +
        '<div class="menu-card__icon">' + MENU_ICONS[i % MENU_ICONS.length] + '</div>' +
        '<h3>' + c.title + '</h3>' +
        '<p>' + c.desc + '</p>' +
        '</div>';
    }).join("");
    observeReveal(grid.querySelectorAll(".menu-card"));
  }

  function renderEvents() {
    const list = document.getElementById("eventsList");
    if (!list || typeof I18N === "undefined") return;
    const dict = I18N[currentLang] || I18N.ru;
    list.innerHTML = dict.events.map(function (ev) {
      return '<div class="event-row">' +
        '<div class="event-date"><div class="d">' + ev.d + '</div><div class="m">' + ev.m + '</div></div>' +
        '<div class="event-sep"></div>' +
        '<div class="event-body"><h3>' + ev.title + '</h3><p>' + ev.desc + '</p></div>' +
        '<div class="event-tag">' + ev.tag + '</div>' +
        '</div>';
    }).join("");
    observeReveal(list.querySelectorAll(".event-row"));
  }

  function observeReveal(nodes) {
    const obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    nodes.forEach(function (el) { obs.observe(el); });
  }

  function observeCount(nodes) {
    const obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute("data-target"), 10) || 0;
        const suffixEl = el.querySelector(".suffix");
        const suffixText = suffixEl ? suffixEl.outerHTML : "";
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.round(target * eased);
          el.innerHTML = value + suffixText;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        o.unobserve(el);
      });
    }, { threshold: 0.4 });
    nodes.forEach(function (el) { obs.observe(el); });
  }

  if (typeof I18N !== "undefined") {
    renderStats();
    renderMenuCards();
    renderEvents();
    document.addEventListener("langchange", function () {
      renderStats();
      renderMenuCards();
      renderEvents();
    });
  }

  /* ─── Full Menu (С КАРТИНКАМИ У КАЖДОЙ ПОЗИЦИИ!) ─── */
  const fullMenuRoot = document.getElementById("fullMenuRoot");
  const menuTabsRoot = document.getElementById("menuTabsRoot");

function renderFullMenu() {
  if (!fullMenuRoot || typeof I18N === "undefined") return;
  const dict = I18N[currentLang] || I18N.ru;
  const cats = dict.menu_categories || [];

  if (menuTabsRoot) {
    menuTabsRoot.innerHTML = cats.map(function (c) {
      return '<a href="#' + c.id + '" class="menu-tabs__link">' + c.title + '</a>';
    }).join("");
  }

  fullMenuRoot.innerHTML = cats.map(function (c, ci) {
    const items = c.items.map(function (item, idx) {
      const imgId = (ci + 1) * 100 + idx;
      const imgUrl = item.image || `https://picsum.photos/seed/${imgId}/200/200`;
      
      return '<div class="menu-item-card reveal">' +
        '<div class="menu-item-card__image">' +
          '<img src="' + imgUrl + '" alt="' + item.name + '" loading="lazy">' +
        '</div>' +
        '<div class="menu-item-card__info">' +
          '<div class="menu-item-card__header">' +
            '<h4>' + item.name + '</h4>' +
            '<span class="menu-item-card__price">' + item.price + '</span>' +
          '</div>' +
          '<p>' + item.desc + '</p>' +
        '</div>' +
      '</div>';
    }).join("");

    return '<section class="menu-section" id="' + c.id + '">' +
      '<div class="menu-section__head reveal">' +
        '<span class="menu-section__num">0' + (ci + 1) + '</span>' +
        '<h2>' + c.title + '</h2>' +
      '</div>' +
      '<div class="menu-items-grid">' + items + '</div>' +
    '</section>';
  }).join("");

  initMenuTabSpy();
  observeReveal(fullMenuRoot.querySelectorAll(".reveal"));
}
function initMenuTabSpy() {
  const tabs = document.querySelectorAll(".menu-tabs__link");
  const sections = document.querySelectorAll(".menu-section[id]");
  const tabsContainer = document.querySelector(".menu-tabs");
  
  if (!tabs.length || !sections.length) return;

  const tabObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        let activeTab = null;
        
        tabs.forEach(function (tab) {
          const href = tab.getAttribute("href");
          if (href === "#" + id) {
            tab.classList.add("active");
            activeTab = tab;
          } else {
            tab.classList.remove("active");
          }
        });
        
        // ─── АВТО-СКРОЛЛ ТАБОВ ───
        if (activeTab && tabsContainer) {
          const containerRect = tabsContainer.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          
          // Проверяем, виден ли таб полностью
          const isVisible = 
            tabRect.left >= containerRect.left + 10 &&
            tabRect.right <= containerRect.right - 10;
          
          if (!isVisible) {
            // Плавно скроллим контейнер к табу
            const scrollLeft = activeTab.offsetLeft - tabsContainer.offsetLeft - 20;
            tabsContainer.scrollTo({
              left: scrollLeft,
              behavior: 'smooth'
            });
          }
        }
      }
    });
  }, { 
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0.1 
  });
  
  sections.forEach(function (s) { 
    tabObserver.observe(s); 
  });

  // Клик по табу — скролл к секции
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(tab.getAttribute("href"));
      if (target) {
        const navHeight = document.querySelector(".nav")?.offsetHeight || 84;
        const tabsHeight = document.querySelector(".menu-tabs-wrap")?.offsetHeight || 60;
        const offset = navHeight + tabsHeight + 10;
        const y = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  });
}
  if (fullMenuRoot) {
    renderFullMenu();
    document.addEventListener("langchange", renderFullMenu);
  }

  /* ─── Generic Reveal ─── */
  const revealTargets = document.querySelectorAll(".reveal");
  if (revealTargets.length) observeReveal(revealTargets);
});
