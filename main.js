    <script>
        // Variables globales
        const scenes = document.querySelectorAll('.scene');
        const dots = document.querySelectorAll('.dot');
        let currentScene = 0;
        
        // Inicialización
        document.addEventListener('DOMContentLoaded', () => {
            updateScene();
            setupResponsiveDemo();
            
            // Configurar eventos de teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') nextScene();
                if (e.key === 'ArrowLeft') prevScene();
            });
        });
        
        // Función para actualizar la escena visible
        function updateScene() {
            scenes.forEach((scene, index) => {
                if (index === currentScene) {
                    scene.classList.add('active');
                    dots[index].classList.add('active');
                } else {
                    scene.classList.remove('active');
                    dots[index].classList.remove('active');
                }
            });
            
            // Efectos especiales
            if (currentScene === 3) {
                document.getElementById('responsiveDemo').classList.add('shake');
                setTimeout(() => {
                    document.getElementById('responsiveDemo').classList.remove('shake');
                }, 1000);
            }
        }
        
        // Navegación
        function nextScene() {
            if (currentScene < scenes.length - 1) {
                currentScene++;
                updateScene();
            }
        }
        
        function prevScene() {
            if (currentScene > 0) {
                currentScene--;
                updateScene();
            }
        }
        
        function goToScene(index) {
            currentScene = index;
            updateScene();
        }
        
        function restartPresentation() {
            currentScene = 0;
            updateScene();
        }
        
        // Demo responsivo interactivo
        function setupResponsiveDemo() {
            const demo = document.getElementById('responsiveDemo');
            // Obtener las variables CSS para usarlas en JavaScript
            const cssVars = getComputedStyle(document.documentElement);
            
            function updateDemo() {
                const width = window.innerWidth;
                
                if (width < 480) {
                    demo.textContent = "Modo Móvil 📱";
                    demo.style.backgroundColor = cssVars.getPropertyValue('--cn-green');
                } else if (width < 768) {
                    demo.textContent = "Modo Tablet 💻";
                    demo.style.backgroundColor = cssVars.getPropertyValue('--cn-blue');
                } else if (width < 1024) {
                    demo.textContent = "Modo Pequeño Escritorio 🖥️";
                    demo.style.backgroundColor = cssVars.getPropertyValue('--cn-purple');
                } else {
                    demo.textContent = "Modo Escritorio Grande 🏢";
                    demo.style.backgroundColor = cssVars.getPropertyValue('--cn-red');
                }
            }
            
            // Actualizar al cargar y al cambiar tamaño
            updateDemo();
            window.addEventListener('resize', updateDemo);
        }
        
        // Efectos aleatorios para los personajes
        setInterval(() => {
            const characters = document.querySelectorAll('.character');
            characters.forEach(char => {
                if (Math.random() > 0.7) {
                    char.style.transform = `translateY(${Math.random() * 20 - 10}px) rotate(${Math.random() * 20 - 10}deg)`;
                }
            });
        }, 2000);
    </script>