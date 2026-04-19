let scoreRojo = 0;
let scoreAzul = 0;
let setRojo = 0; // GANADOR el que llegue a sets == 2
let setAzul = 0;
let winnerScore = 25;


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
//Si ganó el set, se incrementa su contador de sets y se reinician los puntos del set
//agregar si puedo: El equipo que llegue PRIMERO a 2 sets, se muestra el ganador y se bloquean los botones

function setWin(){
    let ganador = null; //null cambia cuando alguno gane 1 set

    if (scoreRojo >= 25 && scoreRojo - scoreAzul >= 2) {
        ganador = "rojo"
    } else if (scoreAzul >= 25 && scoreAzul - scoreRojo >= 2){
        ganador = "azul"
    }
    // aca se suma ya 1 puntito de set para el equipo que corresponde
     if (ganador === 'rojo') {
        setRojo++;
        document.getElementById("setRojo").textContent = setRojo;
    } else if (ganador === 'azul'){
        setAzul++;
        document.getElementById("setAzul").textContent = setAzul;
    }   
    // si ganador ya no es null(porque null es falso) se verfifica si ya hay un ganador
    if (ganador) {
        if (winnerTeam()) return;
        //si nadie gano el partido, se resetean los puntos
        resetScore(); 
    }
}

//verifica que equipo gano y pasa como parametro ese equipo para mostrarlo
function winnerTeam(){
    if (setRojo === 2) {
        showWinner('rojo');
        return true;
    } else if(setAzul === 2) {
        showWinner('azul');
        return true;
    }
    return false
}

//mostraria el ganador y bloquea el boton
//FALTA: bloquear boton
function showWinner(equipo) {

    const msg = document.querySelector('.ganador');
    msg.textContent = 'Gano el equipo ${equipo}!';
    msg.style.color = equipo === 'rojo' ? '#e05c5c' : '#5c8ee0';

    // Deshabilitar todos los botones
    
}

function resetScore() {
scoreAzul = 0;
scoreRojo = 0;
document.getElementById('scoreAzul').textContent = 0;
document.getElementById('scoreRojo').textContent = 0;
}