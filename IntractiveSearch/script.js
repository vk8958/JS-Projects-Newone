/*const btn=document.getElementById('btn')
const input=document.getElementById('input')

btn.addEventListener('click',function(){
   // input.classList.remove('inpt')
    input.classList.toggle('active')
})*/

const randomNumberGenerator = () => {
    return 1 + Math.floor(Math.random()*6);
}

console.log(randomNumberGenerator())