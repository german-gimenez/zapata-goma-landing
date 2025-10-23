document.addEventListener('DOMContentLoaded', function() {
    // Efecto glitch para el título
    function createGlitchEffect() {
        const title = document.querySelector('.hero-title');
        const titleLines = document.querySelectorAll('.title-line');
        
        setInterval(() => {
            if (Math.random() < 0.1) {
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

    // Animación de formas geométricas
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

    // Efecto parallax
    function parallaxEffect() {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const bgShapes = document.querySelectorAll('.bg-shape');
            
            bgShapes.forEach((shape, index) => {
                const speed = 0.5 + index * 0.2;
                shape.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // Efectos hover brutalistas
    function brutalistHoverEffects() {
        const cards = document.querySelectorAll('.info-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translate(-8px, -8px) rotate(1deg)';
                card.style.boxShadow = '12px 12px 0px #FF6A00';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translate(0, 0) rotate(0deg)';
                card.style.boxShadow = '8px 8px 0px #FF6A00';
            });
        });
    }

    // Efecto typewriter
    function typewriterEffect() {
        const subtitle = document.querySelector('.hero-subtitle');
        if (subtitle) {
            const text = subtitle.textContent;
            subtitle.textContent = '';
            let i = 0;
            
            const typeInterval = setInterval(() => {
                if (i < text.length) {
                    subtitle.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        }
    }

    // Cursor personalizado
    function customCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: #FF6A00;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', e => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(1.5)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
        });
    }

    // Efectos de vibración
    function vibrationEffects() {
        const elements = document.querySelectorAll('.info-card, .logo-favicon');
        
        elements.forEach(element => {
            element.addEventListener('click', () => {
                if (navigator.vibrate) {
                    navigator.vibrate([50, 30, 50]);
                }
                
                element.style.animation = 'none';
                element.offsetHeight; // Trigger reflow
                element.style.animation = 'pulse 0.3s ease-in-out';
            });
        });
    }

    // Carga progresiva
    function progressiveLoading() {
        const elements = document.querySelectorAll('.info-card, .hero-title, .hero-subtitle');
        
        elements.forEach((element, index) => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                element.style.transition = 'all 0.8s ease-out';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // Animación de entrada del logo
    function logoEntranceAnimation() {
        const logo = document.querySelector('.logo-favicon');
        if (logo) {
            logo.style.transform = 'translateX(-100px) rotate(-45deg)';
            logo.style.opacity = '0';
            
            setTimeout(() => {
                logo.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
                logo.style.transform = 'translateX(0) rotate(0deg)';
                logo.style.opacity = '1';
            }, 500);
        }
    }

    // Scroll suave
    function smoothScrolling() {
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
    }

    // Optimizaciones móviles
    function mobileOptimizations() {
        if (window.innerWidth <= 768) {
            const shapes = document.querySelectorAll('.geometric-shape');
            shapes.forEach(shape => {
                shape.style.opacity = '0.03';
            });
            
            const parallaxElements = document.querySelectorAll('.bg-element');
            parallaxElements.forEach(element => {
                element.style.animation = 'none';
            });
        }
    }

    // Carrusel de Categorías
    function initCategoryCarousel() {
        const track = document.querySelector('.carousel-track');
        const cards = document.querySelectorAll('.category-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        const indicators = document.querySelectorAll('.indicator');
        
        if (!track || !cards.length) return;
        
        let currentSlide = 0;
        const totalSlides = cards.length;
        let isAnimating = false;
        let autoSlideInterval;
        
        // Función para actualizar la posición del carrusel
        function updateCarousel() {
            if (isAnimating) return;
            isAnimating = true;
            
            const translateX = -currentSlide * 100;
            track.style.transform = `translateX(${translateX}%)`;
            
            // Actualizar indicadores
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
            
            // Actualizar números de categoría
            cards.forEach((card, index) => {
                const numberElement = card.querySelector('.category-number');
                if (numberElement) {
                    numberElement.textContent = `${index + 1} / ${totalSlides}`;
                }
            });
            
            setTimeout(() => {
                isAnimating = false;
            }, 600);
        }
        
        // Función para ir al siguiente slide
        function nextSlide() {
            if (isAnimating) return;
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
        
        // Función para ir al slide anterior
        function prevSlide() {
            if (isAnimating) return;
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }
        
        // Función para ir a un slide específico
        function goToSlide(slideIndex) {
            if (isAnimating || slideIndex === currentSlide) return;
            currentSlide = slideIndex;
            updateCarousel();
        }
        
        // Event listeners para los botones
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                resetAutoSlide();
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                resetAutoSlide();
            });
        }
        
        // Event listeners para los indicadores
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                goToSlide(index);
                resetAutoSlide();
            });
        });
        
        // Navegación con teclado
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                prevSlide();
                resetAutoSlide();
            } else if (e.key === 'ArrowRight') {
                nextSlide();
                resetAutoSlide();
            }
        });
        
        // Touch/Swipe support
        let startX = 0;
        let endX = 0;
        
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        }, { passive: true });
        
        track.addEventListener('touchmove', (e) => {
            endX = e.touches[0].clientX;
        }, { passive: true });
        
        track.addEventListener('touchend', () => {
            const threshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > threshold) {
                if (diff > 0) {
                    nextSlide();
                } else {
                    prevSlide();
                }
                resetAutoSlide();
            }
        }, { passive: true });
        
        // Auto-slide functionality
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                nextSlide();
            }, 5000); // Cambiar cada 5 segundos
        }
        
        function stopAutoSlide() {
            if (autoSlideInterval) {
                clearInterval(autoSlideInterval);
                autoSlideInterval = null;
            }
        }
        
        function resetAutoSlide() {
            stopAutoSlide();
            startAutoSlide();
        }
        
        // Pausar auto-slide cuando el mouse está sobre el carrusel
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoSlide);
            carouselContainer.addEventListener('mouseleave', startAutoSlide);
        }
        
        // Pausar auto-slide cuando la página no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoSlide();
            } else {
                startAutoSlide();
            }
        });
        
        // Inicializar
        updateCarousel();
        startAutoSlide();
        
        // Intersection Observer para animaciones cuando el carrusel entra en vista
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    startAutoSlide();
                } else {
                    stopAutoSlide();
                }
            });
        }, { threshold: 0.3 });
        
        if (carouselContainer) {
            observer.observe(carouselContainer);
        }
    }

    // Función para la animación Flip Words
    function initFlipWords() {
        const flipWords = document.querySelectorAll('.flip-word');
        if (!flipWords.length) return;

        let currentIndex = 0;
        const totalWords = flipWords.length;
        const flipInterval = 3000; // 3 segundos entre cambios

        function flipToNext() {
            // Remover clase active del elemento actual
            flipWords[currentIndex].classList.remove('active');
            flipWords[currentIndex].classList.add('exit');
            
            // Después de la animación de salida, cambiar al siguiente
            setTimeout(() => {
                flipWords[currentIndex].classList.remove('exit');
                
                // Mover al siguiente índice
                currentIndex = (currentIndex + 1) % totalWords;
                
                // Activar el siguiente elemento
                flipWords[currentIndex].classList.add('active');
            }, 300); // Mitad de la duración de la transición CSS
        }

        // Inicializar el primer elemento como activo
        flipWords[0].classList.add('active');

        // Comenzar la animación automática
        const flipTimer = setInterval(flipToNext, flipInterval);

        // Pausar animación cuando la página no está visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                clearInterval(flipTimer);
            } else {
                // Reiniciar el timer cuando la página vuelve a ser visible
                setTimeout(() => {
                    setInterval(flipToNext, flipInterval);
                }, 1000);
            }
        });

        // Intersection Observer para activar solo cuando está en vista
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Reactivar animación cuando entra en vista
                    if (!flipWords[currentIndex].classList.contains('active')) {
                        flipWords[currentIndex].classList.add('active');
                    }
                } else {
                    // Pausar cuando sale de vista
                    flipWords.forEach(word => {
                        word.classList.remove('active', 'exit');
                    });
                }
            });
        }, { threshold: 0.5 });

        const flipContainer = document.querySelector('.flip-words-container');
        if (flipContainer) {
            observer.observe(flipContainer);
        }
    }

    // Inicializar todas las funciones
    createGlitchEffect();
    animateShapes();
    parallaxEffect();
    brutalistHoverEffects();
    typewriterEffect();
    customCursor();
    vibrationEffects();
    progressiveLoading();
    logoEntranceAnimation();
    smoothScrolling();
    initCategoryCarousel();
    initFlipWords();
    mobileOptimizations();

    // Reinicializar optimizaciones móviles en resize
    window.addEventListener('resize', mobileOptimizations);
});