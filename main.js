// get html elements

let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let taskDOM = document.querySelector("#task")
let ullength = document.getElementsByTagName("li"); //getting the number of li elements in ul
let closeButton = document.querySelector("span");

closeButton.addEventListener("click",removeButton);

//create delete button for removing tasks
for(let i=0; i < ullength.length;i++){
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;
    ullength[i].append(closeButton);
    ullength[i].onclick = check; //handling toggle
}


btnDOM.addEventListener('click', newElement)


function check(){
  this.classList.toggle("checked");
}

function removeButton(item){
  this.parentElement.remove();
  localStorage.removeItem(listDOM.forEach((listElem) => listElem == item ));
}


function newElement() {

    if( taskDOM.value.trim() !=0)  {
    $(".success").toast("show");

    let liDOM = document.createElement('li')
    listDOM.appendChild(liDOM);
    liDOM.innerHTML = task.value;
    taskDOM.value = "";
    addLocalStorage(taskDOM.value);

    liDOM.onclick = check;

    let closeButton = document.createElement("span");
        closeButton.textContent = "\u00D7";
        closeButton.classList.add("close");
        closeButton.onclick = removeButton;

        liDOM.append(closeButton);
        listDOM.append(liDOM);

    }
    else {
       // $(".error").toast("show");
    }
}

function getTasks(){
    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(task => {
        const li = document.createElement('li')
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.appendChild(document.createTextNode(task))
        const link = document.createElement('a')
        link.innerHTML = `${'<i class="bi bi-x iClose"></i>'}`
        li.append(link)
        listDOM.appendChild(li)
    });
}

function addLocalStorage(task){

    let tasks;

    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks))
    console.log(tasks)

}
