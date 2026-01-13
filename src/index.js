/**
 * PrivacyGuard DNS - Application Entry Point
 * 
 * This is the main entry point for the application.
 * All modules are imported and initialized here.
 */

// Import CSS styles
import './css/main.css';

// Import main application module
import App from './js/main.js';

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Create app instance and initialize
    const app = new App();
    app.init();
    
    // Make app available globally for debugging
    window.PrivacyGuardApp = app;
    
    console.log('PrivacyGuard DNS initialized successfully');
});
