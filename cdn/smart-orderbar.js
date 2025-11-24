// Simple floating order bar
document.addEventListener('DOMContentLoaded', function() {
    // Translations
    const translations = {
        en: 'Order Now',
        es: 'Pedir ahora',
        hi: 'अभी ऑर्डर करें',
        fr: 'Commande',
        de: 'Jetzt bestellen',
        it: 'Ordina ora',
        pt: 'Encomendar agora',
        nl: 'Nu bestellen',
        sv: 'Beställ nu',
        no: 'Bestill nå',
        da: 'Bestil nu',
        fi: 'Tilaa nyt',
        pl: 'Zamów teraz',
        cs: 'Objednat nyní',
        sk: 'Objednať teraz',
        hu: 'Rendelj most',
        ro: 'Comandă acum',
        bg: 'Поръчай сега',
        hr: 'Naruči sada',
        sr: 'Poruči sada',
        sl: 'Naroči zdaj',
        el: 'Παραγγείλετε τώρα',
        // Mexican and Costa Rican use Spanish
        mx: 'Pedir ahora',
        cr: 'Pedir ahora',
        ci: 'Commande', // Ivory Coast - French
        rs: 'Поручи сада',
    };

    // Country to language mapping
    const countryToLang = {
        'CR': 'cr', // Costa Rica
        'MX': 'mx', // Mexico
        'ES': 'es',    // Spain
        'FR': 'fr',    // France
        'DE': 'de',    // Germany
        'IT': 'it',    // Italy
        'PT': 'pt',    // Portugal
        'NL': 'nl',    // Netherlands
        'SV': 'sv',    // Sweden
        'NO': 'no',    // Norway
        'DA': 'da',    // Denmark
        'FI': 'fi',    // Finland
        'PL': 'pl',    // Poland
        'CS': 'cs',    // Czech
        'SK': 'sk',    // Slovak
        'HU': 'hu',    // Hungary
        'RO': 'ro',    // Romania
        'BG': 'bg',    // Bulgaria
        'HR': 'hr',    // Croatia
        'SR': 'sr',    // Serbia
        'SL': 'sl',    // Slovenia
        'GR': 'el',    // Greece
        // Add more as needed
    };

    // Detect language from user_country input
    const countryInput = document.querySelector('input[name="user_country"]');
    const country = countryInput ? countryInput.value.toUpperCase() : 'US';
    const lang = countryToLang[country] || (document.documentElement.lang || navigator.language || 'en').toLowerCase().slice(0, 2);
    const buttonText = translations[lang] || translations.en;

    // Create the container
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '20px';
    container.style.top = '50%';
    container.style.transform = 'translateY(-50%)';
    container.style.zIndex = '1000';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.alignItems = 'center';
    container.style.gap = '10px';
    container.style.cursor = 'pointer';
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.5s ease';

    // Create the image
    const img = document.createElement('img');
    img.src = 'https://raw.githubusercontent.com/AndriiAndrienko69/corporate-script/main/cdn/orderbar.png';
    img.alt = 'Order Bar';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.borderRadius = '10px';
    img.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    // Create the button
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#ff6600';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '15px';
    button.style.fontSize = '14px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

    // Scroll function
    function scrollToForm() {
        const target = document.getElementById('scrollToForm');
        if (target) {
            const rect = target.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            window.scrollTo({
                top: scrollTop + rect.top - 50, // offset a bit
                behavior: 'smooth'
            });
        }
    }

    // Add click events
    img.addEventListener('click', scrollToForm);
    button.addEventListener('click', scrollToForm);

    // Append elements
    container.appendChild(img);
    container.appendChild(button);
    document.body.appendChild(container);

    // Fade in
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);

    // Hide when target is in view
    const target = document.querySelector('.quiz_wrap');
    if (target) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    container.style.display = 'none';
                } else {
                    container.style.display = 'flex';
                }
            });
        }, { threshold: 0.1 }); // 10% visible
        observer.observe(target);
    }

    // Hide when form is in view
    const form = document.querySelector('form');
    if (form) {
        const formObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    container.style.display = 'none';
                } else {
                    container.style.display = 'flex';
                }
            });
        }, { threshold: 0.1 });
        formObserver.observe(form);
    }
});
