// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores 
// formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) 
// e false caso contrário.
const prompt = require("prompt-sync")();



const diasDoMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dia = Number(prompt('Digite o dia do mês: '));
let mes = Number(prompt('Digite o mês do ano (de 1 à 12): '));
let ano = Number(prompt('Digite o ano: '));
let diasDoMesAtual;

function ehBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
};

function ehDataValida(dia, mes, ano) {
    if (mes < 1 || mes > 12 || ano <= 1 || isNaN(ano)) {
        return false;
    }
    
    let diasDoMesAtual;

    if (mes === 2 && ehBissexto(ano)) {
        diasDoMesAtual = 29;
    } else {
        diasDoMesAtual = diasDoMes[mes - 1];
    }

    if (dia < 1 || dia > diasDoMesAtual) {
        return false;
    }

    return true

};

console.log(ehDataValida(dia, mes, ano));