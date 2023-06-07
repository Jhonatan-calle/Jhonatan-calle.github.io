var currentValue=document.querySelector('.currentValue');
var previousValue = document.querySelector('.previousValue');
var calculo ='';


function appendChar(caracter){
    calculo += caracter;
    currentValue.textContent= calculo;
}

function solve(){
    try {
        currentValue.textContent=eval(calculo);
        previousValue.textContent = calculo;
        calculo = currentValue.textContent;
      } catch (error) {
        currentValue.textContent= 'Sintax Error';
        previousValue.style.fontSize = 100 + '%';
        previousValue.textContent = 'Hay que recargar la pagina master';
        calculo = '';
      }
}