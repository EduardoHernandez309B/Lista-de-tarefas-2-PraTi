// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto 
// onde cada chave é um cliente e o valor é a soma de todos os seus total.



let vendas = [
    { cliente: 'Duda', total: 100 },
    { cliente: 'Dora', total: 150 },
    { cliente: 'Dudu', total: 80 },
    { cliente: 'Duda', total: 85 },
    { cliente: 'Dora', total: 130 },
    { cliente: 'Dora', total: 25 },
];

const resultado = vendas.reduce((acumulador, itemAtual) => {
    if (itemAtual.cliente in acumulador) {
        acumulador[itemAtual.cliente] += itemAtual.total;
    } else {
        acumulador[itemAtual.cliente] = itemAtual.total;
    }
    return acumulador;
}, {});

console.log(resultado)