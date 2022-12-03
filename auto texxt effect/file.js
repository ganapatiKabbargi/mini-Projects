const containerEl=document.querySelector(".container")
const h1=document.querySelector(".container h1")

const career=["youtuber","web developer","freelancer","insructor","mentor","teacher"]

let careerindex = 0
let charindex = 0

changetext();


function changetext(){
    charindex++;
    containerEl.innerHTML=`<h1>i am ${career[careerindex].slice(0,1)==="i" ? "an" :"a"} ${career[careerindex].slice(0,charindex)}</h1>`;

    
     
    if(charindex === career[careerindex].length){
      careerindex++
      charindex = 0
    }
    if(careerindex === career.length){
        careerindex=0
    }
    setTimeout(changetext,400)
}