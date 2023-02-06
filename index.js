const colorDisplay = document.querySelector(".color");
const options = document.querySelectorAll(".options");
//let correctColor;


//for generating the random color
const color = `${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`;
 
console.log(color);

colorDisplay.innerHTML = `rgb(${color})`;
let correctColor =  `rgb(${color})`;
console.log(correctColor);

//for shuffling the colors
const shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

const optionsColors = [
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
 color];
console.log(optionsColors)





const shuffled = shuffle(optionsColors)

for (let i = 0; i < options.length; i++) {
   options[i].style.background = `rgb(${shuffled[i]})`;   
   options[i].innerHTML = shuffled[i];
}
 

options.forEach(option => {
   option.addEventListener('click', function (e){
      // console.log("click")
    clickedColor = e.target.style.background
     if (clickedColor == color){
      console.log("yes");
     }
   //   console.log(e)
   console.log(e.target.style.background)
   })
});

// function optionsListeners () {
//    for (let i = 0; i < options.length; i++) {
//      options[i].addEventListener('click', function() {
//         let clickedColor = this.style.background;

//         if (clickedColor === correctColor) {
//          console.log('yasssssssssssssss');
//          console.log(clickedColor);
//         }
//      })
      
//    }
// }