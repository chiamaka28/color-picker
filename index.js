const colorDisplay = document.querySelector(".color");
const options = document.querySelectorAll(".options")

//for generating the random color
const color = `${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`;
console.log(color)

colorDisplay.innerHTML = color;

const optionsColors = [`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
`${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`,
 color];
console.log(optionsColors)




for (let i = 0; i < options.length; i++) {
   options[i].style.background = `rgb(${optionsColors[i]})`;   
}

