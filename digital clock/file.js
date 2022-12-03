const  minute=document.getElementById("min")
const  hour=document.getElementById("hour")
const  second=document.getElementById("sec")
const  ampm=document.getElementsByClassName("ampm")




    
        function updateclock(){
            let h = new Date().getHours()
            let m =new Date().getMinutes()
            let s =new Date().getSeconds()
            let ap ="AM"
        
            if(h>12){
                h=h-12;
                ap="PM";
            }
            h=h<10?"0"+h:h;
            m=m<10?"0"+m:m;
            s=s<10?"0"+s:s;
        
            hour.innerText=h;
            minute.innerText=m;
            second.innerText=s;
            ampm.innerText=ap;

            setTimeout(()=>{
                updateclock()
            },1000)
    }
    updateclock();

