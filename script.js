const translations = {
    ar: {
        brand_name: "بريت هوم",
        brand_sub: "للخدمات المنزلية",
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_services: "خدماتنا",
        nav_portfolio: "أعمالنا",
        nav_why: "لماذا نحن",
        nav_contact: "تواصل معنا",
        hero_title: 'نظافة احترافية تجعل منزلك <span class="highlight">يلمع كالنجوم</span>',
        hero_desc: "بريت هوم هي خيارك الأول لخدمات تنظيف الخزانات، الكنب، السجاد، والأحواش. نستخدم أحدث التقنيات لنضمن لك بيئة صحية ونظافة تدوم طويلاً تليق بك وبعائلتك.",
        btn_discover: "اكتشف خدماتنا",
        btn_contact: "تواصل معنا",
        about_sub: "من نحن",
        about_title_1: "نحن بريت هوم..",
        about_title_2: "الريادة في عالم النظافة",
        about_desc_1: "بخبرة تمتد لسنوات في قلب المملكة، انطلقت بريت هوم لتكون الشريك الأمثل لكل منزل يبحث عن التميز والراحة والتعقيم المتكامل بلمسات احترافية.",
        about_desc_2: "نحن نستخدم أنظمة تعقيم وتطهير متطورة تضمن القضاء على 99% من البكتيريا بفضل أجهزتنا الألمانية الحديثة وموادنا الآمنة تماماً.",
        f1: "جودة تفوق التوقعات ومعايير فندقية.",
        f2: "مواد تنظيف آمنة تماماً ومصرحة عالمياً.",
        f3: "التزام دقيق بالمواعيد وسرعة في الإنجاز.",
        btn_trust: "احجز خدمتك الآن",
        ser_sub: "خدماتنا الاحترافية",
        ser_title: 'نعتني بكل تفاصيل <span class="highlight-sky">منزلك</span>',
        ser_desc_long: "نحن في بريت هوم نفخر بتقديم باقة متكاملة من حلول التنظيف والتعقيم المتطورة. نجمع بين الخبرة الطويلة وأحدث المعدات العالمية لنضمن لك جودة تفوق التوقعات، مع الالتزام التام بمعايير الصحة والسلامة الدولية.",
        s1_t: "التنظيف الشامل",
        s1_short: "حلول تنظيف عميقة للفلل، الشقق، والقصور من الداخل والخارج بأعلى دقة.",
        s1_long: "نستخدم تقنيات جلي الرخام، تنظيف النوافذ المرتفعة، وتلميع النجف والأرضيات الخشبية بمواد إيطالية تحافظ على بريق منزلك لفترات طويلة.",
        s2_t: "تعقيم الخزانات",
        s2_short: "تنظيف وتعقيم الخزانات الأرضية والعلوية لضمان مياه نقية وصحية.",
        s2_long: "نضمن لك مياه نقية خالية من الشوائب والبكتيريا من خلال 4 مراحل تنظيف: سحب الرواسب، غسيل الجدران، التطهير بالكلور، واختبار نقاء المياه.",
        s3_t: "غسيل المفروشات",
        s3_short: "غسيل الكنب والسجاد والستائر بأجهزة البخار الحديثة والتعطير الفاخر.",
        s3_long: "تقنية البخار الجاف لدينا تخترق ألياف السجاد والكنب لتزيل أصعب البقع والروائح مع الحفاظ على الألوان، ونضيف لمسة تعطير تدوم لأيام.",
        s4_t: "الأحواش والحدائق",
        s4_short: "تنظيف وتنسيق المساحات الخارجية والحدائق الخاصة ورش المبيدات وجلي الأحواش.",
        s4_long: "نعتني بجمال مدخل منزلك، من تنظيف الممرات وجلي بلاط الأحواش إلى التخلص من الحشرات المزعجة وتنسيق الأشجار ليكون منزلك لوحة متكاملة.",
        order_now: "اطلب الآن",
        f_facades: "واجهات",
        f_floors: "أرضيات",
        f_steril: "تعقيم",
        f_insul: "عزل",
        f_steam: "بخار",
        f_scent: "تعطير",
        f_pest: "رش مبيدات",
        f_yard: "جلي أحواش",
        why_badge: "سر تميزنا",
        why_main_title: 'ما الذي يجعل <span class="text-glow">بريت هوم</span> خيارك الأول؟',
        w1_t: "نخبة من الخبراء",
        w1_d: "طاقم عملنا ليسوا مجرد موظفين، بل فنيين مدربين على أعلى معايير الضيافة والنظافة الفندقية لضمان رقي التعامل ودقة الإنجاز.",
        w2_t: "تكنولوجيا ألمانية",
        w2_d: "نستثمر في أحدث ماكينات البخار والجلي الألمانية التي تضمن الوصول لأصعب الزوايا وتعقيمها بنسبة 100% دون المساس بجودة الأثاث.",
        w3_t: "مواد صديقة للبيئة",
        w3_d: "صحة عائلتك أولوية؛ لذا نستخدم حصرياً منظفات حيوية (Bio) آمنة تماماً على الأطفال والحيوانات الأليفة ومعتمدة من هيئات الصحة.",
        w4_t: "دقة في المواعيد",
        w4_d: "نحن نقدر وقتك الثمين؛ نظام الجدولة الذكي لدينا يضمن وصول فريقنا في الموعد المحدد بالضبط مع سرعة فائقة في التنفيذ.",
        trust_text: "أكثر من 5000 منزل في المملكة يثقون بنا سنوياً",
        contact_badge: "تواصل مباشر",
        contact_main_title: 'نحن هنا <span class="highlight-sky">لخدمتك</span> دائماً',
        channels_title: "قنوات التواصل",
        call_us: "اتصل بنا",
        whatsapp_us: "راسلنا واتساب",
        email_us: "البريد الإلكتروني",
        address_title: "المقر الرئيسي",
        address_val: "المملكة العربية السعودية",
        form_title: "اطلب الخدمة الآن",
        label_name: "الاسم بالكامل",
        label_service: "اختر الخدمة",
        label_msg: "تفاصيل الطلب أو العنوان",
        send_btn: "إرسال الطلب",
        footer_about_desc: "الوجهة الأولى والخبراء المعتمدون في خدمات التنظيف والتعقيم الشامل بالمملكة العربية السعودية. نجمع بين الأمانة، السرعة، والجودة الفائقة لنمنحك منزلاً مشرقاً وصحياً.",
        footer_links_title: "روابط سريعة",
        footer_services_title: "خدماتنا",
        footer_contact_title: "تواصل معنا",
        all_rights: "جميع الحقوق محفوظة",
        dev_by: "تم التصميم والبرمجة بواسطة"
    },
    en: {
        brand_name: "Bright Home",
        brand_sub: "Home Services",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_why: "Why Us",
        nav_contact: "Contact",
        hero_title: 'Professional Cleaning Making Your Home <span class="highlight">Shine Like Stars</span>',
        hero_desc: "Bright Home is your first choice for tank, sofa, carpet, and yard cleaning. We use the latest technology to ensure a healthy environment for you and your family.",
        btn_discover: "Our Services",
        btn_contact: "Contact Us",
        about_sub: "About Us",
        about_title_1: "We are Bright Home..",
        about_title_2: "Leaders in Cleaning",
        about_desc_1: "With years of experience in the heart of the Kingdom, Bright Home was launched to be the ideal partner for every home seeking excellence, comfort and professional sterilization.",
        about_desc_2: "We use advanced sterilization systems that eliminate 99% of bacteria thanks to our modern German devices and completely safe materials.",
        f1: "Quality exceeding expectations and hotel standards.",
        f2: "Completely safe and globally certified materials.",
        f3: "Strict punctuality and speed in execution.",
        btn_trust: "Book Now",
        ser_sub: "Our Professional Services",
        ser_title: 'We Care For Every <span class="highlight-sky">Home</span> Detail',
        ser_desc_long: "At Bright Home, we are proud to provide a comprehensive package of advanced cleaning and sterilization solutions. We combine long field experience with the latest global equipment to guarantee quality that exceeds expectations, following strict international safety standards.",
        s1_t: "Total Cleaning",
        s1_short: "Deep cleaning solutions for villas, apartments, and palaces inside and out with maximum precision.",
        s1_long: "We use advanced marble polishing techniques, high window cleaning, and chandelier polishing with premium Italian materials that maintain your home's shine for a long time.",
        s2_t: "Water Tank Sanitization",
        s2_short: "Cleaning and disinfecting tanks to ensure pure and healthy water delivery.",
        s2_long: "We guarantee pure water through 4 cleaning stages: sediment removal, manual wall scrubbing, deep chlorine disinfection, and a final purity test before delivery.",
        s3_t: "Upholstery Cleaning",
        s3_short: "Steam cleaning for sofas, carpets, and curtains using devices that kill allergy-causing microbes.",
        s3_long: "Our dry steam technology penetrates carpet and sofa fibers to remove the toughest stains and odors while maintaining color quality and adding a luxury scent.",
        s4_t: "Yards & Gardens",
        s4_short: "Professional cleaning and landscaping of outdoor areas, private gardens, and pathways.",
        s4_long: "We enhance your entrance beauty, from pathway cleaning to patio tile polishing and safe pest control to ensure an environment free from annoying insects.",
        order_now: "Order Now",
        f_facades: "Facades",
        f_floors: "Floors",
        f_steril: "Sanitization",
        f_insul: "Insulation",
        f_steam: "Steam",
        f_scent: "Fragrance",
        f_pest: "Pest Control",
        f_yard: "Yard Polishing",
        why_badge: "Our Secret",
        why_main_title: 'Why Is <span class="text-glow">Bright Home</span> Your First Choice?',
        w1_t: "Elite Experts",
        w1_d: "Our staff are not just employees, but professional technicians trained to the highest hotel standards to ensure excellence and precision.",
        w2_t: "German Technology",
        w2_d: "We invest in the latest German steam and polishing machines that guarantee 100% sterilization without affecting furniture quality.",
        w3_t: "Eco-Friendly Materials",
        w3_d: "Your family's health is a priority; we exclusively use bio-detergents that are completely safe for children and pets.",
        w4_t: "Punctuality",
        w4_d: "We value your time; our smart scheduling system ensures our team arrives exactly on time with high execution speed and zero mess.",
        trust_text: "More than 5,000 homes in the Kingdom trust us annually",
        contact_badge: "Direct Contact",
        contact_main_title: 'We Are Always Here For <span class="highlight-sky">You</span>',
        channels_title: "Contact Channels",
        call_us: "Call Us",
        whatsapp_us: "WhatsApp Us",
        email_us: "Email Address",
        address_title: "Headquarters",
        address_val: "Saudi Arabia",
        form_title: "Request Service Now",
        label_name: "Full Name",
        label_service: "Select Service",
        label_msg: "Order details or address",
        send_btn: "Send Request",
        footer_about_desc: "The first destination and certified experts in comprehensive cleaning and sterilization services in Saudi Arabia. We combine honesty, speed, and superior quality.",
        footer_links_title: "Quick Links",
        footer_services_title: "Our Services",
        footer_contact_title: "Contact Us",
        all_rights: "All Rights Reserved",
        dev_by: "Designed and Developed by"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-switch');
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const mobileMenu = document.getElementById('mobile-menu-overlay');
    const header = document.getElementById('main-header');
    const body = document.body;
    let currentLang = 'ar';

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        body.classList.toggle('ltr', lang === 'en');
        body.classList.toggle('rtl', lang === 'ar');
        body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        langBtn.textContent = lang === 'ar' ? 'EN' : 'AR';
    }

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        updateLanguage(currentLang);
        createStars();
    });

    if (menuOpen) {
        menuOpen.onclick = () => {
            mobileMenu.classList.add('active');
            body.style.overflow = 'hidden';
        }
    }
    if (menuClose) {
        menuClose.onclick = () => {
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        }
    }

    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');
    const observerOptions = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    const reveal = () => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', reveal);
    reveal();

    const logoBox = document.getElementById('logo-click');
    if (logoBox) {
        logoBox.onclick = function () {
            this.style.transform = 'scale(1.4)';
            setTimeout(() => { this.style.transform = 'scale(1)'; }, 300);
        };
    }

    function createStars() {
        const container = document.querySelector('.stars-container');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < 80; i++) {
            const star = document.createElement('div');
            star.className = 'star-particle';
            const size = Math.random() * 3 + 'px';
            star.style.cssText = `
                position: absolute; width: ${size}; height: ${size}; background: white;
                top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
                opacity: ${Math.random()}; border-radius: 50%;
                animation: twinkle ${2 + Math.random() * 4}s infinite;
            `;
            container.appendChild(star);
        }
    }
    createStars();

    const whatsappForm = document.getElementById('whatsapp-form');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const service = document.getElementById('service-type').value;
            const msg = document.getElementById('message').value;
            const fullMsg = `مرحباً بريت هوم، أرغب في طلب خدمة:%0A- *الاسم:* ${name}%0A- *الخدمة:* ${service}%0A- *التفاصيل:* ${msg}`;
            const phone = "966568080754";
            window.open(`https://wa.me/${phone}?text=${fullMsg}`, '_blank');
        });
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});