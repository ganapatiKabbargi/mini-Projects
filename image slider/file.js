const nextEl=document.querySelector(".next")
const prevEl=document.querySelector(".prev")
const imgcontainerEl=document.querySelector(".container")
const images=document.querySelectorAll("img")



let counter=1
nextEl.addEventListener("click",()=>{
    counter++
    clearTimeout(id)
    changeslide()
});
prevEl.addEventListener("click",()=>{
    counter--
    clearTimeout(id)
    changeslide()
});

changeslide()

function changeslide(){
    if(counter>images.length){
        counter=1
    }
    else if(counter<1){
        counter=images.length
    }
  imgcontainerEl.style.transform =`translateX(-${(counter-1)*500}px)`;
  id = setTimeout(()=>{
    counter++
    changeslide()
  },2000)
}
