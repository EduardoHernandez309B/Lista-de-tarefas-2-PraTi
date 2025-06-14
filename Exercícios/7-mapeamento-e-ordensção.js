// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preco crescente, usando map, sort.

let produtos = [
    { nome: 'blusa', preco: 35 },
    { nome: 'calça', preco: 100 },
    { nome: 'boné', preco: 80 },
    { nome: 'Moletom', preco: 150 },
];

function nomesOrdenadosPorPreco(produtos) {
    produtos.sort((a, b) => a.preco - b.preco);
    let listaOrdenada = produtos.map(produto => produto.nome);
    return listaOrdenada;
}

console.log(nomesOrdenadosPorPreco(produtos));