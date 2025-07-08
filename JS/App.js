//collecting references from the html :
const enterTask = document.getElementById("Enter-Task");
const addTask = document.getElementById("addTaskBtn");
const deleteTask = document.getElementById("deleteTaskBtn");
const markOff = document.getElementById("markComplete");
const taskItem = document.querySelector("ul");
const filterItems = document.querySelector("select");
const allTasks = document.getElementById("allTasks");
const completedTasks = document.getElementById("completed");
const incompleteTasks = document.getElementById("incomplete");



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
    if(currentValue){ // only add the task if the field  is not empty
        tasksAdded.push({ //here i'm adding each task as an object so that it would be easier to track it completion status and to do the filtering fucntionality.
            id: Date().now,
            text: currentValue,
            completed: false
        });
        console.log("Task has been added to the array: ", currentValue);
        DisplayTaskItem();
        StorageUpdate();
        enterTask.value = "";
    }
}

function DisplayTaskItem(){
    //show the task that has been added as an html list item:
    taskItem.innerHTML = ''; //clear existing
    tasksAdded.forEach((task, index)=>{ // here i'm basically creating a list item as an element so that each task added is its own list item and has a unique index
        const li = document.createElement('li'); 
        li.innerText = task; // can also use Text Conten
        li.setAttribute('data-index', index);


        //create individual checkboxes instead of one global checkbox:
        const checkbox = document.createElement("input");
        checkbox.classList.add("markComplete");
        checkbox.type = "checkbox";
        checkbox.style.backgroundColor = "green";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", ()=>{ToggleTask(index)})
       

        //create span text that will be linked wih the task item that has been added
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        if(task.completed){
            textSpan.style.textDecoration = "line-through";
        }

        li.appendChild(textSpan);
        li.appendChild(checkbox)
        taskItem.appendChild(li);


    })
}

function ToggleTask(index){ //here i'm checking if the task is completed by tracking its completion status vs its incomplete status
    tasksAdded[index].completed = !tasksAdded[index].completed;
    DisplayTaskItem();
    StorageUpdate();
}

function DeleteTasks(){
   deleteTask.addEventListener('click', function(){
    tasksAdded.pop();//removes an element from the array.
    taskItem.textContent = ""; // removes evrythinggg
    console.log("delete works!");
   })
}




function FilterTasks(){
    filterItems.addEventListener('change', function(){
        tasksAdded.filter(function(task){
         if(task=== incompleteTasks){
           //show the items that have just been added as tasks 
           //here i just dk how to link the added tasks into the specific groups i have created with theirn unique id.
         }
         else{
            return `${"No task has been added yet!"}`;
         }

        })
       
      
    })
}

function StorageUpdate(){
    localStorage.setItem("AddedTasks", JSON.stringify(tasksAdded)); // adding the task that has been typed into the local storage
    console.log(tasksAdded);
}


function SubmitTasks(){
    addTask.addEventListener('click', function(){
        AddingTasks(); //executes what has been typed and added into the array
    })
} 
SubmitTasks();
DeleteTasks();
//FilterTasks();
