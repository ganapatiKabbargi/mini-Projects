const magnifierEl=document.querySelector(".magnifier")
const containerEl=document.querySelector(".container")

magnifierEl.addEventListener("click",()=>{
    containerEl.classList.toggle("active")
})

let a=9 ;
let b=6;
let c=3;

if(a>b && a>c){
    console.log(a)
}else if(b>a && b>c ){
    console.log(b)
}else{
    console.log(c)
}