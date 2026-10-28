const defaultColor = "#000000"
const colorPicker  = document.getElementById("color-picker")
const selectEl = document.getElementById("select-element")
const buttonEl = document.getElementById("button-el")
colorPicker.value = defaultColor


buttonEl.addEventListener("click", function() {
    const theColor = colorPicker.value
    colorPic(colorPicker.value, selectEl.value)
    console.log(theColor)
})

function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}




function colorPic(color, mode) {
const hex = color.replace("#", "")
const colors = fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6&format=json`)
    .then(res => res.json())
    .then(data => {
    const colorArr = data.colors.map(color => color.hex.value)
    })

const colorArr = Array.from(colors)
console.log(colors)
}



