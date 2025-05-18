//select DOM Elemenets
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const filterAllBtn = document.getElementById('filterAll');
const filterCompletedBtn = document.getElementById('filterCompleted');
const filterPendingBtn = document.getElementById('filterPending');

let tasks = [];

function renderTasks(filteredTasks = tasks) {
    taskList.innerHTML = ""; //unauthorized access clear krgnna
    //arrowfunction= array eka assen task object ekk hadagnnwa
    filteredTasks.forEach((task, index) =>{
        const li = document.createElement("li");//html tag ekk hdla denwa
        li.classList.toggle("completed", task.completed);  

        const taskText = document.createElement("span");//hadagattu element ekta text ekk send krnwa
        taskText.textContent = task.name;
        li.appendChild(taskText);//create krpu element ekk function ekkta set krgnnw

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteTask(index); 
        li.appendChild(deleteBtn);

        li.onclick =() => toggletaskcomplete(index);

        taskList.appendChild(li);
    });
}

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName !== ""){
        let task = {
            name: taskName,
            completed: false
        }
        tasks.push(task);
        taskInput.value = "";
        renderTasks();
    }

}


function deleteTask(){
    tasks.splice(index,1);//record ek delete wenw
    renderTasks();
}

function toggletaskcomplete(index){
    tasks[index].completed = ! tasks[index].completed;
    renderTasks();
}


addTaskBtn.addEventListener('click',addTask);

filterAllBtn.addEventListener('click',() => renderTasks());
filterCompletedBtn.addEventListener('click',() => renderTasks(tasks.filter(task=>task.completed)));
filterPendingBtn.addEventListener('click',()=> renderTasks(tasks.filter(task =>!task.completed)));

renderTasks();
