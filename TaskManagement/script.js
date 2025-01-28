tasks = [
    { id: 1, name1: "User Module", discription: "dfgh rtyu fghj vbn tgyhj gbhn !!!", status: "running" },
    { id: 2, name1: "Login Module", discription: " vbn tgyhj gbhn !!dfgh rtyu fghj!", status: "complete" }
]

function saveToLocalStorage() {
    localStorage.setItem('tasks111', JSON.stringify(tasks))
}
saveToLocalStorage();

function getStorageFromLocal() {
    localTasks = JSON.parse(localStorage.getItem('tasks111'))
    console.log(localTasks);
}
getStorageFromLocal()
// fruitslist = ["Banana","Mango","Orange"]

// fruits = document.getElementById('fruits')

// fruits.innerHTML = fruitslist.map((fr)=>`<li class="text-primary">${fr}</li>`)

lists = document.querySelector('#taskList')
console.log(lists)

getStorageFromLocal();

function renderList(filteredTasks = localTasks) {
    lists.innerHTML = filteredTasks.map((task) => `
    <tr>
      <th scope="row">${task.id}</th>
      <td>${task.name1}</td>
      <td>${task.discription}</td>
      <td>${task.status}</td>
      <td>
        <button class="btn btn-primary">Edit</button>
        <button class="btn btn-danger" onclick="deleteTask(${task.id})">Delete</button>
        </td>
    </tr>
                                    `
    )
}
renderList();

function addNewTask() {
    // e.preventDefault();
    TaskName = document.getElementById('TaskName').value;
    TaskDiscription = document.getElementById('TaskDiscription').value;
    TaskStatus = document.getElementById('status').value
    newTask = {
        id: Date.now() + Math.random(),
        name1: TaskName,
        discription: TaskDiscription,
        status: TaskStatus
    }

    tasks.push(newTask)
    console.log(tasks);
    saveToLocalStorage();

    renderList();
}
function deleteTask(ID) {
    console.log(ID)
    indexForDelete = tasks.findIndex(t => ID === t.id)
    console.log(indexForDelete)
    if (indexForDelete == -1) {
        alert("Task not found")
    } else {
        tasks.splice(indexForDelete, 1)
    }
    console.log(tasks);
    saveToLocalStorage();
    renderList();

}
function clearALLTasks() {
    lists.innerHTML = `<tr colspan='5'><th>No Data</th></tr>`
}
function refreshPage() {
    renderList();

}
function filterSearch() {
    keywordSearch = document.getElementById('searchKeyword').value;
    filteredTasks = localTasks.filter((task) => task.name1.toLowerCase().includes(keywordSearch))

    console.log(filteredTasks);
    renderList(filteredTasks)

}