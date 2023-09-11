//Variáveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", changeKey)

//Funções -- callback
function handleTryClick(event) {
  event.preventDefault() //Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  verifyInput(inputNumber)

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2.querySelector(
      "h2"
    ).innerText = `Você acertou em ${xAttempts} Tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function verifyInput(inputNumber) {
  if (inputNumber.value == "" || isNaN(inputNumber.value)) {
    alert("Tentativa inválida.\nDigite um número entre (0 e 10)")
    inputNumber.value = ""
    xAttempts--
  } else if (inputNumber.value < 0 || inputNumber.value > 10) {
    alert("Tentativa inválida.\nDigite um número entre (0 e 10)")
    inputNumber.value = ""
    xAttempts--
  }
}

function changeKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
