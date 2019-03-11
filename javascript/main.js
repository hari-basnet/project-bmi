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

// function runEvent(e){

// }

const bigBox = document.querySelector('.left-side');

//const createUl = document.createElement('ul');

// document.body.main-section.left-side.append(createUl);
// console.log(createUl);

const para = document.querySelectorAll('li');
console.log(para);
para[0].style.color = "orange";
para[1].style.color = "lightgreen";
para[2].style.color = "brown";
para[3].style.color = "red";


const calculate = document.getElementById('button');
calculate.addEventListener('click', calculateBMI);


function calculateBMI(){

    
    let mass = document.getElementById('mass').value;
    let height = document.getElementById('height').value;
    let BMI = (mass / (height * height)).toFixed(2);
    
    let result = document.querySelector('.result-section p');
    
    // let resultBox = document.querySelector('.result-section');
    // result.textContent = `Your BMI is: ${BMI}`;
    if(mass === ""  || height === ""  ){
    
        result.textContent = `Some fields are empty`; 

    }else if(BMI >= 30){
        //use parentNode to select the parent 
        result.textContent = `Your BMI is: ${BMI}, You are Obese`;
        result.parentNode.style.backgroundColor = 'red';
        document.querySelector('img').src = './assets/obese.jpg';
    }else if(BMI < 30 && BMI >=25){
        result.textContent = `Your BMI is: ${BMI}, You are Overweight`;
        result.parentNode.style.backgroundColor = 'orange';
        document.querySelector('img').src = './assets/overweight.jpg';
        
    }else if(BMI < 25 && BMI >= 18.5){
        result.textContent = `Your BMI is: ${BMI}, You are Healthy`;
        result.parentNode.style.backgroundColor = 'green';
        document.querySelector('img').src = './assets/normal.jpg';
        
    }else if(BMI < 18.5){
        result.textContent = `Your BMI is: ${BMI}, You are Underweight`;
        result.parentNode.style.backgroundColor = 'yellow';
        document.querySelector('img').src = './assets/underweight.jpg';

    }else{
        result.textContent = 'Enter the valid value'
    }
    
}