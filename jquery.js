var input = document.getElementById('inputToDo');
var container = document.getElementById("container");


//=========================================
//Storage

showList();

function get(){
  if (localStorage.todos){
    return JSON.parse(localStorage.todos);
  } else{
    localStorage.todos = "[]";
    return [];
  }
};

function set(todos){
  localStorage.todos = JSON.stringify(todos);
}

function showList(){
  container.innerHTML = "";
  get().forEach((value, index) => {
    var li = document.createElement("div");
    li.id = index;
    li.innerHTML = `
      <span id="${index}" onclick="checked(${index})">${value}</span>
      <i  id="delete" class="iconclick fa fa-trash"></i>
      <i onclick="editTodo(${index})" class="iconclick fa fa-edit"></i>
    `;
    li.classList.add("listClass");
    container.appendChild(li);
  });

}
// function checked(index){
//   document.getElementById(index).classList.toggle("checked");
// //   document.getElementById("check"); Classlist can only be applied to Element
// //   toDoList[index].classList.toggle("checked");//won't worl since its not an element
//
// // var span = document.getElementById("check"); // Will only work if I cane loop
// // span.classList.toggle("checked");// through it and use index to reference each one
// }

// Checked function writen in jQuery---------------
$(document).ready(function(){
    $(".listClass").click(function(){
        $(this).toggleClass("checked");
    });
});



function addButton(){
  //check and see if the input is blank
  const todos = get();

  if(input.value === ""){
    input.placeholder = "Please enter something";
  } else{
    todos.push(input.value);
    set(todos);
    showList();
    input.value = "";
  }
}


function deleteTodo(index){
  const todos = get();
  todos.splice(index, 1);
  set(todos);
  showList();
}

$("i").click(function(){
    $("#li").fadeOut();
    $("#li").fadeOut("slow");
    $("#li").fadeOut(3000);
});

function editTodo(index){
  const todos = get();
  var edit = prompt("Edit This");
  todos[index] = edit;
  set(todos);
  showList();
}

var search = document.getElementById("search");
search.addEventListener("keypress", function(e){
  if(e.keyCode === 13){
  var searchText = search.value.toLowerCase();
  var find = get().find(word => word.toLowerCase().includes(searchText));
      if(find){
       alert(find);
     } else{
       alert("Not Found");
     }
  }
});
