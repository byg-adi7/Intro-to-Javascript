const todolist = JSON.parse(localStorage.getItem('todos'))||[];
document.querySelector('.todo-btn').addEventListener('click',()=>{addtodo();})

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
   date.value = '';
   title.value = '';
   rendertodo();
   
}
function rendertodo(){
 
  const render = document.querySelector('.render-space');
  let innerHtml = '';
  todolist.forEach(
    (value,index)=>{
    const html = `<div>${value.name}</div><div>${value.duedate}</div><button onclick = "
    deletetodo(${index})">Delete</button></div>`;
    innerHtml+=html;
  })
  render.innerHTML = innerHtml;

}
function deletetodo(index){
  todolist.splice(index,1);
   localStorage.setItem('todos',JSON.stringify(todolist));
  rendertodo();
}





