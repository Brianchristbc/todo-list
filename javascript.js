const addButton = document.querySelector('.add-button');


const todoItem = document.getElementById('todo-input');

addButton.addEventListener('click', (e) => {
  addTodo();
})

todoItem.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
})



function addTodo() {
  const todoElementRadio = document.createElement('input');
  todoElementRadio.type = 'checkbox'

  const todoElementTitle = document.createElement('div');
  todoElementTitle.textContent = todoItem.value;

  const todoButtonEdit = document.createElement('button');
  todoButtonEdit.textContent = 'Edit'

  const todoButtonDelete = document.createElement('button');
  todoButtonDelete.classList.add('todo-button-delete');
  todoButtonDelete.textContent = 'Delete'

  const todoInnerContainer = document.createElement('div');
  todoInnerContainer.classList.add('todo-inner-container')
  
  const todoContainer = document.querySelector('.todo-container');
  todoContainer.appendChild(todoInnerContainer);


  todoInnerContainer.appendChild(todoElementRadio);
  todoInnerContainer.appendChild(todoElementTitle);
  todoInnerContainer.appendChild(todoButtonEdit);
  todoInnerContainer.appendChild(todoButtonDelete);

  todoItem.value = ""
}


const todoButtonDelete = document.querySelector('todo-button-delete');

