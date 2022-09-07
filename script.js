let display = document.getElementById('display');

//adds all buttons to an html collection
let buttonHTMLcollection = document.getElementsByClassName('button');
//converts html collection to an array
let buttons = Array.from(buttonHTMLcollection);

//event listener for the calculator
buttons.map(button => {
    button.addEventListener('click', (e) => {
        // console.log('clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        if (display.innerText == "Error!") {
            display.innerText = '';
        }
        switch (e.target.innerText) {
            //when 'C' is pressed, the display's contents will be set to an empty string or "cleared"
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                    console.log(display.innerText);
                } else {
                    alert("Nothing to delete!");
                }
                break;
            case '=':
                try {
                    //runs javascript code within the display and assigns the result to the display
                    //SECURITY WARNING: eval() is a security risk because it will run any javascript code it is given from the client; avoid or use in testing only!
                    display.innerText = eval(display.innerText);
                }
                catch {
                    //displays this message if an error is caught;
                    display.innerText = 'Error!';
                }
                break;
            //when any other button is pressed, its text will be added to the display's contents
            default:
                display.innerText += e.target.innerText;
        }
    });
});
