let partidas = parseInt(prompt("Número de partidas jugadas."));
let total = 0;
for (let i = 1; i <= partidas; i++) {
    total = total + parseInt(prompt("¿Cuántos asesinatos realizó?"));
    console.log(total);
}

let promedio = total / partidas;
if (promedio <= 8) {
    alert("Tienes que mejorar. Su promedio de asesinatos es de " + promedio);
} else {
    alert("Felicidades. Su promedio de asesinatos es de " + promedio);
}