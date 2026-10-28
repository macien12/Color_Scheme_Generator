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

function colorPic(color, mode) {
const hex = color.replace("#", "")
const colors = fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6&format=json`)
    .then(res => res.json())
    .then(data => {
    const colorHTML = data.colors.map(color => {
        return `
        <div class="color-panel">
            <div class="color-swatch" style="background-color: ${color.hex.value}"></div>
        <p>${color.hex.value}</p>
        </div>
        `
    })
    document.getElementById("color-panels").innerHTML = colorHTML
})

}

