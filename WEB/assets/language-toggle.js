(function () {
  const STORAGE_KEY = "kalabrie-language";

  const applyLanguage = (panes, lang) => {
    panes.forEach((pane) => {
      const isActive = pane.dataset.language === lang;
      pane.classList.toggle("is-active", isActive);
      if (isActive) {
        pane.removeAttribute("hidden");
      } else {
        pane.setAttribute("hidden", "hidden");
      }
    });
    document.documentElement.setAttribute("lang", lang === "it" ? "it" : "cs");
  };

  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".travel-container[data-language-container]");
    if (!container) return;

    const panes = container.querySelectorAll("[data-language]");
    if (!panes.length) return;

    const switcher = container.querySelector("[data-language-toggle]");
    if (!switcher) return;

    const toggleButtons = switcher.querySelectorAll("[data-language-option]");
    if (!toggleButtons.length) return;

    const setActiveButton = (lang) => {
      toggleButtons.forEach((button) => {
        const isActive = button.dataset.languageOption === lang;
        button.classList.toggle("is-active", isActive);
        button.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    };

    const storedLang = window.localStorage?.getItem(STORAGE_KEY);
    const initialLang = storedLang === "it" ? "it" : "cs";

    applyLanguage(panes, initialLang);
    setActiveButton(initialLang);

    switcher.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) return;
      const option = target.closest("[data-language-option]");
      if (!option) return;
      const lang = option.dataset.languageOption;
      if (!lang) return;

      applyLanguage(panes, lang);
      setActiveButton(lang);
      try {
        window.localStorage?.setItem(STORAGE_KEY, lang);
      } catch (error) {
        // Ignore storage errors (e.g., private mode)
      }
    });
  });
})();
