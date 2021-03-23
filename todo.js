document.addEventListener('DOMContentLoaded', function () {
  const todoForm = document.getElementById('todoForm');
  const todoList = document.getElementById('todoList');
  const todoInput = document.getElementById('todoInput');

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete';
    newTodo.innerText = todoInput.value;
    todoInput.value = '';
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
  });

  todoList.addEventListener('click', function (event) {
    const targetToLowerCase = event.target.tagName.toLowerCase();
    if (targetToLowerCase === 'li') {
      console.log(event);
      event.target.style.textDecoration = 'line-through';
    } else if (targetToLowerCase === 'button') {
      event.target.parentNode.remove();
    }
  });
});

localStorage.setItem('todoList', JSON.stringify(todoList));
