//declaration
let text=document.getElementById("text")
let btn=document.getElementById("btn")
//click event
btn.addEventListener("click",()=>{
    let i=text.value
    
    if(i%2==0){
        alert("EVEN NUMBER")
    }    
    else{
        alert("ODD NUMBER")
    }    
})