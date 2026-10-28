
const colorPicker  = document.getElementById("color-picker")
const selectEl = document.getElementById("select-element")
const buttonEl = document.getElementById("button-el")


buttonEl.addEventListener("click", function() {
    colorPic(colorPicker.value, selectEl.value)
})

function colorPic(color, mode) {
const hex = color.replace("#", "")
const colors = fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=5&format=json`)
    .then(res => res.json())
    .then(data => {
    const colorHTML = data.colors.map(color => {
        return `
        <div class="color-panel">
            <div class="color-swatch" style="background-color: ${color.hex.value}"></div>
        <p id="copyEl">${color.hex.value}</p>
        </div>
        `
    }).join("")
    document.getElementById("color-panels").innerHTML = colorHTML
})
}

function copyEl(item){
    const copyElement = document.getElementById("copyEl")
    copyElement.select(); 
    navigator.clipboard.writeText(copyElement.value);
    alert("Copied the text: " + copyElement.value);
}
