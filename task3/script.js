const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

let expression = "";

// Handle Button Clicks

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        // Clear

        if(value === "C"){

            expression = "";
            display.value = "";
        }

        // Delete

        else if(value === "DEL"){

            expression = expression.slice(0,-1);

            display.value = expression;
        }

        // Calculate

        else if(value === "="){

            try{

                expression = eval(expression).toString();

                display.value = expression;
            }

            catch{

                display.value = "Error";

                expression = "";
            }
        }

        // Normal Input

        else{

            expression += value;

            display.value = expression;
        }

    });

});

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    const key = e.key;

    // Allow Numbers and Operators

    if(
        "0123456789+-*/.%".includes(key)
    ){

        expression += key;

        display.value = expression;
    }

    // Enter Key

    else if(key === "Enter"){

        try{

            expression = eval(expression).toString();

            display.value = expression;
        }

        catch{

            display.value = "Error";

            expression = "";
        }
    }

    // Backspace

    else if(key === "Backspace"){

        expression = expression.slice(0,-1);

        display.value = expression;
    }

    // Escape Key

    else if(key === "Escape"){

        expression = "";
        display.value = "";
    }

});