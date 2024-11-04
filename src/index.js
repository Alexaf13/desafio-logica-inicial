// Definindo os dados do herói
let nomeDoHeroi = "AlexMan";  // Nome do herói
let xpHeroi = 11000;           // Quantidade de XP do herói

let nivel;

// Estrutura de decisão para classificar o nível do herói com base no XP
if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina Diamante";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe o resultado no console
console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivel}.`);
