let heroi = "José";
let xp = 2;

switch (true) {
    case xp <= 1000:
        console.log(heroi + " está na liga Ferro");
        break;
    case xp > 1001 && xp <=2000:
        console.log(heroi + " está na liga Bronze");
        break;
    case xp > 2001 && xp <=3000:
        console.log(heroi + " está na liga Prata");
        break;
    case xp > 3001 && xp <=5000:
        console.log(heroi + " está na liga Ouro");
        break;
    case xp > 5001 && xp <=7000:
        console.log(heroi + " está na liga Platina");
        break;
    case xp > 7001 && xp <=8000:
        console.log(heroi + " está na liga Diamante");
        break;
    case xp > 8001 && xp <=9000:
        console.log(heroi + " está na liga Ascendente");
        break;
    case xp > 9001 && xp <=10000:
        console.log(heroi + " está na liga Imortal");
        break;
    case xp >=10001:
        console.log(heroi + " está na liga Radiante");
        break;
    default:
        console.log(heroi + " não está em nenhuma liga");
}