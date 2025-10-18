// selectors.
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


// Event Listeners.
// We are adding the addTodo function definition
// todoButton.addEventListener('click',addTodo);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click',deleteCheck);


// Functions.
// Steps
// 1) First Add buttons with dummy text like Hi
// 2) Finish the Styling of newly added elements
// 3) Change the content of newly added elements to todoInput.value;


function addTodo(event){
    if(todoInput.value != ""){
        // prevent form submission.
        event.preventDefault();
        // console.log("Hello");
        // dynamically created toDo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add("todo");
        // creating li
        const newTodo = document.createElement('li');
        // newTodo.innerText = "Hi";
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);


        // check button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);



        // trash button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        
        // Appinding the todoDiv to todoList ul.
        todoList.appendChild(todoDiv)


        // optional
        // clearing the value of the input field
        todoInput.value = "";
        // focusing back to the input.
        todoInput.focus();
    }else{
        event.preventDefault();
        alert("Write Something first");
        todoInput.focus();
    }
    
}

// delete functionality
function deleteCheck(event){
    // console.log(event.target);
    const item = event.target;
    // Detecting the click on the trash button
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }


    // Detecting the click on the check button.
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
        // Once the task is marked as completed it can't be unmarked.
        todo.childNodes[1].style.pointerEvents = "none";
        // Once the check button is clicked the button content will change into a smily.
        todo.childNodes[0].style.opacity = '0.5';
        todo.childNodes[1].style.opacity = '0.5';
        todo.childNodes[1].innerHTML = '<i class="far fa-smile"></i>';
    }
}