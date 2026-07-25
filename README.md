# Apex XI — Player Management OS

High-fidelity concept application for a professional football player management agency.

## Current demo

- Public agency presentation and player roster
- Public player profiles with career data
- Interactive management command center
- Dedicated player portal mode
- Documents, messages, calendar, tasks, medical and transfer modules
- Responsive desktop and mobile UI
- Docker/Nginx production container
- Caddy reverse proxy with automatic HTTPS

## Deploy on the server

Before deployment, point the DNS `A` record for `football.smarbiz.sbs` to the server IP. Then connect to the server as root and run:

```bash
curl -fsSL https://raw.githubusercontent.com/hsdarestani/football/main/deploy.sh | bash
```

The app will be installed in `/opt/apex-xi`. Caddy will automatically request and renew the SSL certificate.

## Update an existing deployment

Run the same deployment command again. It fetches `main`, rebuilds the container and restarts the stack.

## Security note

Do **not** store server passwords, private keys or production secrets in this public repository. Use SSH keys or GitHub Actions Secrets. If a real password has ever been committed, rotate it immediately.

## Product status

This version is an interactive frontend concept/MVP demonstration. Real authentication, databases, encrypted document storage, chat, medical-data handling, audit logs and third-party integrations require backend implementation before real player data is used.
