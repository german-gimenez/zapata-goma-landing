// Efectos visuales y animaciones para la landing page brutalista
document.addEventListener('DOMContentLoaded', function() {
    
    // Efecto de glitch en el título principal
    function createGlitchEffect() {
        const title = document.querySelector('.hero-title');
        const titleLines = document.querySelectorAll('.title-line');
        
        setInterval(() => {
            if (Math.random() < 0.1) { // 10% de probabilidad cada segundo
                titleLines.forEach(line => {
                    line.style.transform += ' translateX(' + (Math.random() * 10 - 5) + 'px)';
                    line.style.filter = 'hue-rotate(' + (Math.random() * 360) + 'deg)';
                    
                    setTimeout(() => {
                        line.style.transform = line.style.transform.replace(/translateX\([^)]*\)/g, '');
                        line.style.filter = '';
                    }, 100);
                });
            }
        }, 1000);
    }
    
    // Efecto de movimiento de formas geométricas
    function animateShapes() {
        const shapes = document.querySelectorAll('.shape');
        const bgShapes = document.querySelectorAll('.bg-shape');
        
        shapes.forEach((shape, index) => {
            setInterval(() => {
                const randomX = Math.random() * 20 - 10;
                const randomY = Math.random() * 20 - 10;
                const currentTransform = shape.style.transform || '';
                
                shape.style.transform = currentTransform + ` translate(${randomX}px, ${randomY}px)`;
                
                setTimeout(() => {
                    shape.style.transform = currentTransform;
                }, 500);
            }, 3000 + index * 1000);
        });
    }
    
    // Efecto de parallax en elementos de fondo
    function parallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const bgShapes = document.querySelectorAll('.bg-shape');
            
            bgShapes.forEach((shape, index) => {
                const speed = 0.5 + index * 0.2;
                shape.style.transform += ` translateY(${scrolled * speed}px)`;
            });
        });
    }
    
    // Efecto de hover brutal en las tarjetas
    function brutalistHoverEffects() {
        const cards = document.querySelectorAll('.info-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'rotate(0deg) scale(1.1)';
                this.style.boxShadow = '15px 15px 0px #FF6A00, 30px 30px 0px #000000';
                this.style.transition = 'all 0.2s ease';
            });
            
            card.addEventListener('mouseleave', function() {
                const originalRotation = this.dataset.rotation || '-1deg';
                this.style.transform = `rotate(${originalRotation}) scale(1)`;
                this.style.boxShadow = '8px 8px 0px #FF6A00';
            });
        });
    }
    
    // Efecto de escritura para el subtítulo
    function typewriterEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        const text1 = 'UNA NUEVA EXPERIENCIA';
        const text2 = 'ESTÁ LLEGANDO';
        
        if (subtitle) {
            subtitle.innerHTML = '';
            
            let i = 0;
            const typeWriter1 = () => {
                if (i < text1.length) {
                    subtitle.innerHTML += text1.charAt(i);
                    i++;
                    setTimeout(typeWriter1, 100);
                } else {
                    subtitle.innerHTML += '<br>';
                    setTimeout(() => {
                        let j = 0;
                        const typeWriter2 = () => {
                            if (j < text2.length) {
                                subtitle.innerHTML += text2.charAt(j);
                                j++;
                                setTimeout(typeWriter2, 100);
                            } else {
                                // Añadir clase highlight al segundo texto
                                const lines = subtitle.innerHTML.split('<br>');
                                subtitle.innerHTML = `<p>${lines[0]}</p><p class="highlight">${lines[1]}</p>`;
                            }
                        };
                        typeWriter2();
                    }, 500);
                }
            };
            
            setTimeout(typeWriter1, 2000); // Esperar a que termine la animación del título
        }
    }
    
    // Efecto de cursor personalizado
    function customCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background-color: #FF6A00;
            border: 2px solid #000000;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        // Efecto en elementos interactivos
        const interactiveElements = document.querySelectorAll('a, button, .info-card, .logo-text');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.backgroundColor = '#000000';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.backgroundColor = '#FF6A00';
            });
        });
    }
    
    // Efecto de vibración en elementos
    function vibrateElements() {
        const vibrateElements = document.querySelectorAll('.title-line.accent');
        
        vibrateElements.forEach(element => {
            setInterval(() => {
                if (Math.random() < 0.05) { // 5% de probabilidad
                    element.style.animation = 'vibrate 0.3s ease-in-out';
                    setTimeout(() => {
                        element.style.animation = 'pulse 2s infinite alternate';
                    }, 300);
                }
            }, 1000);
        });
    }
    
    // Añadir animación de vibración al CSS
    const vibrateKeyframes = `
        @keyframes vibrate {
            0% { transform: skew(3deg) scale(1) translateX(0); }
            25% { transform: skew(3deg) scale(1.02) translateX(-2px); }
            50% { transform: skew(3deg) scale(1) translateX(2px); }
            75% { transform: skew(3deg) scale(1.02) translateX(-1px); }
            100% { transform: skew(3deg) scale(1) translateX(0); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = vibrateKeyframes;
    document.head.appendChild(style);
    
    // Efecto de carga progresiva
    function progressiveLoad() {
        const elements = document.querySelectorAll('.info-card, .shape, .footer-shape');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform += ' translateY(50px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.6s ease-out';
                element.style.opacity = '1';
                element.style.transform = element.style.transform.replace('translateY(50px)', 'translateY(0)');
            }, 3000 + index * 200);
        });
    }
    
    // Inicializar todos los efectos
    createGlitchEffect();
    animateShapes();
    parallaxEffect();
    brutalistHoverEffects();
    // typewriterEffect(); // Comentado para mantener el HTML original
    customCursor();
    vibrateElements();
    progressiveLoad();
    
    // Efecto de entrada para el logo
    const logo = document.querySelector('.logo-text');
    if (logo) {
        logo.style.transform = 'rotate(-5deg) scale(0)';
        setTimeout(() => {
            logo.style.transition = 'transform 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            logo.style.transform = 'rotate(-5deg) scale(1)';
        }, 500);
    }
    
    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Detectar dispositivos móviles y ajustar efectos
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        // Reducir efectos en móviles para mejor rendimiento
        document.querySelector('.custom-cursor')?.remove();
        
        // Simplificar animaciones en móviles
        const shapes = document.querySelectorAll('.shape, .bg-shape');
        shapes.forEach(shape => {
            shape.style.animation = 'none';
        });
    }
    
    // Optimización de rendimiento
    let ticking = false;
    function updateAnimations() {
        // Aquí se pueden añadir animaciones que necesiten ser actualizadas en cada frame
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateAnimations);
            ticking = true;
        }
    }
    
    // Event listeners optimizados
    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', requestTick);
    
    console.log('🔥 Landing page brutalista de Zapata Goma cargada correctamente');
});