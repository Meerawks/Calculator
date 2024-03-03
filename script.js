const buttons=document.querySelectorAll('#button');
let buttonPressed=null;
let operandFirst="";
let operandSecond="";
let operator="";
let equation=[];
let input="";
let equationEvaluate=false;
let operators=['x','+','-','÷','%','='];
let historyCount=0;
let clickCount=1;

const output=document.querySelector('#display-text');
const secondOutput=document.querySelector('#secondary-text');
const calBody=document.querySelector('#cal-body');
const historyDIV=document.querySelector('#history');
historyDIV.style.display = "none";
const historyElement=document.querySelector('#history-element');
const clock=document.querySelector('#clock');

clock.addEventListener('click',()=>{
    clickCount++;
    if(clickCount%2==0){
    historyDIV.style.display = "block";
    historyDIV.classList.add("animate");
    calBody.classList.add("animate-out");
    }else{
    historyDIV.style.display = "none";
    element.classList.remove("animate");
    }
})

buttons.forEach(button=>{
    button.addEventListener('click',function getEventText(event){
       
        buttonPressed=event.target.innerText;
        if(buttonPressed=='AC'){
            equation.length=0;
            input='';
            secondOutput.textContent="";
            output.textContent="";
        }else if (buttonPressed=='DEL'){
            input = input.slice(0, -1);
            output.textContent=input;
        }
        else if(operators.includes(buttonPressed)){
            let secondarytext=secondOutput.innerText;
            console.log(secondarytext);
        
    
            if(buttonPressed=='='){
                if(equation.length>1){
                 console.table(equation);
                 equation.push(input);
                 console.table(equation);
                console.table(equation);
                historyElement.innerHTML+=equation.join("");
                secondOutput.textContent=equation.join("");
                input="";
                evaluate(equation);
                console.table(equation);
                }
            }
            
            else if(operators.includes(secondarytext.charAt(secondarytext.length-1))&&input==''){
                console.log('already operator added')
            
            }
            else if(equation.length>1){
                console.table(equation);
                equation.push(input);
                console.table(equation);
                historyElement.innerHTML+=equation.join("");
                equation.push(buttonPressed);
                console.table(equation);
            
                secondOutput.textContent=equation.join("");
                evaluate(equation);
                equation.push(input);
                equation.push(buttonPressed);
                console.table(equation);
               
                secondOutput.textContent=equation.join("")
                console.table(equation);
                input="";
                output.textContent="";
            }
            else{
               
                if(equation[0]!=''){
                   
                    equation.push(input);
                    console.table(equation);
                    if(equation[0]!=''){
                     console.log(equation[0]);
                equation.push(buttonPressed);
                
                secondOutput.innerText=equation.join("");
             output.textContent='';
             input="";
               console.table(equation);
                    }
                }
                else
                equation.length=0;
            }
        
             
        }
        else {
            if(input.length>9){
                alert('Cannot enter more than 10 digits.');
            }else{
            output.textContent='';
           if(buttonPressed=='.'){
            if(input.includes('.')==false){
                input+=buttonPressed;
            }
           }
            else
            input+=buttonPressed;
        
           
           
            let addComma=false;
           for(let i=1;i<=input.length;i++){
            
            output.textContent=output.innerText;
            if(addComma==true){
                output.textContent+=',';
                addComma=false;
            }
            output.textContent+=input[i-1];
            console.log("i "+i)
            if(i%3==0&&i!=0){
                if(input.includes('.')==false){
                    addComma=true;
                }
                
            }
    
        }
        }

        
            }
        
        
    })
})
function addHistory(element){
   element.textContent=equation[0];
    history.appendChild(element);
}

function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}

function evaluate(arr){
 
    let operator=equation[1];
  
    let operands=equation.filter((value)=>equation.indexOf(value)%2==0);
    console.table(operands);
    operands=operands.map((value)=>parseFloat(value));
    console.table(operands);
    let result=0;
    switch(operator) {
        case 'x':
          result=operands.reduce((total,num)=>total*num);
          break;
        case '+':
            result=operands.reduce((total,num)=>total+num);
          break;
        case '-':
            result=operands.reduce((total,num)=>total-num);
          break;
        case '%':
            result=operands.reduce((total,num)=>total%num);
          break;
        case '÷':
            if(operands[1]==0){
               alert('You wish to crash my calculator?\n we can not divide by zero so we will convert the equation to zero');
            }
            else{
            result=operands.reduce((total,num)=>total/num);
            }
          break;
        default:
          // code block
      }
      if(isNaN(result)==false){
        if(isFloat(result)){
            console.log('result is a float');
            result=result.toFixed(2);
        }
      output.textContent=result;
      
      historyElement.innerText+='\n ='+ result+"\n\n";
      historyCount++;
      console.log(historyCount);
      let str=historyElement.innerHTML;
      let historyArray=str.split('<br><br>');
      if(historyCount>6){
        historyArray.shift();
        historyElement.innerHTML=historyArray.join('<br><br>');

      }
      console.table(historyArray);
      console.log(result);
      input=result.toString();
      equation.length=0;
      console.table(equation);
      }
      else{
        equation.pop();
      }
    

}

   

