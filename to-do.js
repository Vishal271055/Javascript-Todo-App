//Add Button
let button = document.getElementById("addtask")
button.addEventListener("click", addtask)

function addtask() 
{
    //Take the input and store it
    let input = document.getElementById("inputTask")
    let task = input.value

    let date = document.getElementById("dateTask")
    let task1 = date.value

    let priority = document.getElementById("priority")
    let task2 = priority.value
    if(task == '')
    {
        alert("Enter the Task")
        return
    }

   let newli = document.createElement("li");

   let taskSpan = document.createElement("span");
   taskSpan.innerText = task;
  

   let arrow1 = document.createElement("span");
   arrow1.innerText = "➡️";

   let dateSpan = document.createElement("span");
   dateSpan.innerText = task1;

   let arrow2 = document.createElement("span");
   arrow2.innerText = "➡️";

   let prioritySpan = document.createElement("span");
   prioritySpan.innerText = task2;

   newli.append(taskSpan, arrow1, dateSpan, arrow2, prioritySpan);

    taskSpan.classList.add("task");
    dateSpan.classList.add("date");
    prioritySpan.classList.add("priority");

    newli.classList.add("li","bkg")
    let ul = document.getElementById("li");
    ul.appendChild(newli);

    //Delete Button
    let delbtn = document.createElement('button')
    delbtn.textContent = "Remove ❌"
    delbtn.classList.add("btn","remove")
    newli.appendChild(delbtn)

    delbtn.onclick = function()
    {
        newli.remove()
    }
    

    //Edit Button
    let edit = document.createElement('Button')
    edit.textContent = "Edit ✏️"
    edit.classList.add("btn","edit")
    newli.appendChild(edit)

    edit.onclick = function()
    {
        let newTask = prompt("Enter your Task:", task)
        let newTask1 = prompt("Enter the Date",task1)
        if(newTask !=null && newTask != "" && newTask1 !=null && newTask1 != "")
        {
            task = newTask
            task1 = newTask1
            taskSpan.innerText = task;
            dateSpan.innerText = task1;
            prioritySpan.innerText = task2;
        }
    }

    
    // Complete Done
    let done = document.createElement('Button')
    done.textContent = "Done ✔️"
    done.classList.add("btn", "done")
    newli.appendChild(done)

    done.onclick = function ()
    {
       taskSpan.style.color = "green";
       taskSpan.style.textDecoration = "line-through";

       dateSpan.style.color = "green";
       dateSpan.style.textDecoration = "line-through";
  
       prioritySpan.style.color = "green";
       prioritySpan.style.textDecoration = "line-through";

        newli.classList.toggle("completed");
       newli.style.backgroundColor = "#d4edda"; // Light Green
    }


    // Pin
    let pin = document.createElement('Button')
    pin.textContent = "Pin 📌"
    pin.classList.add("btn", "pin")
    newli.appendChild(pin)
    let isPinned = false;

    pin.onclick = function()
    {
        if (isPinned == false)
        {
            ul.prepend(newli);
            pin.innerText = "Unpin 📍";
            isPinned = true;
        }
        else
        {
            ul.appendChild(newli);
            pin.innerText = "Pin 📌";
            isPinned = false;
        }
    }
    
    //Reset Task
    input.value = "";
    date.value = "";
}