document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully");

    const logos = [
        'https://static.wixstatic.com/media/ebb0f2_3de538a79c4a403b98cf0e5471286a0e~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_eee326a658f14f46979b3b1e14da4b98~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_f1b5701d0dc94f5cbbb4a29e30db39f0~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_fa000a70fe464649ad074ea65024ba3c~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_49d0171fa5884b559535cedb12e151a9~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_5ad1e60b50314890a862f2e1b80c2d90~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_3f6e2763979540d7aaa25e482f6770bb~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_5408e4b56ce349dea8e41a4cafe76023~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_1b540bc307404b5da182ce620ac2d19d~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_dc5e29aebac34d0a80ff26f26bc8328d~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_e196be2ab1c447b8a5ed41afc2420c1e~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_eedc40263f8b49f5907d99796fa5950a~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_7ea5f3b6f6a74c3f81032e084b159fce~mv2.webp',
        'https://static.wixstatic.com/media/ebb0f2_2467934e3242406d86ada1897216c242~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_8cabc54f6c6040d188934cdcef2beb55~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_950d2470009e478591c2b9d3c295ddb7~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_fa5c5c8cfce94b6fba3da743d255ef68~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_12034648dc6e471fad4c368f33cfebb4~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_a981d4de31364ce49fedddc36839b1d4~mv2.png',
        'https://static.wixstatic.com/media/ebb0f2_3ab9a3e131f0428bb2990099e1bf23f4~mv2.png'
    ];

    console.log("Logos array initialized", logos);

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function getRandomLogos() {
        const shuffledLogos = shuffle([...logos]);
        console.log("Shuffled logos", shuffledLogos);
        return shuffledLogos.slice(0, 15);
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
            }, Math.random() * 2000);
        });
    }

    setInterval(randomizeLogos, 5000);
    randomizeLogos();
});
