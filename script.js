const clock = document.querySelector("h1")
setInterval(function(){
    const date = new Date 
    
    clock.innerHTML = date.toLocaleTimeString()

},1000)
