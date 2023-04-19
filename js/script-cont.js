let valueDisplays = document.querySelectorAll(".number-txt");
let interval = 1000;
        console.log(valueDisplays);
        valueDisplays.forEach((valueDisplay) => {
            let startvalue = 0;
            let endvalue = parseInt(valueDisplay.getAttribute("data-val"));
            console.log(endvalue);
            let duration = Math.floor(interval / endvalue);
            let counter = setInterval(function(){
                startvalue += 1;
                valueDisplay.textContent = startvalue;
                if(startvalue == endvalue) {
                    clearInterval(counter);
                }
            },duration);    
        
        })
