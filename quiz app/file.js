const num1=Math.floor(Math.random()*10)
const num2=Math.floor(Math.random()*10)
const question=document.querySelector(".question")
const form=document.querySelector(".form")
const input=document.querySelector(".input")
const scoreel=document.querySelector(".score")


let score = JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}
scoreel.innerHTML=`score : ${score}`
question.innerHTML=`what is ${num1} multiply by ${num2}`

const correctans=num1*num2;
form.addEventListener("submit",()=>{
     const userans= +input.value
     if(userans === correctans){
        score++;
        store();
     }else{
        score--;
        store();
     }
})

function store(){
    localStorage.setItem("score",JSON.stringify(score))}


