# PrivacyGuard DNS - Configuration Guide

## Table of Contents

- [Windows](#windows)
- [macOS](#macos)
- [Linux](#linux)
- [Android](#android)
- [iOS/iPadOS](#ios-ipados)
- [WiFi Routers](#wifi-routers)
- [Smart TVs](#smart-tvs)
- [Gaming Consoles](#gaming-consoles)

---

## Windows

### Method 1: Settings App (Windows 10/11)

1. Open **Settings** (Win + I)
2. Navigate to **Network & Internet**
3. Click **Change adapter options**
4. Right-click your active network connection
5. Select **Properties**
6. Find and select **Internet Protocol Version 4 (TCP/IPv4)**
7. Click **Properties**
8. Select **Use the following DNS server addresses**
9. Enter:
   - Preferred DNS: `94.140.14.14`
   - Alternate DNS: `94.140.15.15`
10. For IPv6:
    - Preferred DNS: `2a10:50c0::ad1:ff`
11. Click **OK** to save

### Method 2: Command Prompt (Admin)

```powershell
# Set primary DNS
netsh interface ip set dns "Ethernet" static 94.140.14.14
netsh interface ip add dns "Ethernet" 94.140.15.15 index=2

# For WiFi adapter
netsh interface ip set dns "Wi-Fi" static 94.140.14.14
netsh interface ip add dns "Wi-Fi" 94.140.15.15 index=2

# Flush DNS cache
ipconfig /flushdns
```

### Method 3: PowerShell (Admin)

```powershell
# Get current interface
Get-NetAdapter | Where-Object {$_.Status -eq "Up"}

# Set DNS servers
Set-DnsClientServerAddress -InterfaceAlias "Ethernet" -ServerAddresses ("94.140.14.14","94.140.15.15")
Set-DnsClientServerAddress -InterfaceAlias "Wi-Fi" -ServerAddresses ("94.140.14.14","94.140.15.15")

# Clear cache
Clear-DnsClientCache
```

---

## macOS

### Method 1: System Preferences

1. Open **System Preferences**
2. Click **Network**
3. Select your active connection
4. Click **Details**
5. Go to **DNS** tab
6. Click **+** button
7. Add:
   - `94.140.14.14`
   - `94.140.15.15`
8. Click **OK**
9. Click **Apply**

### Method 2: Terminal

```bash
# For WiFi
networksetup -setdnsservers Wi-Fi 94.140.14.14 94.140.15.15

# For Ethernet
networksetup -setdnsservers Ethernet 94.140.14.14 94.140.15.15

# Flush DNS cache (Big Sur and later)
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder

# For older macOS versions
sudo killall -HUP mDNSResponder
```

---

## Linux

### systemd-resolved (Most Distributions)

1. Edit `/etc/systemd/resolved.conf`:

```bash
sudo nano /etc/systemd/resolved.conf
```

2. Update the file:

```ini
[Resolve]
DNS=94.140.14.14 94.140.15.15
FallbackDNS=8.8.8.8 8.8.4.4
DNSSEC=yes
Cache=yes
```

3. Restart the service:

```bash
sudo systemctl restart systemd-resolved.service
```

### NetworkManager (Ubuntu, Fedora, etc.)

1. Edit connection file:

```bash
sudo nano /etc/NetworkManager/system-connections/<connection-name>
```

2. Add under `[ipv4]`:

```ini
[ipv4]
method=auto
dns=94.140.14.14;94.140.15.15;
```

3. Restart NetworkManager:

```bash
sudo systemctl restart NetworkManager
```

### netplan (Ubuntu 18.04+)

1. Edit `/etc/netplan/*.yaml`:

```yaml
network:
  version: 2
  renderer: networkd
  ethernets:
    eth0:
      nameservers:
        addresses:
          - 94.140.14.14
          - 94.140.15.15
```

2. Apply changes:

```bash
sudo netplan apply
```

### dhclient

Edit `/etc/dhcp/dhclient.conf`:

```bash
prepend domain-name-servers 94.140.14.14, 94.140.15.15;
```

---

## Android

### Method 1: WiFi Settings (Android 9+)

1. Open **Settings**
2. Go to **Network & Internet**
3. Tap **Wi-Fi**
4. Long-press your connected network
5. Select **Modify network**
6. Select **Advanced options**
7. Change **IP settings** to **Static**
8. Enter DNS:
   - DNS 1: `94.140.14.14`
   - DNS 2: `94.140.15.15`
9. Tap **Save**

### Method 2: Private DNS Feature (Android 9+)

1. Open **Settings**
2. Go to **Network & Internet**
3. Tap **Private DNS**
4. Select **Private DNS provider hostname**
5. Enter: `dns.nextdns.io`
6. Tap **Save**

### Method 3: Third-Party Apps

- **AdGuard**: Official app with DNS filtering
- **NextDNS**: Official app with analytics
- **DNS Changer**: Simple DNS switching

---

## iOS/iPadOS

### Method 1: Settings App

1. Open **Settings**
2. Tap **Wi-Fi**
3. Tap the **i** icon next to your network
4. Tap **Configure DNS**
5. Select **Manual**
6. Delete existing servers
7. Add:
   - Server: `94.140.14.14`
   - Server: `94.140.15.15`
8. Tap **Save**

### Method 2: Profile Installation

1. Download configuration profile
2. Open **Settings**
3. Tap **Profile Downloaded**
4. Tap **Install**
5. Enter passcode
6. Tap **Install** again
7. Tap **Done**

---

## WiFi Routers

### General Steps

1. Access router admin panel:
   - Common addresses: `192.168.1.1`, `192.168.0.1`, `10.0.0.1`
2. Login with admin credentials
3. Navigate to:
   - **Internet** or **WAN** settings
   - **DNS Settings**
4. Set:
   - Primary DNS: `94.140.14.14`
   - Secondary DNS: `94.140.15.15`
5. Save and restart router

### Common Router Brands

| Brand | Admin Address | Default Login |
|-------|---------------|---------------|
| TP-Link | 192.168.0.1 | admin/admin |
| Netgear | 192.168.1.1 | admin/password |
| Linksys | 192.168.1.1 | admin/admin |
| ASUS | 192.168.1.1 | admin/admin |
| Huawei | 192.168.100.1 | admin/admin |

---

## Smart TVs

### Samsung Smart TV (Tizen)

1. Press **Home** button
2. Go to **Settings**
3. Select **Network**
4. Choose **Network Status**
5. Select **IP Settings**
6. Set DNS to **Enter manually**
7. Enter: `94.140.14.14`

### LG WebOS

1. Press **Settings** button
2. Go to **Network**
3. Select **Wi-Fi Connection**
4. Choose **Advanced Wi-Fi Settings**
5. Select **Edit**
6. Set **DNS** to **Manual**
7. Enter: `94.140.14.14`

### Android TV

1. Go to **Settings**
2. Select **Network & Internet**
3. Choose your network
4. Select **Advanced options**
5. Set **IP settings** to **Static**
6. Enter DNS: `94.140.14.14`

---

## Gaming Consoles

### PlayStation 5/4

1. Go to **Settings**
2. Select **Network**
3. Choose **Set Up Internet Connection**
4. Select your connection type
5. Choose **Custom**
6. Set **IP Address Settings** to **Automatic**
7. Set **DHCP Host Name** to **Do Not Specify**
8. Set **DNS Settings** to **Manual**
9. Enter:
   - Primary DNS: `94.140.14.14`
   - Secondary DNS: `94.140.15.15`
10. Set **MTU** to **Automatic**
11. Set **Proxy Server** to **Do Not Use**

### Xbox Series X/S/One

1. Press **Xbox** button
2. Go to **Settings**
3. Select **General**
4. Choose **Network Settings**
5. Select **Advanced Settings**
6. Choose **DNS Settings**
7. Set to **Manual**
8. Enter:
   - Primary DNS: `94.140.14.14`
   - Secondary DNS: `94.140.15.15`

---

## Verification

### Test Your Configuration

1. Visit [https://dnscheck.tools](https://dnscheck.tools)
2. The page should show our DNS servers
3. Test ad blocking by visiting ad-heavy sites

### Command Line Verification

```bash
# Windows
nslookup google.com

# macOS/Linux
dig google.com

# Should show our server IPs in the response
```

### Flush DNS Cache After Configuration

| OS | Command |
|----|---------|
| Windows | `ipconfig /flushdns` |
| macOS | `sudo dscacheutil -flushcache` |
| Linux | `sudo systemd-resolve --flush-caches` |
| Chrome | `chrome://net-internals/#dns` → Clear host cache |

---

## Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Slow internet | Try closer server or check ISP issues |
| Some sites don't load | Add to exception list |
| Configuration not applying | Flush DNS cache and restart |
| Can't access router | Check default gateway |

### Still Having Issues?

1. Verify DNS is correctly set
2. Flush DNS cache
3. Restart your device
4. Contact support: support@privacyguard.dns
