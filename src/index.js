let nomeDoHeroi = promt("AlexMan:");
let xpHeroi = parseInt(prompt("5.000"));

let nivel;

if(xpHeroi <= 1.000){
   nivel = "Ferro";
} else if (xpHeroi >= 1.001 && xpHeroi <=2.000){
   nivel = "Bronze";
} else if (xpHeroi >= 2.001 && xpHeroi <=5.000){
    nivel = "Prata";
} else if (xpHeroi >= 5.001 && xpHeroi <=7.000){
    nivel = "Ouro";
} else if (xpHeroi >= 7.001 && xpHeroi <=8.000){
    nivel = "Platina Diamante";
} else if (xpHeroi >= 8.001 && xpHeroi <=9.000){
    nivel = "Ascendente";
} else if (xpHeroi >= 9.001 && xpHeroi <=10.000){
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói de nome ${nomeDoHeroi} está no nível de ${nivel}.`);