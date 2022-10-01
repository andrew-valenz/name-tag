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
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    const foodInput = document.getElementById('food-input');
    foodDisplay.textContent = foodInput.value;



const nameDisplay = document.getElementById('food-display');
console.log(foodDisplay);
    
foodDisplay.textContent = 'Ramen';
    
const updateBtn = document.getElementById('nomNomNom-button');
 updateBtn.addEventListener('click', () => {
        console.log('i am clicking the button');
        const foodInput = document.getElementById(food-input);
        foodDisplay.textContent = foodInput.value;
    
});