document.addEventListener("DOMContentLoaded", () => {
  //need user input
  const taskInput = document.querySelector("#new-task-description")

 //need task form
  const taskForm = document.querySelector("#create-task-form")
 
 //listen to when the form is submitted
  taskForm.addEventListener('submit', function(e){
    e.preventDefault()
    const newTask = taskInput.value

    const list = document.querySelector("#tasks")
    const newLi = document.createElement('li')
    newLi.innerText = newTask
   
   
    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'x'

    list.appendChild(newLi)
    list.appendChild(deleteButton)
   
    deleteButton.addEventListener('click', function(e){
      newLi.remove()
    });
    
    taskForm.reset()
  });
});