let inputs= document.querySelectorAll(".giveinput")
let display= document.querySelector("input")
let string=""

Array.from(inputs).forEach((element)=>{
   element.addEventListener("click",(e)=>
   {
    if(element.innerHTML=="=")
    {
        string= eval(string)
        display.value=string
    }
  
    else
    {
    string= string+ element.innerHTML
    display.value= string
    }

    if (element.innerHTML=="C")
    {
        string=""
        display.value=string
    }
   
})
})