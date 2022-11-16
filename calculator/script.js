/*const divValue=document.getElementById('c').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML

const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML

const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
const divValue=document.getElementById('').innerHTML
*/

//console.log(divValue)


let input = document.getElementById('input')
const op = document.getElementsByClassName('smallDiv')
for (let i = 0; i <= op.length; i++) {
  console.log(op[i])
  op[i].addEventListener('click', value)

}
//console.log(op[0].innerHTML)





function value(event) {
  console.log(event.target.innerText)
  const val = ''
  val += event.target.innerText 



  input.value = val

  if (val === 'C') {
    input.value = ""


  }
  else if (val == '=') {
    input.value = eval(input.value)
  }


}
/*console.log(value())*/