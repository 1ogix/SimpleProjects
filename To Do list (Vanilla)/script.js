const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const deleteAllTask = document.getElementById("deleteAll");
updateTaskCount();
//ADDING NEW TASKS
addBtn.addEventListener("click", () =>{
  const taskText = taskInput.value.trim();
    if ( taskText !== ""){
      createTaskElement(taskText);
      taskInput.value = "";
      updateTaskCount();
    }
});
//Function of adding Task
function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `${taskText}
  <button class="delete-btn">Delete</button>`;
  taskList.appendChild(li);
  li.querySelector(".delete-btn").addEventListener("click", () => {
  taskList.removeChild(li);
  updateTaskCount();
});
updateTaskCount();
};
//Function of Updating Task Count
function updateTaskCount() {
    let taskCount = taskList.childElementCount;
    document.getElementById("demo").innerHTML = taskCount;
}
//Enter Task when 'Enter' key is pressed
taskInput.addEventListener("keyup",(event) => {
  if(event.key === "Enter"){
    addBtn.click();
  }
});
//Function of Deleting all Task
function deleteAll() {
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    updateTaskCount();
}
//Delete Task button
deleteAllTask.addEventListener ("click", deleteAll)
