





import bot from './assets/bot.svg'
import user from './assets/woman.png'

const form = document.querySelector('form')
const chatContainer = document.querySelector('#chat_container')
let loding;
//waiting for response
function searching(element) {
    element.textContent = ' '
     loding = setInterval(() => {
        element.textContent += '.'
        if (element.textContex === '....') {
            element.textContent = ' '
        } 

    }, 300);
}
//user text input
function typeText(element, texte) {
    let i = 0
    let intervalType = setInterval(() => {
        if (i < texte.length) {
            element.innerHTML += texte.charAt(i);
            i++;
        } else {
            clearInterval(intervalType);
        }
    }, 20)
}
function generateId() {
let time=Date.now();
let randomNumber=Math.random();
let toStringNumber= randomNumber.toString(10);
return `id-${time}-${randomNumber}-${toStringNumber}`
    
}
function chatGenerate(isAi, value, uniqueId) {
    return (
        `
        <div class="wrapper ${isAi && 'ai'}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${isAi ? bot : user} 
                      alt="${isAi ? 'bot' : 'user'}" 
                    />
                </div>
                <div class="message" id=${uniqueId}>${value}</div>
            </div>
        </div>
    `
    )
}
const userSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

  //chatGenerate from user
    chatContainer.innerHTML += chatGenerate(false, data.get('prompt'));

    // to clear the textarea input 
    form.reset()

    // chatGenerate from ai
    const uniqueId = generateId();
    chatContainer.innerHTML += chatGenerate(true, " ", uniqueId);
    chatContainer.scrollTop = chatContainer.scrollHeight;// put new message in view
    
    const message = document.getElementById(uniqueId);

     
    searching(message);
    //fetch data for server
    const response =await fetch('http://localhost:5000',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            prompt:data.get('prompt')
        })
    })
   clearInterval (loding) ;
   message.innerHTML='';
   if(response.ok){
    const data= await response.json();
    const parsedData= data.bot.trim();
typeText(message,parsedData)
   }else{
    const error=await response.text();
    message.innerHTML="somthing wrong";
    alert(error);
   }



}
    form. addEventListener('submit',userSubmit)
    form.addEventListener('keyup',(e)=>{
        if(e.keyCode==13){
userSubmit(e);
        }
    })

    


