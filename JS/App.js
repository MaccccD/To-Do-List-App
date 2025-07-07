//collecting references from the html :
const enterTask = document.getElementById("Enter-Task");
const addTask = document.getElementById("addTaskBtn");
const showTask = document.getElementById("show-Task");
const deleteTask = document.getElementById("deleteTaskBtn");
const markOff = document.getElementById("markComplete");


//the array that holds all the tasks added:
    let tasksAdded = [];
//the function that will handle the tasks add
function AddingTasks(){
    //add the task that has been typed in the input field into the array:
    enterTask.addEventListener('input' ,function(){
        const currentValue = this.value;
    
    //adding a new task into the array we've created
    tasksAdded.push(currentValue);
    console.log("Task has been added to the array: ", currentValue);
    });
    //show the task that has been added as an html list item:
    tasksAdded.map((task)=>{
        showTask.innerText(task);
    })
}

function DeleteTasks(){
   deleteTask.addEventListener('click', function(){
    tasksAdded.pop();//removes an element from the array.
   })
}

function Storage(){
    localStorage.setItem("AddedTasks", enterTask); // adding the task that has been typed into the local storage
}

function MarkOff(){
    markOff.addEventListener('blur', function(){
        tasksAdded.splice(enterTask); // blur the first index after it has been marked off as complete bu using splice. not sure tho:
    })
}
function SubmitTasks(){
    addTask.addEventListener('click', function(){
        AddingTasks(); //executes what has been typed and added into the array
    })
} 

