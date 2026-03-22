var input = document.getElementById('task-input');
var list = document.getElementById('task-list');
var emptyMsg = document.getElementById('empty-msg');

input.addEventListener('keydown', function(e) {
  if (e.key === 'Enter') addTask();
});

function addTask() {
  var text = input.value.trim();
  if (text === '') return;

  emptyMsg.style.display = 'none';

  var li = document.createElement('li');

  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.style.marginRight = '10px';
  checkbox.addEventListener('change', function() {
    if (checkbox.checked) {
      li.classList.add('done');
    } else {
      li.classList.remove('done');
    }
  });

  var span = document.createElement('span');
  span.textContent = text;

  var deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function() {
    li.remove();
    if (list.querySelectorAll('li:not(.empty)').length === 0) {
      emptyMsg.style.display = 'block';
    }
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = '';
}