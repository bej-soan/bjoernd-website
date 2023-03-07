// Print Day
function printDate(){
    const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];
    var today = new Date();
    var date = today.getDate()+' '+(monthNames[today.getMonth()])+' '+today.getFullYear();
    return(date);
  }
  function printTime(){
    var today = new Date();
    const minutes = String(today.getMinutes()).padStart(2, '0');
    var time = today.getHours() + ":" + minutes;
    return(time);
  }
  
  
  
  /* START DARK MODE SWITCH
     Dark Mode Switch by Lars Kappert webpro.nl */
  window.onload=function(){
  const html = document.documentElement;
  const classList = html.classList;
  const toggle = document.querySelector('#theme-toggle');
  const preferDark = window.matchMedia('(prefers-color-scheme: dark)');
  
  toggle.addEventListener('click', () => {
    const isChecked = toggle.getAttribute('aria-checked') !== 'true';
    const theme = isChecked ? 'light' : 'dark';
    classList.remove(isChecked ? 'dark' : 'light');
    classList.add(theme);
    localStorage.setItem('theme', theme);
    toggle.setAttribute('aria-checked', isChecked);
  });
  
  preferDark.addEventListener('change', event => {
    if (!localStorage.getItem('theme')) {
      toggle.setAttribute('aria-checked', !event.matches);
    }
  });
  
  if (html.classList.contains('light') || !preferDark.matches) {
    toggle.setAttribute('aria-checked', true);
  }
  
  
  }
  /* END DARK MODE SWITCH */
  
  
  window.onload=function(){
  
    var html = document.querySelector("html"), // Creates a variable called body, so we can reference it more easily below.
    
  
  
    goLight = function() { // Creates a function called goLight that adds the 'dark' class to the body
      html.className = "";
      html.classList.add("light");
      localStorage.setItem('theme', 'light');
      html.classList.add('js');
    },
    goDark = function() { // Creates a function called goDark that removes the 'dark' class from the body
      html.className = "";
      html.classList.add("dark");
      localStorage.setItem('theme', 'dark');
      html.classList.add('js');
    }
     
     document.querySelector(".theme-light").addEventListener("click", goLight, false); 
     
     document.querySelector(".theme-dark").addEventListener("click", goDark, false); 
     
  
     if (localStorage.getItem('theme')) {
      html.className = "";
      html.classList.add(localStorage.getItem('theme'));
    }
    html.classList.add('js');
    
    }
    /* END DARK MODE SWITCH */
    