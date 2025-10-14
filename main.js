// 1. Translations Object
const translations = {
  es: {
    pageTitle: "Servicios Profesionales de Desarrollo Web",
    nav_home: "Inicio",
    nav_benefits: "Beneficios",
    nav_services: "Servicios",
    nav_contact: "Contacto",
    hero_title: "¿Tu negocio aún no tiene página web?",
    hero_text: `- Impulsa tu marca con un sitio profesional y moderno.<br />
            - Llega a más clientes, transmite confianza y mantente disponible las
            24 horas. <br />
            - Comienza hoy a construir un negocio más visible, confiable y
            preparado para crecer.`,
    hero_button: "Contáctame",
    benefits_title: "¿Por qué tu negocio necesita una página web?",
    benefits_intro: `No es un gasto, es una inversión que impulsa tu crecimiento. <br />
        Estos son algunos de los principales beneficios:`,
    benefit1_title: "🌐 Presencia 24/7",
    benefit1_text: "Tu negocio estará disponible para tus clientes todo el día, todos los días.",
    benefit2_title: "🚀 Más visibilidad",
    benefit2_text: "Con una web optimizada, las personas te encontrarán fácilmente en Google y redes sociales.",
    benefit3_title: "💬 Confianza y profesionalismo",
    benefit3_text: "Una página bien diseñada transmite credibilidad y profesionalismo a tus clientes.",
    benefit4_title: "💰 Más ventas y oportunidades",
    benefit4_text: "Conecta con nuevos clientes y genera más ingresos sin depender solo de redes sociales.",
    benefit5_title: "📈 Mejora tu posicionamiento",
    benefit5_text: "Una web bien estructurada te ayuda a aparecer en los resultados de búsqueda y atraer clientes de manera orgánica sin pagar publicidad.",
    benefit6_title: "🪄 Automatización y ahorro de tiempo",
    benefit6_text: "Puedes recibir mensajes, reservas o pedidos directamente desde la web, incluso cuando no estás disponible.",
    services_title: "💼 Servicios",
    services_intro: "Diseños modernos, rendimiento optimizado y soluciones adaptadas a tu negocio. Elige el servicio que mejor se ajusta a tus necesidades.",
    service1_title: "🚀 Landing Page",
    service1_text: "Una página única y atractiva ideal para presentar tu negocio o campaña y captar clientes de inmediato.",
    service1_note: "Perfecta para emprendedores o pequeños negocios.",
    service2_title: "🌐 Sitio Web Completo",
    service2_text: "Un sitio personalizado con varias secciones para mostrar tus servicios, historia y contacto. Funciona en cualquier dispositivo.",
    service2_note: "Ideal para negocios que quieren presencia sólida y profesional.",
    service3_title: "🧠 Mantenimiento & Asesoría",
    service3_text: "Actualizaciones, soporte técnico y mejoras continuas para mantener tu web rápida y segura todo el año.",
    service3_note: "Tranquilidad total sin preocuparte por lo técnico.",
    service4_title:"📱 Desarrollo de Aplicaciones Móviles",
    service4_text:"Aplicaciones modernas, rápidas y fáciles de usar, diseñadas para ofrecer la mejor experiencia a tus usuarios.",
    service4_note:"Ideal para negocios o emprendedores que buscan crecer con soluciones móviles innovadoras.",
    contact_title: "Hablemos",
    contact_intro: "¿Listo para llevar tu negocio al siguiente nivel?",
    contact_info_title: "Información de Contacto",
    contact_info_text: "Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones. No dudes en contactarme.",
    contact_map_placeholder: "[Aquí podría ir un mapa interactivo]",
    form_name_label: "Nombre",
    form_email_label: "Correo electrónico",
    form_subject_label: "Asunto",
    form_message_label: "Tu mensaje",
    form_submit_button: "Enviar Mensaje",
    footer_copyright: "&copy; 2025 Eduardo Rios | Full-Stack Developer. Rights reserved.",
    footer_linkedin: "LinkedIn",
    footer_github: "GitHub"
  },
  en: {
    pageTitle: "Professional Web Development Services",
    nav_home: "Home",
    nav_benefits: "Benefits",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "Doesn't your business have a website yet?",
    hero_text: `- Boost your brand with a professional and modern site.<br />
            - Reach more customers, convey trust, and stay available 24/7.
            <br />
            - Start building a more visible, reliable, and growth-ready business today.`,
    hero_button: "Contact Me",
    benefits_title: "Why does your business need a website?",
    benefits_intro: `It's not an expense, it's an investment that drives your growth. <br />
        Here are some of the main benefits:`,
    benefit1_title: "🌐 24/7 Presence",
    benefit1_text: "Your business will be available to your customers all day, every day.",
    benefit2_title: "🚀 More Visibility",
    benefit2_text: "With an optimized website, people will easily find you on Google and social media.",
    benefit3_title: "💬 Trust and Professionalism",
    benefit3_text: "A well-designed page conveys credibility and professionalism to your customers.",
    benefit4_title: "💰 More Sales and Opportunities",
    benefit4_text: "Connect with new customers and generate more income without relying solely on social media.",
    benefit5_title: "📈 Improve Your Positioning",
    benefit5_text: "A well-structured website helps you appear in search results and attract customers organically without paying for advertising.",
    benefit6_title: "🪄 Automation and Time Saving",
    benefit6_text: "You can receive messages, reservations, or orders directly from the web, even when you're not available.",
    services_title: "💼 Services",
    services_intro: "Modern designs, optimized performance, and solutions tailored to your business. Choose the service that best fits your needs.",
    service1_title: "🚀 Landing Page",
    service1_text: "A unique and attractive page ideal for presenting your business or campaign and capturing customers immediately.",
    service1_note: "Perfect for entrepreneurs or small businesses.",
    service2_title: "🌐 Complete Website",
    service2_text: "A custom site with multiple sections to display your services, history, and contact information. Works on any device.",
    service2_note: "Ideal for businesses that want a solid and professional presence.",
    service3_title: "🧠 Maintenance & Consulting",
    service3_text: "Updates, technical support, and continuous improvements to keep your website fast and secure all year round.",
    service3_note: "Total peace of mind without worrying about the technical side.",
    service4_title:"📱 Mobile App Development",
    service4_text:"Modern, fast, and easy-to-use apps designed to deliver the best experience for your users.",
    service4_note:"Perfect for businesses or entrepreneurs looking to grow through innovative mobile solutions.",
    contact_title: "Let's Talk",
    contact_intro: "Ready to take your business to the next level?",
    contact_info_title: "Contact Information",
    contact_info_text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to get in touch.",
    contact_map_placeholder: "[An interactive map could go here]",
    form_name_label: "Name",
    form_email_label: "Email",
    form_subject_label: "Subject",
    form_message_label: "Your message",
    form_submit_button: "Send Message",
    footer_copyright: "&copy; 2025 Eduardo Rios | Full-Stack Developer. Rights reserved.",
    footer_linkedin: "LinkedIn",
    footer_github: "GitHub"
  }
};

