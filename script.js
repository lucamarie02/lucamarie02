document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('platform-trigger');
    const overlay = document.getElementById('platform-overlay');
    const closeBtn = document.querySelector('.close-btn');

    // Öffnen des Overlays beim Klick auf platform02
    trigger.addEventListener('click', function() {
        overlay.classList.add('active');
    });

    // Schließen des Overlays beim Klick auf den Schließen-Button
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });

    // Optional: Schließen des Overlays beim Klick auf das Overlay selbst
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const trigger = document.getElementById('hochladen-trigger');
    const overlay = document.getElementById('hochladen-overlay');
    const closeBtn = document.querySelector('#hochladen-overlay .close-btn');


    // Öffnen des Overlays beim Klick auf den Hochladen-Trigger
    trigger.addEventListener('click', function() {
        overlay.classList.add('active');
    });

    // Schließen des Overlays beim Klick auf den Schließen-Button
    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('active');
    });

    // Schließen des Overlays beim Klick auf das Overlay selbst
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Element mit der ID 'shuffle-trigger' auswählen
    const shuffleTrigger = document.getElementById('shuffle-trigger');

    // Click-Event-Listener hinzufügen
    shuffleTrigger.addEventListener('click', () => {
        // Container mit den Items finden
        const container = document.querySelector('.container');
        
        // Alle Items in ein Array umwandeln
        const items = Array.from(container.children);
        
        // Items mischen
        for (let i = items.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            // Elemente neu anordnen
            container.appendChild(items[j]);
        }
    });
});

document.addEventListener("scroll", () => {
    const scrollHide = document.getElementById("scroll-hide");
    const triggerHeight = 100; // Höhe (in Pixel), ab der der Text verschwindet

    if (window.scrollY > triggerHeight) {
        scrollHide.classList.add("hidden");
    } else {
        scrollHide.classList.remove("hidden");
    }
});

window.addEventListener("scroll", function () {
    const header = document.querySelector(".container-head");
    if (window.scrollY > 50) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    // iPhone erkennen (nur mobile Safari)
    const isiPhone = /iPhone|iPad|iPod/.test(navigator.userAgent) && !window.MSStream;

    if (isiPhone) {
        document.querySelectorAll('.item').forEach(item => {
            let pressTimer;
            const overlay = item.querySelector('.overlay');

            item.addEventListener('touchstart', () => {
                pressTimer = setTimeout(() => {
                    overlay.style.display = 'flex'; // Overlay anzeigen
                }, 500); // 500ms für Long Press
            });

            item.addEventListener('touchend', () => {
                clearTimeout(pressTimer);
            });

            overlay.addEventListener('click', () => {
                overlay.style.display = 'none'; // Overlay ausblenden
            });
        });
    }
});

  
