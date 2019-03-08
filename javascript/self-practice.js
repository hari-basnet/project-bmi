// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// console.log(odd,even);

// for (let i = 0; i < odd.length; i++){

//     odd[i].style.backgroundColor = 'purple';
//     even[i].style.backgroundColor = 'green';
// }
//document.getElementById('input-part').style.backgroundColor = 'blue';

// const leftSide = document.getElementById('left-side');
// console.log(leftSide);
// leftSide.addEventListener('mousemove',runEvent);

const calculate = document.getElementById('button');
calculate.addEventListener('submit', calculateBMI);


function calculateBMI(){
    
    let mass = document.getElementById('mass').value;
    let height = document.getElementById('height').value;
    let BMI = (mass / (height * height)).toFixed(2);

    let result = document.querySelector('.result-section');
 
    //console.log(BMI);

    result.textContent = `your BMI is: ${BMI}`;

    if(BMI > 25){

        result.style.backgroundColor = 'red';
        document.querySelector('img').src = './assets/obese.jpg';
    } 
}