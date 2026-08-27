window.onload = function(){

  /* START THEME SWITCH */
  const html = document.documentElement;
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme) => {
    html.className = "";
    html.classList.add(theme, 'js');

    // Update Meta Theme Color
    const themeColors = {
      dark: "#262B33",
      light: "#D2D8E1"
    };
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
        if (key === theme) {
          buttons[key].classList.add('is-active');
        } else {
          buttons[key].classList.remove('is-active');
        }
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

  // Initial theme: manual choice wins, otherwise follow OS preference
  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || (prefersDark.matches ? 'dark' : 'light'));

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

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');
  });
  /* END MENU BTN */

}