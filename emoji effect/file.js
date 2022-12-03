const ratingEl=document.querySelectorAll(".fa-star")
const emojiEl=document.querySelectorAll(".face")
const colors=["red","orange","lightblue","lightgreen","darkgreen"]

ratingEl.forEach((star,index)=>{
    star.addEventListener("click",()=>{
        update(index)
       
    })
})
 update()
  function update(index){
    ratingEl.forEach((star,idx)=>{
        if(idx < index+1){
            star.classList.add("active")
        }else{
            star.classList.remove("active")
        }
    })
    emojiEl.forEach((emo)=>{
        emo.style.transform=`translateX(-${(index+1)*32}px)`;
        emo.style.color=colors[index]
      })
  }
  

