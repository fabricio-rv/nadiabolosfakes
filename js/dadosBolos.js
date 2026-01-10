// Arquivo: js/dadosBolos.js

// Juntando todas as listas em uma só
const dadosBolos = [
    ...listaInfantilFem,   // Sua lista feminina existente
    ...listaInfantilMasc,  // <--- VOCÊ PRECISA ADICIONAR ESTA LINHA AQUI
    ...lista15Anos,        // Outras listas...
    ...listaAdultoFem,
    ...listaAdultoMasc,
    ...listaFormaturas,
    ...listaCasamentos,
];