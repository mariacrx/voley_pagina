let scoreRojo = 0;
let scoreAzul = 0;
let setRojo = 0; // GANADOR el que llegue a sets == 2
let setAzul = 0;
let winnerScore = 25;
let empatados = false;


//funciones

function addScore(equipo){  //suma puntos. Agregado: hasta que algun equipo gane

    if (equipo === 'rojo') {
        scoreRojo++;
        document.getElementById("scoreRojo").textContent = scoreRojo;
    } else if (equipo === 'azul'){
        scoreAzul++;
        document.getElementById("scoreAzul").textContent = scoreAzul;
    }
    setWin();
}

function subtractScore(equipo){ //resta puntos

    if (winnerTeam()) return; //verifica si algun equipo gano. alpedo creo
    if (equipo === 'rojo' && scoreRojo > 0){
        scoreRojo--;
        document.getElementById("scoreRojo").textContent = scoreRojo
    } else if (equipo === 'azul' && scoreAzul > 0){
        scoreAzul--;
        document.getElementById("scoreAzul").textContent = scoreAzul;
    }
}

// FUNCION setWin dentro de add: Al sumar un punto, se verifica si ese equipo ganó el set (≥25 puntos Y diferencia ≥2)
//Si ganó el set, se incrementa su contador de sets y se reinician los puntajes(para iniciar el contador del otro set)
function setWin(){
    let ganador = null; // null cambia cuando alguno gane 1 set
    
    let limite = 0
    if (empatados) {
        limite = 15;
     }else if (!empatados) {
        limite = 25;
     } // si empatados es true el limite es 15 sino es 25

    if (scoreRojo >= limite && scoreRojo - scoreAzul >= 2) {
        ganador = "rojo";
    } else if (scoreAzul >= limite && scoreAzul - scoreRojo >= 2) {
        ganador = "azul";
    }

    // Se suma 1 puntito de set para el equipo que corresponde
     if (ganador === 'rojo') {
        setRojo++;
        document.getElementById("setRojo").textContent = setRojo;
    } else if (ganador === 'azul'){
        setAzul++;
        document.getElementById("setAzul").textContent = setAzul;
    }   
    // Si ganador ya no es null(false pasa a true) se verfifica si ya hay un ganador
    if (ganador) {
        if (winnerTeam()) return;
        //si nadie gano el partido, se resetean los puntos
        resetScore(); 
    }
}

//verifica que equipo gano. No pasa ningun parametro(no entiendo)
function winnerTeam(){
    if (setRojo === 2) {
        showWinner('rojo');
        return true;
    } else if(setAzul === 2) {
        showWinner('azul');
        return true;
    } else if (setRojo === 1 && setAzul === 1) {
        empatados = true
        resetScore();
        return false
    }
    return false;
}

//El equipo que llegue PRIMERO a 2 sets, se muestra el ganador y se bloquean los botones.
function showWinner(equipo) {
    const msg = document.getElementById("ganador");
    msg.textContent = ` Felicitaciones equipo ${equipo}! ⭐`;
    // condicion en una linea: si el parametro pasado(equipo) es igual al valor comparado 
    // ejecuta el primer valor(letra color rojo) sino ejecuta lo segundo(letra color azul)
    msg.style.color = equipo === 'rojo' ? '#e05c5c' : '#5c8ee0'; 

    // Deshabilitar todos los botones. FALTA: no deshabilitar el ultimo boton 
    const botones = document.querySelectorAll("button")
    botones.forEach(btn => { btn.disabled = true });
    // botones.forEach(function (btn, indice) {
    //     try
    // });
}

function resetScore() {
scoreAzul = 0;
scoreRojo = 0;
document.getElementById('scoreAzul').textContent = 0;
document.getElementById('scoreRojo').textContent = 0;
}