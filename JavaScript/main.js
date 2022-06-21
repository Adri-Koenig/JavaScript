/* -------------------------------------------------------------------------- */
/*                                 Bienvenida                                 */
/* -------------------------------------------------------------------------- */
// function nombreUsuario() {
//     let usuario = prompt("Ingrese su usuario");
//     alert("Bienvenido " + usuario);
// }

// nombreUsuario();

/* -------------------------------------------------------------------------- */
/*                                  Datos                                     */
/* -------------------------------------------------------------------------- */

// const games = ["1. League of Legends", "2. Dota 2", "3. Valorant", "4 .Counter Strike", "5. Fortnite", "6. Apex Legends", "7. PUBG"];

// games.pop(6);

// function chooseRank() {
//     let opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + games.join("\n")))

//     while (true) {
//         if (opcion == 1) {
//             let rank = [
//                 "1. Hierro",
//                 "2. Bronce",
//                 "3. Plata",
//                 "4. Oro",
//                 "5. Platino",
//                 "6. Diamante",
//                 "7. Master",
//                 "8. GrandMaster",
//             ]

//             rank.push("9. Challenger");

//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         }

//         if (opcion == 2) {
//             let rank = [
//                 "1. Heraldo",
//                 "2. Guardián",
//                 "3. Cruzado",
//                 "4. Arconte",
//                 "5. Leyenda",
//                 "6. Ancestral",
//                 "7. Divino",
//                 "8. Inmortal",
//             ]
//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         }

//         if (opcion == 3) {
//             let rank = [
//                 "1. Hierro",
//                 "2. Bronce",
//                 "3. Plata",
//                 "4. Oro",
//                 "5. Platino",
//                 "6. Diamante",
//                 "7. Inmortal",
//                 "8. Radiante",
//             ]
//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         }

//         if (opcion == 4) {
//             let rank = [
//                 "1. Silver",
//                 "2. Gold Nova",
//                 "3. Master Guardian",
//                 "4. Master Guardian Elite",
//                 "5. Distinguished Master Guardian",
//                 "6. Legendary Eagle",
//                 "7. Legendary Eagle Master",
//                 "8. Supreme Master First Class",
//                 "9. The Global Elite",
//             ]
//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         }

//         if (opcion == 5) {
//             let rank = [
//                 "1. Bronze",
//                 "2. Silver",
//                 "3. Gold",
//                 "4. Platinum",
//                 "5. Champion",
//             ]
//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         }

//         if (opcion == 6) {
//             let rank = [
//                 "1. Bronze",
//                 "2. Silver",
//                 "3. Gold",
//                 "4. Platinum",
//                 "5. Diamond",
//                 "6. Apex Predator",
//             ]
//             let ranking = Number(prompt("Seleccione su Rango " + "\n" + rank.join("\n")))
//             break
//         } else {
//             alert("Opción no valida. Por favor seleccione la opción correcta.")
//             opcion = Number(prompt("Seleccione un juego " + '\n' + "Elija una opcion (Colocar el número correspondiente):" + "\n" + games.join("\n")))
//         }
//     }
// }

/* -------------------------------------------------------------------------- */
/*                                  Promedio                                  */
/* -------------------------------------------------------------------------- */

// function promedio() {
//     let partidas = parseInt(prompt("Número de partidas jugadas en el día."));
//     let total = 0;
//     for (let i = 1; i <= partidas; i++) {
//         total = total + parseInt(prompt("¿Cuántos asesinatos realizó?"));
//         console.log(total);
//     }

//     let promedio = total / partidas;
//     if (promedio <= 8) {
//         alert("Tienes que mejorar. Su promedio de asesinatos es de " + promedio + ".");
//     } else {
//         alert("Felicidades. Su promedio de asesinatos es de " + promedio + ".");
//     }
// }

// chooseRank();
// promedio();

/* -------------------------------------------------------------------------- */
/*                                  Usuarios                                  */
/* -------------------------------------------------------------------------- */

const users = [{
    id: 1,
    User: "Músico",
    Game: "League of Legends",
    Rank: "Platinum II",
    Played: 41,
    Wins: 22,
    Losses: 19,
    Winrate: 53.7
}, {
    id: 2,
    User: "xBlake",
    Game: "League of Legends",
    Rank: "Gold I",
    Played: 36,
    Wins: 26,
    Losses: 10,
    Winrate: 66.7
}, {
    id: 3,
    User: "Aek",
    Game: "Valorant",
    Rank: "Gold",
    Played: 50,
    Wins: 25,
    Losses: 25,
    Winrate: 50
}, {
    id: 4,
    User: "Chapu",
    Game: "Valorant",
    Rank: "Diamond",
    Played: 60,
    Wins: 40,
    Losses: 20,
    Winrate: 66.6
}, {
    id: 5,
    User: "KooF",
    Game: "Counter Strike",
    Rank: "Master Guardian Elite",
    Played: 51,
    Wins: 36,
    Losses: 15,
    Winrate: 70.5
},];

/* -------------------------------------------------------------------------- */
/*                             Busqueda de Usuario                            */
/* -------------------------------------------------------------------------- */

const buscador = users.find((elemento) => elemento.User === "Músico")
console.log(buscador);

/* -------------------------------------------------------------------------- */
/*                                   Filtros                                  */
/* -------------------------------------------------------------------------- */

const gamesFilter = users.filter((juego) => {
    return juego.Game === "Valorant"
})
const winrateFilter = users.filter((element) => {
    return element.Winrate > 60, element.Played > 55
})

console.log(gamesFilter);
console.log(winrateFilter);

/* -------------------------------------------------------------------------- */
/*                         Registro de Usuario al Array                       */
/* -------------------------------------------------------------------------- */
const games2 = ["League of Legends", "Dota 2", "Valorant", "Counter Strike", "Fortnite", "Apex Legends", "PUBG"]

let rank = [
    "Hierro",
    "Bronce",
    "Plata",
    "Oro",
    "Platino",
    "Diamante",
    "Master",
    "GrandMaster",
]

const Id1 = users.length + 1
const User1 = prompt("Ingresar su usuario")
const Game1 = prompt("Seleccionar Juego" + "\n" + games2.join("\n"))
const Rank1 = prompt("Seleccionar Rango" + "\n" + rank.join("\n"))
const Played1 = Number(prompt("Partidas Jugadas"))
const Wins1 = Number(prompt("Partidas Ganadas"))
const Losses1 = Played1 - Wins1
const Winrate1 = Wins1 * 100 / Played1

users.push({
    id: Id1,
    User: User1,
    Game: Game1,
    Rank: Rank1,
    Played: Played1,
    Wins: Wins1,
    Losses: Losses1,
    Winrate: Winrate1
})

console.log(users);
let profiles = document.getElementById("profiles");

for (const data of users) {
    let card = document.createElement("div");
    card.innerHTML =
        `<h3> ${data.User}</h3>
        <h4> ${data.Game}</h4>
        <p> ${data.Rank} </p>
        <p> Wins: ${data.Wins} - Losses: ${data.Losses}</p>
        <p><b> Winrate: ${data.Winrate}</b></p>`;
    profiles.appendChild(card);
    card.className = "perfil"
}