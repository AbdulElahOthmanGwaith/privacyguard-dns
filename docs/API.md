/**
 * PrivacyGuard DNS - API Reference
 * 
 * This document describes the available APIs for developers
 * who want to integrate with PrivacyGuard DNS services.
 * 
 * Version: 1.0.0
 * Last Updated: 2025-01-14
 */

# Table of Contents

1. [Overview](#overview)
2. [DNS-over-HTTPS (DoH)](#dns-over-https-doh)
3. [DNS-over-TLS (DoT)](#dns-over-tls-dot)
4. [REST API](#rest-api)
5. [Authentication](#authentication)
6. [Rate Limits](#rate-limits)
7. [Error Handling](#error-handling)
8. [Examples](#examples)

---

## Overview

PrivacyGuard DNS provides several APIs for developers:

| API Type | Protocol | Port | Use Case |
|----------|----------|------|----------|
| DoH | HTTPS | 443 | Encrypted DNS queries from web apps |
| DoT | TLS | 853 | Encrypted DNS queries from apps |
| REST API | HTTPS | 443 | User management, statistics |

---

## DNS-over-HTTPS (DoH)

### Endpoint

```
https://dns.nextdns.io/dns-query
```

### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` | string | Yes | Domain name to resolve |
| `type` | string | No | Record type (A, AAAA, MX, etc.) Default: A |
| `ct` | string | No | Content type (application/dns-json) |

### Request Example

```javascript
// JavaScript/TypeScript Example
async function queryDNS(name, type = 'A') {
    const url = `https://dns.nextdns.io/dns-query?name=${encodeURIComponent(name)}&type=${type}`;
    
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/dns-json'
        }
    });
    
    return response.json();
}

// Usage
queryDNS('example.com', 'A')
    .then(data => console.log(data))
    .catch(error => console.error(error));
```

### Response Format

```json
{
    "Status": 0,
    "TC": false,
    "RD": true,
    "RA": true,
    "AD": true,
    "CD": false,
    "Question": [
        {
            "name": "example.com.",
            "type": 1,
            "class": 1
        }
    ],
    "Answer": [
        {
            "name": "example.com.",
            "type": 1,
            "class": 1,
            "TTL": 3600,
            "data": "93.184.216.34"
        }
    ],
    "Authority": []
}
```

### Response Codes

| Code | Description |
|------|-------------|
| 0 | No error |
| 1 | Format error |
| 2 | Server failure |
| 3 | Name error (domain not found) |
| 4 | Not implemented |
| 5 | Refused |

---

## DNS-over-TLS (DoT)

### Endpoint

```
dns.nextdns.io:853
```

### Connection Example

```javascript
// Node.js DoT Client Example
const tls = require('tls');

const options = {
    host: 'dns.nextdns.io',
    port: 853,
    rejectUnauthorized: true
};

const socket = tls.connect(options, () => {
    console.log('Connected to DoT server');
    
    // DNS query in wire format
    const query = Buffer.from([
        0x00, 0x2c, // Transaction ID
        0x01, 0x00, // Flags (RD=1)
        0x00, 0x01, // Question count
        0x00, 0x00, // Answer count
        0x00, 0x00, // Authority count
        0x00, 0x00, // Additional count
        // Question section
        0x07, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65,
        0x03, 0x63, 0x6f, 0x6d, 0x00,
        0x00, 0x01, // Type A
        0x00, 0x01  // Class IN
    ]);
    
    socket.write(query);
});

socket.on('data', (data) => {
    console.log('Response:', data.toString('hex'));
    socket.end();
});

socket.on('error', (error) => {
    console.error('Error:', error);
});
```

---

## REST API

### Base URL

```
https://api.privacyguard.dns/v1
```

### Authentication

All API requests require authentication using API keys.

```http
Authorization: Bearer YOUR_API_KEY
```

### Endpoints

#### Get Account Information

```http
GET /account
Authorization: Bearer YOUR_API_KEY
```

**Response:**

```json
{
    "id": "acc_123456789",
    "email": "user@example.com",
    "plan": "free",
    "created_at": "2025-01-01T00:00:00Z",
    "quota": {
        "queries": 0,
        "limit": 300000
    }
}
```

#### Get Usage Statistics

```http
GET /statistics
Authorization: Bearer YOUR_API_KEY

Query Parameters:
- start_date: ISO 8601 date
- end_date: ISO 8601 date
- granularity: hourly | daily | weekly
```

**Response:**

```json
{
    "period": {
        "start": "2025-01-01T00:00:00Z",
        "end": "2025-01-14T23:59:59Z"
    },
    "data": {
        "total_queries": 1250000,
        "blocked_ads": 450000,
        "blocked_trackers": 180000,
        "blocked_malware": 50000,
        "queries_by_country": {
            "US": 450000,
            "DE": 250000,
            "GB": 150000
        }
    }
}
```

#### Get Blocked Domains

```http
GET /blocked-domains
Authorization: Bearer YOUR_API_KEY

Query Parameters:
- page: 1
- limit: 100
- category: ads | trackers | malware
```

**Response:**

```json
{
    "data": [
        {
            "domain": "ads.example.com",
            "category": "ads",
            "blocked_at": "2025-01-14T10:00:00Z",
            "block_count": 15420
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 100,
        "total": 12500
    }
}
```

#### Create Custom Blocklist

```http
POST /custom-blocklists
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
    "name": "My Blocklist",
    "domains": [
        "ads.example.com",
        "trackers.example.net"
    ]
}
```

**Response:**

```json
{
    "id": "bl_123456789",
    "name": "My Blocklist",
    "domain_count": 2,
    "created_at": "2025-01-14T10:00:00Z"
}
```

---

## Authentication

### Obtaining API Keys

1. Create an account at [https://privacyguard.dns](https://privacyguard.dns)
2. Navigate to Settings > API
3. Generate a new API key

### Using API Keys

```bash
# Using curl
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.privacyguard.dns/v1/account

# Using JavaScript
const apiKey = 'YOUR_API_KEY';
const response = await fetch('https://api.privacyguard.dns/v1/account', {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
});
```

---

## Rate Limits

| Plan | Requests/Day | Requests/Minute |
|------|--------------|-----------------|
| Free | 1,000 | 10 |
| Pro | 100,000 | 100 |
| Enterprise | Unlimited | 1,000 |

### Rate Limit Headers

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

---

## Error Handling

### Error Response Format

```json
{
    "error": {
        "code": "RATE_LIMIT_EXCEEDED",
        "message": "You have exceeded the rate limit",
        "details": {
            "retry_after": 60
        }
    }
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| AUTH_REQUIRED | 401 | Authentication required |
| INVALID_API_KEY | 401 | Invalid or expired API key |
| RATE_LIMIT_EXCEEDED | 429 | Rate limit exceeded |
| QUOTA_EXCEEDED | 403 | Monthly quota exceeded |
| INVALID_REQUEST | 400 | Invalid request parameters |
| SERVER_ERROR | 500 | Internal server error |

---

## Examples

### Complete DoH Example with Error Handling

```javascript
class PrivacyGuardDNS {
    constructor(apiKey = null) {
        this.baseUrl = 'https://dns.nextdns.io/dns-query';
        this.apiKey = apiKey;
    }
    
    async query(name, type = 'A') {
        try {
            const url = `${this.baseUrl}?name=${encodeURIComponent(name)}&type=${type}`;
            
            const response = await fetch(url, {
                headers: {
                    'Accept': 'application/dns-json'
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.Status !== 0) {
                throw new Error(`DNS error: ${this.getDNSErrorMessage(data.Status)}`);
            }
            
            return {
                domain: name,
                type: type,
                answers: data.Answer?.map(record => ({
                    name: record.name,
                    type: record.type,
                    ttl: record.TTL,
                    data: record.data
                })) || []
            };
            
        } catch (error) {
            console.error('DNS Query Error:', error);
            throw error;
        }
    }
    
    getDNSErrorMessage(status) {
        const errors = {
            1: 'Format error',
            2: 'Server failure',
            3: 'Name error (domain not found)',
            4: 'Not implemented',
            5: 'Refused'
        };
        return errors[status] || 'Unknown error';
    }
}

// Usage
const dns = new PrivacyGuardDNS();

async function test() {
    try {
        const result = await dns.query('example.com', 'A');
        console.log('DNS Result:', result);
    } catch (error) {
        console.error('Failed to query DNS:', error.message);
    }
}

test();
```

### Python DoH Example

```python
import requests

class PrivacyGuardDNS:
    def __init__(self):
        self.base_url = "https://dns.nextdns.io/dns-query"
    
    def query(self, name, record_type='A'):
        params = {
            'name': name,
            'type': record_type
        }
        
        headers = {
            'Accept': 'application/dns-json'
        }
        
        response = requests.get(
            self.base_url,
            params=params,
            headers=headers
        )
        
        response.raise_for_status()
        return response.json()

# Usage
dns = PrivacyGuardDNS()
result = dns.query('example.com', 'A')
print(result)
```

---

## SDKs and Libraries

| Language | Library | Repository |
|----------|---------|------------|
| JavaScript/TypeScript | @privacyguard/dns-sdk | github.com/privacyguard/dns-sdk-js |
| Python | privacyguard-dns | github.com/privacyguard/dns-sdk-python |
| Go | privacyguard-dns | github.com/privacyguard/dns-sdk-go |
| Rust | privacyguard-dns | github.com/privacyguard/dns-sdk-rust |

---

## Support

- **Documentation**: [docs.privacyguard.dns](https://docs.privacyguard.dns)
- **Email**: api-support@privacyguard.dns
- **GitHub Issues**: [github.com/privacyguard/dns/issues](https://github.com/privacyguard/dns/issues)

---

*This documentation is subject to change. Last updated: 2025-01-14*
