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

    // Lightbox Elements
    const images = document.querySelectorAll('.slide-container img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Swipe Variables
    let startX, endX;

    // Functions
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

    function updateText(slideNumber) {
        infoTextContainers.forEach(container => container.style.display = 'none');
        konzeptTextContainers.forEach(container => container.style.display = 'none');

        const infoText = document.querySelector(`#text${slideNumber}`);
        const konzeptText = document.querySelector(`#konzept${slideNumber}`);

        if (infoText) infoText.style.display = 'block';
        if (konzeptText) konzeptText.style.display = 'block';
    }

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

    // Initialize the first slide's text
    updateText(1);

    // Event Listeners for Navigation
    nextBtn.addEventListener('click', goToNextSlide);
    prevBtn.addEventListener('click', goToPrevSlide);

    // Swipe functionality for mobile
    slides.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;  // Save start position
    });

    slides.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;  // Save end position

        // Determine swipe direction and navigate accordingly
        if (startX - endX > 50) {
            goToNextSlide();  // Swipe left, go to the next slide
        } else if (endX - startX > 50) {
            goToPrevSlide();  // Swipe right, go to the previous slide
        }
    });

    // Lightbox Functionality
    images.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.style.display = 'flex';
        });
    });

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

    // Setup Overlays
    setupOverlay(projektTitelTrigger, projektTitelOverlay);
    setupOverlay(studierendeTrigger, studierendeOverlay);
});
