let tasks = [];

function updateTaskList() {
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    tasks.forEach(task => {
        const taskElement = document.createElement('li');
        taskElement.className = task.completed ? 'complete' : '';
        taskElement.innerHTML = `
            <span>${task.text} (Added: ${task.addedDate} ${task.addedTime}${task.completed ? ', Completed: ' + task.completedDate + ' ' + task.completedTime : ''})</span>
            <div>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
                ${!task.completed ? `<button onclick="markAsComplete(${task.id})">Complete</button>` : ''}
            </div>
        `;
        if (task.completed) {
            completedList.appendChild(taskElement);
        } else {
            pendingList.appendChild(taskElement);
        }
    });
}

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value.trim() === '') return;

    const now = new Date();
    const task = {
        id: Date.now(),
        text: taskInput.value,
        addedDate: now.toLocaleDateString(),
        addedTime: now.toLocaleTimeString(),
        completed: false,
        completedDate: '',
        completedTime: ''
    };

    tasks.push(task);
    taskInput.value = '';
    updateTaskList();
}

function markAsComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        const now = new Date();
        task.completedDate = now.toLocaleDateString();
        task.completedTime = now.toLocaleTimeString();
        updateTaskList();
    }
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        const newText = prompt('Edit task:', task.text);
        if (newText !== null && newText.trim() !== '') {
            task.text = newText;
            updateTaskList();
        }
    }
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    updateTaskList();
}

// Initial update
updateTaskList();

