# PrivacyGuard DNS - Ad Blocking Service

<div align="center">

![PrivacyGuard DNS Banner](docs/images/hero-banner.svg)

**Secure, Fast, and Free DNS Service for Ad Blocking and Privacy Protection**

[![CI/CD](https://github.com/username/privacyguard-dns/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/username/privacyguard-dns/actions/workflows/ci.yml)
[![codecov](https://codecov.io/gh/username/privacyguard-dns/branch/main/graph/badge.svg)](https://codecov.io/gh/username/privacyguard-dns)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docker Pulls](https://img.shields.io/docker/pulls/username/privacyguard-dns.svg)](https://hub.docker.com/r/username/privacyguard-dns)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

🌐 [Arabic Documentation](README.ar.md) | 📄 [English Documentation](README.md)

</div>

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Quick Start](#quick-start)
- [DNS Server Addresses](#dns-server-addresses)
- [Documentation](#documentation)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

PrivacyGuard DNS is a free, fast, and secure DNS service designed to block advertisements, trackers, and malicious websites across all your devices. Our service works at the network level, providing protection without requiring any software installation on your devices.

### Why PrivacyGuard DNS?

- **🔒 Privacy First**: We don't log your browsing activity or personal data
- **🚀 Lightning Fast**: Optimized servers with global presence ensure minimal latency
- **🛡️ Complete Protection**: Block ads, trackers, malware, and inappropriate content
- **🌐 Cross-Platform**: Works on Windows, macOS, Linux, Android, iOS, and routers
- **💰 Completely Free**: No hidden fees, no premium tiers, just free protection

---

## Features Preview

![Features Overview](docs/images/features.svg)

---

## Features

### Core Features

| Feature | Description |
|---------|-------------|
| **Ad Blocking** | Block all types of ads including banners, pop-ups, and video ads |
| **Anti-Tracking** | Prevent trackers from monitoring your online activity |
| **Malware Protection** | Block access to known malicious and phishing websites |
| **Family Protection** | Filter inappropriate content for a safe browsing experience |
| **Zero Logging** | We never record or share your browsing data |
| **Smart Caching** | Faster page loads with intelligent DNS caching |

### Platform Support

- ✅ Windows 10/11
- ✅ macOS (all versions)
- ✅ Linux (all major distributions)
- ✅ Android (6.0 and above)
- ✅ iOS/iPadOS (12 and above)
- ✅ WiFi Routers (all major brands)
- ✅ Smart TVs and Gaming Consoles

---

## Quick Start

### 1. Get Your DNS Addresses

Use our recommended DNS server addresses:

```
Primary IPv4:   94.140.14.14
Secondary IPv4: 94.140.15.15
Primary IPv6:   2a10:50c0::ad1:ff
```

### 2. Configure Your Device

Choose your device from the [Configuration Guide](docs/CONFIGURATION.md) for step-by-step instructions.

### 3. Verify Your Setup

Visit our [DNS Test Page](https://dnscheck.tools) to verify your configuration is working correctly.

---

## DNS Server Addresses

### Standard Servers (Recommended)

| Protocol | Address | Status |
|----------|---------|--------|
| IPv4 | `94.140.14.14` | ✅ Active |
| IPv4 | `94.140.15.15` | ✅ Active |
| IPv6 | `2a10:50c0::ad1:ff` | ✅ Active |

### Verification

To verify your DNS is configured correctly, run:

```bash
# On Windows
nslookup google.com

# On macOS/Linux
dig google.com

# Should return our server addresses
```

---

## Documentation

Comprehensive documentation is available in the [docs](docs/) directory:

| Document | Description |
|----------|-------------|
| [Configuration Guide](docs/CONFIGURATION.md) | Step-by-step setup for all platforms |
| [FAQ](docs/FAQ.md) | Frequently asked questions and answers |
| [Troubleshooting](docs/TROUBLESHOOTING.md) | Common issues and solutions |
| [API Documentation](docs/API.md) | API reference for developers |
| [Contributing Guide](CONTRIBUTING.md) | Guidelines for contributors |
| [Security Policy](docs/SECURITY.md) | Security practices and reporting |

---

## Dashboard Preview

![Dashboard Preview](docs/images/dashboard-preview.svg)

---

## Project Structure

```
PrivacyGuard-DNS/
├── 📂 .github/              # GitHub configuration
│   └── 📂 workflows/        # CI/CD workflows
├── 📂 dist/                 # Built files for distribution
├── 📂 docs/                 # Documentation
│   ├── CONFIGURATION.md     # Setup guides
│   ├── FAQ.md               # FAQ section
│   ├── TROUBLESHOOTING.md   # Common issues
│   ├── API.md               # API documentation
│   ├── SECURITY.md          # Security policy
│   ├── DOCKER.md            # Docker deployment guide
│   └── images/              # Documentation images
├── 📂 src/                  # Source files
│   ├── 📂 css/              # Stylesheets
│   │   └── main.css         # Main styles
│   └── 📂 js/               # JavaScript modules
│       ├── main.js          # Main application logic
│       ├── i18n.js          # Internationalization
│       └── utils.js         # Utility functions
├── 📂 tests/                # Test files
│   └── app.test.js          # Application tests
├── 📂 tools/                # Build and utility scripts
├── .dockerignore            # Docker ignore rules
├── .eslintrc.json           # ESLint configuration
├── .gitignore               # Git ignore rules
├── .prettierrc              # Prettier configuration
├── .babel.config.json       # Babel configuration
├── babel.config.json        # Babel configuration (alternative)
├── Dockerfile               # Docker image definition
├── docker-compose.yml       # Docker Compose configuration
├── nginx.conf               # Nginx configuration
├── package.json             # NPM dependencies and scripts
├── webpack.config.js        # Webpack configuration
├── LICENSE                  # MIT License
├── README.md                # English README
└── README.ar.md             # Arabic README
```

---

## Technology Stack

### Frontend

| Technology | Purpose | Version |
|------------|---------|---------|
| HTML5 | Semantic markup | Latest |
| CSS3 | Styling and animations | Latest |
| JavaScript (ES6+) | Interactivity | ES2022+ |
| CSS Variables | Theming | Latest |
| CSS Grid/Flexbox | Layout | Latest |

### Development Tools

| Tool | Purpose |
|------|---------|
| Webpack | Module bundler |
| Babel | JavaScript transpiler |
| ESLint | JavaScript linting |
| Prettier | Code formatting |
| Jest | Unit testing |
| Playwright | E2E testing |
| GitHub Actions | CI/CD pipeline |
| Docker | Containerization |
| Nginx | Web server |

---

## Browser Support

PrivacyGuard DNS website supports all modern browsers:

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |
| Samsung Internet | 15+ | ✅ Full Support |

---

## Contributing

We welcome contributions from the community! Please read our [Contributing Guide](CONTRIBUTING.md) before submitting pull requests.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/PrivacyGuard-DNS.git

# Navigate to project directory
cd PrivacyGuard-DNS

# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 PrivacyGuard DNS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

- **Website**: [https://privacyguard.dns](https://privacyguard.dns)
- **Email**: support@privacyguard.dns
- **GitHub**: [https://github.com/privacyguard/dns](https://github.com/privacyguard/dns)
- **Twitter**: [@PrivacyGuardDNS](https://twitter.com/PrivacyGuardDNS)

---

<div align="center">

**Protect Your Privacy, Browse Freely** 🛡️

Made with ❤️ for a safer internet

</div>
