const images = [
	'background01.jpg',
	'background02.jpg',
	'background03.jpg',
	'background04.jpg',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = ` img/${chosenImage}`;
document.querySelector('body').appendChild(bgImage);
