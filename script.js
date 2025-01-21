const input = document.querySelector(".input");
const btn = document.querySelectorAll(".btn");
const regex = /(\d+)|(\+|\-|\/|\*)/g;
const equal = document.querySelector('.equal');
const reset = document.querySelector(".reset");




let expression = '';
btn.forEach(button => {
  button.addEventListener("click",() =>{
    expression += button.textContent;
    input.value = expression;
    
  })
})
reset.addEventListener('click',()=>{
  input.value = "";
  expression = '';
})
equal.addEventListener("click",()=>{
  input.value = eval(expression);
  expression = input.value;
})
/*
first of all we push the 1 button which mean that i need a variable to store the value of what have we pushed which is 1 respectufly 
so i stored the value of 1 in val variable and then i need to store it in another place like old val but how can we do that ?
we can try an if statement if the value is a number we store it in the old val else we try to extract the operator and then delete it
*/