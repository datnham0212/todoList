var taskCount = 0;
function add_task() {
    var task = document.getElementById("task-input").value;
    var ul = document.getElementById("todo-list");

    if(task !== ""){
        var li = document.createElement("li");
        li.append(document.createTextNode(task));
        ul.appendChild(li);

        if(taskCount >= 20){
            taskCount = taskCount - 1;
            ul.removeChild(li);
        }

        taskCount++;
        document.getElementById("task-count").innerHTML = taskCount;
    }
}
