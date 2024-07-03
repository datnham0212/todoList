var taskCount = 0;

let taskItems = [];


function add_task() {
    var task = document.getElementById("task-input").value;
    
    // taskItems.push(task);
    // localStorage.setItem("taskItems", JSON.stringify(taskItems));

    var ul = document.getElementById("todo-list");

    if(task !== ""){
        var li = document.createElement("li");
        var removeButton = document.createElement("button");
        removeButton.setAttribute("id", "remove-button");
        removeButton.innerHTML = "Done?";
        
        removeButton.setAttribute("onclick", "remove_task()"); 
        
        removeButton.onclick = function() {
            remove_task(li);
        };

        li.append(document.createTextNode(task));
        li.append(removeButton);
        ul.appendChild(li);

        if(taskCount >= 9){
            taskCount = taskCount - 1;
            ul.removeChild(li);
        }

        taskCount++;
        document.getElementById("task-count").innerHTML = taskCount;
    }
}

function remove_task(li) {
    var ul = document.getElementById("todo-list"); 
    ul.removeChild(li);
}

// console.log(localStorage.getItem("taskItems"));

