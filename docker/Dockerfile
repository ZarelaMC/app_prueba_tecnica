FROM nginx:alpine

# Copiar configuración personalizada de NGINX
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Copiar archivos del sitio web
COPY paginas/pagina.html /usr/share/nginx/html/index.html
COPY css/ /usr/share/nginx/html/css/
COPY js/ /usr/share/nginx/html/js/
COPY img/ /usr/share/nginx/html/img/
