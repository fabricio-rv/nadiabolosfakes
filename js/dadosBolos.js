// --- 1. Juntar todas as listas em uma temporária ---
const todosOsBolos = [
    ...lista15Anos,
    ...listaCasamentos,
    ...listaInfantilFem,
    ...listaInfantilMasc,
    ...listaAdultoFem,
    ...listaAdultoMasc,
    ...listaFormaturas,
    ...listaTematicos
];

// --- 2. ESCOLHA AQUI OS SEUS "VIPS" (IDs dos bolos mais bonitos) ---
// Coloque os IDs exatos dos bolos que você quer no topo.
// Exemplo: 'casamento1', 'meninas5', '15anos2'
const idsVips = ['15anos1', '15anos2', '15anos9', '15anos7'];

// --- 3. Lógica para separar VIPs do Resto ---
const bolosVips = [];
const bolosResto = [];

todosOsBolos.forEach(bolo => {
    if (idsVips.includes(bolo.id)) {
        bolosVips.push(bolo);
    } else {
        bolosResto.push(bolo);
    }
});

// --- 4. Ordenar os VIPs na ordem exata que você definiu no array idsVips ---
bolosVips.sort((a, b) => {
    return idsVips.indexOf(a.id) - idsVips.indexOf(b.id);
});

// --- 5. Criar a lista final (VIPs primeiro, depois o resto) ---
const dadosBolos = [...bolosVips, ...bolosResto];

// Agora o site vai carregar esses 4 primeiros, e o Google vai ver eles primeiro!