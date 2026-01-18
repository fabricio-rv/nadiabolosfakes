const listaCasamentos = [
    {
        id: 'casamento1',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Laço',
        imagemPrincipal: 'imagens/casamentos/casamento1.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Plissado', diferencial: 'Laços Longos' },
        descricao: 'A elegância eterna do branco em um design majestoso, com textura plissada vertical e grandes laços clássicos com caudas longas.'
    },
    {
        id: 'casamento2',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Casamento',
        subtitulo: 'Aliança',
        imagemPrincipal: 'imagens/casamentos/casamento2.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento2.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Capitonê', diferencial: 'Caixa de Joias' },
        descricao: 'Modelo criativo com topo simulando uma caixa de joias em capitonê com diamante decorativo, ideal para a mesa das alianças.'
    },
    {
        id: 'casamento3',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Pérolas',
        imagemPrincipal: 'imagens/casamentos/casamento3.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Noivinhos' },
        descricao: 'O clássico romântico com acabamento em matelassê e pérolas, decorado com uma concha porta-alianças e topo de noivinhos.'
    },
    {
        id: 'casamento4',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Lírios',
        imagemPrincipal: 'imagens/casamentos/casamento4.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Espatulado', diferencial: 'Flores Brancas' },
        descricao: 'Visual clean e sofisticado com textura espatulada rústica, suavizada por arranjos delicados de rosas e lírios brancos.'
    },
    {
        id: 'casamento5',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Casamento',
        subtitulo: 'Orquídeas',
        imagemPrincipal: 'imagens/casamentos/casamento5.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento5.mp4',
        detalhes: { altura: '4 Andares', acabamento: 'Texturizado', diferencial: 'Cascata Lateral' },
        descricao: 'Imponente composição de 4 andares com textura linear, adornada por uma luxuosa cascata lateral de orquídeas brancas.'
    },
    {
        id: 'casamento6',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Casamento',
        subtitulo: 'Suspenso',
        imagemPrincipal: 'imagens/casamentos/casamento6.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento6.mp4',
        galeria: [
            'imagens/casamentos/casamento6.jpg',
            'imagens/casamentos/casamento6.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Floating Cake', diferencial: 'Separador Geométrico' },
        descricao: 'Tendência absoluta com estrutura de separador geométrico dourado iluminado, criando a ilusão de um andar flutuante entre flores.'
    },
    {
        id: 'casamento7',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Rústico',
        imagemPrincipal: 'imagens/casamentos/casamento7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Texturizado', diferencial: 'Suculentas' },
        descricao: 'Perfeito para cerimônias ao ar livre, com acabamento branco texturizado em linhas rústicas, decorado com suculentas e folhagens secas.'
    },
    {
        id: 'casamento8',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Vermelho',
        imagemPrincipal: 'imagens/casamentos/casamento8.png',
        detalhes: { altura: '3 Andares', acabamento: 'Liso', diferencial: 'Rosas Vermelhas' },
        descricao: 'O contraste apaixonante e clássico do branco liso com arranjos de rosas vermelhas e detalhes delicados em renda na base.'
    },
    {
        id: 'casamento9',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Drapeado',
        imagemPrincipal: 'imagens/casamentos/casamento9.png',
        galeria: [
            'imagens/casamentos/casamento9.png',
            'imagens/casamentos/casamento9.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Efeito Tecido', diferencial: 'Movimento' },
        descricao: 'Obra de arte com acabamento que simula tecido drapeado em movimento, conferindo leveza, fluidez e sofisticação única.'
    },
    {
        id: 'casamento10',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Bodas',
        imagemPrincipal: 'imagens/casamentos/casamento10.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Detalhes Prata' },
        descricao: 'Especialmente criado para celebrar a união, combinando o clássico matelassê branco com toques e acabamentos prateados.'
    },
    {
        id: 'casamento11',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Outono',
        imagemPrincipal: 'imagens/casamentos/casamento11.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico', diferencial: 'Folhas Secas' },
        descricao: 'Visual boho chic com textura rústica em linhas horizontais, decorado com galhos, folhas secas e flores em tons terrosos.'
    },
    {
        id: 'casamento12',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Delicado',
        imagemPrincipal: 'imagens/casamentos/casamento12.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Texturizado', diferencial: 'Astromélias' },
        descricao: 'Suavidade em branco com textura linear, adornado com um arranjo de astromélias rosadas no topo e botões nas laterais.'
    },
    {
        id: 'casamento13',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Clássico',
        imagemPrincipal: 'imagens/casamentos/casamento13.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Misto', diferencial: 'Noivinhos' },
        descricao: 'Requinte tradicional intercalando andares em matelassê com pérolas e renda, finalizado com lírios brancos e topo de noivos.'
    },
    {
        id: 'casamento14',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Terracota',
        imagemPrincipal: 'imagens/casamentos/casamento14.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Babados', diferencial: 'Arranjo Lateral' },
        descricao: 'Imponente e cheio de movimento com acabamento em babados (ruffles), destacado por flores em tons de laranja, terracota e marrom.'
    },
    {
        id: 'casamento15',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Botânico',
        imagemPrincipal: 'imagens/casamentos/casamento15.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Espatulado', diferencial: 'Folhagens' },
        descricao: 'Estilo fresh e natural com textura espatulada, envolto em uma espiral de folhagens verdes (samambaias) e lírios brancos.'
    },
    {
        id: 'casamento16',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Lírios',
        imagemPrincipal: 'imagens/casamentos/casamento16.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Renda e Lírios' },
        descricao: 'Requinte clássico intercalando andares em matelassê com pérolas e uma larga faixa de renda, decorado com lírios brancos.'
    },
    {
        id: 'casamento17',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Romântico',
        imagemPrincipal: 'imagens/casamentos/casamento17.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Personalizado', diferencial: 'Chave e Porta' },
        descricao: 'Design exclusivo contando uma história de amor, com elementos como porta, chave e notas musicais, coroado por uma rosa vermelha.'
    },
    {
        id: 'casamento18',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Espatulado',
        imagemPrincipal: 'imagens/casamentos/casamento18.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pintura em Relevo', diferencial: 'Toques de Azul' },
        descricao: 'Obra de arte com textura espatulada formando flores em relevo por todo o bolo, finalizado com delicados toques de azul e dourado.'
    },
    {
        id: 'casamento19',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Casamento',
        subtitulo: 'Azul',
        imagemPrincipal: 'imagens/casamentos/casamento19.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda Azul', diferencial: 'Iniciais' },
        descricao: 'Personalidade em azul e branco, destacando-se pela renda azul detalhada na base e o topo liso com as iniciais dos noivos.'
    }
];