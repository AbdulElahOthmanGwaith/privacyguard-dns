/**
 * PrivacyGuard DNS - Internationalization Module
 *
 * Handles multi-language support with dynamic content translation
 * and automatic RTL/LTR layout switching.
 */

// Translation content for all supported languages
const translations = {
    ar: {
        // Navigation
        nav: {
            home: 'الرئيسية',
            services: 'الخدمات',
            config: 'التكوين',
            stats: 'الإحصائيات',
            faq: 'الأسئلة الشائعة',
            contact: 'اتصل بنا'
        },

        // Hero Section
        hero: {
            badge: 'حماية مجانية 100%',
            title: 'تصفح الإنترنت بدون إعلانات',
            description: 'خدمة DNS مجانية وسريعة لحظر الإعلانات والتتبع على جميع أجهزتك. تمتع بتجربة تصفح أنظف وأسرع وأكثر خصوصية.',
            dnsServers: 'خوادم DNS الموصى بها',
            copy: 'نسخ',
            startGuide: 'ابدأ التكوين',
            learnMore: 'اعرف المزيد',
            fastSpeed: 'سرعة فائقة',
            secure: 'آمن ومشفّر',
            free: 'مجاني تماماً',
            blocked: 'محجوب',
            allowed: 'مسموح'
        },

        // Stats
        stats: {
            users: 'مستخدم نشط',
            uptime: 'وقت التشغيل',
            latency: 'زمن الاستجابة',
            blockedAds: 'إعلان محجوب'
        },

        // Services
        services: {
            badge: 'خدماتنا',
            title: 'حماية شاملة لخصوصيتك',
            description: 'نقدم مجموعة متكاملة من الخدمات لحماية تجربتك على الإنترنت من الإعلانات والتتبع والبرمجيات الخبيثة.',
            adBlocking: 'حظر الإعلانات',
            adBlockingDesc: 'حظر جميع أنواع الإعلانات بما في ذلك الإعلانات العرضية والفيديوهات والمحتوى التطفلي للحصول على تجربة تصفح نقية.',
            antiTracking: 'مكافحة التتبع',
            antiTrackingDesc: 'منع متتبعات النشاط والشبكات الاجتماعية من جمع بياناتك وتتبع سلوكك على الإنترنت.',
            malware: 'حماية من البرمجيات الخبيثة',
            malwareDesc: 'حظر المواقع المشبوهة والروابط الخبيثة والفيروسات لحماية أجهزتك من التهديدات الأمنية.',
            familyProtection: 'حماية العائلة',
            familyProtectionDesc: 'تصفية المحتوى غير المناسب للأطفال وحمايتهم من الوصول إلى المواقع الضارة.',
            privacyPolicy: 'سياسة عدم التسجيل',
            privacyPolicyDesc: 'نحن لا نسجل بياناتك أو نشاطك على الإنترنت. خصوصيتك هي التزامنا الأول.',
            speedBoost: 'تسريع التصفح',
            speedBoostDesc: 'بفضل التخزين المؤقت الذكي، ستتحمل صفحات الويب بشكل أسرع وتوفر في استهلاك البيانات.'
        },

        // Configuration
        config: {
            badge: 'دليل التكوين',
            title: 'إعداد الخدمة على أجهزتك',
            description: 'اتبع هذه الخطوات البسيطة لتكوين خدمة DNS على جهازك والبدء بحماية خصوصيتك.',
            router: 'راوتر',
            step: 'خطوة'
        },

        // FAQ
        faq: {
            badge: 'الأسئلة الشائعة',
            title: 'كل ما تريد معرفته',
            description: 'إجابات على الأسئلة الأكثر شيوعاً حول خدمة DNS وحظر الإعلانات.',
            q1: 'هل خدمة DNS المجانية آمنة للاستخدام؟',
            a1: 'نعم، خدمات DNS المجانية الموثوقة آمنة تماماً للاستخدام. نحن لا نسجل بياناتك أو نشاطك على الإنترنت، ونستخدم تشفير HTTPS لجميع الاتصالات. تأكد دائماً من اختيار خدمات معروفة وذات سمعة جيدة.',
            q2: 'هل سيؤثر تغيير DNS على سرعة الإنترنت؟',
            a2: 'على العكس تماماً! خدمات DNS المحسنة غالباً ما تُسرّع تصفح الإنترنت لأنها تستخدم خوادم قريبة منك وتوفر تخزين مؤقت ذكي. قد تلاحظ تحميلاً أسرع للصفحات وانخفاضاً في زمن الاستجابة.',
            q3: 'هل يمكنني استخدام DNS مع VPN؟',
            a3: 'نعم، يمكنك استخدام كلاهما معاً. بعض خدمات VPN توفر خوادم DNS مخصصة يمكنك تفعيلها، أو يمكنك استخدام VPN مع DNS-blocking للحصول على حماية مضاعفة. تأكد من عدم وجود تعارض في الإعدادات.',
            q4: 'ما الفرق بين DNS لحظر الإعلانات وإضافات المتصفح؟',
            a4: 'DNS يعمل على مستوى الشبكة لجميع التطبيقات على الجهاز، بينما إضافات المتصفح تعمل فقط داخل المتصفح. DNS لا يستهلك موارد جهازك لأنه يعمل على خوادم خارجية، كما يصعب تجاوزه مقارنةً بالإضافات.',
            q5: 'ماذا أفعل إذا لم تعمل بعض المواقع؟',
            a5: 'بعض المواقع قد تستخدم نطاقات إعلانية أساسية لمحتواها. يمكنك إضافة هذه النطاقات إلى قائمة الاستثناءات في إعدادات الخدمة. كما يُنصح بمسح ذاكرة التخزين المؤقتة DNS بعد تغيير الإعدادات.',
            q6: 'هل الخدمة مجانية مدى الحياة؟',
            a6: 'نعم، نقدم خطة مجانية كاملة تغطي احتياجات الاستخدام الشخصي. تتوفر أيضاً خطط مدفوعة للمستخدمين المتقدمين الذين يحتاجون إلى ميزات إضافية مثل الإحصائيات التفصيلية وتخصيص الفلاتر.'
        },

        // Contact
        contact: {
            badge: 'اتصل بنا',
            title: 'هل تحتاج مساعدة؟',
            description: 'فريق الدعم جاهز لمساعدتك في أي وقت. تواصل معنا وسنرد عليك في أقرب وقت ممكن.',
            supportHours: 'ساعات الدعم',
            nameLabel: 'الاسم',
            emailLabel: 'البريد الإلكتروني',
            subjectLabel: 'الموضوع',
            subject1: 'استفسار عام',
            subject2: 'مشكلة تقنية',
            subject3: 'ملاحظات واقتراحات',
            subject4: 'تعاون تجاري',
            messageLabel: 'الرسالة',
            sendMessage: 'إرسال الرسالة'
        },

        // Footer
        footer: {
            description: 'حماية خصوصيتك على الإنترنت من خلال خدمات DNS المتقدمة لحظر الإعلانات والتتبع.',
            quickLinks: 'روابط سريعة',
            docs: 'الوثائق',
            blog: 'المدونة',
            privacy: 'سياسة الخصوصية',
            terms: 'الشروط والأحكام',
            connect: 'تواصل معنا',
            rights: 'جميع الحقوق محفوظة.'
        },

        // Misc
        misc: {
            copied: 'تم نسخ العنوان بنجاح!',
            online: 'متصل',
            live: 'مباشر'
        }
    },

    en: {
        // Navigation
        nav: {
            home: 'Home',
            services: 'Services',
            config: 'Setup',
            stats: 'Statistics',
            faq: 'FAQ',
            contact: 'Contact'
        },

        // Hero Section
        hero: {
            badge: '100% Free Protection',
            title: 'Browse the Internet Without Ads',
            description: 'Free and fast DNS service to block ads and tracking on all your devices. Enjoy a cleaner, faster, and more private browsing experience.',
            dnsServers: 'Recommended DNS Servers',
            copy: 'Copy',
            startGuide: 'Start Setup',
            learnMore: 'Learn More',
            fastSpeed: 'Lightning Fast',
            secure: 'Secure & Encrypted',
            free: 'Completely Free',
            blocked: 'Blocked',
            allowed: 'Allowed'
        },

        // Stats
        stats: {
            users: 'Active Users',
            uptime: 'Uptime',
            latency: 'Latency',
            blockedAds: 'Ads Blocked'
        },

        // Services
        services: {
            badge: 'Our Services',
            title: 'Complete Privacy Protection',
            description: 'We offer a comprehensive suite of services to protect your online experience from ads, tracking, and malware.',
            adBlocking: 'Ad Blocking',
            adBlockingDesc: 'Block all types of ads including banners, videos, and pop-ups for a pure browsing experience.',
            antiTracking: 'Anti-Tracking',
            antiTrackingDesc: 'Prevent activity trackers and social networks from collecting your data and tracking your behavior online.',
            malware: 'Malware Protection',
            malwareDesc: 'Block suspicious sites, malicious links, and viruses to protect your devices from security threats.',
            familyProtection: 'Family Protection',
            familyProtectionDesc: 'Filter inappropriate content for children and protect them from accessing harmful sites.',
            privacyPolicy: 'No-Logs Policy',
            privacyPolicyDesc: 'We don\'t log your data or online activity. Your privacy is our top priority.',
            speedBoost: 'Speed Boost',
            speedBoostDesc: 'With smart caching, web pages load faster and you save on data consumption.'
        },

        // Configuration
        config: {
            badge: 'Setup Guide',
            title: 'Set Up Service on Your Devices',
            description: 'Follow these simple steps to configure DNS service on your device and start protecting your privacy.',
            router: 'Router',
            step: 'Step'
        },

        // FAQ
        faq: {
            badge: 'FAQ',
            title: 'Everything You Need to Know',
            description: 'Answers to the most common questions about DNS service and ad blocking.',
            q1: 'Is free DNS service safe to use?',
            a1: 'Yes, reputable free DNS services are completely safe to use. We don\'t log your data or online activity, and we use HTTPS encryption for all connections. Always choose well-known and reputable services.',
            q2: 'Will changing DNS affect internet speed?',
            a2: 'On the contrary! Enhanced DNS services often speed up your browsing because they use servers close to you and provide smart caching. You may notice faster page loads and reduced latency.',
            q3: 'Can I use DNS with VPN?',
            a3: 'Yes, you can use both together. Some VPN services offer custom DNS servers you can enable, or you can use VPN with DNS-blocking for double protection. Make sure there are no conflicting settings.',
            q4: 'What\'s the difference between DNS ad-blocking and browser extensions?',
            a4: 'DNS works at the network level for all applications on the device, while browser extensions work only within the browser. DNS doesn\'t consume your device\'s resources because it runs on external servers, and it\'s harder to bypass than extensions.',
            q5: 'What should I do if some websites don\'t work?',
            a5: 'Some websites may use essential advertising domains for their content. You can add these domains to the exception list in your service settings. It\'s also recommended to clear the DNS cache after changing settings.',
            q6: 'Is the service free for life?',
            a6: 'Yes, we offer a complete free plan that covers personal use needs. Paid plans are also available for advanced users who need additional features like detailed statistics and filter customization.'
        },

        // Contact
        contact: {
            badge: 'Contact Us',
            title: 'Need Help?',
            description: 'Our support team is ready to help you at any time. Contact us and we\'ll respond as soon as possible.',
            supportHours: 'Support Hours',
            nameLabel: 'Name',
            emailLabel: 'Email',
            subjectLabel: 'Subject',
            subject1: 'General Inquiry',
            subject2: 'Technical Issue',
            subject3: 'Feedback & Suggestions',
            subject4: 'Business Collaboration',
            messageLabel: 'Message',
            sendMessage: 'Send Message'
        },

        // Footer
        footer: {
            description: 'Protect your privacy online with our advanced DNS services for ad blocking and tracking prevention.',
            quickLinks: 'Quick Links',
            docs: 'Documentation',
            blog: 'Blog',
            privacy: 'Privacy Policy',
            terms: 'Terms & Conditions',
            connect: 'Connect With Us',
            rights: 'All rights reserved.'
        },

        // Misc
        misc: {
            copied: 'Address copied successfully!',
            online: 'Online',
            live: 'Live'
        }
    }
};

