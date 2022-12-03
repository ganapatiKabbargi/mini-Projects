const singers=["arijit-singh","jubin","palak","sid-sriram"]
const containerEl=document.querySelector(".container")

singers.forEach((singer=>{
    
    const btnEl=document.createElement("button")
    btnEl.classList.add("btn")
    btnEl.innerText=singer
    containerEl.append(btnEl)
    btnEl.style.backgroundImage="url(./singers/"+singer+".jpg)"
    const audioEl=document.createElement("audio")
    audioEl.src = "./audios/" + singer + ".mp3";
    containerEl.append(audioEl)

    audioEl.onplaying=()=>{
        isplaying=true
    }
    audioEl.onpause=()=>{
        isplaying=false
    }
    let isplaying=false;
    btnEl.addEventListener("click",()=>{
      
        isplaying ? audioEl.pause() : audioEl.play()
        
        btnEl.style.transform="scale(.9)"
        setTimeout(()=>{
            btnEl.style.transform="scale(1)"
        },100)
    })
    
    window.addEventListener("keydown",(event)=>{
        if(event.key=== singer.slice(0,1)){
            audioEl.play();
            btnEl.style.transform="scale(.9)"
        
        setTimeout(()=>{
            btnEl.style.transform="scale(1)"
        },100)
    }
    }) 
    }))
    
   
      
