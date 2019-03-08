console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.all);

const title = document.querySelectorAll ('li');

console.log(title);

for (let i = 0; i < title.length; i++){

    title[i].style.color = 'maroon';

}

