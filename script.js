const buttons=document.querySelectorAll('#button');
let buttonPressed=null;
let operandFirst="";
let operandSecond="";
let operator="";

const output=document.querySelector('#display-text');

buttons.forEach(button=>{
    button.addEventListener('click',function getEventText(event){
        buttonPressed=event.target.innerText;
        checkInput(buttonPressed);
        console.log(buttonPressed);
    })
})
function checkInput(num){
    let operators=['+', '-', 'X','÷'];
    if(operators.includes(num)){
        console.log('operator detected');
      operator+=num; 
      output.textContent+=operator; 
    }
    
    if(num=='.'){
        operandFirst=num;
        output.textContent+=operandFirst;
        console.log('. detected');
    }
    num=parseInt(num);
    if(num>=0&&num<=9){
        operandFirst=num;
        console.log(operandFirst);
        output.textContent+=operandFirst;
        console.log('integer detected');
    }
   
}
