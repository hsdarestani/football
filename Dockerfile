FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY atlasgames.css /usr/share/nginx/html/atlasgames.css
COPY atlasgames.js /usr/share/nginx/html/atlasgames.js
COPY v7-fixes.js /usr/share/nginx/html/v7-fixes.js
RUN sed -i 's#</body>#<script src="/v7-fixes.js?v=1"></script></body>#' /usr/share/nginx/html/index.html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1
