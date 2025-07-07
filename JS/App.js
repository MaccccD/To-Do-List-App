//collecting references from the html :
const enterTask = document.getElementById("Enter-Task");
const addTask = document.getElementById("addTaskBtn");
const deleteTask = document.getElementById("deleteTaskBtn");
const markOff = document.getElementById("markComplete");
const taskItem = document.querySelector('ul');


//the array that holds all the tasks added:
    let tasksAdded = [];
//the function that will handle the tasks add
function AddingTasks(){
    // add the task that has been typed in the input field into the array:
    // enterTask.addEventListener('input' ,function(){
    // const currentValue = this.value; // adds this on every key stroke, which isn't ideal.
    // adding a new task into the array we've created
    // tasksAdded.push(currentValue);
    // console.log("Task has been added to the array: ", currentValue);
    // });
    //revised method after helping:
    const currentValue = enterTask.value.trim();
    if(currentValue){ // only add the task if the filed is not empty
        tasksAdded.push(currentValue);
        console.log("Task has been added to the array: ", currentValue);
        DisplayTaskItem();
        StorageUpdate();
        enterTask.value = "";
    }
}

function DisplayTaskItem(){
    //show the task that has been added as an html list item:
    taskItem.innerHTML = ''; //clear existing
    tasksAdded.map((task, index)=>{
        const li = document.createElement('li'); 
        li.textContent = task;
        li.setAttribute('data-index', index);
        taskItem.appendChild(li);
    })
}

function DeleteTasks(){
   deleteTask.addEventListener('click', function(){
    tasksAdded.splice(1, 1);//removes an element from the array.
    taskItem.innerText = ""; // clear the task
    console.log("delete works!");
   })
}

function StorageUpdate(){
    localStorage.setItem("AddedTasks", JSON.stringify(tasksAdded)); // adding the task that has been typed into the local storage
}


function SubmitTasks(){
    addTask.addEventListener('click', function(){
        AddingTasks(); //executes what has been typed and added into the array
    })
} 
SubmitTasks();
DeleteTasks();
DeleteTasks();
