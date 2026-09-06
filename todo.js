const todolist = JSON.parse(localStorage.getItem('todos'))||[];

rendertodo();
function addtodo(){
  const title = document.querySelector('.js-input-todoname');
  const date = document.querySelector('.js-input-date');
  const name = title.value;
  const  time = date.value;
  if(name === ''){
    alert('enter a name for your todo');
    return;
  }
  if(time === ''){
    alert('enter a date');
    return;
  }
  
  const todos = {
      name: name,
      duedate: time
  }
  todolist.push(todos);
   localStorage.setItem('todos',JSON.stringify(todolist));
   name.value = '';
   title.value = '';
   rendertodo();
   
}
function rendertodo(){
 
  const render = document.querySelector('.render-space');
  let innerHtml = '';
  for(let i = 0;i<todolist.length;i++){
    const html = `<div>${todolist[i].name}${todolist[i].duedate}<button onclick = "
    deletetodo(${i})">Delete</button></div>`;
    innerHtml+=html;
  }
  render.innerHTML = innerHtml;

}
function deletetodo(index){
  todolist.splice(index,1);
   localStorage.setItem('todos',JSON.stringify(todolist));
  rendertodo();
}





