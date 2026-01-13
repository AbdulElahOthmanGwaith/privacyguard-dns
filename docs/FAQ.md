# PrivacyGuard DNS - Frequently Asked Questions

## Table of Contents

- [General Questions](#general-questions)
- [Technical Questions](#technical-questions)
- [Privacy Questions](#privacy-questions)
- [Troubleshooting](#troubleshooting)

---

## General Questions

### Q1: What is PrivacyGuard DNS?

PrivacyGuard DNS is a free DNS service that blocks advertisements, trackers, and malicious websites at the network level. Instead of using your ISP's DNS or Google's DNS, you use our servers which filter out unwanted content before it reaches your device.

### Q2: Is PrivacyGuard DNS completely free?

Yes! PrivacyGuard DNS is 100% free with no hidden costs, no premium tiers, and no data limits. We believe everyone deserves a private and ad-free internet experience.

### Q3: How does DNS ad blocking work?

When you visit a website, your computer asks a DNS server for the website's IP address. Our DNS service checks each request against our blocklist. If the domain is known for ads, tracking, or malware, we block the request. Otherwise, we forward it to the real DNS server.

### Q4: What can PrivacyGuard block?

We block multiple categories:

- **Advertisements**: Banner ads, pop-ups, video ads, pre-roll ads
- **Trackers**: Analytics, fingerprinting, cross-site tracking
- **Malware**: Phishing sites, malicious downloads, botnets
- **Adult Content**: Adult websites and content (optional)

### Q5: Which devices are supported?

| Platform | Support | Notes |
|----------|---------|-------|
| Windows 10/11 | ✅ Full | All versions |
| macOS | ✅ Full | 10.15+ |
| Linux | ✅ Full | Ubuntu, Fedora, Debian, etc. |
| Android | ✅ Full | 6.0+ |
| iOS/iPadOS | ✅ Full | 12+ |
| WiFi Routers | ✅ Full | Most brands |
| Smart TVs | ✅ Limited | Samsung, LG, Android TV |
| Gaming Consoles | ✅ Limited | PS5/4, Xbox |

### Q6: How do I get started?

1. Choose your DNS addresses from our website
2. Configure your device or router
3. Clear your DNS cache
4. Enjoy ad-free browsing!

---

## Technical Questions

### Q7: What DNS addresses should I use?

**Standard Configuration:**

| Protocol | Address |
|----------|---------|
| Primary IPv4 | `94.140.14.14` |
| Secondary IPv4 | `94.140.15.15` |
| Primary IPv6 | `2a10:50c0::ad1:ff` |

### Q8: Will DNS affect my internet speed?

On the contrary! PrivacyGuard DNS can improve your browsing speed by:

- **Reducing page load time**: No ads to download
- **Smart caching**: Frequently accessed domains are cached
- **Optimized servers**: Servers close to you for lower latency

Most users report faster page loads after switching.

### Q9: Can I use PrivacyGuard DNS with a VPN?

Yes! You can use both together. There are two approaches:

**Option 1: DNS on Router**
Configure DNS on your router, then use VPN normally

**Option 2: VPN with DNS**
Some VPNs have their own DNS; disable it and use ours

**Note**: Some VPN services block custom DNS for security.

### Q10: What is the difference between DNS blocking and browser extensions?

| Aspect | DNS Blocking | Browser Extensions |
|--------|--------------|-------------------|
| Scope | All apps on device | Browser only |
| Performance | No device resource usage | Uses CPU/memory |
| Bypass resistance | Hard to bypass | Easy to disable |
| Setup | Per device/router | Per browser |
| Updates | Automatic | Manual |

### Q11: What is DNS-over-HTTPS (DoH)?

DoH encrypts your DNS queries using HTTPS, preventing anyone from seeing which websites you visit. It's more private than regular DNS.

**To enable DoH:**

| Browser | Setting Location |
|---------|-----------------|
| Chrome | Settings → Privacy → Use Secure DNS |
| Firefox | Settings → Network Settings → Enable DNS over HTTPS |
| Edge | Settings → Privacy → Use Secure DNS |

### Q12: What is DNSSEC?

DNSSEC adds digital signatures to DNS responses, ensuring you receive authentic data and not fake responses from attackers.

PrivacyGuard DNS has DNSSEC enabled by default.

---

## Privacy Questions

### Q13: Do you log my browsing history?

**No!** We have a strict no-logs policy:

- We don't record which websites you visit
- We don't store your IP address
- We don't track your activity
- We don't sell your data

### Q14: How do you make money if it's free?

Our service is supported by:

- **Donations**: User contributions
- **Grants**: Privacy-focused organizations
- **Enterprise Services**: Paid services for businesses

Your privacy is never compromised for revenue.

### Q15: Is my data shared with third parties?

**Absolutely not.** We never share, sell, or rent any user data to third parties. Our business model doesn't depend on selling data.

### Q16: Where are your servers located?

Our servers are distributed globally:

- **Europe**: Germany, Netherlands, UK
- **North America**: US East, US West
- **Asia**: Singapore, Japan

We automatically connect you to the nearest server for best performance.

### Q17: Can I use this for parental controls?

Yes! You can enable family protection to:

- Block adult content
- Filter inappropriate websites
- Protect children online

Configure this in your account settings.

---

## Troubleshooting

### Q18: Some websites aren't loading properly

This usually happens when a website uses the same domain for ads and content.

**Solution:**

1. Add the domain to your exception list
2. Or configure per-website exceptions in your account

### Q19: Configuration not taking effect

**Steps to fix:**

1. **Clear DNS cache:**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # macOS
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

2. **Restart your browser**

3. **Restart your device**

4. **Verify configuration:**
   ```bash
   nslookup google.com
   # Should show our IP addresses
   ```

### Q20: Speed is slower than before

**Possible causes:**

- Network congestion
- ISP throttling
- Server issues

**Solutions:**

1. Try a different DNS server
2. Check your internet connection
3. Use DoH for better routing
4. Contact support if issue persists

### Q21: I'm seeing ads still

**Checklist:**

1. ✅ DNS is properly configured
2. ✅ DNS cache is cleared
3. ✅ Browser cache is cleared
4. ✅ Browser extensions aren't interfering
5. ✅ Website isn't on your exception list

### Q22: How do I report a problem?

**Options:**

1. **Email**: support@privacyguard.dns
2. **GitHub Issues**: [Link to issues]
3. **Community Forum**: [Link to forum]

Include in your report:
- Device and OS version
- Browser (if applicable)
- Screenshot of the issue
- Steps to reproduce

### Q23: Can I create custom blocklists?

Yes! Premium users can:

- Create custom blocklists
- Add specific domains
- Import blocklists from other sources
- Schedule automatic updates

### Q24: How do I switch back to my old DNS?

**To revert to default DNS:**

1. **Windows**: Set DNS to "Obtain automatically"
2. **macOS**: Remove our DNS servers
3. **Router**: Set DNS to "Get automatically from ISP"
4. **Mobile**: Reset network settings

---

## Still Have Questions?

### Contact Us

- **Email**: support@privacyguard.dns
- **Documentation**: [docs.privacyguard.dns](https://docs.privacyguard.dns)
- **GitHub**: [github.com/privacyguard/dns](https://github.com/privacyguard/dns)

### Community

- **Forum**: [community.privacyguard.dns](https://community.privacyguard.dns)
- **Twitter**: [@PrivacyGuardDNS](https://twitter.com/PrivacyGuardDNS)
- **Discord**: [discord.gg/privacyguard](https://discord.gg/privacyguard)

---

## Quick Reference

### DNS Addresses

```
IPv4:  94.140.14.14 / 94.140.15.15
IPv6:  2a10:50c0::ad1:ff
DoH:   https://dns.nextdns.io
DoT:   dns.nextdns.io
```

### Support Email

support@privacyguard.dns

### Documentation

[docs.privacyguard.dns](https://docs.privacyguard.dns)
