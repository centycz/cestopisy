(function () {
  const glossary = {
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
        "Měkký, nadýchaný sýr vyráběný z teplého syrovátkového sýřeniny. Vhodný do slaných i sladkých jídel.",
    },
    pancetta: {
      title: "Pancetta",
      description:
        "Italská slanina z vepřového bůčku solená a kořeněná. Vyskytuje se v rolované i ploché variantě.",
    },
    capocollo: {
      title: "Capocollo",
      description:
        "Sušený vepřový krk marinovaný v soli a koření. Má mramorovanou strukturu a jemnou, kořeněnou chuť.",
    },
    soppressata: {
      title: "Soppressata",
      description:
        "Typická kalábrijská sušená klobása z vepřového masa. Vyrábí se v mírně pálivé i velmi pikantní verzi.",
    },
    nduja: {
      title: "'Nduja",
      description:
        "Silně pikantní, mazatelná klobása z kalábrijského vepřového masa, chilli a sádla. Podává se na pečivu nebo v omáčkách.",
    },
    suppli: {
      title: "Supplì",
      description:
        "Římský smažený snack z rizota plněný sýrem. Po usmažení má křupavou krustu a táhnoucí se střed.",
    },
    pitta: {
      title: "Pitta 'mpigliata",
      description:
        "Tradiční kalábrijský dezert z tenkého těsta plněného ořechy, medem a kořením. Často se připravuje na svátky.",
    },
    tartufo: {
      title: "Tartufo di Pizzo",
      description:
        "Legendární zmrzlinový dezert ve tvaru koule plněný tekutou čokoládou. Vznikl v městečku Pizzo v Kalábrii.",
    },
    tapas: {
      title: "Tapas",
      description:
        "Španělské malé porce jídel podávané k nápojům. Sdílí se u stolu a často tvoří pestrou degustační večeři.",
    },
    jamoniberico: {
      title: "Jamón ibérico",
      description:
        "Prémiová španělská sušená šunka z černých iberských prasat. Má máslovou strukturu a intenzivní chuť.",
    },
    salmorejo: {
      title: "Salmorejo",
      description:
        "Hustá studená polévka z rajčat, chleba, olivového oleje a česneku typická pro Córdobu. Podává se s vejcem a šunkou.",
    },
    flamenco: {
      title: "Flamenco",
      description:
        "Andaluský umělecký žánr kombinující zpěv, kytaru, tanec a rytmický potlesk. Vznikl v komunitách andaluských Romů.",
    },
    sherry: {
      title: "Sherry",
      description:
        "Fortifikované víno z oblasti Jerez na jihu Španělska. Zraje metodou solera a má široké spektrum chutí od suchých po sladké.",
    },
    meze: {
      title: "Meze",
      description:
        "Sada malých jídel typická pro východní Středomoří. Na Kypru zahrnuje kombinaci grilovaného masa, zeleniny a dipů.",
    },
    halloumi: {
      title: "Halloumi",
      description:
        "Tradiční kyperský polotvrdý sýr z ovčího a kozího mléka. Díky vyššímu bodu tání se hodí na grilování či smažení.",
    },
    kleftiko: {
      title: "Kleftiko",
      description:
        "Pomalu pečené skopové nebo jehněčí maso marinované v bylinkách. Tradičně se připravuje v uzavřené peci.",
    },
    zivania: {
      title: "Zivania",
      description:
        "Silný kyperský destilát z hroznů a hroznových výlisků. Podává se jako aperitiv nebo digestiv, často vychlazený.",
    },
    loukoumades: {
      title: "Loukoumades",
      description:
        "Smažené kuličky z kynutého těsta přelité medem nebo sirupem. Oblíbený řecký a kyperský dezert.",
    },
    aperitivo: {
      title: "Aperitivo",
      description:
        "Italský zvyk podávat před večeří lehké nápoje a drobné občerstvení. Slouží k povzbuzení chuti k jídlu.",
    },
    panelle: {
      title: "Panelle",
      description:
        "Sicilské placky z cizrnové mouky smažené do křupava. Často se podávají v housce jako street food.",
    },
    arancini: {
      title: "Arancini",
      description:
        "Smažené rýžové koule plněné ragú, mozzarellou nebo pistáciemi. Oblíbená sicilská streetfoodová specialita.",
    },
    sfincione: {
      title: "Sfincione",
      description:
        "Nadýchaný sicilský koláč podobný pizze, pokrytý rajčatovou omáčkou, cibulí a sýrem caciocavallo.",
    },
    cannoli: {
      title: "Cannoli",
      description:
        "Trubičky z křupavého těsta plněné sladkou ricottou. Patří mezi nejslavnější sicilské dezerty.",
    },
    cassata: {
      title: "Cassata",
      description:
        "Tradiční sicilský dort z piškotu, ricotty, kandovaného ovoce a marcipánu. Připravuje se v mnoha regionálních variantách.",
    },
    crocche: {
      title: "Crocchè",
      description:
        "Smažené bramborové krokety původem z Neapole a Sicílie. Ochucují se sýrem, petrželí nebo šunkou.",
    },
    granita: {
      title: "Granita",
      description:
        "Ledový dezert z jemně drceného ledu ochuceného ovocem nebo kávou. Na Sicílii se často podává k snídani s brioškou.",
    },
    pastasarde: {
      title: "Pasta con le sarde",
      description:
        "Těstoviny s čerstvými sardinkami, fenyklovou natí, piniemi a rozinkami. Typické jídlo z Palerma.",
    },
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
      if (!popover.classList.contains("is-visible")) return;
      popover.classList.remove("is-visible");
      popover.setAttribute("aria-hidden", "true");
      popover.style.top = "";
      popover.style.left = "";
      if (activeTerm) {
        activeTerm.classList.remove("is-active");
        activeTerm.setAttribute("aria-pressed", "false");
        activeTerm = null;
      }
    };

    const positionPopover = (termEl) => {
      const rect = popover.getBoundingClientRect();
      const termRect = termEl.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const scrollX = window.scrollX || window.pageXOffset;
      const scrollY = window.scrollY || window.pageYOffset;

      let top = scrollY + termRect.bottom + 12;
      let left = scrollX + termRect.left + termRect.width / 2 - rect.width / 2;

      const maxLeft = scrollX + viewportWidth - rect.width - 16;
      if (left < scrollX + 16) {
        left = scrollX + 16;
      } else if (left > maxLeft) {
        left = Math.max(scrollX + 16, maxLeft);
      }

      popover.style.top = `${top}px`;
      popover.style.left = `${left}px`;
    };

    const showPopover = (termEl) => {
      const key = termEl.dataset.glossary?.toLowerCase();
      if (!key || !glossary[key]) return;

      const entry = glossary[key];
      titleEl.textContent = entry.title || termEl.textContent.trim();
      descriptionEl.textContent = entry.description;

      popover.classList.add("is-visible");
      popover.setAttribute("aria-hidden", "false");

      // Wait for layout to update before measuring for positioning
      requestAnimationFrame(() => {
        positionPopover(termEl);
      });

      if (activeTerm && activeTerm !== termEl) {
        activeTerm.classList.remove("is-active");
        activeTerm.setAttribute("aria-pressed", "false");
      }
      termEl.classList.add("is-active");
      termEl.setAttribute("aria-pressed", "true");
      activeTerm = termEl;
    };

    const togglePopover = (termEl) => {
      if (termEl === activeTerm && popover.classList.contains("is-visible")) {
        hidePopover();
      } else {
        showPopover(termEl);
      }
    };

    terms.forEach((term) => {
      term.setAttribute("role", "button");
      term.setAttribute("tabindex", "0");
      term.setAttribute("aria-pressed", "false");
      const termLabel = term.textContent.trim();
      if (termLabel) {
        term.setAttribute("aria-label", `Zobrazit vysvětlení: ${termLabel}`);
      }
      term.classList.add("glossary-term");

      term.addEventListener("click", (event) => {
        event.preventDefault();
        togglePopover(term);
      });

      term.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          togglePopover(term);
        }
      });
    });

    closeButton.addEventListener("click", () => {
      hidePopover();
    });

    document.addEventListener("click", (event) => {
      if (
        !popover.contains(event.target) &&
        !(event.target instanceof Element && event.target.closest("[data-glossary]"))
      ) {
        hidePopover();
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        hidePopover();
      }
    });

    window.addEventListener("resize", () => {
      if (activeTerm && popover.classList.contains("is-visible")) {
        positionPopover(activeTerm);
      }
    });
  });
})();
