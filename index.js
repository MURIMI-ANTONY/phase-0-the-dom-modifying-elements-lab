// Write your code here!
// Remove the <main> element with id 'main'
let mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Create a new <h1> element with id 'victory' and the text "YOUR-NAME is the champion"
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Murimi is the champion";

// Append the newHeader to the body or another appropriate location in the DOM
document.body.appendChild(newHeader);

