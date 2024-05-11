
/* code for button 1*/        
document.getElementById("bone").addEventListener("click", function() {
    if (this.textContent === "INDI ALLIANCE") {
        this.textContent = "It will happen in your dreams";
        

    } else {
        this.textContent = "INDI ALLIANCE";
    }
});
/* code for button 2*/

document.getElementById("btwo").addEventListener("click", function() {
    if (this.textContent === "NDA") {
        this.textContent = "Ok, let's make it like that";
        

    } else {
        this.textContent = "NDA";
    }
});

    
   