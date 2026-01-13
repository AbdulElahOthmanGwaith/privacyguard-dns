// PrivacyGuard DNS - Website JavaScript

// Translations
const translations = {
    ar: {
        home: "الرئيسية",
        services: "الخدمات",
        config: "التكوين",
        stats: "الإحصائيات",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        heroBadge: "حماية مجانية 100%",
        heroTitle: "تصفح الإنترنت بدون إعلانات",
        heroDesc: "خدمة DNS مجانية وسريعة لحظر الإعلانات والتتبع على جميع أجهزتك. تمتع بتجربة تصفح أنظف وأسرع وأكثر خصوصية.",
        dnsServers: "خوادم DNS الموصى بها",
        copy: "نسخ",
        startGuide: "ابدأ التكوين",
        learnMore: "اعرف المزيد",
        fastSpeed: "سرعة فائقة",
        secure: "آمن ومشفّر",
        free: "مجاني تماماً",
        blocked: "محجوب",
        allowed: "مسموح",
        users: "مستخدم نشط",
        uptime: "وقت التشغيل",
        latency: "زمن الاستجابة",
        blockedAds: "إعلان محجوب",
        servicesBadge: "خدماتنا",
        servicesTitle: "حماية شاملة لخصوصيتك",
        servicesDesc: "نقدم مجموعة متكاملة من الخدمات لحماية تجربتك على الإنترنت من الإعلانات والتتبع والبرمجيات الخبيثة.",
        adBlocking: "حظر الإعلانات",
        adBlockingDesc: "حظر جميع أنواع الإعلانات بما في ذلك الإعلانات العرضية والفيديوهات والمحتوى التطفلي للحصول على تجربة تصفح نقية.",
        antiTracking: "مكافحة التتبع",
        antiTrackingDesc: "منع متتبعات النشاط والشبكات الاجتماعية من جمع بياناتك وتتبع سلوكك على الإنترنت.",
        malware: "حماية من البرمجيات الخبيثة",
        malwareDesc: "حظر المواقع المشبوهة والروابط الخبيثة والفيروسات لحماية أجهزتك من التهديدات الأمنية.",
        familyProtection: "حماية العائلة",
        familyProtectionDesc: "تصفية المحتوى غير المناسب للأطفال وحمايتهم من الوصول إلى المواقع الضارة.",
        privacyPolicy: "سياسة عدم التسجيل",
        privacyPolicyDesc: "نحن لا نسجل بياناتك أو نشاطك على الإنترنت. خصوصيتك هي التزامنا الأول.",
        speedBoost: "تسريع التصفح",
        speedBoostDesc: "بفضل التخزين المؤقت الذكي، ستتحمل صفحات الويب بشكل أسرع وتوفر في استهلاك البيانات.",
        configBadge: "دليل التكوين",
        configTitle: "إعداد الخدمة على أجهزتك",
        configDesc: "اتبع هذه الخطوات البسيطة لتكوين خدمة DNS على جهازك والبدء بحماية خصوصيتك.",
        router: "راوتر",
        winStep1Title: "افتح إعدادات الشبكة",
        winStep1Desc: "انقر بزر الماوس الأيمن على أيقونة الشبكة في شريط المهام واختر \"إعدادات الشبكة والإنترنت\".",
        winStep2Title: "اختر محول الشبكة",
        winStep2Desc: "انتقل إلى \"محول الشبكة\" وحدد الاتصال النشط (Wi-Fi أو إيثرنت).",
        winStep3Title: "خصائص IPv4",
        winStep3Desc: "انقر بزر الماوس الأيمن واختر \"خصائص\"، ثم انقر نقرًا مزدوجًا على \"بروتوكول الإنترنت الإصدار الرابع\".",
        winStep4Title: "أدخل خوادم DNS",
        winStep4Desc: "اختر \"استخدام عناوين خادم DNS التالية\" وأدخل: <br><strong>المفضل:</strong> 94.140.14.14 <br><strong>البديل:</strong> 94.140.15.15",
        macStep1Title: "تفضيلات النظام",
        macStep1Desc: "اذهب إلى القائمة ثم \"تفضيلات النظام\" واختر \"شبكة\".",
        macStep2Title: "اختر الاتصال",
        macStep2Desc: "حدد الاتصال النشط من القائمة الجانبية وانقر على \"تفاصيل\".",
        macStep3Title: "إعدادات DNS",
        macStep3Desc: "انتقل إلى علامة تبويب \"DNS\" وانقر على زر الإضافة (+).",
        macStep4Title: "أضف الخوادم",
        macStep4Desc: "أضف 94.140.14.14 و 94.140.15.15 ثم انقر على \"موافق\" و\"تطبيق\".",
        andStep1Title: "إعدادات Wi-Fi",
        andStep1Desc: "افتح \"الإعدادات\" ثم \"الشبكة والإنترنت\" واختر \"Wi-Fi\".",
        andStep2Title: "تعديل الشبكة",
        andStep2Desc: "حدد الشبكة المتصلة وانقر على أيقونة القلم لتعديلها.",
        andStep3Title: "خيارات متقدمة",
        andStep3Desc: "مرر للأسفل واختر \"خيارات متقدمة\" ثم \"إعدادات IP\".",
        andStep4Title: "DNS الثابت",
        andStep4Desc: "غيّر الإعداد إلى \"ثابت\" وأدخل 94.140.14.14 في حقل DNS.",
        iosStep1Title: "الإعدادات",
        iosStep1Desc: "افتح \"الإعدادات\" وانتقل إلى \"Wi-Fi\".",
        iosStep2Title: "معلومات الشبكة",
        iosStep2Desc: "انقر على أيقونة \"i\" بجانب الشبكة المتصلة.",
        iosStep3Title: "تكوين DNS",
        iosStep3Desc: "مرر للأسفل واختر \"تكوين DNS\" وحدد \"يدوي\".",
        iosStep4Title: "أضف الخادم",
        iosStep4Desc: "احذف الخوادم الحالية وأضف 94.140.14.14 و 94.140.15.15.",
        linStep1Title: "تحرير الإعدادات",
        linStep1Desc: "افتح Terminal ونفذ: sudo nano /etc/systemd/resolved.conf",
        linStep2Title: "إضافة الخوادم",
        linStep2Desc: "أضف السطر: DNS=94.140.14.14 في قسم [Resolve].",
        linStep3Title: "إعادة التشغيل",
        linStep3Desc: "احفظ الملف وأعد تشغيل الخدمة: sudo systemctl restart systemd-resolved",
        linStep4Title: "التحقق",
        linStep4Desc: "تحقق من الإعدادات عبر: systemd-resolve --status | grep DNS",
        rouStep1Title: "تسجيل الدخول",
        rouStep1Desc: "افتح المتصفح وأدخل عنوان الراوتر (عادةً 192.168.1.1) وسجّل الدخول.",
        rouStep2Title: "إعدادات الإنترنت",
        rouStep2Desc: "ابحث عن قسم \"WAN\" أو \"إعدادات الإنترنت\" في قائمة الراوتر.",
        rouStep3Title: "خوادم DNS",
        rouStep3Desc: "أدخل خوادم DNS المخصصة بدلاً من التلقائية: 94.140.14.14 و 94.140.15.15",
        rouStep4Title: "حفظ وإعادة تشغيل",
        rouStep4Desc: "احفظ الإعدادات وأعد تشغيل الراوتر لتفعيل التغييرات.",
        statsBadge: "الإحصائيات الحية",
        statsTitle: "أداء الشبكة والتصفح",
        statsDesc: "تتبع حركة المرور المحجوبة وفهم أنماط الاستخدام لتحسين تجربتك على الإنترنت.",
        blockingStats: "إحصائيات الحظر",
        live: "مباشر",
        mon: "الإثنين",
        tue: "الثلاثاء",
        wed: "الأربعاء",
        thu: "الخميس",
        fri: "الجمعة",
        sat: "السبت",
        sun: "الأحد",
        adsLegend: "إعلانات",
        trackersLegend: "متابعات",
        malwareLegend: "برمجيات خبيثة",
        topBlocked: "الأكثر حظراً",
        serverStatus: "حالة الخوادم",
        online: "متصل",
        faqBadge: "الأسئلة الشائعة",
        faqTitle: "كل ما تريد معرفته",
        faqDesc: "إجابات على الأسئلة الأكثر شيوعاً حول خدمة DNS وحظر الإعلانات.",
        q1: "هل خدمة DNS المجانية آمنة للاستخدام؟",
        a1: "نعم، خدمات DNS المجانية الموثوقة آمنة تماماً للاستخدام. نحن لا نسجل بياناتك أو نشاطك على الإنترنت، ونستخدم تشفير HTTPS لجميع الاتصالات. تأكد دائماً من اختيار خدمات معروفة وذات سمعة جيدة.",
        q2: "هل سيؤثر تغيير DNS على سرعة الإنترنت؟",
        a2: "على العكس تماماً! خدمات DNS المحسنة غالباً ما تُسرّع تصفح الإنترنت لأنها تستخدم خوادم قريبة منك وتوفر تخزين مؤقت ذكي. قد تلاحظ تحميلاً أسرع للصفحات وانخفاضاً في زمن الاستجابة.",
        q3: "هل يمكنني استخدام DNS مع VPN؟",
        a3: "نعم، يمكنك استخدام كلاهما معاً. بعض خدمات VPN توفر خوادم DNS مخصصة يمكنك تفعيلها، أو يمكنك استخدام VPN مع DNS-blocking للحصول على حماية مضاعفة. تأكد من عدم وجود تعارض في الإعدادات.",
        q4: "ما الفرق بين DNS لحظر الإعلانات وإضافات المتصفح؟",
        a4: "DNS يعمل على مستوى الشبكة لجميع التطبيقات على الجهاز، بينما إضافات المتصفح تعمل فقط داخل المتصفح. DNS لا يستهلك موارد جهازك لأنه يعمل على خوادم خارجية، كما يصعب تجاوزه مقارنةً بالإضافات.",
        q5: "ماذا أفعل إذا لم تعمل بعض المواقع؟",
        a5: "بعض المواقع قد تستخدم نطاقات إعلانية أساسية لمحتواها. يمكنك إضافة هذه النطاقات إلى قائمة الاستثناءات في إعدادات الخدمة. كما يُنصح بمسح ذاكرة التخزين المؤقتة DNS بعد تغيير الإعدادات.",
        q6: "هل الخدمة مجانية مدى الحياة؟",
        a6: "نعم، نقدم خطة مجانية كاملة تغطي احتياجات الاستخدام الشخصي. تتوفر أيضاً خطط مدفوعة للمستخدمين المتقدمين الذين يحتاجون إلى ميزات إضافية مثل الإحصائيات التفصيلية وتخصيص الفلاتر.",
        contactBadge: "اتصل بنا",
        contactTitle: "هل تحتاج مساعدة؟",
        contactDesc: "فريق الدعم جاهز لمساعدتك في أي وقت. تواصل معنا وسنرد عليك في أقرب وقت ممكن.",
        supportHours: "ساعات الدعم",
        nameLabel: "الاسم",
        emailLabel: "البريد الإلكتروني",
        subjectLabel: "الموضوع",
        subject1: "استفسار عام",
        subject2: "مشكلة تقنية",
        subject3: "ملاحظات واقتراحات",
        subject4: "تعاون تجاري",
        messageLabel: "الرسالة",
        sendMessage: "إرسال الرسالة",
        footerDesc: "حماية خصوصيتك على الإنترنت من خلال خدمات DNS المتقدمة لحظر الإعلانات والتتبع.",
        quickLinks: "روابط سريعة",
        docs: "الوثائق",
        blog: "المدونة",
        privacy: "سياسة الخصوصية",
        terms: "الشروط والأحكام",
        connect: "تواصل معنا",
        rights: "جميع الحقوق محفوظة.",
        copied: "تم نسخ العنوان بنجاح!"
    },
    en: {
        home: "Home",
        services: "Services",
        config: "Setup",
        stats: "Statistics",
        faq: "FAQ",
        contact: "Contact",
        heroBadge: "100% Free Protection",
        heroTitle: "Browse the Internet Without Ads",
        heroDesc: "Free and fast DNS service to block ads and tracking on all your devices. Enjoy a cleaner, faster, and more private browsing experience.",
        dnsServers: "Recommended DNS Servers",
        copy: "Copy",
        startGuide: "Start Setup",
        learnMore: "Learn More",
        fastSpeed: "Lightning Fast",
        secure: "Secure & Encrypted",
        free: "Completely Free",
        blocked: "Blocked",
        allowed: "Allowed",
        users: "Active Users",
        uptime: "Uptime",
        latency: "Latency",
        blockedAds: "Ads Blocked",
        servicesBadge: "Our Services",
        servicesTitle: "Complete Privacy Protection",
        servicesDesc: "We offer a comprehensive suite of services to protect your online experience from ads, tracking, and malware.",
        adBlocking: "Ad Blocking",
        adBlockingDesc: "Block all types of ads including banners, videos, and pop-ups for a pure browsing experience.",
        antiTracking: "Anti-Tracking",
        antiTrackingDesc: "Prevent activity trackers and social networks from collecting your data and tracking your behavior online.",
        malware: "Malware Protection",
        malwareDesc: "Block suspicious sites, malicious links, and viruses to protect your devices from security threats.",
        familyProtection: "Family Protection",
        familyProtectionDesc: "Filter inappropriate content for children and protect them from accessing harmful sites.",
        privacyPolicy: "No-Logs Policy",
        privacyPolicyDesc: "We don't log your data or online activity. Your privacy is our top priority.",
        speedBoost: "Speed Boost",
        speedBoostDesc: "With smart caching, web pages load faster and you save on data consumption.",
        configBadge: "Setup Guide",
        configTitle: "Set Up Service on Your Devices",
        configDesc: "Follow these simple steps to configure DNS service on your device and start protecting your privacy.",
        router: "Router",
        winStep1Title: "Open Network Settings",
        winStep1Desc: "Right-click on the network icon in the taskbar and select \"Network & Internet Settings\".",
        winStep2Title: "Choose Network Adapter",
        winStep2Desc: "Go to \"Network adapter\" and select your active connection (Wi-Fi or Ethernet).",
        winStep3Title: "IPv4 Properties",
        winStep3Desc: "Right-click and choose \"Properties\", then double-click on \"Internet Protocol Version 4\".",
        winStep4Title: "Enter DNS Servers",
        winStep4Desc: "Select \"Use the following DNS server addresses\" and enter:<br><strong>Preferred:</strong> 94.140.14.14<br><strong>Alternate:</strong> 94.140.15.15",
        macStep1Title: "System Preferences",
        macStep1Desc: "Go to the menu, then \"System Preferences\" and select \"Network\".",
        macStep2Title: "Choose Connection",
        macStep2Desc: "Select your active connection from the sidebar and click \"Details\".",
        macStep3Title: "DNS Settings",
        macStep3Desc: "Go to the \"DNS\" tab and click the Add (+) button.",
        macStep4Title: "Add Servers",
        macStep4Desc: "Add 94.140.14.14 and 94.140.15.15 then click \"OK\" and \"Apply\".",
        andStep1Title: "Wi-Fi Settings",
        andStep1Desc: "Open \"Settings\" then \"Network & Internet\" and select \"Wi-Fi\".",
        andStep2Title: "Edit Network",
        andStep2Desc: "Select the connected network and tap the pencil icon to edit it.",
        andStep3Title: "Advanced Options",
        andStep3Desc: "Scroll down and select \"Advanced options\" then \"IP settings\".",
        andStep4Title: "Static DNS",
        andStep4Desc: "Change the setting to \"Static\" and enter 94.140.14.14 in the DNS field.",
        iosStep1Title: "Settings",
        iosStep1Desc: "Open \"Settings\" and go to \"Wi-Fi\".",
        iosStep2Title: "Network Info",
        iosStep2Desc: "Tap the \"i\" icon next to the connected network.",
        iosStep3Title: "Configure DNS",
        iosStep3Desc: "Scroll down and select \"Configure DNS\" and choose \"Manual\".",
        iosStep4Title: "Add Server",
        iosStep4Desc: "Delete existing servers and add 94.140.14.14 and 94.140.15.15.",
        linStep1Title: "Edit Settings",
        linStep1Desc: "Open Terminal and run: sudo nano /etc/systemd/resolved.conf",
        linStep2Title: "Add Servers",
        linStep2Desc: "Add the line: DNS=94.140.14.14 in the [Resolve] section.",
        linStep3Title: "Restart",
        linStep3Desc: "Save the file and restart the service: sudo systemctl restart systemd-resolved",
        linStep4Title: "Verify",
        linStep4Desc: "Check the settings with: systemd-resolve --status | grep DNS",
        rouStep1Title: "Login",
        rouStep1Desc: "Open your browser and enter the router address (usually 192.168.1.1) and login.",
        rouStep2Title: "Internet Settings",
        rouStep2Desc: "Look for \"WAN\" or \"Internet settings\" section in the router menu.",
        rouStep3Title: "DNS Servers",
        rouStep3Desc: "Enter your custom DNS servers instead of the default: 94.140.14.14 and 94.140.15.15",
        rouStep4Title: "Save & Restart",
        rouStep4Desc: "Save the settings and restart the router to apply changes.",
        statsBadge: "Live Statistics",
        statsTitle: "Network & Browsing Performance",
        statsDesc: "Track blocked traffic and understand usage patterns to improve your online experience.",
        blockingStats: "Blocking Statistics",
        live: "Live",
        mon: "Mon",
        tue: "Tue",
        wed: "Wed",
        thu: "Thu",
        fri: "Fri",
        sat: "Sat",
        sun: "Sun",
        adsLegend: "Ads",
        trackersLegend: "Trackers",
        malwareLegend: "Malware",
        topBlocked: "Top Blocked",
        serverStatus: "Server Status",
        online: "Online",
        faqBadge: "FAQ",
        faqTitle: "Everything You Need to Know",
        faqDesc: "Answers to the most common questions about DNS service and ad blocking.",
        q1: "Is free DNS service safe to use?",
        a1: "Yes, reputable free DNS services are completely safe to use. We don't log your data or online activity, and we use HTTPS encryption for all connections. Always choose well-known and reputable services.",
        q2: "Will changing DNS affect internet speed?",
        a2: "On the contrary! Enhanced DNS services often speed up your browsing because they use servers close to you and provide smart caching. You may notice faster page loads and reduced latency.",
        q3: "Can I use DNS with VPN?",
        a3: "Yes, you can use both together. Some VPN services offer custom DNS servers you can enable, or you can use VPN with DNS-blocking for double protection. Make sure there are no conflicting settings.",
        q4: "What's the difference between DNS ad-blocking and browser extensions?",
        a4: "DNS works at the network level for all applications on the device, while browser extensions work only within the browser. DNS doesn't consume your device's resources because it runs on external servers, and it's harder to bypass than extensions.",
        q5: "What should I do if some websites don't work?",
        a5: "Some websites may use essential advertising domains for their content. You can add these domains to the exception list in your service settings. It's also recommended to clear the DNS cache after changing settings.",
        q6: "Is the service free for life?",
        a6: "Yes, we offer a complete free plan that covers personal use needs. Paid plans are also available for advanced users who need additional features like detailed statistics and filter customization.",
        contactBadge: "Contact Us",
        contactTitle: "Need Help?",
        contactDesc: "Our support team is ready to help you at any time. Contact us and we'll respond as soon as possible.",
        supportHours: "Support Hours",
        nameLabel: "Name",
        emailLabel: "Email",
        subjectLabel: "Subject",
        subject1: "General Inquiry",
        subject2: "Technical Issue",
        subject3: "Feedback & Suggestions",
        subject4: "Business Collaboration",
        messageLabel: "Message",
        sendMessage: "Send Message",
        footerDesc: "Protect your privacy online with our advanced DNS services for ad blocking and tracking prevention.",
        quickLinks: "Quick Links",
        docs: "Documentation",
        blog: "Blog",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
        connect: "Connect With Us",
        rights: "All rights reserved.",
        copied: "Address copied successfully!"
    }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'ar';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initMobileMenu();
    initConfigTabs();
    initFAQ();
    initContactForm();
    initSmoothScroll();
    initStatsAnimation();
    updateLanguage();
});

