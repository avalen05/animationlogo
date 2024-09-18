document.addEventListener("DOMContentLoaded", function () {
    // Array of logo image URLs (replace these with your actual URLs)
    const logos = [
        'https://raw.githubusercontent.com/<your-username>/animationlogo/main/logo1.png',
        'https://raw.githubusercontent.com/<your-username>/animationlogo/main/logo2.png',
        'https://raw.githubusercontent.com/<your-username>/animationlogo/main/logo3.png',
        'https://raw.githubusercontent.com/<your-username>/animationlogo/main/logo4.png',
        'https://raw.githubusercontent.com/<your-username>/animationlogo/main/logo5.png',
        // Add the rest of your 20 logos here
    ];

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomLogos() {
        const shuffledLogos = shuffle([...logos]);
        return shuffledLogos.slice(0, 15); // Select 15 logos from the shuffled array
    }

    function randomizeLogos() {
        const selectedLogos = getRandomLogos();
        document.querySelectorAll('.logo-slot').forEach((element, index) => {
            setTimeout(function () {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
                element.addEventListener('transitionend', function () {
                    element.style.backgroundImage = `url(${selectedLogos[index]})`;
                    element.classList.remove('fade-out');
                    element.classList.add('fade-in');
                }, { once: true });
            }, Math.random() * 2000); // Randomize the delay for the effect
        });
    }

    setInterval(randomizeLogos, 5000);
    randomizeLogos();
});
