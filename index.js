const defaultColor = "#000000"
const colorPicker  = document.querySelector("#color-picker")
colorPicker.value = defaultColor
colorPicker.addEventListener("change", updateAll);



function updateAll(event) {
  document.querySelectorAll("p").forEach((p) => {
    p.style.color = event.target.value;
  });
}


// fetch("https://www.thecolorapi.com/scheme?hex=4047AB&mode=analogic&count=6&format=json")
//     .then(res => res.json())
//     .then(data => {
//     data.colors.forEach( color => {
//         console.log(color.hex.value)
//     })
// })