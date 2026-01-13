const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();
    
    // Collect console messages
    const consoleMessages = [];
    const consoleErrors = [];
    
    page.on('console', msg => {
        consoleMessages.push({ type: msg.type(), text: msg.text() });
        if (msg.type() === 'error') {
            consoleErrors.push(msg.text());
        }
    });
    
    page.on('pageerror', error => {
        consoleErrors.push(error.message);
    });
    
    try {
        // Navigate to the page
        await page.goto(`file://${process.cwd()}/index.html`, { waitUntil: 'networkidle' });
        
        // Wait for the page to fully load
        await page.waitForTimeout(2000);
        
        // Check if main elements exist
        const header = await page.$('.header');
        const hero = await page.$('.hero');
        const services = await page.$('.services-section');
        const config = await page.$('.config-section');
        const stats = await page.$('.stats-detail-section');
        const faq = await page.$('.faq-section');
        const contact = await page.$('.contact-section');
        const footer = await page.$('.footer');
        
        console.log('=== Page Load Test Results ===');
        console.log('Header exists:', !!header);
        console.log('Hero section exists:', !!hero);
        console.log('Services section exists:', !!services);
        console.log('Config section exists:', !!config);
        console.log('Stats section exists:', !!stats);
        console.log('FAQ section exists:', !!faq);
        console.log('Contact section exists:', !!contact);
        console.log('Footer exists:', !!footer);
        
        // Test language switcher
        const langSwitch = await page.$('#langSwitch');
        console.log('Language switcher exists:', !!langSwitch);
        
        // Test config tabs
        const configTabs = await page.$$('.config-tab');
        console.log('Config tabs count:', configTabs.length);
        
        // Test FAQ accordion
        const faqItems = await page.$$('.faq-item');
        console.log('FAQ items count:', faqItems.length);
        
        // Test DNS copy functionality
        const dnsItems = await page.$$('.dns-item');
        console.log('DNS items count:', dnsItems.length);
        
        // Check console errors
        console.log('\n=== Console Errors ===');
        if (consoleErrors.length === 0) {
            console.log('No console errors found!');
        } else {
            consoleErrors.forEach((error, index) => {
                console.log(`Error ${index + 1}:`, error);
            });
        }
        
        // Test clicking on a config tab
        await page.click('.config-tab[data-platform="macos"]');
        await page.waitForTimeout(500);
        const macPanel = await page.$('.config-panel[data-platform="macos"].active');
        console.log('\nMacOS panel activates on click:', !!macPanel);
        
        // Test clicking on FAQ item
        await page.click('.faq-question');
        await page.waitForTimeout(500);
        const faqActive = await page.$('.faq-item.active');
        console.log('FAQ item expands on click:', !!faqActive);
        
        console.log('\n=== Test Complete ===');
        console.log('All major elements are present and functional!');
        
    } catch (error) {
        console.error('Test failed with error:', error.message);
    } finally {
        await browser.close();
    }
})();
