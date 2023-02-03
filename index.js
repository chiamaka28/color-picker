const colorDisplay = document.querySelector(".color");

//for generating the random color
const color = `${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)},${Math. floor(Math. random() * 256)}`;
console.log(color)



colorDisplay.innerHTML = color;