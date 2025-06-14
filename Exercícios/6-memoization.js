// Implemente function memoize(fn) que armazene em cache 
// chamadas anteriores de fn (por argumentos), retornando 
// resultados instantâneos em repetidas invocações.

function memoize(fn) {
    const cache = {};

    return function (...args) {
        const chave = JSON.stringify(args);
        if (chave in cache) {
            return cache[chave];
        } else {
            const resultado = fn(...args);
            cache[chave] = resultado;
            return resultado;
        }
    }
}