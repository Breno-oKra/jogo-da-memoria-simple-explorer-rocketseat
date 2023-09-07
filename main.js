const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let inputNumber = document.querySelector("#inputNumber")
document.addEventListener('keydown',(e) => {
    if(e.key == 'Enter' && screen1.classList.contains("hide")){
        handleReset()
    }
})

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

function handleTryclick(event){
    //evento de parada do form, não faça o padrão, não envie o formulario
    event.preventDefault()
    if( (Number(inputNumber.value) != 0) && ((Number(inputNumber.value) >= 0 ) && (Number(inputNumber.value) <= 10))  ){
        document.querySelector('#error').innerText = ""
        
       
    
        if(Number(randomNumber) == Number(inputNumber.value)){
            screen1.classList.add('hide')
            screen2.classList.remove('hide')
    
            document.querySelector('.screen2 h2').innerText = `acertou em ${xAttempts} tentativas`
            
        }
        inputNumber.value = ""
        xAttempts++
    }else{
        document.querySelector('#error').innerText = `Erro, numero menor que 0 ou maior que 10 ou vazio, CORRIJA!!!!`
    }
}

function handleReset(){
    screen1.classList.remove('hide')
    screen2.classList.add('hide')
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
}
/* btnTry.addEventListener('click',handleTryclick()) */
btnReset.addEventListener('click',() => handleReset())