// 2. Language Switcher Logic
document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('lang-switcher');
  const translatableElements = document.querySelectorAll('[data-key]');

  const setLanguage = (lang) => {
    const translationSet = translations[lang];
    
    document.title = translationSet.pageTitle;

    translatableElements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (translationSet[key]) {
        element.innerHTML = translationSet[key];
      }
    });

    langSwitcher.querySelectorAll('button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    localStorage.setItem('language', lang);
  };

  langSwitcher.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const lang = e.target.dataset.lang;
      if (lang) {
        setLanguage(lang);
      }
    }
  });

  const savedLang = localStorage.getItem('language') || 'es';
  setLanguage(savedLang);

  // 3. Theme Switcher Logic
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  const applyTheme = (theme) => {
    if (theme === 'dark') {
      body.classList.add('dark-mode');
      if (themeIcon) themeIcon.src = 'images/dayMode.svg';
    } else {
      body.classList.remove('dark-mode');
      if (themeIcon) themeIcon.src = 'images/darkMode.svg';
    }
  };

  themeToggleBtn.addEventListener('click', () => {
    const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  const savedTheme = localStorage.getItem('theme');
  applyTheme(savedTheme || 'light');

  // 4. Hero Image Slideshow
  const slideshow = document.querySelector('.slideshow-container');
  if (slideshow) {
    const images = slideshow.querySelectorAll('.hero-img');
    let currentImageIndex = 0;

    if (images.length > 1) {
      setInterval(() => {
        images[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].classList.add('active');
      }, 5000); // Change every 5 seconds
    }
  }

  // 5. Interactive Map Logic
  if (document.getElementById("map")) {
    const mapElement = document.getElementById("map");
    const quitoCoords = [-0.180653, -78.467834];

    // Initialize map with a wide view
    const map = L.map(mapElement).setView([0, -30], 5);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add marker immediately but keep it ready
    const marker = L.marker(quitoCoords).addTo(map).bindPopup("<b>Quito, Ecuador</b>");

    const animationCallback = (entries, observer) => {
      entries.forEach((entry) => {
        // When the map enters the viewport
        if (entry.isIntersecting) {
          // Animate the zoom
          map.flyTo(quitoCoords, 13, {
            animate: true,
            duration: 2,
          });
          marker.openPopup();

          // Stop observing the element so the animation doesn't re-run
          observer.unobserve(mapElement);
        }
      });
    };

    const observer = new IntersectionObserver(animationCallback, {
      threshold: 0.5, // Trigger when 50% of the map is visible
    });

    // Start observing the map element
    observer.observe(mapElement);
  }
});

// Smooth scroll for contact button
document.getElementById('contact-btn').addEventListener('click', () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});