# PrivacyGuard DNS - Docker Configuration

Development and deployment configurations using Docker.

## Table of Contents

- [Quick Start](#quick-start)
- [Development Environment](#development-environment)
- [Production Deployment](#production-deployment)
- [Customization](#customization)
- [Monitoring](#monitoring)

---

## Quick Start

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+
- 2GB RAM minimum

### Start Development Environment

```bash
# Clone the repository
git clone https://github.com/privacyguard/dns.git
cd PrivacyGuard-DNS

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## Development Environment

### Services Overview

| Service | Image | Port | Purpose |
|---------|-------|------|---------|
| web | Node.js 20 | 3000 | Development server |
| docs | Hugo | 1313 | Documentation site |
| test | Node.js 20 | - | Test runner |

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    image: node:20-alpine
    container_name: privacyguard-web
    working_dir: /app
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - node_modules:/app/node_modules
    environment:
      - NODE_ENV=development
      - CHOKIDAR_USEPOLLING=true
    command: npm run dev
    networks:
      - pgnetwork
    restart: unless-stopped

  docs:
    image: klakegg/hugo:0.121-ext-alpine
    container_name: privacyguard-docs
    working_dir: /src
    ports:
      - "1313:1313"
    volumes:
      - ./docs:/src
    command: server -D
    networks:
      - pgnetwork
    restart: unless-stopped

  test:
    image: node:20-alpine
    container_name: privacyguard-test
    working_dir: /app
    volumes:
      - .:/app
      - node_modules:/app/node_modules
    command: npm test
    networks:
      - pgnetwork
    profiles:
      - test

volumes:
  node_modules:

networks:
  pgnetwork:
    driver: bridge
```

---

## Production Deployment

### Production docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile.production
    container_name: privacyguard-web-prod
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NODE_ENV=production
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    networks:
      - pgnetwork
    restart: unless-stopped

  app:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: privacyguard-app
    environment:
      - NODE_ENV=production
      - PORT=3000
    networks:
      - pgnetwork
    restart: unless-stopped

networks:
  pgnetwork:
    driver: bridge
```

### Dockerfile

```dockerfile
# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Copy built files from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/src ./src

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

# Start application
CMD ["node", "dist/js/main.js"]
```

### Dockerfile.production

```dockerfile
# Multi-stage build for nginx serving static files
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production nginx image
FROM nginx:alpine AS production

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates (should be mounted)
# COPY ssl /etc/nginx/ssl

# Expose ports
EXPOSE 80 443

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:80/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

---

## Customization

### Environment Variables

Create a `.env` file:

```env
# Application
NODE_ENV=development
PORT=3000

# API Keys
NEXTDNS_API_KEY=your_api_key_here

# Analytics
GA_TRACKING_ID=UA-XXXXXXXXX-X

# Features
FEATURE_ANALYTICS=true
FEATURE_DARK_MODE=true
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name privacyguard.dns;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Static files
    root /usr/share/nginx/html;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # API proxy (optional)
    location /api/ {
        proxy_pass http://app:3000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## Monitoring

### Docker Stats

```bash
# View container stats
docker stats

# View specific container
docker stats privacyguard-web
```

### Logs

```bash
# View all logs
docker-compose logs

# View specific service logs
docker-compose logs web

# Follow logs
docker-compose logs -f
```

### Health Checks

```bash
# Check container health
docker inspect --format='{{.State.Health.Status}}' privacyguard-web

# View health check logs
docker inspect --format='{{range .State.Health.Log}}{{.Output}}{{end}}' privacyguard-web
```

---

## Docker Swarm (Optional)

### Deploy to Swarm

```bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy - docker-compose.swarm.yml privacyguard

# View services
docker service ls

# View logs
docker service logs privacyguard_web
```

### docker-compose.swarm.yml

```yaml
version: '3.8'

services:
  web:
    image: privacyguard/web:latest
    ports:
      - "80:80"
      - "443:443"
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 3
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
    configs:
      - source: nginx_config
        target: /etc/nginx/nginx.conf
    networks:
      - pgnetwork

  app:
    image: privacyguard/app:latest
    environment:
      - NODE_ENV=production
    deploy:
      replicas: 2
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
    networks:
      - pgnetwork

configs:
  nginx_config:
    file: ./nginx.conf

networks:
  pgnetwork:
    driver: overlay
```

---

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Find process using port
lsof -i :3000

# Kill process
kill $(lsof -t -i:3000)
```

#### Container Won't Start

```bash
# Check logs
docker-compose logs web

# Check container status
docker-compose ps

# Rebuild containers
docker-compose up -d --build
```

#### Memory Issues

```bash
# Check memory usage
docker stats

# Increase Docker memory in Docker Desktop preferences
```

### Reset Everything

```bash
# Stop and remove all containers, networks, and volumes
docker-compose down -v

# Remove all images (optional)
docker system prune -a

# Start fresh
docker-compose up -d
```

---

## CI/CD Integration

### GitHub Actions Workflow

```yaml
name: Docker CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Build and test
        run: |
          docker-compose -f docker-compose.yml build test
          docker-compose -f docker-compose.yml run test
```

---

## Security Considerations

### Best Practices

1. **Don't hardcode secrets**: Use environment variables or secrets management
2. **Run as non-root**: Containers should run as non-root user
3. **Minimal images**: Use Alpine Linux for smaller attack surface
4. **Regular updates**: Keep base images updated
5. **Scan images**: Use Trivy or Snyk for vulnerability scanning

### Scanning for Vulnerabilities

```bash
# Install Trivy
brew install trivy

# Scan image
trivy image node:20-alpine

# Scan codebase
trivy fs .
```

---

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)
