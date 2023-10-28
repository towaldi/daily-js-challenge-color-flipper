/**
 * Global variables:
 * -> Color type 
 * -> Button
 * -> Color
 */



let colorType = document.querySelectorAll('a');
console.log(colorType);

let elementClicked = false;
console.log(elementClicked);

let btn = document.getElementById('btn');

let colorName = document.querySelector('.color-name');



/**
 * EventListener on a 'button' element  -> starts function at click
 */

btn.addEventListener('click', function() {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    document.querySelector('body').style.backgroundColor = namedColors[0][randomNumber];
    colorName.textContent = namedColors[0][randomNumber];
});



/**
 * Generating random number for "named color"
 * @returns rendom number -> depending on arrays length
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * namedColors[0].length);
}