/**
 * Internationalization Controller Class
 * Manages language switching and content translation
 */
class I18nController {
    /**
     * Initialize the i18n controller
     */
    constructor() {
        this.currentLanguage = localStorage.getItem('lang') || 'ar';
        this.translations = translations;
        this.initialized = false;
    }

    /**
     * Initialize the translation system
     */
    init() {
        if (this.initialized) {
            return;
        }

        this.applyLanguage(this.currentLanguage);
        this.bindLanguageSwitcher();
        this.initialized = true;
    }

    /**
     * Apply language settings
     * @param {string} lang - Language code ('ar' or 'en')
     */
    applyLanguage(lang) {
        // Validate language
        if (!this.translations[lang]) {
            console.warn(`Language '${lang}' not supported, falling back to 'ar'`);
            lang = 'ar';
        }

        this.currentLanguage = lang;

        // Update HTML attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Store preference
        localStorage.setItem('lang', lang);

        // Update all translatable elements
        this.updateContent();
    }

    /**
     * Update all translatable content on the page
     */
    updateContent() {
        const elements = document.querySelectorAll('[data-i18n]');
        const t = this.translations[this.currentLanguage];

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const value = this.getNestedValue(t, key);

            if (value !== undefined) {
                this.updateElementContent(element, value);
            }
        });

        // Update language switcher text
        this.updateLanguageSwitcher();
    }

    /**
     * Update a single element's content
     * @param {HTMLElement} element - Target element
     * @param {string} value - Translation value
     */
    updateElementContent(element, value) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = value;
        } else if (element.tagName === 'SELECT') {
            // Update select options
            const options = element.querySelectorAll('option');
            options.forEach(option => {
                const optionKey = option.getAttribute('data-i18n');
                if (optionKey) {
                    option.textContent = this.t(optionKey) || option.textContent;
                }
            });
        } else {
            element.innerHTML = value;
        }
    }

    /**
     * Update language switcher button text
     */
    updateLanguageSwitcher() {
        const switcher = document.getElementById('langSwitch');
        if (switcher) {
            const currentText = switcher.querySelector('.lang-current');
            if (currentText) {
                currentText.textContent = this.currentLanguage === 'ar' ? 'English' : 'العربية';
            }
        }
    }

    /**
     * Get nested object value by dot-notation key
     * @param {Object} obj - Source object
     * @param {string} key - Dot-notation key (e.g., 'hero.title')
     * @returns {*} Value at the key path
     */
    getNestedValue(obj, key) {
        return key.split('.').reduce((current, prop) => {
            return current && current[prop];
        }, obj);
    }

    /**
     * Toggle between Arabic and English
     */
    toggleLanguage() {
        const newLang = this.currentLanguage === 'ar' ? 'en' : 'ar';
        this.applyLanguage(newLang);

        // Dispatch custom event for other modules
        window.dispatchEvent(new CustomEvent('languageChange', {
            detail: { language: newLang }
        }));
    }

    /**
     * Bind language switcher event listener
     */
    bindLanguageSwitcher() {
        const switcher = document.getElementById('langSwitch');
        if (switcher) {
            switcher.addEventListener('click', () => this.toggleLanguage());
        }
    }

    /**
     * Get current language
     * @returns {string} Current language code
     */
    getLanguage() {
        return this.currentLanguage;
    }

    /**
     * Get translation for a specific key
     * @param {string} key - Dot-notation key
     * @returns {string|undefined} Translation value
     */
    t(key) {
        return this.getNestedValue(this.translations[this.currentLanguage], key);
    }
}

// Export for use in other modules
export default I18nController;
export { translations };
