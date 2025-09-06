

// Functions Syntax 
/* 
    function functionName(parameter1, parameter2, parameter3,){
        // code of the functions
    }
*/


function alser(){
    alert("Hello");
}

// alser();

function add(a, b){
    return a + b;
}
// console.log(add(3,5)) // 8

function askUser(message) {
    if (message) {
        alert(`Your name is ${message}`);
    } else {
        alert("You clicked Cancel or entered nothing! Action stopped.");
    }
}

// Get input from user
// const message = prompt("Write your name:");
// askUser(message);




function showMessage(message) {
    // Display the message on the webpage
    document.write(`<h2>Your message is: ${message}</h2>`);
}

const userMessage = prompt("Enter your message:");
// Get input from user
showMessage(userMessage);