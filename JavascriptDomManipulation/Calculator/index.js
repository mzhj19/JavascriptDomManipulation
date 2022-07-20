/* 
*************************************************
Author: Md. Zahid Hasan Jamil
https://github.com/mzhj19
https://www.linkedin.com/in/mzhj19

*************************************************
*/


const display = document.getElementById('display');
//console.log(display);

const buttons = Array.from(document.getElementsByClassName('button'));
//console.log(buttons);

buttons.map((button)=>{
    button.addEventListener('click',(event)=>{
        switch(event.target.innerText){
            case 'AC':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += event.target.innerText;
        }   
    })
})