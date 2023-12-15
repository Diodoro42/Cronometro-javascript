const btnStart = document.querySelector('#btn-start');
const btnPause = document.querySelector('#btn-pause');
const btnContinue = document.querySelector('#btn-continue');
const btnReset = document.querySelector('#btn-reset');
const btnAleatorio = document.querySelector('#btn-aleatorio');

const divMinutes = document.querySelector('#minutos');
const divSeconds = document.querySelector('#segundos');
const divMiliSeconds = document.querySelector('#milisegundos');

let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let ispaused = false;
let interval;

btnStart.addEventListener('click', iniciarCronometro);
btnPause.addEventListener('click', pausar);
btnContinue.addEventListener('click', continuar);
btnReset.addEventListener('click', reset);

function iniciarCronometro(){

    ispaused = false;

    interval = setInterval(()=>{

      

        if(!ispaused){
            

            miliseconds++
            divMiliSeconds.textContent = formarMilisegundos(miliseconds)

            if(miliseconds == 100){

                miliseconds = 0
                seconds++
                divSeconds.textContent = formatarTempo(seconds)

            }

           if(seconds == 60){

            seconds = 0
            minutes++
            divMinutes.textContent = formatarTempo(minutes)

           }



        }


    }, 10)

    btnStart.style.display = 'none'
    btnPause.style.display = 'block'

}

function formatarTempo(tempo){
    return tempo < 10 ? `0${tempo}` : tempo
}

function formarMilisegundos(tempo){
    return tempo < 100 ? `${tempo}`.padEnd(3, "0") : tempo;
}

function pausar(){

    ispaused = true;
    btnStart.style.display = 'none';
    btnPause.style.display = 'none'
    btnContinue.style.display = 'block'
}

function continuar(){
    ispaused = false;
    btnStart.style.display = 'none';
    btnPause.style.display = 'block'
    btnContinue.style.display = 'none'
}

function reset(){

    ispaused = true;

    miliseconds = 0;
    seconds = 0;
    minutes = 0;

    btnStart.style.display = 'block';
    btnPause.style.display = 'none';
    btnContinue.style.display = 'none';

    divMiliSeconds.textContent = '000';
    divSeconds.textContent = '00';
    divMinutes.textContent = '00';

    clearInterval(interval)

}


