// Configuración de particles.js
particlesJS('particles-js', { // Función principal y el ID
    particles: { // Configuración de particulas
        number: { // cantidad
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },

        color: {
            value: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57']
        },

        shape: { // Forma
            type: 'circle'
        },

        opacity: {
            value: 0.7,
            random: true
        },

        size: {
            value: 4,
            random: true
        },

        line_linked: { // Conexiones
            enable: true,
            distance: 150,
            color: '#0000ff',
            opacity: 0.3,
            width: 1
        },

        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'bounce',
            bounce: false
        }
    },

    interactivity: { // Configuración de interacción
        detect_on: 'canvas', // Area de las particulas
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },

            onclick: {
                enable: true,
                mode: 'push'
            },

            resize: true // Adaptación
        },

        modes: { // Metodos de interacción
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.8
                }
            },

            push: {
                particles_nb: 6
            }
        }
    },

    retina_detect: true
});
