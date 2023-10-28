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
    if (document.getElementById('named-color').className == ('active')) {
        let randomNumber = generateRandomNumber();
        document.querySelector('body').style.backgroundColor = namedColors[randomNumber];
        colorName.textContent = namedColors[randomNumber];  
    } else if (document.getElementById('hex-color').className == ('active')) {
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hexColors[generateRandomHexNumber()];
        }
        document.querySelector('body').style.backgroundColor = hexColor;
        colorName.textContent = hexColor;

    } else {

    }
});



/**
 * Generating random number for "named color"
 * @returns rendom number -> depending on arrays length
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * namedColors.length);
}


/**
 * Generating random number for "hex color"
 * @returns rendom number -> depending on arrays length
 */

function generateRandomHexNumber() {
    return Math.floor(Math.random() * hexColors.length);
}