document.addEventListener("DOMContentLoaded", function () {
    console.log("Page loaded successfully");

    const logos = [
    'https://via.placeholder.com/150/0000FF/808080?text=Logo1',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Logo2',
    'https://via.placeholder.com/150/00FF00/000000?text=Logo3',
    'https://via.placeholder.com/150/FFFF00/0000FF?text=Logo4',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Logo5',
    'https://via.placeholder.com/150/0000FF/808080?text=Logo6',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Logo7',
    'https://via.placeholder.com/150/00FF00/000000?text=Logo8',
    'https://via.placeholder.com/150/FFFF00/0000FF?text=Logo9',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Logo10',
    'https://via.placeholder.com/150/0000FF/808080?text=Logo11',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Logo12',
    'https://via.placeholder.com/150/00FF00/000000?text=Logo13',
    'https://via.placeholder.com/150/FFFF00/0000FF?text=Logo14',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Logo15',
    'https://via.placeholder.com/150/0000FF/808080?text=Logo16',
    'https://via.placeholder.com/150/FF0000/FFFFFF?text=Logo17',
    'https://via.placeholder.com/150/00FF00/000000?text=Logo18',
    'https://via.placeholder.com/150/FFFF00/0000FF?text=Logo19',
    'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Logo20'
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
                console.log("Applied background image to slot", index, ":", selectedLogos[index]); // Log the image applied to each slot
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            }, { once: true });
        }, Math.random() * 2000); // Randomize the delay for the effect
    });
}
