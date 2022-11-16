const input = document.getElementById('input')
const todosUL = document.getElementById('todos')
const form = document.getElementById('form')


const todos = JSON.parse(localStorage.getItem('todosString'))

if(todos){
    todos.forEach(todo=>addTodo(todo))
}


form.addEventListener('submit', (e) => {
    e.preventDefault()


    addTodo()
 
})

function addTodo(todo) {
    const todoText = input.value

    if (todo) {
        todoText = todo.text
    }




    if (todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.isCompleted){
            todoEl.classList.add("completed")
          
        }


        todoEl.innerText = todoText

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        })
        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        })
        todosUL.appendChild(todoEl)
        input.value = ''
        updateLS()
    }
}


function updateLS() {
    const todosEls = document.querySelectorAll('li')
    const todos = []

    todosEls.forEach(todoEl => {


        todos.push({
            text: todoEl.innerText,
            isCompleted: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todoString', JSON.stringify(todos))
}

