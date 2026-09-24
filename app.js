const taskName = document.getElementById("taskName");
const category = document.getElementById("category");
const deadline = document.getElementById("deadline");
const taskStatus = document.getElementById("taskStatus");
let submit = document.getElementById("submit");
let taskList = document.getElementById("taskList");
let taskFilter = document.getElementById("taskFilter");

let tasks = [];
loadTasks(); // first, fill the array with saved data
renderTasks(); // then, display what's in the array

submit.addEventListener("click", function () {
    let task = {
        id: Date.now(),
        name: taskName.value,
        category: category.value,
        deadline: deadline.value,
        status: taskStatus.value,
    };
    tasks.push(task);
    saveTasks();
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";
    const selectedFilter = taskFilter.value;

    let visibleTasks = tasks;
    if (selectedFilter !== "All") {
        visibleTasks = tasks.filter(function (task) {
            return task.status === selectedFilter;
        });
    }

    visibleTasks.forEach(function (task) {
        const today = new Date();
        const someDeadline = new Date(task.deadline);

        if (someDeadline < today && task.status !== "Completed") {
            task.status = "Overdue";
        }

        const li = document.createElement("li");
        let button = document.createElement("button");
        button.textContent = "Mark Complete";
        li.textContent = `${task.name} + ${task.category} + ${task.deadline} + ${task.status}`;
        taskList.appendChild(li);
        li.appendChild(button);
        button.addEventListener("click", function () {
            task.status = "Completed";
            saveTasks();
            renderTasks();
        });
    });
}

// local storage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const saved = localStorage.getItem("tasks");
    if (saved) {
        tasks = JSON.parse(saved);
    }
}

taskFilter.addEventListener("change", renderTasks);