function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(min, max)

    alert(result)
}
