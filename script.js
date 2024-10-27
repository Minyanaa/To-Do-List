const inputBox = document.getElementById("input-box");
const inputDay = document.getElementById("input-day");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        return;
    }

    let li = document.createElement("li");
    
    // Crear el elemento de la tarea
    let taskText = document.createElement("div");
    taskText.textContent = inputBox.value;
    li.appendChild(taskText);

    // Crear el elemento de la fecha con valor por defecto "Hoy"
    let dateText = document.createElement("div");
    dateText.textContent = inputDay.value || "Hoy";
    dateText.style.fontSize = "12px";
    dateText.style.color = "#eac772";
    li.appendChild(dateText);

    listContainer.appendChild(li);
    
    // Botón para eliminar
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    
    inputBox.value = "";
    inputDay.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
