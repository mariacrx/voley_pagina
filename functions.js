let scoreRojo = 0;
let scoreAzul = 0;
let setRojo = 0;
let setAzul = 0;
let winnerScore = 25;


//funciones
function addScore(equipo){

    if (winnerTeam) return;
    if (equipo === 'rojo') {
        scoreRojo++;
        document.getElementById("scoreRojo").textContent = scoreRojo;
    } else if (equipo === 'azul'){
        scoreAzul++;
        document.getElementById("scoreAzul").textContent = scoreAzul;
    }
}

function subtractScore(equipo){

    if (winnerTeam) return; //si el equipo gano no se puede seguir ocupando la funcion 
    if (equipo === 'rojo' && scoreRojo > 0){
        scoreRojo--;
        document.getElementById("scoreRojo").textContent = scoreRojo
    } else if (equipo === 'azul' && scoreAzul > 0){
        scoreAzul--;
        document.getElementById("scoreAzul").textContent = scoreAzul;
        setWin(scoreAzul)
    }

}
 // FUNCION findGanador: Al sumar un punto, se verifica si ese equipo ganó el set (≥25 puntos Y diferencia ≥2)
//Si ganó el set, se incrementa su contador de sets y se reinician los puntos del set
//Si algún equipo llega a 3 sets, se muestra el ganador y se bloquean los botones

function setWin(){
    if (scoreRojo === 25 && (scoreRojo - scoreAzul) >= 2) {
        setRojo++;
    } else if (scoreAzul ===25 && scoreAzul - scoreRojo >= 2){
        setAzul++;
    }
}

function 

function resetScore() {
scoreAzul = 0;
scoreRojo = 0;
document.getElementById('scoreAzul').textContent = 0;
document.getElementById('scoreRojo').textContent = 0;
}