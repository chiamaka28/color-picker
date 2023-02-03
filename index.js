const colorDisplay = document.querySelector(".color");
const options = document.querySelectorAll(".options")


//for generating the random color
const color = `${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`;


colorDisplay.innerHTML = color;

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

