document.addEventListener('DOMContentLoaded', function () {
  const todoForm = document.getElementById('todoForm');
  const todoList = document.getElementById('todoList');
  const todoInput = document.getElementById('todoInput');
  const todos = JSON.parse(localStorage.getItem('todos')) || [];

  // Get from localStorage

  for (let i = 0; i < todos.length; i++) {
    // console.log('These are my todos', todos[i].name);
    let newTodo = document.createElement('li');
    let removeBtn = document.createElement('button');
    newTodo.innerText = todos[i].name;
    newTodo.dataset.index = i;
    removeBtn.innerText = 'Delete';
    if (!todos[i].completed) {
      newTodo.appendChild(removeBtn);
      todoList.appendChild(newTodo);
    }

    todoList.addEventListener('click', function (event) {
      console.log(event);
      const targetToLowerCase = event.target.tagName.toLowerCase();
      const deleteIndex = event.target.attributes['data-index'].value;
      console.log('what is this ', event);
      if (targetToLowerCase === 'li') {
        event.target.style.textDecoration = 'line-through';
        todos.splice(deleteIndex, 1);
        localStorage.setItem('todos', JSON.stringify(todos));
      } else if (targetToLowerCase === 'button') {
        event.target.parentNode.remove();
        // remove object with this key
      }
    });
  }

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    let newTodo = document.createElement('li');

    const task = {
      name: (newTodo.innerText = todoInput.value),
      completed: false,
    };
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete';
    todoInput.value = '';
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
    todos.push(task);

    // Save todos in localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  });
});
