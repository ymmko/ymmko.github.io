function changeLanguage(lang) {
    // Update the active language button
    document.querySelector('.dropbtn').textContent = lang.toUpperCase();
  
    // Perform language-specific actions (e.g., update page content)
    if (lang === 'en') {
      // Update page to English
    } else if (lang === 'tr') {
      // Update page to Turkish
    }
  }
  