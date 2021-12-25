const loginForm = document.querySelector('.login-form');
const loginInput = loginForm.querySelector('.username');
const loginBtn = loginForm.querySelector('.button');
const greeting = document.getElementById('greeting');
// const gredding = document.querySelector('#gredding');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

const savedUsername = localStorage.getItem(USERNAME_KEY);

function onSubmit(event) {
	event.preventDefault();
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	paintGreetings();
}

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername) {
	// show the greddings
	paintGreetings();
} else {
	// show the form
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.onsubmit = onSubmit;
}
