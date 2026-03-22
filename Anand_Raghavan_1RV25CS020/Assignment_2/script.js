const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');
  const emptyMsg = document.getElementById('empty-msg');

  input.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') addTask();
  });

  function addTask() {
    const text = input.value.trim();
    if (!text) return;

    emptyMsg.style.display = 'none';

    const li = document.createElement('li');

    const left = document.createElement('div');
    left.className = 'task-left';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        li.classList.add('done');
      } else {
        li.classList.remove('done');
      }
    });

    const span = document.createElement('span');
    span.textContent = text;

    left.appendChild(checkbox);
    left.appendChild(span);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '✕';
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', function() {
      li.remove();
      if (list.querySelectorAll('li:not(.empty)').length === 0) {
        emptyMsg.style.display = 'block';
      }
    });

    li.appendChild(left);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = '';
  }