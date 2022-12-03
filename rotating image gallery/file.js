const imagecontainerEl=document.querySelector(".image-container")
const prevEl=document.querySelector(".prev")
const nextEl=document.querySelector(".next")
let x=0;
let id;
nextEl.addEventListener("click",()=>{
    x=x+120;
    clearTimeout(id)
    rotation();
})
prevEl.addEventListener("click",()=>{
    x=x-120;
    clearTimeout(id)
    rotation();
})

function rotation(){
    imagecontainerEl.style.transform=`perspective(3000px) rotateY(${x}deg)`
    id=setTimeout(()=>{
        x=x+120
        rotation()
    },2000)
}
rotation()