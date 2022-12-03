const btnEl=document.querySelector(".btn")
const inputEl=document.querySelector(".input")
const copyEl=document.querySelector(".copy")
const alertEl=document.querySelector(".alert")



btnEl.addEventListener("click",()=>{
    creatpassword()
})
copyEl.addEventListener("click",()=>{
    copypassword()
    if(inputEl.value){
        alertEl.classList.remove("active")
        setTimeout(()=>{
            alertEl.classList.add("active") 
        },2000)
    }
})

function creatpassword(){
    const chars="~!@#$%^&*()_+-={}|[]\;:?/><0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const passwordlength=15;
    let password=" ";
    for(let i=0;i<passwordlength;i++){
        const random=Math.floor(Math.random()*chars.length)
        password+=chars.substring(random,random+1)
    }
    inputEl.value=password;
    alertEl.innerText=password + " " +"Copied";
}

function copypassword(){
    inputEl.select()
    inputEl.setSelectionRange(0,9999)
    navigator.clipboard.writeText(inputEl.value)
}