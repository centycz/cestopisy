(function () {
  const glossary = {

    /* =========================
       OBECNÉ / ITÁLIE / ŠPANĚLSKO / KYPR
       ========================= */

    scamone: {
      title: "Scamone",
      description:
        "Italský název pro hovězí květovou špičku – libové zadní maso vhodné na marinování a krátkou úpravu.",
    },
    podolica: {
      title: "Podolica",
      description:
        "Staré plemeno jihoitalského šedého skotu známé výraznou chutí masa i mléka díky pastvě v horách.",
    },
    taleggio: {
      title: "Taleggio",
      description:
        "Měkký, aromatický sýr z kravského mléka z Lombardie. Má tenkou oranžovou kůrku a krémové jádro.",
    },
    baccala: {
      title: "Baccalà",
      description:
        "Tradiční slaně sušená treska. Před vařením se několik dní máčí, aby získala jemnou texturu a chuť.",
    },
    pecorino: {
      title: "Pecorino",
      description:
        "Tvrdý ovčí sýr z různých oblastí Itálie. Má pikantní chuť a používá se do salátů, těstovin i na degustace.",
    },
    caciocavallo: {
      title: "Caciocavallo",
      description:
        "Polotvrdý sýr ve tvaru hrušky vyráběný z kravského nebo buvolího mléka. Zraje zavěšený v páru nad sebou.",
    },
    robiola: {
      title: "Robiola",
      description:
        "Čerstvý sýr s jemnou, krémovou konzistencí. Může být z kravského, kozího i ovčího mléka a zraje jen několik dní.",
    },
    ricotta: {
      title: "Ricotta",
      description:
        "Měkký, nadýchaný sýr vyráběný ze syrovátky. Používá se do slaných i sladkých jídel.",
    },
    pancetta: {
      title: "Pancetta",
      description:
        "Italská slanina z vepřového bůčku solená a kořeněná. Existuje rolovaná i plochá varianta.",
    },
    capocollo: {
      title: "Capocollo",
      description:
        "Sušený vepřový krk marinovaný v soli a koření. Má mramorovanou strukturu a jemnou chuť.",
    },
    soppressata: {
      title: "Soppressata",
      description:
        "Typická kalábrijská sušená klobása z vepřového masa. Existuje jemná i velmi pikantní verze.",
    },
    nduja: {
      title: "'Nduja",
      description:
        "Silně pikantní, mazatelná klobása z Kalábrie z vepřového masa a chilli.",
    },
    suppli: {
      title: "Supplì",
      description:
        "Římský smažený snack z rizota plněný sýrem. Po rozkrojení se sýr táhne.",
    },
    pitta: {
      title: "Pitta 'mpigliata",
      description:
        "Kalábrijský dezert z tenkého těsta plněného ořechy, medem a kořením.",
    },
    tartufo: {
      title: "Tartufo di Pizzo",
      description:
        "Legendární zmrzlinový dezert z Kalábrie plněný tekutou čokoládou.",
    },
    tapas: {
      title: "Tapas",
      description:
        "Španělské malé porce jídel určené ke sdílení u stolu.",
    },
    jamoniberico: {
      title: "Jamón ibérico",
      description:
        "Prémiová španělská sušená šunka z iberských prasat.",
    },
    salmorejo: {
      title: "Salmorejo",
      description:
        "Studená hustá polévka z Córdoby z rajčat, chleba a olivového oleje.",
    },
    flamenco: {
      title: "Flamenco",
      description:
        "Tradiční andaluský hudebně-taneční styl.",
    },
    sherry: {
      title: "Sherry",
      description:
        "Fortifikované víno z oblasti Jerez vyráběné metodou solera.",
    },
    meze: {
      title: "Meze",
      description:
        "Sada malých jídel typická pro východní Středomoří.",
    },
    halloumi: {
      title: "Halloumi",
      description:
        "Kyperský polotvrdý sýr vhodný ke grilování.",
    },
    kleftiko: {
      title: "Kleftiko",
      description:
        "Pomalu pečené jehněčí maso připravované v uzavřeném prostoru.",
    },
    zivania: {
      title: "Zivania",
      description:
        "Silný kyperský destilát z hroznů.",
    },
    loukoumades: {
      title: "Loukoumades",
      description:
        "Smažené kuličky z těsta přelité medem.",
    },

    /* =========================
       PALERMO / SICILIE
       ========================= */

    cornetto: {
      title: "Cornetto",
      description:
        "Italské snídaňové pečivo podobné croissantu, méně máslové a sladší.",
    },
    brioche: {
      title: "Brioche (sicilská)",
      description:
        "Sladká kynutá houska, často podávaná s granitou.",
    },
    aperitivo: {
      title: "Aperitivo",
      description:
        "Italský zvyk dát si před večeří drink s drobným občerstvením.",
    },
    panelle: {
      title: "Panelle",
      description:
        "Smažené placky z cizrnové mouky, typický palermský street food.",
    },
    arancina: {
      title: "Arancina",
      description:
        "Smažená rýžová koule plněná ragù nebo bešamelem. V Palermu kulatá.",
    },
    crocce: {
      title: "Crocchè",
      description:
        "Smažené bramborové krokety, často jedlé s panelle.",
    },
    sfincione: {
      title: "Sfincione",
      description:
        "Palermská nadýchaná pizza s rajčaty, cibulí a ančovičkami.",
    },
    stigghiole: {
      title: "Stigghiola",
      description:
        "Grilovaná jehněčí nebo kozí střívka, velmi lokální specialita.",
    },
    "pane-con-la-milza": {
      title: "Pane con la milza (Pani câ meusa)",
      description:
        "Sendvič se slezinou a plícemi, extrémně autentické palermské jídlo.",
    },
    "pasta-alle-sarde": {
      title: "Pasta con le sarde",
      description:
        "Těstoviny se sardinkami, fenyklem, piniemi a rozinkami.",
    },
    "pasta-alla-norma": {
      title: "Pasta alla Norma",
      description:
        "Těstoviny s rajčaty, lilkem a ricottou salata.",
    },
    caponata: {
      title: "Caponata",
      description:
        "Sladkokyselý lilkový pokrm podávaný jako antipasto.",
    },
    cannolo: {
      title: "Cannolo",
      description:
        "Křupavá trubička plněná slazenou ricottou.",
    },
    cassata: {
      title: "Cassata",
      description:
        "Bohatý sicilský dort z ricotty, marcipánu a kandovaného ovoce.",
    },
    granita: {
      title: "Granita",
      description:
        "Ledový dezert z ovoce nebo ořechů, často ke snídani s brioškou.",
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const terms = document.querySelectorAll("[data-glossary]");
    if (!terms.length) return;

    const popover = document.createElement("section");
    popover.className = "glossary-popover";
    popover.setAttribute("role", "dialog");
    popover.setAttribute("aria-live", "polite");
    popover.setAttribute("aria-hidden", "true");
    popover.innerHTML = `
      <button class="glossary-close" type="button" aria-label="Zavřít vysvětlení">&times;</button>
      <h4 class="glossary-title"></h4>
      <p class="glossary-description"></p>
    `;
    document.body.appendChild(popover);

    const titleEl = popover.querySelector(".glossary-title");
    const descriptionEl = popover.querySelector(".glossary-description");
    const closeButton = popover.querySelector(".glossary-close");
    let activeTerm = null;

    const hidePopover = () => {
      popover.classList.remove("is-visible");
      popover.setAttribute("aria-hidden", "true");
      activeTerm = null;
    };

    const showPopover = (termEl) => {
      const key = termEl.dataset.glossary?.toLowerCase();
      if (!key || !glossary[key]) return;

      const entry = glossary[key];
      titleEl.textContent = entry.title;
      descriptionEl.textContent = entry.description;

      popover.classList.add("is-visible");
      popover.setAttribute("aria-hidden", "false");

      const rect = termEl.getBoundingClientRect();
      popover.style.top = `${window.scrollY + rect.bottom + 12}px`;
      popover.style.left = `${window.scrollX + rect.left}px`;

      activeTerm = termEl;
    };

    terms.forEach(term => {
      term.classList.add("glossary-term");
      term.addEventListener("click", e => {
        e.preventDefault();
        activeTerm === term ? hidePopover() : showPopover(term);
      });
    });

    closeButton.addEventListener("click", hidePopover);
    document.addEventListener("keydown", e => e.key === "Escape" && hidePopover());
  });
})();
