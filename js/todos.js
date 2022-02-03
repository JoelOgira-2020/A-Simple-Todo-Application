const addTodo = document.querySelector('.add');
const ul = document.querySelector('.todos');
const search = document.querySelector('.search');


const generateTemplate = newTodo => {
    html = `
    <li class="list-group-item d-flex justify-content-between align-items-center my-2">
        <label for="">${newTodo}</label>
            <i class="fa fa-trash mx-4 delete" aria-hidden="true"></i>
    </li>
    `;

    ul.innerHTML += html;
}


// Adding a new Todo
addTodo.addEventListener('submit', event => {
    event.preventDefault();
    const newTodo = addTodo.add.value.trim();
    
    if (newTodo.length) {
        generateTemplate(newTodo);
        addTodo.reset();
    }
});

// Deleting a list item
ul.addEventListener('click', event => {
    if (event.target.tagName === 'I') {
        event.target.parentElement.remove();
    }
});

// The function matches the entered values with the one in the lists.
const filterTodos = term => {
    
    (Array.from(ul.children))
     .filter(todo => !todo.textContent.toLocaleUpperCase().includes(term))
     .forEach(todo => todo.classList.add('filtered')); 

    (Array.from(ul.children))
    .filter(todo => todo.textContent.toLocaleUpperCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// Searching Todos
search.addEventListener('keyup', () => {
    const term = search.search.value.trim().toLocaleUpperCase();
    filterTodos(term);
});


