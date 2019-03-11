// selecting the left side div to change the color of the
const bigBox = document.querySelector('.left-side');
let mass = document.getElementById('mass').value;
let height = document.getElementById('height').value;
let BMI = (mass / (height * height)).toFixed(2);
let result = document.querySelector('.result-section p');

const para = document.querySelectorAll('li');
console.log(para);
para[0].style.color = "orange";
para[1].style.color = "lightgreen";
para[2].style.color = "brown";
para[3].style.color = "red";


const calculate = document.getElementById('button');
calculate.addEventListener('click', calculateBMI => function() {

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
    
    
});


    
    
    

