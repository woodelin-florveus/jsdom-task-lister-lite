document.addEventListener("DOMContentLoaded", () => {
  // your code here

  
  
  
  const createTasks = document.getElementById('create-task-form')
  
  
  createTasks.addEventListener('submit', formTask)
  
    function formTask(event){

       event.preventDefault()

    const newTask = document.querySelector('#new-task-description').value

    const li = document.createElement('li')

    li.textContent = newTask

    const parentTasks = document.getElementById('tasks')

    parentTasks.append(li)

    }

});



