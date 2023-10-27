/**
 * Global variables:
 * -> Array -> color database (represents the 3 colors types possible)
 * -> Color type 
 * -> Button
 * -> Color
 */

let colors = [
    'red',
    'rgb(122,122,122)',
    '##efefef'
];



let colorType = document.querySelectorAll('a');
console.log(colorType);

let btn = document.getElementById('btn');

let colorName = document.querySelector('.color-name');


/**
 * EventListener on a 'a' element -> starts function at click
 * -> depending which 'a' selected, different array is used
 */


/**
 * EventListener on a 'button' element  -> starts function at click
 */

btn.addEventListener('click', function() {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    document.querySelector('body').style.backgroundColor = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
});



/**
 * Generating random number
 * @returns rendom number -> depending on arrays length
 */

function generateRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}
