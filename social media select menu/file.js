const selectEl=document.querySelector(".select-container")
const socielmediaEl=document.querySelector(".social-media")
const angleEl=document.querySelector(".angle")
const liEls=document.querySelectorAll(".social-media li")
const PEl=document.querySelector(".select-container p")

console.log(PEl)

selectEl.addEventListener("click",()=>{
   socielmediaEl.classList.toggle("hide")
   angleEl.classList.toggle("rotate")
})

liEls.forEach((liEl)=>{
    liEl.addEventListener("click",()=>{
        PEl.innerHTML=liEl.innerHTML
        angleEl.classList.toggle("rotate")
        socielmediaEl.classList.toggle("hide")
    })
})