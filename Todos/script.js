const form =document.getElementById('form')
const todosUL =document.getElementById('todos')
const input =document.getElementById('input')


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    addTodo()
})


function addTodo(todo){
    let todoText=input.value;


    if(todoText){
    const todoEl=document.createElement('li');

    todoEl.innerText=todoText;

    todoEl.addEventListener('click',()=>{
        todoEl.classList.toggle('completed'); //toggle means if class completed id already add then remove or if no added then add this class
    })

    todoEl.addEventListener('contextmenu',(e)=>{
        e.preventDefault();  //this stop the default functnality of that event 
        todoEl.remove();
    })
    todosUL.appendChild(todoEl)
    input.value=''
    }
}
