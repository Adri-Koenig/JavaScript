function nombreUsuario() {
    let usuario = prompt("Ingrese su usuario");
    alert("Bienvenido " + usuario);
}

nombreUsuario();

const games = ["1. League of Legends", "2. Dota 2", "3. Valorant", "4 .Counter Strike", "5. Fortnite", "6. Apex Legends", "7. PUBG"]

games.pop(6);

function chooseRank() {
    let opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + games.join("\n")))

    while (true) {
        if (opcion == 1) {
            let rank = [
                "1. Hierro",
                "2. Bronce",
                "3. Plata",
                "4. Oro",
                "5. Platino",
                "6. Diamante",
                "7. Master",
                "8. GrandMaster",
            ]

            rank.push("9. Challenger");

            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        }

        if (opcion == 2) {
            let rank = [
                "1. Heraldo",
                "2. Guardián",
                "3. Cruzado",
                "4. Arconte",
                "5. Leyenda",
                "6. Ancestral",
                "7. Divino",
                "8. Inmortal",
            ]
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        }

        if (opcion == 3) {
            let rank = [
                "1. Hierro",
                "2. Bronce",
                "3. Plata",
                "4. Oro",
                "5. Platino",
                "6. Diamante",
                "7. Inmortal",
                "8. Radiante",
            ]
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        }

        if (opcion == 4) {
            let rank = [
                "1. Silver",
                "2. Gold Nova",
                "3. Master Guardian",
                "4. Master Guardian Elite",
                "5. Distinguished Master Guardian",
                "6. Legendary Eagle",
                "7. Legendary Eagle Master",
                "8. Supreme Master First Class",
                "9. The Global Elite",
            ]
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        }

        if (opcion == 5) {
            let rank = [
                "1. Bronze",
                "2. Silver",
                "3. Gold",
                "4. Platinum",
                "5. Champion",
            ]
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        }

        if (opcion == 6) {
            let rank = [
                "1. Bronze",
                "2. Silver",
                "3. Gold",
                "4. Platinum",
                "5. Diamond",
                "6. Apex Predator",
            ]
            let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
            break
        } else {
            alert("Opción no valida. Por favor seleccione la opción correcta.")
            opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + games.join("\n")))
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