
    document.addEventListener('DOMContentLoaded', (event) => {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active', 'inactive');
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.add('inactive');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 5000); // Cambia de slide cada 5 segundos

        // Inicializa la primera slide
        showSlide(currentSlide);
    });

