document.querySelector('button:first-of-type').addEventListener('click', function() {
    let input = document.getElementById('input');
    let taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    let table = document.querySelector('table');
    let row = document.createElement('tr');

    let checkCell = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            taskCell.style.textDecoration = 'line-through';
            taskCell.style.opacity = '0.5';
        } else {
            taskCell.style.textDecoration = 'none';
            taskCell.style.opacity = '1';
        }
    });
    checkCell.appendChild(checkbox);

    let taskCell = document.createElement('td');
    taskCell.textContent = taskText;
    taskCell.style.padding = '8px';

    let deleteCell = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', function() {
        row.remove();
    });
    deleteCell.appendChild(deleteBtn);

    row.appendChild(checkCell);
    row.appendChild(taskCell);
    row.appendChild(deleteCell);
    table.appendChild(row);
    input.value = '';
});

document.querySelector('button:last-of-type').addEventListener('click', function() {
    let input = document.getElementById('input');
    let taskText = input.value.trim();

    if (taskText === '') {
        alert('Type the task name to remove!');
        return;
    }

    let rows = document.querySelectorAll('table tr');
    rows.forEach(function(row) {
        let cell = row.querySelectorAll('td')[1];
        if (cell && cell.textContent === taskText) {
            row.remove();
        }
    });
    input.value = '';
});