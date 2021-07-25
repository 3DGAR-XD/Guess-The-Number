let number = ""
let attempts = 0
let generated = 0
let initialValueInput = ""
input2.disabled  = true
button2.disabled  = true
let generateNumber = (input) => {
  generated ++
  number = Math.round((Math.random() * input) + 1)
  if (generated > 1){results.innerHTML = "Has generado otro número, ahora ¡ADIVINALO!"}
  else {results.innerHTML = "Has generado un numero, ahora ¡ADIVINALO!"}
  input2.disabled  = false
  button2.disabled  = false
  initialValueInput = document.getElementById("input").value
}
let verifyNumber = (number,val) => {
  attempts ++
  if (attempts == 4){
    results.innerHTML = "No más, excediste el número de intentos, vuelve a generar un número diferente"
    input2.disabled  = true
    button2.disabled  = true
    input.value = ""
    input2.value = ""
    attempts = 0
    generated = 0
  }
  else {
    if ((number == "" || 0) || (input.value == "" || 0 )){
      results.innerHTML = "Genera otro número, con este no puedes jugar, mira las reglas"
      input2.disabled  = true
      button2.disabled  = true
      input.value = ""
      input2.value = ""
      attempts = 0
      generated = 0
    }
    else if (initialValueInput != input.value){
      results.innerHTML = "No creo que puedas hacer eso"
      input2.disabled  = true
      button2.disabled  = true
      input.value = ""
      input2.value = ""
      attempts = 0
      generated = 0
    }
    else if (val == "" || 0){
      results.innerHTML = "Ingresa el número que quieres comparar"
    }
    else{
      if (number == val){
        results.innerHTML = "FELICIDADES!! HAS GANADO"
        input2.disabled  = true
        button2.disabled  = true
        input.value = ""
        input2.value = ""
        attempts = 0
        generated = 0
      }
      else {
        results.innerHTML = "Vuelve a intentarlo, sé que lo lograrás"
        input2.value = ""
      }
    }
  }
}
