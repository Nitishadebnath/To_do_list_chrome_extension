const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

let todos = [];

function renderTodos() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span class="${todo.completed ? 'checked' : ''}">${todo.title}</span>
            <button class="delete" data-index="${index}">X</button>
        `;
        list.appendChild(li);
    });
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = input.value.trim();
    if (title !== '') {
        todos.push({ title, completed: false });
        input.value = '';
        renderTodos();
    }
});

list.addEventListener('click', (event) => {
    if (event.target.tagName.toLowerCase() === 'input') {
        const index = event.target.parentNode.querySelector('.delete').dataset.index;
        todos[index].completed = event.target.checked;
        renderTodos();
    } 
    else if (event.target.tagName.toLowerCase() =='button') {
        const index = event.target.dataset.index;
        todos.splice(index,1);
        renderTodos();
    } 
        
    });
