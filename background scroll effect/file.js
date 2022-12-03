const bgEl=document.querySelector(".bg-img")




window.addEventListener("scroll",()=>{
    scrolleffect();
})




function scrolleffect(){
    bgEl.style.opacity=1-window.pageYOffset/800
    bgEl.style.backgroundSize=130-window.pageYOffset/12   +"%"
}