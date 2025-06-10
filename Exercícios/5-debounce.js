//Crie function debounce(fn, delay) que receba uma 
//função fn e um delay em ms, retornando uma nova função 
//que só executa fn se não for chamada novamente dentro do intervalo.

function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        const contexto = this;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}

function digaOi(nome) {
    console.log(`Oi, ${nome}`);
}

const digaOiDebounce = debounce(digaOi, 2000);

digaOiDebounce('Ana');
digaOiDebounce('Beatriz');
digaOiDebounce('Carlos');