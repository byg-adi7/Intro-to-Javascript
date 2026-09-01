const todolist = [];
displaytodo();
const todoinput= document.querySelector('.todoinput');
function addtodo(){
  const todo = todoinput.value;
  todolist.push(todo);
  todoinput.value = '';
console.log(todolist);
 displaytodo();

}
function enter_eventhandler(event){
  if(event.key === 'Enter'){
    addtodo();
    displaytodo();
  }
}
function displaytodo(){
  let innertextHTML='';
  const displaylist = document.querySelector('.js-todo-list');
  for(let i = 0;i<todolist.length;i++){
    const paragraph = `<p>${todolist[i]}</p>`;
    innertextHTML +=paragraph;
    }
    displaylist.innerHTML = innertextHTML;

  }
