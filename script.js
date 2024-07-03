var taskCount = 0;

let taskItems = [];

document.addEventListener("DOMContentLoaded", (event) => {
    load_tasks();
});

function createTaskElement(task) {
    var li = document.createElement("li");
    var removeButton = document.createElement("button");
    removeButton.setAttribute("id", "remove-button");
    removeButton.innerHTML = "Done?";
    
    removeButton.onclick = function() {
        remove_task(li, task);
    };

    li.append(document.createTextNode(task));
    li.append(removeButton);

    return li;
}

// function lock_n_unlock(){
//     if (taskCount >= 9) {
//         document.getElementById("task-input").disabled = true;
//         document.getElementById("add-task-button").disabled = true;
//     }
//     else{
//         document.getElementById("task-input").disabled = false;
//         document.getElementById("add-task-button").disabled = false;
//     }
// }

function add_task() {

    var task = document.getElementById("task-input").value;

    var ul = document.getElementById("todo-list");

    if(task !== ""){
        
        var li = createTaskElement(task);
        ul.appendChild(li);

        taskItems.push(task);
        taskCount++;

        if(taskCount >= 10){
            // taskCount = taskCount - 1; // Stop using this
            ul.removeChild(li);
            return; // Use this instead so as not to cause phantom incrementations which leads to
                    // negative numbers when decrement
        }

        save_tasks();
        document.getElementById("task-count").innerHTML = taskCount;
        // document.getElementById("task-input").value = ""; //Clear input 
        // lock_n_unlock();
    }
}

function remove_task(li, task) {
    var ul = document.getElementById("todo-list"); 
    ul.removeChild(li);

    taskItems = taskItems.filter(t => t!== task);
    taskCount--;

    if(taskCount < 0){
        taskCount = 0;
    }

    save_tasks();
    document.getElementById("task-count").innerHTML = taskCount;
}

function save_tasks() {
    localStorage.setItem("taskItems", JSON.stringify(taskItems));
    localStorage.setItem("taskCount", taskCount);
}

function load_tasks() {
    localStorage.getItem("taskItems");

    if(localStorage.getItem("taskItems")!== null){
        taskItems = JSON.parse(localStorage.getItem("taskItems"));
        taskCount = parseInt(localStorage.getItem("taskCount")) || 0;
        document.getElementById("task-count").innerHTML = taskCount;

        var ul = document.getElementById("todo-list");

        taskItems.forEach(item => {
            var li = createTaskElement(item);
            ul.appendChild(li);
        });

        // lock_n_unlock();
    }
}


