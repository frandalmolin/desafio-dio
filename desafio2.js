let saldoVitorias = 150
let saldoDerrotas = 52
let nivel = saldoVitorias - saldoDerrotas
let heroi = "Joaquim"

mensagem = heroi + " tem de saldo de " + saldoVitorias  + " vitórias e está no ranking "

function calcularNivel (saldoVitorias, saldoDerrotas) {
    let nivel = saldoVitorias - saldoDerrotas
    return nivel
}

switch (true) {
    case nivel <= 10:
        mensagem += "Ferro";
        break;
    case nivel > 10 && nivel <= 20:
        mensagem += "Bronze";
        break;
    case nivel > 20 && nivel <= 50:
        mensagem += "Prata";
        break;
    case nivel > 50 && nivel <= 80:
        mensagem += "Ouro";
        break;
    case nivel > 80 && nivel <= 990:
        mensagem += "Diamante";
        break;
    case nivel > 90 && nivel <= 100:
        mensagem += "Lendário";
        break;
    case nivel > 100:
        mensagem += "Imortal";
        break;
}

console.log(mensagem)