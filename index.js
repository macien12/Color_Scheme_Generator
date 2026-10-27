fetch("https://www.thecolorapi.com/scheme?hex=0047AB&mode=analogic&count=6&format=json")
    .then(res => res.json())
    .then(data => {
    data.colors.forEach( color => {
        console.log(color.hex.value)
    })
})