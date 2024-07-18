alert("Bienvenidos al juego Piedra - Papel - Tijera, que lo disfrutes")
const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";
const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;
const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const jugadorImg = document.getElementById("jugador-img");
const maquinaImg = document.getElementById("maquina-img");
let isPlaying = false;

piedraBtn.addEventListener("click", () => {
    play(PIEDRA);
});
papelBtn.addEventListener("click", () => {
    play(PAPEL);
});
tijeraBtn.addEventListener("click", () => {
    play(TIJERA);
});

function play(jugadorOption) {
    if(isPlaying) return;

    isPlaying = true;

    jugadorImg.src = "./img/" + jugadorOption + ".svg";

    resultText.innerHTML = "Pensando";

    const interval = setInterval(function(){
        const maquinaOption = calcMaquinaOption();
        maquinaImg.src = "./img/" + maquinaOption + ".svg";
    }, 200);

    setTimeout(function () {

        clearInterval(interval);

        const maquinaOption = calcMaquinaOption();
        const result = calcResult(jugadorOption, maquinaOption);

        maquinaImg.src = "./img/" + maquinaOption + ".svg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "Has empatado";
                break;
            case GANASTE:
                resultText.innerHTML = "Has ganado";
                break;
            case PERDISTE:
                resultText.innerHTML = "Has perdido";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMaquinaOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }
}

function calcResult(jugadorOption, maquinaOption) {
    if (jugadorOption === maquinaOption) {
        return EMPATE;

    } else if (jugadorOption === PIEDRA) {

        if (maquinaOption === PAPEL) return PERDISTE;
        if (maquinaOption === TIJERA) return GANASTE;

    } else if (jugadorOption === PAPEL) {

        if (maquinaOption === TIJERA) return PERDISTE;
        if (maquinaOption === PIEDRA) return GANASTE;

    } else if (jugadorOption === TIJERA) {

        if (maquinaOption === PIEDRA) return PERDISTE;
        if (maquinaOption === PAPEL) return GANASTE;

    }
}