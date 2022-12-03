const btnEl=document.querySelector(".btn")
const videocontainerEl=document.querySelector(".video-container")
const iconEl=document.querySelector(".icon")
const videoEl=document.querySelector(".video")


btnEl.addEventListener("click",()=>{
    videocontainerEl.classList.remove("active")

})
iconEl.addEventListener("click",()=>{
    videocontainerEl.classList.add("active")
    videoEl.pause()
    videoEl.currentTime=0
})