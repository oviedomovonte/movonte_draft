document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menuItems = document.getElementById('menu-items');
    const languageSelect = document.getElementById('language-select');

    hamburger.addEventListener('click', function () {
        menuItems.classList.toggle('active');
    });

    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        loadTranslations(selectedLanguage);
    });

    function loadTranslations(language) {
        fetch(`${language}.json`)
            .then(response => response.json())
            .then(translations => {
                document.getElementById('cintilla').textContent = translations.cintilla;
                document.getElementById('about-us').textContent = translations.about_us;
                document.getElementById('services').textContent = translations.services;
                document.getElementById('movonte-way').textContent = translations.movonte_way;
                document.getElementById('schedule-consultation').textContent = translations.schedule_consultation;
                document.getElementById('start-now').textContent = translations.start_now;
                document.getElementById('intro-paragraph').textContent = translations.intro_paragraph;
                document.getElementById('contact-us').textContent = translations.contact_us;
                document.getElementById('lets-work-together').textContent = translations.lets_work_together;
                document.getElementById('footer').textContent = translations.footer;
            })
            .catch(error => console.error('Error loading translations:', error));
    }

    // Detect language preference and load translations
    const userLanguage = navigator.language.slice(0, 2); // Get the first two letters of the browser language
    if (userLanguage === 'es') {
        languageSelect.value = 'es';
        loadTranslations('es');
    } else {
        languageSelect.value = 'en';
        loadTranslations('en');
    }
});