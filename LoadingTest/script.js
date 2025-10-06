// GSAP-based animation for ZEPHVION loading with rapid font changes

document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letter");
    const progressBar = document.querySelector(".progress-bar");

    // Array of font classes to cycle through
    const fontClasses = [
        'font-righteous', 'font-arial', 'font-times', 'font-courier',
        'font-helvetica', 'font-georgia', 'font-verdana', 'font-trebuchet',
        'font-impact', 'font-comic'
    ];

    let currentProgress = 0;
    let fontAnimationIntervals = [];

    // Function to rapidly change font for a specific letter
    function startFontAnimation(letter, delay = 0) {
        setTimeout(() => {
            let fontIndex = 0;
            const interval = setInterval(() => {
                // Remove all font classes
                letter.className = letter.className.replace(/font-\w+/g, '').trim();
                // Add current font class
                letter.classList.add(fontClasses[fontIndex]);
                fontIndex = (fontIndex + 1) % fontClasses.length;
            }, 50); // Change font every 50ms for rapid effect

            fontAnimationIntervals.push(interval);
        }, delay);
    }

    // Start font animations for each letter in sequence
    letters.forEach((letter, index) => {
        startFontAnimation(letter, index * 200); // 200ms delay between each letter
    });

    // Animate progress bar
    gsap.to(progressBar, {
        width: "100%",
        duration: 4,
        ease: "power2.inOut",
        onUpdate: function () {
            currentProgress = Math.round(this.progress() * 100);
        },
        onComplete: showPNGImage
    });
    // Function to show PNG image when progress reaches 100%
    function showPNGImage() {
        // Stop all font animations
        fontAnimationIntervals.forEach(interval => clearInterval(interval));

        const logoText = document.getElementById('logoText');
        const logoImageFull = document.getElementById('logoImageFull');

        // Hide all letters
        gsap.to(letters, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                // After text fades out, show the full PNG logo
                gsap.to(logoImageFull, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.5)",
                    onStart: () => logoImageFull.classList.add("glow")
                });
            }
        });
    }
});
