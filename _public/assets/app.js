// Apply the theme class immediately (before first paint), independent of how
// long images/videos take to load. Prevents both toggle buttons from being
// visible at once while the page is still loading (esp. on slow mobile).
(function () {
  const html = document.documentElement;
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const initialTheme = savedTheme || (prefersDark.matches ? 'dark' : 'light');

  html.classList.remove('dark', 'light');
  html.classList.add(initialTheme);
})();

document.addEventListener('DOMContentLoaded', function () {

  /* START THEME SWITCH */
  const html = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const themeColors = {
    dark: "#262B33",
    light: "#D2D8E1"
  };

  const applyTheme = (theme) => {
    html.classList.remove('dark', 'light');
    html.classList.add(theme, 'js');

    // Update Meta Theme Color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor && themeColors[theme]) {
      metaThemeColor.setAttribute('content', themeColors[theme]);
    }

    // Update Active Button State
    const buttons = {
      light: document.querySelector(".theme-light"),
      dark: document.querySelector(".theme-dark")
    };

    Object.keys(buttons).forEach(key => {
      if (buttons[key]) {
        buttons[key].classList.toggle('is-active', key === theme);
      }
    });
  };

  const setTheme = (theme) => {
    applyTheme(theme);
    localStorage.setItem('theme', theme);
  };

  const goLight = () => setTheme('light');
  const goDark = () => setTheme('dark');

  const lightBtn = document.querySelector(".theme-light");
  const darkBtn = document.querySelector(".theme-dark");

  if (lightBtn) lightBtn.addEventListener("click", goLight, false);
  if (darkBtn) darkBtn.addEventListener("click", goDark, false);

  // Reflect the theme that was already applied synchronously above
  // (adds 'js', sets meta color, marks the active button).
  applyTheme(html.classList.contains('light') ? 'light' : 'dark');

  // Keep following OS preference live, as long as no manual choice was made
  prefersDark.addEventListener('change', event => {
    if (!localStorage.getItem('theme')) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
  /* END THEME SWITCH */


  /* START MENU BTN */
  const menuBtn = document.getElementById('menu-btn');
  const navMenu = document.getElementById('nav-menu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('active');
    });
  }
  /* END MENU BTN */

});
