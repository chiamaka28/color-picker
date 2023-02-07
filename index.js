const colorDisplay = document.querySelector(".header");
const description = document.querySelector(".color");
const options = document.querySelectorAll(".options");
const second = document.querySelector('.second');
const easyBtn = document.getElementById("easy");
const hardBtn = document.getElementById("hard");
//let correctColor;


//for generating the random color
const color = `${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`;
console.log(color);
description.innerHTML = `rgb(${color})`;

//for shuffling the colors
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

const optionsColors = [
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
 color];
// console.log(optionsColors)





const shuffled = shuffle(optionsColors)


for (let i = 0; i < shuffled.length; i++) {
   options[i].style.background = `rgb(${shuffled[i]})`;   
   options[i].innerHTML = shuffled[i];
}

 
for (let i = 0; i < options.length; i++) {
   options[i].id = shuffled[i];
   
}

console.log(options);

const easy = [
   optionsColors[0],
   optionsColors[1],
   color
]
const easyShuffled = shuffle(easy);

console.log(easyShuffled);

// for easy button
easyBtn.addEventListener("click", function () {
   second.classList.add("hide");
   // if (clicked){
   //    easyBtn.style.background = 'white';
   //    easyBtn.style.color = 'steelblue';
   // }
    


   for (let i = 0; i < easyShuffled.length; i++) {
      options[i].style.background = `rgb(${easyShuffled[i]})`;   
      options[i].innerHTML = easyShuffled[i];
   }
   
})


// for hard button
hardBtn.addEventListener("click", function (){
   second.classList.add("show");

   for (let i = 0; i < shuffled.length; i++) {
      options[i].style.background = `rgb(${shuffled[i]})`;   
      options[i].innerHTML = shuffled[i];
   }

})
// colorDisplay.setAttribute('style', `background-color: rgb(${color})`)
// colorDisplay.style.background-color = "blue";


// shuffled.map(shuffle => {
//    let items = `<div class="options" id='${shuffle}' style="background-color: rgb(${shuffle});">${shuffle}</div>`;
//    optionContainer.insertAdjacentHTML("beforeend", items);
//    console.log(items);
// console.log(items.style);
// })

// console.log(options)







// options.forEach(option => {
//    option.addEventListener('click', function (e){
//         console.log("yes");
//       if (color === option.style.background ){
          
//             console.log(correctColor);
//             console.log(option.id);
//       }
       
//    })
// });


