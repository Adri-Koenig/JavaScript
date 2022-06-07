function nombreUsuario() {
    let usuario = prompt("Ingrese su usuario");
    alert("Bienvenido " + usuario);
}

nombreUsuario();


let game = {
    game1: "1. League of Legends",
    game2: "2. Dota 2",
    game3: "3. Valorant",
    game4: "4. Counter Strike",
    game5: "5. Fortnite",
    game6: "6. Apex Legends",
}

function chooseRank() {
    let opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + game.game1 + "\n" + game.game2 + "\n" + game.game3 + "\n" + game.game4 + "\n" + game.game5 + "\n" + game.game6))

    while (true) {
        if (opcion == 1) {
            let rank = {
                rank1: "1. Hierro",
                rank2: "2. Bronce",
                rank3: "3. Plata",
                rank4: "4. Oro",
                rank5: "5. Platino",
                rank6: "6. Diamante",
                rank7: "7. Master",
                rank8: "8. GrandMaster",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5 + "\n" + rank.rank6 + "\n" + rank.rank7 + "\n" + rank.rank8))
            break
        }

        if (opcion == 2) {
            let rank = {
                rank1: "1. Heraldo",
                rank2: "2. Guardián",
                rank3: "3. Cruzado",
                rank4: "4. Arconte",
                rank5: "5. Leyenda",
                rank6: "6. Ancestral",
                rank7: "7. Divino",
                rank8: "8. Inmortal",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5 + "\n" + rank.rank6 + "\n" + rank.rank7 + "\n" + rank.rank8))
            break
        }

        if (opcion == 3) {
            let rank = {
                rank1: "1. Hierro",
                rank2: "2. Bronce",
                rank3: "3. Plata",
                rank4: "4. Oro",
                rank5: "5. Platino",
                rank6: "6. Diamante",
                rank7: "7. Inmortal",
                rank8: "8. Radiante",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5 + "\n" + rank.rank6 + "\n" + rank.rank7 + "\n" + rank.rank8))
            break
        }

        if (opcion == 4) {
            let rank = {
                rank1: "1. Silver",
                rank2: "2. Gold Nova",
                rank3: "3. Master Guardian",
                rank4: "4. Master Guardian Elite",
                rank5: "5. Distinguished Master Guardian",
                rank6: "6. Legendary Eagle",
                rank7: "7. Legendary Eagle Master",
                rank8: "8. Supreme Master First Class",
                rank9: "9. The Global Elite",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5 + "\n" + rank.rank6 + "\n" + rank.rank7 + "\n" + rank.rank8 + "\n" + rank.rank9))
            break
        }

        if (opcion == 5) {
            let rank = {
                rank1: "1. Bronze",
                rank2: "2. Silver",
                rank3: "3. Gold",
                rank4: "4. Platinum",
                rank5: "5. Champion",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5))
            break
        }

        if (opcion == 6) {
            let rank = {
                rank1: "1. Bronze",
                rank2: "2. Silver",
                rank3: "3. Gold",
                rank4: "4. Platinum",
                rank5: "5. Diamond",
                rank6: "6. Apex Predator",
            }
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.rank1 + "\n" + rank.rank2 + "\n" + rank.rank3 + "\n" + rank.rank4 + "\n" + rank.rank5 + "\n" + rank.rank6))
            break
        } else {
            alert("Opción no valida. Por favor seleccione la opción correcta.")
            opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + game.game1 + "\n" + game.game2 + "\n" + game.game3 + "\n" + game.game4 + "\n" + game.game5 + "\n" + game.game6))
        }
    }
}


function promedio() {
    let partidas = parseInt(prompt("Número de partidas jugadas."));
    let total = 0;
    for (let i = 1; i <= partidas; i++) {
        total = total + parseInt(prompt("¿Cuántos asesinatos realizó?"));
        console.log(total);
    }

    let promedio = total / partidas;
    if (promedio <= 8) {
        alert("Tienes que mejorar. Su promedio de asesinatos es de " + promedio + ".");
    } else {
        alert("Felicidades. Su promedio de asesinatos es de " + promedio + ".");
    }
}


chooseRank();
promedio();