// Language Functions
function initLanguage() {
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
    }
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
    
    // Update HTML direction
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

function updateLanguage() {
    // Update static elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[currentLang][key];
            } else {
                el.innerHTML = translations[currentLang][key];
            }
        }
    });
    
    // Update language switcher button
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        const langCurrent = langSwitch.querySelector('.lang-current');
        if (langCurrent) {
            langCurrent.textContent = currentLang === 'ar' ? 'العربية' : 'English';
        }
    }
}

// Mobile Menu
function initMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
}

// Configuration Tabs
function initConfigTabs() {
    const tabs = document.querySelectorAll('.config-tab');
    const panels = document.querySelectorAll('.config-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const platform = this.getAttribute('data-platform');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update active panel
            panels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.getAttribute('data-platform') === platform) {
                    panel.classList.add('active');
                }
            });
        });
    });
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function() {
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Contact Form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = currentLang === 'ar' ? 'جاري الإرسال...' : 'Sending...';
            submitBtn.disabled = true;
            
            setTimeout(function() {
                submitBtn.textContent = currentLang === 'ar' ? 'تم الإرسال!' : 'Sent!';
                submitBtn.style.backgroundColor = '#22C55E';
                
                setTimeout(function() {
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }, 1500);
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navLinks = document.querySelector('.nav-links');
                const mobileMenu = document.getElementById('mobileMenu');
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenu.classList.remove('active');
                }
            }
        });
    });
}

// Copy DNS Function
function copyDNS(ip) {
    navigator.clipboard.writeText(ip).then(function() {
        showToast();
    }).catch(function() {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast();
    });
}

// Toast Notification
function showToast() {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(function() {
            toast.classList.remove('show');
        }, 2500);
    }
}

// Stats Animation
function initStatsAnimation() {
    const statNumbers = document.querySelectorAll('.stat-number[data-count]');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

function animateValue(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(target * easeOutQuart);
        
        element.textContent = current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = target.toLocaleString();
        }
    }
    
    requestAnimationFrame(update);
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Active Navigation Link on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
