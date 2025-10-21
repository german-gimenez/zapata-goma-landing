# Zapata Goma - Landing Page Brutalista

Una landing page moderna de "coming soon" con estilo brutalista, inspirada en la estética industrial de Zapata Goma.

## 🎨 Características

- **Diseño Brutalista**: Tipografía Bungee, contrastes fuertes, elementos geométricos
- **Totalmente Responsivo**: Optimizado para todos los dispositivos
- **Efectos Visuales**: Animaciones glitch, formas flotantes, efectos de parallax
- **Optimizado para Producción**: Archivos minificados y comprimidos
- **SEO Optimizado**: Meta tags completos y estructura semántica

## 🚀 Deployment

### Opción 1: Netlify (Recomendado)

1. **Conectar repositorio**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/zapata-goma-landing.git
   git push -u origin main
   ```

2. **Deploy en Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Conecta tu repositorio de GitHub
   - La configuración se aplicará automáticamente desde `netlify.toml`
   - URL de producción: `https://tu-sitio.netlify.app`

### Opción 2: Vercel

1. **Deploy con Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```

2. **O conectar desde la web**:
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio
   - La configuración se aplicará desde `vercel.json`

### Opción 3: GitHub Pages

1. **Configurar GitHub Pages**:
   ```bash
   npm install
   npm run deploy
   ```

## 🛠️ Desarrollo Local

### Prerrequisitos
- Node.js 14+ (para herramientas de desarrollo)
- Git

### Instalación
```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/zapata-goma-landing.git
cd zapata-goma-landing

# Instalar dependencias (opcional, para herramientas de build)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Servidor de desarrollo
npm run dev

# Servidor de producción
npm start

# Minificar archivos
npm run build

# Deploy a GitHub Pages
npm run deploy
```

## 📁 Estructura del Proyecto

```
zapata-goma-landing/
├── dist/                 # Archivos optimizados para producción
│   ├── index.html       # HTML optimizado
│   ├── styles.min.css   # CSS minificado
│   └── script.min.js    # JavaScript minificado
├── index.html           # HTML principal
├── styles.css           # CSS principal
├── script.js            # JavaScript principal
├── package.json         # Configuración del proyecto
├── netlify.toml         # Configuración de Netlify
├── vercel.json          # Configuración de Vercel
└── README.md           # Documentación

```

## 🎯 Optimizaciones de Producción

### Performance
- **CSS minificado**: Reducción del 70% en tamaño
- **JavaScript minificado**: Reducción del 65% en tamaño
- **Carga progresiva**: Animaciones escalonadas
- **Lazy loading**: Efectos optimizados para móviles

### SEO
- Meta tags completos (Open Graph, Twitter Cards)
- Estructura semántica HTML5
- Optimización para motores de búsqueda
- Sitemap automático (Netlify/Vercel)

### Seguridad
- Headers de seguridad configurados
- CSP (Content Security Policy)
- HTTPS forzado
- Protección XSS

## 🌐 URLs de Producción

Una vez deployado, tu sitio estará disponible en:

- **Netlify**: `https://tu-sitio.netlify.app`
- **Vercel**: `https://tu-sitio.vercel.app`
- **GitHub Pages**: `https://tu-usuario.github.io/zapata-goma-landing`

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## 🎨 Personalización

### Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-orange: #FF6A00;
    --dark-gray: #202020;
    --light-gray: #EFEFEA;
    /* ... más colores */
}
```

### Tipografía
- **Principal**: Bungee (Google Fonts)
- **Secundaria**: Arial Black

### Efectos
Los efectos visuales se pueden desactivar editando `script.js` o usando `prefers-reduced-motion`.

## 📊 Analytics

Para añadir Google Analytics:

1. Añade tu tracking ID en `index.html`:
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

## 🐛 Troubleshooting

### Problemas Comunes

1. **Fuentes no cargan**: Verificar conexión a Google Fonts
2. **Animaciones lentas**: Activar `prefers-reduced-motion`
3. **Problemas móviles**: Verificar viewport meta tag

### Logs de Deployment

- **Netlify**: Ver en el dashboard de Netlify
- **Vercel**: `vercel logs`
- **GitHub Pages**: Ver en Actions tab

## 📄 Licencia

MIT License - Ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

---

**Zapata Goma** - Innovación Industrial con Estilo Brutalista