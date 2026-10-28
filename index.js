const defaultColor = "#000000"
const colorPicker  = document.getElementById("color-picker")
const selectEl = document.getElementById("select-element")
const buttonEl = document.getElementById("button-el")
colorPicker.value = defaultColor


colorPicker.addEventListener("input", function() {
    const theColor = colorPicker.value
    colorPic(colorPicker.value)
    console.log(theColor)
})

function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}




function colorPic(color) {
const colors = fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=analogic&count=6&format=json`)
    .then(res => res.json())
    .then(data => {
    data.forEach( color => {
        console.log(color.hex.value)
    })
})
console.log(colors)
}

