const bodyEl=document.querySelector("body")



bodyEl.addEventListener("mousemove",(event)=>{
    const xpos=event.offsetX;
    const ypos=event.offsetY;
    const ran=Math.random()*80
    const newspanEl=document.createElement("span")
    newspanEl.style.left= xpos+"px"
    newspanEl.style.top= ypos+"px"
    newspanEl.style.width=ran+"px"
    newspanEl.style.height=ran+"px"
    bodyEl.append(newspanEl)
    
    setTimeout(()=>{
       newspanEl.remove()
    },4000)

})