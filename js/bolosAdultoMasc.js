const listaAdultoMasc = [
    {
        id: 'adultom1',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Rústico',
        imagemPrincipal: 'imagens/adulto masculino/masculino1.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Amadeirado', diferencial: 'Chapéu Gaúcho' },
        descricao: 'Tema campeiro com texturas de madeira e xadrez, detalhado com cinto, cordas e um chapéu típico na base.'
    },
    {
        id: 'adultom2',
        categoria: 'adultom',
        tipo: 'video',
        titulo: 'Masculino',
        subtitulo: 'Gala',
        imagemPrincipal: 'imagens/adulto masculino/masculino2.jpg',
        videoSrc: 'imagens/adulto masculino/videos/masculino2.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Sartorial', diferencial: 'Relógio de Bolso' },
        descricao: 'Sofisticação em verde e branco, com base em matelassê e topo simulando terno com gravata prateada e corrente.'
    },
    {
        id: 'adultom3',
        categoria: 'adultom',
        tipo: 'video',
        titulo: 'Masculino',
        subtitulo: 'Azul',
        imagemPrincipal: 'imagens/adulto masculino/masculino3.jpg',
        videoSrc: 'imagens/adulto masculino/videos/masculino3.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Geométrico', diferencial: 'Traje Formal' },
        descricao: 'Design moderno em azul marinho, combinando topo estilo terno com gravata listrada e base com grafismos geométricos prateados.'
    },
    {
        id: 'adultom4',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Campeiro',
        imagemPrincipal: 'imagens/adulto masculino/masculino4.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Fosco', diferencial: 'Silhuetas' },
        descricao: 'Homenagem à tradição gaúcha em tons terrosos, decorado com silhuetas de cavalos, cuia de chimarrão e laço de corda.'
    },
    {
        id: 'adultom5',
        categoria: 'adultom',
        tipo: 'video',
        titulo: 'Masculino',
        subtitulo: 'Música',
        imagemPrincipal: 'imagens/adulto masculino/masculino5.jpg',
        videoSrc: 'imagens/adulto masculino/videos/masculino5.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Temático', diferencial: 'Iluminação LED' },
        descricao: 'Tema musical iluminado por LEDs, apresentando teclas de piano, partitura com notas musicais e topo simulando traje de gala.'
    },
    {
        id: 'adultom6',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Viagem',
        imagemPrincipal: 'imagens/adulto masculino/masculino6.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Temático', diferencial: 'Globo Terrestre' },
        descricao: 'Perfeito para viajantes, com base simulando uma mala vintage com fotos e topo em formato de globo terrestre com avião.'
    },
    {
        id: 'adultom7',
        categoria: 'adultom',
        tipo: 'video',
        titulo: 'Masculino',
        subtitulo: 'Suspenso',
        imagemPrincipal: 'imagens/adulto masculino/masculino7.jpg',
        videoSrc: 'imagens/adulto masculino/videos/masculino7.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Antigravidade', diferencial: 'Estrutura Geométrica' },
        descricao: 'Design moderno com estrutura de separador geométrico vazado, intercalando andares em verde esmeralda e dourado metalizado.'
    },
    {
        id: 'adultom8',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Anos',
        imagemPrincipal: 'imagens/adulto masculino/masculino8.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Listrado', diferencial: 'Números Dourados' },
        descricao: 'Bolo comemorativo destacando várias décadas em números dourados, com base listrada em tons de nude e dourado.'
    },
    {
        id: 'adultom10',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Música',
        imagemPrincipal: 'imagens/adulto masculino/masculino10.png',
        detalhes: { altura: '2 Andares', acabamento: 'P&B', diferencial: 'Teclas de Piano' },
        descricao: 'Tema musical clássico em preto e branco, com base simulando teclas de piano e topo em matelassê com notas musicais.'
    },
    {
        id: 'adultom11',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Esmeralda',
        imagemPrincipal: 'imagens/adulto masculino/masculino11.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê', diferencial: 'Renda Dourada' },
        descricao: 'Combinação refinada de verde esmeralda e branco, apresentando textura matelassê na base e faixas de renda dourada detalhada.'
    },
    {
        id: 'adultom12',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Boteco',
        imagemPrincipal: 'imagens/adulto masculino/masculino12.jpg',
        galeria: [
            'imagens/adulto masculino/masculino12.jpg',
            'imagens/adulto masculino/masculino12.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Temático', diferencial: 'Torneira' },
        descricao: 'Visual descontraído de boteco com base quadriculada, andar central simulando madeira com torneira de chopp e canecas no topo.'
    },
    {
        id: 'adultom13',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Agricultura',
        imagemPrincipal: 'imagens/adulto masculino/masculino13.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Rural', diferencial: 'Trator' },
        descricao: 'Homenagem ao campo com base simulando pneu de trator, andar central com plantação de milho e um trator vermelho no topo.'
    },
    {
        id: 'adultom14',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Churrasco',
        imagemPrincipal: 'imagens/adulto masculino/masculino14.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cesta', diferencial: 'Espetinhos' },
        descricao: 'Para os mestres churrasqueiros, com base azul, meio em textura trançada branca e topo dourado decorado com espetinhos.'
    },
    {
        id: 'adultom15',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Clássico',
        imagemPrincipal: 'imagens/adulto masculino/masculino15.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Pérolas Douradas' },
        descricao: 'Elegância tradicional combinando andares em azul liso e branco texturizado em matelassê, finalizado com cordões de pérolas douradas.'
    },
    {
        id: 'adultom18',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Barroco',
        imagemPrincipal: 'imagens/adulto masculino/masculino18.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Branco e Dourado', diferencial: 'Arabescos' },
        descricao: 'Imponente e clássico, com base branca decorada com ricos arabescos dourados em relevo estilo barroco.'
    },
    {
        id: 'adultom19',
        categoria: 'adultom',
        tipo: 'image',
        titulo: 'Masculino',
        subtitulo: 'Vinho',
        imagemPrincipal: 'imagens/adulto masculino/masculino19.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Madeira', diferencial: 'Barril' },
        descricao: 'Bolo esculpido em formato de barril com textura de madeira realista, cintas metálicas e decorado com uvas e rolhas.'
    },
    {
        id: 'adultom20',
        categoria: 'adultom',
        tipo: 'video',
        titulo: 'Masculino',
        subtitulo: 'Sítio',
        imagemPrincipal: 'imagens/adulto masculino/masculino20.jpg',
        videoSrc: 'imagens/adulto masculino/videos/masculino20.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Pintura', diferencial: 'Carroça' },
        descricao: 'Bucólico tema rural com pintura à mão de paisagem e estrada na base, textura de milho no centro e uma carroça modelada no topo.'
    }
];