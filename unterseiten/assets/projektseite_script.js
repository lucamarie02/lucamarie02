document.addEventListener('DOMContentLoaded', function() {
    // Slideshow Elements
    const slides = document.querySelector('.slides');
    const slideElements = document.querySelectorAll('.slide-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const infoTextContainers = document.querySelectorAll('.info-text-container');
    const konzeptTextContainers = document.querySelectorAll('.konzept-text-container');
    let currentIndex = 0;

    // Overlay Elements for Projects and Students
    const projektTitelTrigger = document.getElementById('projekttitel-trigger');
    const projektTitelOverlay = document.getElementById('projekttitel-overlay');
    const studierendeTrigger = document.getElementById('studierende-trigger');
    const studierendeOverlay = document.getElementById('studierende-overlay');

    // Slideshow Navigation Functions
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateText(currentIndex + 1);
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slideElements.length;
        updateSlidePosition();
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slideElements.length) % slideElements.length;
        updateSlidePosition();
    }

    // Text Update Function
    function updateText(slideNumber) {
        infoTextContainers.forEach(container => container.style.display = 'none');
        konzeptTextContainers.forEach(container => container.style.display = 'none');

        const infoText = document.querySelector(`#text${slideNumber}`);
        const konzeptText = document.querySelector(`#konzept${slideNumber}`);

        if (infoText) infoText.style.display = 'block';
        if (konzeptText) konzeptText.style.display = 'block';
    }

    // Event Listeners for Navigation
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);

    // Lightbox Functionality
    const images = document.querySelectorAll('.slide-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

    // Overlay Management Functions
    function setupOverlay(trigger, overlay) {
        const closeButton = overlay.querySelector('.close-btn');

        trigger.addEventListener('click', () => {
            overlay.classList.add('active');
        });

        closeButton.addEventListener('click', () => {
            overlay.classList.remove('active');
        });

        overlay.addEventListener('click', (event) => {
            if (event.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }

    // Setup Overlays
    setupOverlay(projektTitelTrigger, projektTitelOverlay);
    setupOverlay(studierendeTrigger, studierendeOverlay);

    // Lightbox Close Functionality
    if (lightbox) {
        const closeLightboxBtn = lightbox.querySelector('.close-btn');
        
        closeLightboxBtn?.addEventListener('click', () => {
            lightbox.style.display = 'none';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    // Initialize First Slide
    updateText(1);
});