const textareaEl=document.querySelector(".textarea");
const totalcharEl=document.querySelector(".total-counter")
const remainingcharEl=document.querySelector(".remaining-counter")


textareaEl.addEventListener("keyup",()=>{
    function updatechar(){
    totalcharEl.innerHTML=textareaEl.value.length;
    remainingcharEl.innerHTML=textareaEl.getAttribute("maxlength")-textareaEl.value.length;

    }
    updatechar();
})