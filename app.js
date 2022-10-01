// DOM - document object model
// built into your browser -- its a JS representation of your HTML

// DOM GETTER METHODS
// getElementById
const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);

// DOM SETTER METHODS
// textContent
nameDisplay.textContent = 'Andres';
nameDisplay.classList.add('purple');

const updateBtn = document.getElementById('update-button');
updateBtn.addEventListener('click'. () => {
        console.log('i am clicking the button');
        const nameInput = document.getElementById('name-input');
        // set display to the value from the input
        nameDisplay.textContent = // the value from the input
});