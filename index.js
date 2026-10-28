const defaultColor = "#000000"
const colorPicker  = document.getElementById("color-picker")
const selectEl = document.getElementById("select-element")
const buttonEl = document.getElementById("button-el")
colorPicker.value = defaultColor


colorPicker.addEventListener("input", function() {
    const theColor = colorPicker.value
    console.log(theColor)
})

function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}


fetch("https://www.thecolorapi.com/scheme?hex=4047AB&mode=analogic&count=6&format=json")
    .then(res => res.json())
    .then(data => {
    data.colors.forEach( color => {
        console.log(color.hex.value)
    })
})