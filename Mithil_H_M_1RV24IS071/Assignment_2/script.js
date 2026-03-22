// Grab the HTML elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to handle adding a task
function addTask() {
    const taskText = taskInput.value.trim();

    // If the input is empty, stop and do nothing
    if (taskText === "") {
        return; 
    }

    // 1. Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // 2. Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "DEL";
    deleteBtn.className = "delete-btn";

    // 3. Tell the delete button to remove the 'li' when clicked
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    // 4. Put the button inside the 'li', then put the 'li' inside the main list
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 5. Clear the input and put the cursor back inside it
    taskInput.value = "";
    taskInput.focus();
}

// Run the function when the "Execute" button is clicked
addBtn.addEventListener('click', addTask);

// Run the function when the "Enter" key is pressed inside the input box
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});