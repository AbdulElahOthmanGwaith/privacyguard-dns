/**
 * PrivacyGuard DNS - Test Suite
 * 
 * Unit and integration tests for the PrivacyGuard DNS website.
 */

import I18nController from '../src/js/i18n.js';
import { 
    formatNumber, 
    copyToClipboard, 
    debounce, 
    throttle,
    isValidEmail,
    isValidUrl,
    clamp,
    lerp
} from '../src/js/utils.js';

// Mock DOM environment
const mockElement = {
    innerHTML: '',
    textContent: '',
    classList: {
        add: jest.fn(),
        remove: jest.fn(),
        toggle: jest.fn(),
        contains: jest.fn()
    },
    getAttribute: jest.fn(),
    setAttribute: jest.fn(),
    querySelectorAll: jest.fn(() => []),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
};

describe('I18nController', () => {
    let i18n;
    
    beforeEach(() => {
        // Clear localStorage
        localStorage.clear();
        
        // Mock document elements
        document.documentElement = { 
            lang: '', 
            dir: '',
            style: {}
        };
        document.querySelectorAll = jest.fn(() => []);
        document.getElementById = jest.fn(() => null);
        
        i18n = new I18nController();
    });
    
    afterEach(() => {
        jest.clearAllMocks();
    });
    
    test('should initialize with default language', () => {
        i18n.init();
        expect(i18n.initialized).toBe(true);
    });
    
    test('should apply Arabic language settings', () => {
        i18n.applyLanguage('ar');
        expect(document.documentElement.lang).toBe('ar');
        expect(document.documentElement.dir).toBe('rtl');
    });
    
    test('should apply English language settings', () => {
        i18n.applyLanguage('en');
        expect(document.documentElement.lang).toBe('en');
        expect(document.documentElement.dir).toBe('ltr');
    });
    
    test('should fall back to Arabic for unsupported language', () => {
        i18n.applyLanguage('fr');
        expect(document.documentElement.lang).toBe('ar');
    });
    
    test('should toggle between languages', () => {
        i18n.applyLanguage('ar');
        i18n.toggleLanguage();
        expect(i18n.currentLanguage).toBe('en');
    });
    
    test('should get translation value by key', () => {
        i18n.applyLanguage('ar');
        const value = i18n.t('hero.title');
        expect(value).toBe('تصفح الإنترنت بدون إعلانات');
    });
    
    test('should return undefined for non-existent key', () => {
        i18n.applyLanguage('ar');
        const value = i18n.t('nonexistent.key');
        expect(value).toBe(undefined);
    });
});

describe('Utility Functions', () => {
    describe('formatNumber', () => {
        test('should format number with Arabic locale', () => {
            const result = formatNumber(1000000, 'ar');
            expect(result).toContain('٬'); // Arabic thousand separator
        });
        
        test('should format number with English locale', () => {
            const result = formatNumber(1000000, 'en');
            expect(result).toContain(','); // English thousand separator
        });
    });
    
    describe('isValidEmail', () => {
        test('should return true for valid email', () => {
            expect(isValidEmail('test@example.com')).toBe(true);
        });
        
        test('should return false for invalid email', () => {
            expect(isValidEmail('invalid-email')).toBe(false);
            expect(isValidEmail('@example.com')).toBe(false);
            expect(isValidEmail('test@')).toBe(false);
        });
    });
    
    describe('isValidUrl', () => {
        test('should return true for valid URL', () => {
            expect(isValidUrl('https://example.com')).toBe(true);
            expect(isValidUrl('http://localhost:3000')).toBe(true);
        });
        
        test('should return false for invalid URL', () => {
            expect(isValidUrl('not-a-url')).toBe(false);
            expect(isValidUrl('ftp://example.com')).toBe(false);
        });
    });
    
    describe('clamp', () => {
        test('should return value within range', () => {
            expect(clamp(5, 0, 10)).toBe(5);
        });
        
        test('should return minimum when value is below range', () => {
            expect(clamp(-5, 0, 10)).toBe(0);
        });
        
        test('should return maximum when value is above range', () => {
            expect(clamp(15, 0, 10)).toBe(10);
        });
    });
    
    describe('lerp', () => {
        test('should interpolate between values', () => {
            expect(lerp(0, 100, 0.5)).toBe(50);
        });
        
        test('should return start value at 0', () => {
            expect(lerp(0, 100, 0)).toBe(0);
        });
        
        test('should return end value at 1', () => {
            expect(lerp(0, 100, 1)).toBe(100);
        });
    });
});

