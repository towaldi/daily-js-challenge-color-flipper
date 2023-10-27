/**
 * Global variables:
 * -> Array -> color database (represents the 3 colors types possible)
 * -> Button
 * -> Color
 */

let colors = [
    'red',
    'rgb(122,122,122)',
    '##efefef'
];

let btn = document.getElementById('btn');

let color = document.querySelector('.color-name-type');


btn.addEventListener('click', function() {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);
    document.querySelector('body').style.backgroundColor = 'blue';
});


function generateRandomNumber() {
    return Math.floor(Math.random() * 11);
}
