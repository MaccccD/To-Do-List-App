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
    // enterTask.addEventListener('input',function(){
    // const currentValue = this.value; // adds this on every key stroke, which isn't ideal.
    // adding a new task into the array we've created
    // tasksAdded.push(currentValue);
    // console.log("Task has been added to the array: ", currentValue);
    // });
    //revised method after helping:
    const currentValue = enterTask.value.trim();
    if(currentValue){ // only add the task if the field  is not empty
        tasksAdded.push({ //here i'm adding each task as an object so that it would be easier to track it completion status and to do the filtering fucntionality.
            id: 0, // returns it as an object instead of strings
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
        li.innerText = task; // can also use Text Content as well
        li.setAttribute('data-index', index);


        //create individual checkboxes instead of one global checkbox:
        const checkbox = document.createElement("input");
        checkbox.classList.add("markComplete");
        checkbox.type = "checkbox";
        checkbox.style.accentColor = "green";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", ()=>{ToggleTask(index)})
       

        //create span text that will be linked wih the task item that has been added
        const textSpan = document.createElement("span");
        textSpan.textContent = task.text;
        if(task.completed){
            textSpan.style.textDecoration = "wavy";
        }
        else if(!task.completed){
            textSpan.style.textDecoration = "wavy";
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
        const filtredValue = this.value;
        let filtredItems = [];
//so using a switch case statement to check or group the tasks based on the their status.
        switch(filtredValue){
            case "AllTasks":
                filtredItems = tasksAdded;
                // if(filtredItems === null){
                //     return $`{"No tasks have been added yet, hence there is nothing filtered to show!"}`
                // }   
                break;
            case "Completed":
                filtredItems =  tasksAdded.filter(task => task.completed);
                break;
            case "Incomplete":
                filtredItems = tasksAdded.filter(task= !task.completed);
                break;
            default:
                filtredItems = tasksAdded;

        }
        DisplayFilteredItems(filtredItems);

        });
}

function DisplayFilteredItems(tasks){
    taskItem.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.textContent = task;
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.accentColor = "green";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", ()=> ToggleTask(tasksAdded.indexOf(task)));

        const textSpan = document.createElement("span");
        textSpan.innerText = task.text;
        textSpan.style.textDecoration = "line-through";
        textSpan.style.color = "red";
        textSpan.style.fontWeight = "bolder"
        li.appendChild(checkbox);
        li.appendChild(textSpan);
        taskItem.appendChild(li);

    });
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
FilterTasks();
