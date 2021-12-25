const clock = document.querySelector('#clock');

function getClock() {
	const curr = new Date();
	const hour = String(curr.getHours()).padStart(2, '0');
	const min = String(curr.getMinutes()).padStart(2, '0');
	const sec = String(curr.getSeconds()).padStart(2, '0');
	const time = `${hour}:${min}:${sec}`;
	clock.innerText = time;
}

getClock();
setInterval(getClock, 1000);
