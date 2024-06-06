// Variáveis globais
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const filterOptions = document.getElementById('filterOptions');
let tasks = [];
let filter = 'all';

// Função para adicionar uma tarefa
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false,
            priority: false
        };

        tasks.push(task);
        saveTasks();
        renderTasks();
        taskInput.value = '';
    }
}

// Função para salvar as tarefas no localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasksFromStorage = localStorage.getItem('tasks');
    if (tasksFromStorage) {
        tasks = JSON.parse(tasksFromStorage);
        renderTasks();
    }
}

// Função para renderizar as tarefas na tela
function renderTasks() {
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') {
            return true;
        } else if (filter === 'completed') {
            return task.completed;
        } else if (filter === 'priority') {
            return task.priority;
        }
    });

    taskList.innerHTML = '';

    filteredTasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
            <span class="${task.completed ? 'completed' : ''} ${task.priority ? 'priority' : ''}">${task.text}</span>
            <button onclick="togglePriority(${task.id})">Priority</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}


function toggleTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        saveTasks();
        renderTasks();
    }
}

function togglePriority(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        tasks[taskIndex].priority = !tasks[taskIndex].priority;
        saveTasks();
        renderTasks();
    }
}

// Função para excluir uma tarefa
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Função para alterar o filtro de exibição das tarefas
function changeFilter(value) {
    filter = value;
    renderTasks();
}

// Carregar tarefas ao carregar a página
loadTasks();
function cs() {
    d
}

//document.getElementById("btn-criar-conta").addEventListener("click", function() {
 //   window.alert("Sistema temporariamente indisponível devido a problemas no BackEnd, voltamos em breve [89%]");
//});

// comentar depois

//modal erro backend
document.getElementById("btn-criar-conta").addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});


window.addEventListener("click", function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

