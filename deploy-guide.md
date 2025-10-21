# 🚀 Guía de Deployment - Zapata Goma Landing

## Opciones de Deployment Disponibles

### 1. 🟢 Netlify (Más Fácil - Recomendado)

#### Opción A: Drag & Drop (Sin Git)
1. Ve a [netlify.com](https://netlify.com) y crea una cuenta
2. Arrastra la carpeta `dist/` directamente al área de deploy
3. ¡Listo! Tu sitio estará en línea en segundos
4. URL: `https://random-name.netlify.app`

#### Opción B: Con Git (Recomendado para actualizaciones)
1. **Sube a GitHub**:
   ```bash
   # Crear repositorio en GitHub primero, luego:
   git remote add origin https://github.com/TU-USUARIO/zapata-goma-landing.git
   git branch -M main
   git push -u origin main
   ```

2. **Conectar en Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - "New site from Git" → GitHub → Selecciona tu repo
   - Build settings se configuran automáticamente desde `netlify.toml`
   - Deploy automático en cada push

### 2. 🔵 Vercel (Muy Rápido)

#### Con Git:
```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel

# Seguir las instrucciones en pantalla
```

#### Desde la Web:
1. Ve a [vercel.com](https://vercel.com)
2. "Import Project" → GitHub → Selecciona tu repo
3. Deploy automático

### 3. 🟡 GitHub Pages (Gratuito)

```bash
# Instalar dependencias
npm install

# Deploy
npm run deploy
```

Tu sitio estará en: `https://TU-USUARIO.github.io/zapata-goma-landing`

## 🎯 URLs de Ejemplo

Una vez deployado, tendrás URLs como:
- **Netlify**: `https://zapata-goma.netlify.app`
- **Vercel**: `https://zapata-goma.vercel.app`
- **GitHub Pages**: `https://tu-usuario.github.io/zapata-goma-landing`

## 🔧 Configuración de Dominio Personalizado

### En Netlify:
1. Ve a "Domain settings" en tu dashboard
2. "Add custom domain" → Ingresa tu dominio
3. Configura DNS según las instrucciones
4. SSL se configura automáticamente

### En Vercel:
1. Ve a tu proyecto → "Settings" → "Domains"
2. Añade tu dominio personalizado
3. Configura DNS records
4. SSL automático

## 📊 Configurar Analytics

### Google Analytics:
1. Crea una cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu Tracking ID
3. Edita `index.html` y añade antes de `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_TRACKING_ID');
</script>
```

### Netlify Analytics (Pago):
- Se activa desde el dashboard de Netlify
- Datos más precisos que Google Analytics

## 🛡️ Configuración de Seguridad

### Headers de Seguridad (Ya configurados):
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ X-Content-Type-Options: nosniff
- ✅ Content-Security-Policy configurado

### SSL/HTTPS:
- ✅ Automático en Netlify y Vercel
- ✅ Forzado en todas las plataformas

## 🔄 Actualizaciones

### Con Git (Automático):
```bash
# Hacer cambios en tu código
git add .
git commit -m "Actualización: descripción del cambio"
git push

# Deploy automático en Netlify/Vercel
```

### Sin Git (Manual):
1. Hacer cambios localmente
2. Arrastrar carpeta `dist/` actualizada a Netlify
3. O usar `vercel` command para re-deploy

## 📱 Testing en Dispositivos

### URLs de Testing:
- **Desktop**: Abre la URL en navegadores principales
- **Mobile**: Usa herramientas de dev o dispositivos reales
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)

### Checklist Pre-Launch:
- [ ] Funciona en Chrome, Firefox, Safari, Edge
- [ ] Responsive en móviles y tablets
- [ ] Velocidad de carga < 3 segundos
- [ ] Meta tags correctos (SEO)
- [ ] Analytics funcionando
- [ ] SSL activo (candado verde)

## 🆘 Troubleshooting

### Problemas Comunes:

1. **"Build failed"**:
   - Verificar que todos los archivos estén en el repo
   - Revisar `netlify.toml` o `vercel.json`

2. **Fuentes no cargan**:
   - Verificar conexión a Google Fonts
   - Revisar CSP headers

3. **Animaciones lentas en móvil**:
   - Ya optimizado con `prefers-reduced-motion`
   - Efectos reducidos automáticamente

4. **404 en rutas**:
   - Configurado redirect en `netlify.toml`
   - SPA fallback en `vercel.json`

### Logs de Debug:
- **Netlify**: Dashboard → Deploy logs
- **Vercel**: `vercel logs` o dashboard
- **GitHub Pages**: Actions tab en GitHub

## 💰 Costos

### Gratis:
- ✅ Netlify: 100GB bandwidth/mes
- ✅ Vercel: 100GB bandwidth/mes  
- ✅ GitHub Pages: Ilimitado (repos públicos)

### Pago (Opcional):
- Netlify Pro: $19/mes (analytics, forms)
- Vercel Pro: $20/mes (más bandwidth)
- Dominio personalizado: ~$10-15/año

## 🎉 ¡Listo para Producción!

Tu landing page está optimizada y lista para recibir tráfico real:

- ⚡ Performance optimizado
- 📱 Totalmente responsive  
- 🔒 Seguro (HTTPS + headers)
- 🎨 Efectos visuales brutales
- 📊 Listo para analytics

**¡Felicidades! Tu sitio Zapata Goma está en producción! 🏭**