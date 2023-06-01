const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function criaHoraSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'UTC'
    })
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++,
        relogio.innerHTML = criaHoraSegundos(segundos)
    },1000)
    return segundos
}

iniciar.addEventListener('click', function() {
    clearTimeout(timer),
    iniciaRelogio();
})

pausar.addEventListener('click', function() {
    setTimeout(function(){
        clearInterval(timer)
    })
})

zerar.addEventListener('click', function() {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0
})
