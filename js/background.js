const images = [
	'background01.jpg',
	'background02.jpg',
	'background03.jpg',
	'background04.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const body = document.querySelector('body');
body.style.backgroundImage = `url(./img/${chosenImage})`;
body.style.backgroundSize = '100%';
