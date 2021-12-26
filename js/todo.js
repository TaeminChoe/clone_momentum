const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

const TODOS_KEY = 'todos';
const BTN_IMG = 'fas fa-minus-circle';

let toDos = [];

function handleToDoSubmit(event) {
	event.preventDefault();
	const newTodo = {
		id: Date.now(),
		value: toDoInput.value,
	};
	toDoInput.value = '';
	createTodo(newTodo);
	toDos.push(newTodo);
	updateToDos();
}

function delToDO(event) {
	const parentLi = event.target.parentElement;
	toDos = toDos.filter(todo => todo.id !== Number(parentLi.id));
	parentLi.remove();
	updateToDos();
}

function updateToDos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function loadToDos() {
	const parsedToDos = JSON.parse(localStorage.getItem(TODOS_KEY));
	toDos = parsedToDos;
	parsedToDos.forEach(createTodo);
}

function createTodo(newTodo) {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const btn = document.createElement('i');
	btn.className = BTN_IMG;
	btn.style.margin = '5px';
	span.innerText = newTodo.value;
	li.id = newTodo.id;

	btn.addEventListener('click', delToDO);
	li.appendChild(span);
	li.appendChild(btn);
	toDoList.appendChild(li);
}

toDoForm.onsubmit = handleToDoSubmit;
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
	loadToDos();
}
