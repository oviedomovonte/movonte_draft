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
                document.getElementById('cintilla-text').textContent = translations.cintilla;
                document.getElementById('about_us').textContent = translations.about_us;
                document.getElementById('services').textContent = translations.services;
                document.getElementById('movonte_way').textContent = translations.movonte_way;
                document.getElementById('schedule_consultation').textContent = translations.schedule_consultation;
                document.getElementById('start_now').textContent = translations.start_now;
                document.getElementById('intro_paragraph').textContent = translations.intro_paragraph;
                document.getElementById('core_mission').textContent = translations.core_mission;
                document.getElementById('contact_us').textContent = translations.contact_us;
                document.getElementById('lets_work_together').textContent = translations.lets_work_together;
                document.getElementById('footer').textContent = translations.footer;
                document.getElementById('simplify_innovation').innerHTML = translations.simplify_innovation + '<br>' + translations.driving_results;
                document.getElementById('streamline_operations').innerHTML = translations.streamline_operations;
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

// Detectar idioma y tamaño de pantalla
function adjustContentForSpanishMobile() {
    const language = document.getElementById('language-select').value; // Obtener el idioma seleccionado
    const isMobile = window.innerWidth <= 768; // Detectar si es móvil

    if (language === 'es' && isMobile) {
        document.body.classList.add('es-mobile'); // Agregar clase si es español y móvil
    } else {
        document.body.classList.remove('es-mobile'); // Remover clase si no es español o no es móvil
    }
}

// Ejecutar al cargar la página y al cambiar el idioma o el tamaño de la pantalla
window.addEventListener('load', adjustContentForSpanishMobile);
window.addEventListener('resize', adjustContentForSpanishMobile);
document.getElementById('language-select').addEventListener('change', adjustContentForSpanishMobile);