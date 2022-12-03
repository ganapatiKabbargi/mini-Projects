const formEl=document.querySelector(".form")
const inputEl=document.querySelector(".input")
const ulEl=document.querySelector(".list")

let list=JSON.parse(localStorage.getItem("list"));
if(list){
list.forEach((storedValue)=>{
    addTodo(storedValue)
})
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTodo() 
    
})


function addTodo(storedValue){
    let inputValue=inputEl.value
    if(storedValue){
        inputValue=storedValue.name
    }
    const newli=document.createElement("li")
    if(storedValue && storedValue.checked){
        newli.classList.add("checked")
    }
    newli.innerText=inputValue
    ulEl.append(newli)
    inputEl.value=" "


    const checkboxEl=document.createElement("div")
    checkboxEl.innerHTML=`<i class="fa-solid fa-square-check"></i>`
    newli.append(checkboxEl)
    updatestorage()

    const deleteEl=document.createElement("div")
    deleteEl.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
    newli.append(deleteEl)

        checkboxEl.addEventListener("click",()=>{
            newli.classList.toggle("checked")
            updatestorage()
        })
        deleteEl.addEventListener("click",()=>{
            newli.remove()
            updatestorage() 
        })
        updatestorage()
    }

    function updatestorage(){
        const liEls=document.querySelectorAll(" li")

        list = [];
        liEls.forEach((liEl)=>{
            list.push({
                name:liEl.innerText,
                checked:liEl.classList.contains("checked"),
            })
        })
        localStorage.setItem("list",JSON.stringify(list))
    }

