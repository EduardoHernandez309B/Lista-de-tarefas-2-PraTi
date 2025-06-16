// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] 
// e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

let pares = [
  ['nome', 'Eduardo'],
  ['idade', 37],
  ['cidade', 'Cachoeirinha']
];


function paresParaObjeto(pares){
    let obj = {};

    pares.forEach(par => {
        let chave = par[0];
        let valor = par[1];
        obj[chave] = valor
    });

    return obj;
};

console.log(paresParaObjeto(pares));

const objeto = {
  nome: 'Eduardo',
  idade: 37,
  cidade: 'Cachoeirinha'
};

function objetoParaPares(obj){
    return Object.entries(obj);
};

console.log(objetoParaPares(objeto));