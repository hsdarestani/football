#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/opt/apex-xi"
REPO_URL="https://github.com/hsdarestani/football.git"

if ! command -v git >/dev/null 2>&1; then
  apt-get update && apt-get install -y git curl ca-certificates
fi

if ! command -v docker >/dev/null 2>&1; then
  curl -fsSL https://get.docker.com | sh
  systemctl enable --now docker
fi

if [ ! -d "$APP_DIR/.git" ]; then
  mkdir -p "$APP_DIR"
  git clone "$REPO_URL" "$APP_DIR"
else
  git -C "$APP_DIR" fetch origin main
  git -C "$APP_DIR" reset --hard origin/main
fi

cd "$APP_DIR"
docker compose up -d --build --remove-orphans

# The Caddyfile is bind-mounted, so Compose may keep the existing proxy
# container running after a config-only update. Explicitly validate and reload it.
docker compose exec -T caddy caddy validate --config /etc/caddy/Caddyfile --adapter caddyfile
docker compose exec -T caddy caddy reload --config /etc/caddy/Caddyfile --adapter caddyfile

docker image prune -f

echo "Apex XI deployed. Verify DNS for football.smarbiz.sbs and open https://football.smarbiz.sbs"
