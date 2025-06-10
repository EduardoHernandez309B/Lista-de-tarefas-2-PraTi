// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for 
// para extrair todas as palavras únicas e exibi-las em um array.

const frase = 'olá olá mundo mundo';
let palavra = frase.split(" ");
let palavrasUnicas = [];
for (let i = 0; i < palavra.length; i++) {
    let existe = false;

    for (let j = 0; j < palavrasUnicas.length; j++) {
        if (palavrasUnicas[j] === palavra[i]) {
            existe = true;
            break;
        } 
    }
    if(existe ===false){
    palavrasUnicas.push(palavra[i])
}
}


console.log(palavrasUnicas)
