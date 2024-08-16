function generateNumber() {

    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
  if(min >= max) {
    alert ("o valor minimo tem que ser menor que o valor maximo")
  }

    const result = Math.floor(Math.random() * (max - min) + min);
    console.log(min, max)

    alert(result)
}
