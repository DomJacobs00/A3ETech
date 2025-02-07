import EmblaCarousel from 'https://cdn.jsdelivr.net/npm/embla-carousel/embla.carousel.umd.min.js';
import EmblaCarouselAutoplay from 'https://cdn.jsdelivr.net/npm/embla-carousel-autoplay/embla-carousel-autoplay.umd.min.js';



document.addEventListener("DOMContentLoaded", function () {
    const emblaNode = document.querySelector(".embla");
    const viewportNode = emblaNode.querySelector(".embla__viewport");
    const prevButton = emblaNode.querySelector(".embla__button--prev");
    const nextButton = emblaNode.querySelector(".embla__button--next");

    // Initialize Embla
    const embla = EmblaCarousel(viewportNode, { loop: true });

    // Autoplay
    const autoplay = EmblaCarouselAutoplay({ delay: 3000 });
    embla.use(autoplay);

    // Button Controls
    prevButton.addEventListener("click", embla.scrollPrev);
    nextButton.addEventListener("click", embla.scrollNext);
});