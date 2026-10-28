
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
        <button type="button" class="copyEl">${color.hex.value}</button>
        </div>
        `
    }).join("")
    document.getElementById("color-panels").innerHTML = colorHTML
})
}

document.getElementById("color-panels").addEventListener("click", function(e) {
    if (e.target.classList.contains("copyEl")) {
        const hexValue = e.target.textContent
        navigator.clipboard.writeText(hexValue);
        alert("Copied the text: " + hexValue);
    }
})

