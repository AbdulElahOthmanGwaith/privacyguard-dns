/**
 * PrivacyGuard DNS - Main Application
 * 
 * Main entry point for the PrivacyGuard DNS website.
 * Initializes all modules and handles global events.
 */

import I18nController from './i18n.js';
import { copyToClipboard, debounce, throttle, isInViewport, scrollToElement } from './utils.js';

// Initialize i18n controller
const i18n = new I18nController();

/**
 * Main Application Class
 */
class App {
    /**
     * Application constructor
     */
    constructor() {
        this.modules = {};
        this.initialized = false;
    }
    
    /**
     * Initialize the application
     */
    init() {
        if (this.initialized) {
            return;
        }
        
        console.log('🚀 PrivacyGuard DNS initializing...');
        
        // Initialize modules
        this.initI18n();
        this.initNavigation();
        this.initConfigTabs();
        this.initFAQ();
        this.initContactForm();
        this.initDNSCopy();
        this.initStatsAnimation();
        this.initSmoothScroll();
        this.initScrollEffects();
        
        // Mark as initialized
        this.initialized = true;
        console.log('✅ PrivacyGuard DNS initialized successfully');
        
        // Dispatch ready event
        window.dispatchEvent(new CustomEvent('appReady'));
    }
    
    /**
     * Initialize internationalization
     */
    initI18n() {
        i18n.init();
    }
    
    /**
     * Initialize mobile navigation
     */
    initNavigation() {
        const mobileMenu = document.getElementById('mobileMenu');
        const navLinks = document.querySelector('.nav-links');
        
        if (mobileMenu && navLinks) {
            mobileMenu.addEventListener('click', () => {
                navLinks.classList.toggle('active');
                mobileMenu.classList.toggle('active');
            });
        }
    }
    
    /**
     * Initialize configuration tabs
     */
    initConfigTabs() {
        const tabs = document.querySelectorAll('.config-tab');
        const panels = document.querySelectorAll('.config-panel');
        
        if (tabs.length === 0 || panels.length === 0) {
            return;
        }
        
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const platform = tab.getAttribute('data-platform');
                
                // Update active tab
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                
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
    
    /**
     * Initialize FAQ accordion
     */
    initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', () => {
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
    
    /**
     * Initialize contact form
     */
    initContactForm() {
        const form = document.getElementById('contactForm');
        
        if (!form) {
            return;
        }
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            // Validate form
            if (!this.validateForm(form)) {
                return;
            }
            
            // Show loading state
            submitBtn.textContent = i18n.t('contact.sending') || 'Sending...';
            submitBtn.disabled = true;
            
            try {
                // Simulate form submission
                await this.submitForm(form);
                
                // Show success
                submitBtn.textContent = i18n.t('contact.sent') || 'Sent!';
                submitBtn.style.backgroundColor = '#22C55E';
                
                // Reset form
                setTimeout(() => {
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.backgroundColor = '';
                    submitBtn.disabled = false;
                }, 2000);
                
            } catch (error) {
                console.error('Form submission error:', error);
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    /**
     * Validate form data
     * @param {HTMLFormElement} form - Form to validate
     * @returns {boolean} Validation result
     */
    validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;
        
        inputs.forEach(input => {
            if (!input.value.trim()) {
                this.showInputError(input);
                isValid = false;
            } else if (input.type === 'email' && !this.isValidEmail(input.value)) {
                this.showInputError(input);
                isValid = false;
            }
        });
        
        return isValid;
    }
    
    /**
     * Show input error state
     * @param {HTMLElement} input - Input element
     */
    showInputError(input) {
        input.style.borderColor = '#EF4444';
        input.addEventListener('input', function handler() {
            this.style.borderColor = '';
            this.removeEventListener('input', handler);
        }, { once: true });
    }
    
    /**
     * Validate email format
     * @param {string} email - Email to validate
     * @returns {boolean} Validation result
     */
    isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    /**
     * Submit form data
     * @param {HTMLFormElement} form - Form to submit
     * @returns {Promise} Submission result
     */
    async submitForm(form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Log form data (replace with actual API call)
        console.log('Form submitted:', data);
        
        // Simulate API call
        return new Promise(resolve => setTimeout(resolve, 1500));
    }
    
    /**
     * Initialize DNS copy functionality
     */
    initDNSCopy() {
        const dnsItems = document.querySelectorAll('.dns-item');
        
        dnsItems.forEach(item => {
            item.addEventListener('click', async () => {
                const valueElement = item.querySelector('.dns-value');
                
                if (valueElement) {
                    const success = await copyToClipboard(valueElement.textContent);
                    
                    if (success) {
                        this.showToast(i18n.t('misc.copied') || 'Copied successfully!');
                    }
                }
            });
        });
    }
    
    /**
     * Show toast notification
     * @param {string} message - Toast message
     */
    showToast(message) {
        const toast = document.getElementById('toast');
        
        if (!toast) {
            return;
        }
        
        const toastMessage = toast.querySelector('.toast-message');
        
        if (toastMessage) {
            toastMessage.textContent = message;
        }
        
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }
    
    /**
     * Initialize stats counter animation
     */
    initStatsAnimation() {
        const statNumbers = document.querySelectorAll('.stat-number[data-count]');
        
        if (statNumbers.length === 0) {
            return;
        }
        
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        statNumbers.forEach(stat => {
            observer.observe(stat);
        });
    }
    
    /**
     * Animate number counter
     * @param {HTMLElement} element - Counter element
     */
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'), 10);
        const duration = 2000;
        const start = performance.now();
        
        const update = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function (easeOutQuart)
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(target * easeOutQuart);
            
            element.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                element.textContent = target.toLocaleString();
            }
        };
        
        requestAnimationFrame(update);
    }
    
    /**
     * Initialize smooth scroll
     */
    initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                const targetId = link.getAttribute('href');
                
                if (targetId === '#') {
                    return;
                }
                
                e.preventDefault();
                
                const target = document.querySelector(targetId);
                
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    scrollToElement(target, headerHeight + 20);
                    
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
    
    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        const header = document.querySelector('.header');
        
        if (!header) {
            return;
        }
        
        // Header scroll effect
        window.addEventListener('scroll', throttle(() => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 100));
        
        // Active navigation link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a');
        
        if (sections.length === 0) {
            return;
        }
        
        window.addEventListener('scroll', throttle(() => {
            const headerHeight = header.offsetHeight;
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
        }, 100));
    }
}

// Create app instance
const app = new App();

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

// Export for testing
export default App;
export { app, i18n };
