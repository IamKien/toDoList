var input = document.getElementById("inputToDo");
var container = document.getElementById("container");

//get the input and add it the main_container

var toDoList = [];

function showList() {
  container.innerHTML = "";
  toDoList.forEach((value, index) => {
    var li = document.createElement("div");
    li.innerHTML = `
      <span id="${index}" onclick="checked(${index})">${value}</span>
      <i onclick="deleteTodo(${index})" class="iconclick fa fa-trash"></i>
      <i onclick="editTodo(${index})" class="iconclick fa fa-edit"></i>
    `;
    li.classList.add("listClass");
    container.appendChild(li);
  });
}
function checked(index) {
  document.getElementById(index).classList.add("checked");
}

function addButton() {
  //check and see if the input is blank
  if (input.value === "") {
    input.placeholder = "Please enter something";
  } else {
    toDoList.push(input.value);
    showList();
    input.value = "";
  }
  //if so alert
  //else append li to the
}