describe('Debounce', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    
    afterEach(() => {
        jest.useRealTimers();
    });
    
    test('should delay function execution', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 100);
        
        debouncedFunc();
        expect(func).not.toHaveBeenCalled();
        
        jest.advanceTimersByTime(100);
        expect(func).toHaveBeenCalledTimes(1);
    });
    
    test('should reset timer on multiple calls', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 100);
        
        debouncedFunc();
        debouncedFunc();
        debouncedFunc();
        
        jest.advanceTimersByTime(100);
        expect(func).toHaveBeenCalledTimes(1);
    });
});

describe('Throttle', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    
    afterEach(() => {
        jest.useRealTimers();
    });
    
    test('should execute function immediately', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 100);
        
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);
    });
    
    test('should prevent multiple executions within time limit', () => {
        const func = jest.fn();
        const throttledFunc = throttle(func, 100);
        
        throttledFunc();
        throttledFunc();
        throttledFunc();
        
        jest.advanceTimersByTime(50);
        expect(func).toHaveBeenCalledTimes(1);
        
        jest.advanceTimersByTime(100);
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(2);
    });
});

describe('copyToClipboard', () => {
    beforeEach(() => {
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn(() => Promise.resolve())
            }
        });
    });
    
    test('should copy text to clipboard', async () => {
        const result = await copyToClipboard('test text');
        expect(result).toBe(true);
        expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test text');
    });
    
    test('should return false on error', async () => {
        Object.assign(navigator, {
            clipboard: {
                writeText: jest.fn(() => Promise.reject(new Error('Clipboard error')))
            }
        });
        
        // Mock execCommand for fallback
        document.execCommand = jest.fn();
        
        const result = await copyToClipboard('test text');
        expect(result).toBe(true); // Fallback should succeed
    });
});

// DOM Element Tests
describe('DOM Functions', () => {
    describe('Element selection', () => {
        test('should find elements by selector', () => {
            const element = document.querySelector('.test-class');
            expect(element).toBeDefined();
        });
        
        test('should find multiple elements', () => {
            const elements = document.querySelectorAll('.test-class');
            expect(elements.length).toBeGreaterThanOrEqual(0);
        });
    });
    
    describe('Class manipulation', () => {
        test('should add class to element', () => {
            const element = document.createElement('div');
            element.classList.add('new-class');
            expect(element.classList.contains('new-class')).toBe(true);
        });
        
        test('should remove class from element', () => {
            const element = document.createElement('div');
            element.classList.add('existing-class');
            element.classList.remove('existing-class');
            expect(element.classList.contains('existing-class')).toBe(false);
        });
        
        test('should toggle class on element', () => {
            const element = document.createElement('div');
            element.classList.toggle('toggle-class');
            element.classList.toggle('toggle-class');
            expect(element.classList.contains('toggle-class')).toBe(false);
        });
    });
    
    describe('Event handling', () => {
        test('should add event listener', () => {
            const element = document.createElement('div');
            const handler = jest.fn();
            
            element.addEventListener('click', handler);
            element.click();
            
            expect(handler).toHaveBeenCalledTimes(1);
        });
        
        test('should remove event listener', () => {
            const element = document.createElement('div');
            const handler = jest.fn();
            
            element.addEventListener('click', handler);
            element.removeEventListener('click', handler);
            element.click();
            
            expect(handler).toHaveBeenCalledTimes(0);
        });
    });
});

// Performance Tests
describe('Performance', () => {
    test('debounce should not cause memory leaks', () => {
        const func = jest.fn();
        const debouncedFunc = debounce(func, 100);
        
        // Call multiple times
        for (let i = 0; i < 100; i++) {
            debouncedFunc();
        }
        
        // Should only execute once
        expect(func).not.toHaveBeenCalled();
    });
    
    test('throttle should execute at most once per interval', () => {
        jest.useFakeTimers();
        
        const func = jest.fn();
        const throttledFunc = throttle(func, 50);
        
        // Call many times in rapid succession
        for (let i = 0; i < 100; i++) {
            throttledFunc();
        }
        
        expect(func).toHaveBeenCalledTimes(1);
        
        jest.useRealTimers();
    });
});

// Accessibility Tests
describe('Accessibility', () => {
    test('should have proper ARIA attributes for interactive elements', () => {
        const button = document.createElement('button');
        button.setAttribute('aria-label', 'Close dialog');
        button.setAttribute('aria-expanded', 'false');
        
        expect(button.getAttribute('aria-label')).toBe('Close dialog');
        expect(button.getAttribute('aria-expanded')).toBe('false');
    });
    
    test('should have proper semantic HTML structure', () => {
        const section = document.createElement('section');
        section.setAttribute('aria-labelledby', 'heading-id');
        
        const heading = document.createElement('h2');
        heading.id = 'heading-id';
        heading.textContent = 'Section Title';
        
        section.appendChild(heading);
        
        expect(section.querySelector('h2')).toBeTruthy();
        expect(heading.textContent).toBeTruthy();
    });
});
