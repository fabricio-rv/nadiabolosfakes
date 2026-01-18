const listaInfantilMasc = [
    // --- 1 ao 10 ---
    {
        id: 'meninos1',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Elefantinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos1.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Babados em Biscuit', diferencial: 'Topo Giratório' },
        descricao: 'Bolo delicado em tons de cinza e amarelo. Possui base com babados, andar central decorado com silhuetas de elefantes e corações, finalizado com um grande elefante modelado no topo.'
    },
    {
        id: 'meninos2',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos2.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Texturizado', diferencial: 'Chuteira e Bola' },
        descricao: 'Bolo temático clássico de futebol em preto e branco. Apresenta andares com estampa de gomos de bola, silhuetas de jogadores e topo decorado com uma chuteira e bola em tamanho real de biscuit.'
    },
    {
        id: 'meninos3',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Astronauta',
        imagemPrincipal: 'imagens/infantil meninos/meninos3.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Galáxia', diferencial: 'Planetas 3D' },
        descricao: 'Viagem ao espaço com este bolo azul marinho decorado com estrelas, foguetes e nuvens. Inclui planetas modelados ao redor e um topo personalizado com astronauta e idade.'
    },
    {
        id: 'meninos4',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos4.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos4.mp4',
        galeria: [
            'imagens/infantil meninos/meninos4.jpg',
            'imagens/infantil meninos/meninos4.1.jpg',
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Rural', diferencial: 'Moinho de Vento' },
        descricao: 'Cenário completo de fazenda com três níveis. Traz textura amadeirada, cercas, animais variados (cavalo, vaca, porco, galinha) e um moinho de vento detalhado no topo.'
    },
    {
        id: 'meninos5',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Pocoyo',
        imagemPrincipal: 'imagens/infantil meninos/meninos5.jpg',
        galeria: [
            'imagens/infantil meninos/meninos5.jpg',
            'imagens/infantil meninos/meninos5.1.jpg',
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Lúdico', diferencial: 'Trem Cenográfico' },
        descricao: 'Bolo azul vibrante com o tema Pocoyo. A base apresenta os personagens em um trenzinho colorido, cercado por esferas coloridas, e o topo traz os bonecos principais e o número da idade.'
    },
    {
        id: 'meninos6',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Carros',
        imagemPrincipal: 'imagens/infantil meninos/meninos6.png',
        detalhes: { altura: '4 Andares', acabamento: 'Cenário de Pista', diferencial: 'Bandeiras de Chegada' },
        descricao: 'Bolo temático vibrante inspirado na franquia Carros da Disney. Apresenta base xadrez com placa Route 66, andar central com logo oficial e topo com cenário de deserto, cactos e carros em miniatura.'
    },
    {
        id: 'meninos7',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Chaves',
        imagemPrincipal: 'imagens/infantil meninos/meninos7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Arquitetura 3D', diferencial: 'Barril do Chaves' },
        descricao: 'Bolo artístico que recria a vila do Chaves. Os andares representam as fachadas das casas com números e janelas, finalizado com o icônico barril de madeira esculpido no topo com o personagem espiando.'
    },
    {
        id: 'meninos8',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Heróis',
        imagemPrincipal: 'imagens/infantil meninos/meninos8.jpg',
        detalhes: { altura: '5 Andares', acabamento: 'HQ e Relevo', diferencial: 'Punho do Hulk' },
        descricao: 'Bolo monumental reunindo os Vingadores e Superman. Cada andar destaca um herói: Capitão América, Hulk atravessando a parede, Batman no cenário noturno, Superman e topo do Homem-Aranha.'
    },
    {
        id: 'meninos9',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Homem-Aranha',
        imagemPrincipal: 'imagens/infantil meninos/meninos9.png',
        galeria: [ 'imagens/infantil meninos/meninos9.png', 'imagens/infantil meninos/meninos9.1.jpg' ],
        detalhes: { altura: '2 Andares', acabamento: 'Cenário Urbano', diferencial: 'Boneco Articulado' },
        descricao: 'Design focado no Homem-Aranha com base simulando o horizonte de prédios da cidade à noite. O andar superior destaca a máscara e teia do herói, acompanhado por um boneco articulado na lateral.'
    },
    {
        id: 'meninos10',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Ovelhinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos10.png',
        detalhes: { altura: '2 Andares', acabamento: 'Textura de Lã', diferencial: 'Chá de Bebê' },
        descricao: 'Bolo ultra delicado inteiramente revestido com textura que simula lã de ovelha em biscuit. Apresenta o rosto de uma ovelhinha baby centralizado e topo com ovelha em pé e placa personalizada.'
    },
    {
        id: 'meninos11',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Balão',
        imagemPrincipal: 'imagens/infantil meninos/meninos11.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Balão Estruturado' },
        descricao: 'Bolo encantador em azul royal e branco com temática de céu. Apresenta andares decorados com nuvens, pipas e bandeirolas, finalizado com um grande balão listrado no topo sobre uma base de pérolas cenográficas.'
    },
    {
        id: 'meninos12',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos12.jpg',
        galeria: [
            'imagens/infantil meninos/meninos12.jpg',
            'imagens/infantil meninos/meninas12.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Tronco Esculpido', diferencial: 'Animais Baby' },
        descricao: 'Bolo monumental que simula uma árvore da savana. Com base rústica de textura amadeirada, apresenta folhagens em camadas e animais modelados (girafa, macaco e leão), finalizado com o número da idade no topo.'
    },
    {
        id: 'meninos13',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos13.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Papelaria', diferencial: 'Moinho no Topo' },
        descricao: 'Bolo temático lúdico em tons de verde e amarelo. Decorado com cercas, animais da fazenda e sol em papelaria criativa, finalizado com um moinho de vento no topo.'
    },
    {
        id: 'meninos14',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos14.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Texturizado', diferencial: 'Chuteira e Bola' },
        descricao: 'Bolo de três andares para fãs de futebol. Base com silhuetas de jogadores, andar central com estampa de bola e topo azul com rede de gol e silhueta de goleiro, coroado com chuteira e bola em biscuit.'
    },
    {
        id: 'meninos15',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Hot Wheels',
        imagemPrincipal: 'imagens/infantil meninos/meninos15.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos15.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Pista de Corrida', diferencial: 'Labaredas em Relevo' },
        descricao: 'Bolo radical com temática de carros. Apresenta base com labaredas de fogo, andar central xadrez e topo azul com o logo Hot Wheels, interligados por uma pista laranja com carrinhos em miniatura.'
    },
   {
        id: 'meninos16',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Blaze',
        imagemPrincipal: 'imagens/infantil meninos/meninos16.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Pista de Corrida', diferencial: 'Monster Truck' },
        descricao: 'Bolo radical baseado em Blaze and the Monster Machines. Apresenta base xadrez com pista de asfalto e carrinhos, e andar superior vermelho personalizado com o nome da criança e topo de caminhão monstro.'
    },
    {
        id: 'meninos17',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Formatura',
        imagemPrincipal: 'imagens/infantil meninos/meninos17.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Escolar', diferencial: 'Capelo e Diploma' },
        descricao: 'Bolo comemorativo para ABC ou formatura infantil. Decorado com lápis de cor, blocos de letras, manchas de tinta coloridas e finalizado com um capelo azul e diploma esculpidos no topo.'
    },
    {
        id: 'meninos18',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Looney Tunes',
        imagemPrincipal: 'imagens/infantil meninos/meninos18.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Iluminação LED', diferencial: 'Cenário Acrílico' },
        descricao: 'Bolo inovador com andar central em acrílico transparente iluminado por LEDs. Apresenta personagens clássicos como Pernalonga e Piu-Piu baby, decorado com poás coloridos e arco-íris.'
    },
    {
        id: 'meninos19',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Fazenda',
        imagemPrincipal: 'imagens/infantil meninos/meninos19.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico', diferencial: 'Cintos e Ferraduras' },
        descricao: 'Design rústico e detalhado com textura de madeira e cintos de couro em biscuit. O topo traz dois cavalos (preto e branco) sobre gramado sintético, com ferraduras prateadas e cordas trançadas.'
    },
    {
        id: 'meninos20',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Free Fire',
        imagemPrincipal: 'imagens/infantil meninos/meninos20.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Gamer', diferencial: 'Cinto com Munição' },
        descricao: 'Bolo temático para fãs do jogo Free Fire. Base prateada com o logo oficial e cinto tático, andar superior azul com alvo central e granadas laterais, finalizado com painel circular dos personagens.'
    },
    {
        id: 'meninos21',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos21.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos21.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Tronco de Biscuit', diferencial: 'Cenário Lúdico' },
        descricao: 'Bolo temático vibrante simulando uma selva. Apresenta base rústica com textura de madeira e animais (elefante, macaco, hipopótamo), andar superior amarelo decorado com cipós e topo com girafa, zebra, leão e tigre.'
    },
    {
        id: 'meninos22',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Dinossauro',
        imagemPrincipal: 'imagens/infantil meninos/meninos22.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Papelaria Criativa', diferencial: 'Vulcão e Palmeira' },
        descricao: 'Bolo clean branco com poás coloridos e nome personalizado. Decorado com topos de papelaria de alta gramatura representando dinossauros baby, ovos, sol e uma palmeira cenográfica.'
    },
    {
        id: 'meninos23',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Bob Esponja',
        imagemPrincipal: 'imagens/infantil meninos/meninos23.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Modelagem 3D', diferencial: 'Hambúrguer Gigante' },
        descricao: 'Design criativo da Fenda do Biquíni. Base azul com a casa de abacaxi e Gary, finalizado no topo com um hambúrguer de siri gigante esculpido onde o Bob Esponja está sentado.'
    },
    {
        id: 'meninos24',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Balão',
        imagemPrincipal: 'imagens/infantil meninos/meninos24.png',
        galeria: [
            'imagens/infantil meninos/meninos24.png',
            'imagens/infantil meninos/meninos24.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Degradê Azul', diferencial: 'Balão Estruturado' },
        descricao: 'Bolo monumental com temática de céu em tons de azul e branco. Decorado com nuvens em relevo, mini balões e cubos de nome na base, finalizado com um grande balão 3D no topo.'
    },
    {
        id: 'meninos25',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Mickey',
        imagemPrincipal: 'imagens/infantil meninos/meninos25.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê de Pérolas', diferencial: 'Personagem Baby' },
        descricao: 'Versão baby do Mickey Mouse em azul claro e branco. Base em matelassê com pérolas azuis, andar superior com silhuetas do personagem e nome personalizado sob topo decorativo.'
    },    
    {
        id: 'meninos26',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Chefinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos26.jpg',
        galeria: [
            'imagens/infantil meninos/meninos26.jpg',
            'imagens/infantil meninos/meninos26.1.jpg'
        ],
        detalhes: { altura: '1 Andar', acabamento: 'Degradê Azul', diferencial: 'Gravata Borboleta' },
        descricao: 'Bolo inspirado no Poderoso Chefinho com efeito degradê em tons de azul. Apresenta botões, suspensórios e uma grande gravata borboleta preta em biscuit, coroado com o personagem e sua maleta.'
    },
    {
        id: 'meninos27',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Sol',
        imagemPrincipal: 'imagens/infantil meninos/meninos27.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Clean', diferencial: 'Balões Coloridos' },
        descricao: 'Bolo minimalista e alegre com três andares brancos. Decorado com um grande sol laranja central, nome personalizado em azul e diversos balões coloridos em hastes que trazem leveza ao design.'
    },
    {
        id: 'meninos28',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'YouTuber',
        imagemPrincipal: 'imagens/infantil meninos/meninos28.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Cores Primárias', diferencial: 'Logo YouTube' },
        descricao: 'Bolo temático para pequenos criadores de conteúdo. Base azul com o ícone do YouTube e andar superior amarelo com o logo do canal Brancoala, finalizado com topo personalizado dos personagens.'
    },
    {
        id: 'meninos29',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Astronauta',
        imagemPrincipal: 'imagens/infantil meninos/meninos29.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Galáxia', diferencial: 'Lua Metálica' },
        descricao: 'Viagem espacial em tons de azul marinho e prata. Apresenta planetas em 3D, um astronauta central e um topo imponente simulando a superfície da lua com acabamento metálico prateado.'
    },
    {
        id: 'meninos30',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Sonic',
        imagemPrincipal: 'imagens/infantil meninos/meninos30.jpg',
        galeria: [
            'imagens/infantil meninos/meninos30.jpg',
            'imagens/infantil meninos/meninos30.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Personagem Esculpido', diferencial: 'Orelhas e Espinhos' },
        descricao: 'Bolo criativo onde cada andar representa um personagem da franquia Sonic: base com o Knuckles (vermelho), centro com Tails (amarelo) e topo com o Sonic (azul), todos com elementos característicos em relevo.'
    },
    {
        id: 'meninos31',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos31.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos31.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Rural', diferencial: 'Moinho de Vento' },
        descricao: 'Cenário de fazenda rico em detalhes. Apresenta base rústica amadeirada, andar central com trator e celeiro, e topo coroado por um moinho de vento estruturado cercado por animais em biscuit.'
    },
    {
        id: 'meninos32',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos32.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Torre de Comando' },
        descricao: 'Bolo monumental inspirado na Patrulha Canina. Apresenta andares temáticos com pegadas, logo oficial e cascata de balões, finalizado com uma imponente torre de comando no topo com personagens esculpidos.'
    },
    {
        id: 'meninos33',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Militar',
        imagemPrincipal: 'imagens/infantil meninos/meninos33.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Camuflado', diferencial: 'Granadas e Munição' },
        descricao: 'Design temático militar com estampa camuflada e tons de verde exército. Decorado com granadas douradas, redes de selva e cintos com munição em biscuit, finalizado com painel circular Free Fire no topo.'
    },
    {
        id: 'meninos34',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Simpsons',
        imagemPrincipal: 'imagens/infantil meninos/meninos34.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos34.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 2D', diferencial: 'Televisão Central' },
        descricao: 'Bolo temático divertido da família Simpsons. Apresenta base vermelha, andar central azul com uma televisão cenográfica exibindo a personagem Maggie, e topo marrom decorado com donuts e personagens.'
    },
    {
        id: 'meninos35',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Urso',
        imagemPrincipal: 'imagens/infantil meninos/meninos35.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Textura de Tricô', diferencial: 'Balões em Relevo' },
        descricao: 'Bolo delicado com base em textura que simula ponto de tricô (knit) e andar superior em poás. Decorado com cascatas de balões em tons pastéis e ursos de pelúcia esculpidos em biscuit.'
    },
    {
        id: 'meninos36',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Gamer',
        imagemPrincipal: 'imagens/infantil meninos/meninos36.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 3D', diferencial: 'Churrasco e Game' },
        descricao: 'Bolo temático ultra personalizado para jovens. Base preta com consoles e pesos de academia, andar central branco com personagens e topo simulando tronco de madeira com churrasco cenográfico e bebidas.'
    },
    {
        id: 'meninos37',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Hot Wheels',
        imagemPrincipal: 'imagens/infantil meninos/meninos37.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pista de Corrida', diferencial: 'Looping Radical' },
        descricao: 'Design dinâmico com três andares temáticos. Apresenta base xadrez, andar central com labaredas e topo preto com logo, integrados por uma pista laranja que realiza um looping ao redor do bolo.'
    },
    {
        id: 'meninos38',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Mickey',
        imagemPrincipal: 'imagens/infantil meninos/meninos38.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Cascata de Balões' },
        descricao: 'Bolo temático vibrante nas cores clássicas do Mickey Mouse (preto, amarelo e vermelho). Apresenta base decorada com luvas de biscuit, andar central com o rosto do personagem, e topo finalizado com uma imponente cascata de balões coloridos e boneco do Mickey.'
    },
    {
        id: 'meninos39',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Ursinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos39.jpg',
        galeria: [
            'imagens/infantil meninos/meninos39.jpg',
            'imagens/infantil meninos/meninos39.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Trem com Nome' },
        descricao: 'Bolo clássico e delicado em azul bebê e branco. Apresenta andares em matelassê com pérolas e o nome da criança personalizado em vagões de um trenzinho de biscuit que circula o bolo.'
    },
    {
        id: 'meninos40',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Leãozinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos40.jpg',
        galeria: [
            'imagens/infantil meninos/meninos40.jpg',
            'imagens/infantil meninos/meninos40.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Clean', diferencial: 'Frase Personalizada' },
        descricao: 'Bolo suave com temática de selva baby. Decorado com folhagens verdes em biscuit e uma mensagem carinhosa central, finalizado com um topo de leãozinho coroado e idade personalizada.'
    },
    {
        id: 'meninos41',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Arca',
        imagemPrincipal: 'imagens/infantil meninos/meninos41.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Cenário Marinho', diferencial: 'Arca de Noé 3D' },
        descricao: 'Bolo encantador com tema Arca de Noé. Apresenta base azul com relevos de peixes, caranguejos e algas, finalizado com uma arca esculpida no topo repleta de animais baby em biscuit.'
    },
    {
        id: 'meninos42',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Realeza',
        imagemPrincipal: 'imagens/infantil meninos/meninos42.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Capitonê e Laço', diferencial: 'Príncipe no Topo' },
        descricao: 'Design clássico em azul royal, branco e dourado. Base pontilhada, andar central com textura capitonê (bow-tie) e topo dourado com brasão personalizado, coroado com um pequeno príncipe em biscuit.'
    },
    {
        id: 'meninos43',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos43.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Clean', diferencial: 'Escudo e Personagens' },
        descricao: 'Bolo temático inspirado na Patrulha Canina. Composto por andares em vermelho, branco e azul, traz o logo oficial centralizado, patinhas de cachorro em relevo e topo personalizado com a idade e o personagem Marshall.'
    },
    {
        id: 'meninos44',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Spirit',
        imagemPrincipal: 'imagens/infantil meninos/meninos44.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Cenário Campestre', diferencial: 'Ferraduras Prateadas' },
        descricao: 'Inspirado na animação Spirit: Cavalgando Livre. Apresenta base marrom com cavalos em relevo, andar superior azul com nuvens e cercas de madeira, finalizado com ferraduras prateadas e painel dos personagens no topo.'
    },
    {
        id: 'meninos45',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Bolofofos',
        imagemPrincipal: 'imagens/infantil meninos/meninos45.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos45.mp4',
        galeria: [
            'imagens/infantil meninos/meninos45.jpg',
            'imagens/infantil meninos/meninos45.1.jpg',
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Personagens em Biscuit' },
        descricao: 'Bolo colorido e vibrante com o tema Bolofofos. Decorado com colinas verdes, nuvens e sol, apresenta os personagens principais aplicados em relevo ao redor de todos os andares sob o logo oficial no topo.'
    },
   {
        id: 'meninos46',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Luccas Neto',
        imagemPrincipal: 'imagens/infantil meninos/meninos46.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Listrado', diferencial: 'Boneco Articulado' },
        descricao: 'Bolo temático vibrante inspirado no aventureiro Luccas Neto. Apresenta andares em azul e vermelho com listras amarelas, decorado com balões coloridos e o personagem no topo com nome personalizado.'
    },
    {
        id: 'meninos47',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Páscoa',
        imagemPrincipal: 'imagens/infantil meninos/meninos47.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Clean', diferencial: 'Ovos Coloridos' },
        descricao: 'Bolo temático para aniversários de Páscoa ou mesversários. Decorado com pegadinhas de coelho, uma base rodeada de ovos coloridos em biscuit e um topo com coelho e cesta de ovos sob nome personalizado.'
    },
    {
        id: 'meninos48',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Bolofofos',
        imagemPrincipal: 'imagens/infantil meninos/meninos48.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Personagens em Biscuit' },
        descricao: 'Bolo colorido e alegre com o tema Bolofofos. Traz os personagens principais em relevo aplicados sobre cenários de colinas verdes e nuvens, finalizado com um grande coelho e notas musicais.'
    },
    {
        id: 'meninos49',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Ursinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos49.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Liso', diferencial: 'Balões em Relevo' },
        descricao: 'Bolo minimalista e moderno em azul bebê. Apresenta um ursinho centralizado com gravata borboleta, cercado por uma composição de balões em tons de azul e marrom terra.'
    },
    {
        id: 'meninos50',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos50.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos50.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Tronco e Folhagens', diferencial: 'Mickey Explorador' },
        descricao: 'Bolo monumental de cinco andares integrando Safari e Mickey Mouse. Apresenta texturas de grama, tronco esculpido e diversos animais exploradores em jipes, coroado pelo Mickey safari no topo.'
    },
    {
        id: 'meninos51',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Mesversário',
        imagemPrincipal: 'imagens/infantil meninos/meninos51.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Escolar', diferencial: 'Capelo e Diploma' },
        descricao: 'Bolo comemorativo para mesversário. Design clean em branco com topos de papelaria criativa incluindo diploma, capelo e hashtags personalizadas.'
    },
    {
        id: 'meninos52',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Minecraft',
        imagemPrincipal: 'imagens/infantil meninos/meninos52.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pixelado', diferencial: 'Cenário TNT' },
        descricao: 'Bolo temático fiel ao jogo Minecraft. Apresenta base vermelha inspirada em blocos de TNT, andar central verde com o icônico Creeper e topo marrom com o rosto do personagem Steve e espadas de diamante.'
    },
    {
        id: 'meninos53',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos53.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Listrado', diferencial: 'Glitter Vermelho' },
        descricao: 'Modelo vibrante para colorados. Base vermelha lisa, andar superior com listras verticais brancas e vermelhas. O topo exibe uma bola e uma chuteira de futebol, ambas com acabamento total em glitter vermelho.'
    },
    {
        id: 'meninos54',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos54.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Binóculos e Chapéu' },
        descricao: 'Bolo de explorador ricamente decorado. Apresenta elementos de expedição como binóculos e chapéu de safari em biscuit, animais da selva (leão e girafa) e placa de identificação personalizada.'
    },
    {
        id: 'meninos55',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Realeza',
        imagemPrincipal: 'imagens/infantil meninos/meninos55.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê', diferencial: 'Urso de Coroa' },
        descricao: 'Design clássico em azul marinho e dourado. Base decorada com coroas douradas e laço estruturado, andar superior com textura matelassê e brasão de urso príncipe personalizado com o nome da criança.'
    },    
    
   {
        id: 'meninos56',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos56.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rede de Biscuit', diferencial: 'Chuteira e Bola' },
        descricao: 'Bolo esportivo em tons de cinza e azul tiffany. Apresenta base com silhuetas de jogadores, andar central envolto em uma rede de biscuit simulando o gol e topo personalizado com chuteira e bola sob o nome da criança.'
    },
    {
        id: 'meninos57',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos57.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Cascata de Balões' },
        descricao: 'Bolo temático vibrante da Patrulha Canina. Composto por andares em amarelo, azul e vermelho, traz os personagens em biscuit, logos oficiais e uma colorida cascata lateral de mini balões sob topo personalizado.'
    },
    {
        id: 'meninos58',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos58.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Animal Print', diferencial: 'Mickey Explorador' },
        descricao: 'Design criativo que une Safari e Mickey Mouse. Apresenta andares com texturas de zebra e girafa, andar superior simulando o traje de explorador e topo finalizado com o chapéu safari característico e orelhas do Mickey.'
    },
    {
        id: 'meninos59',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos59.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Glitter Azul', diferencial: 'Chuteira Dourada' },
        descricao: 'Para a torcida tricolor. Base com padrão xadrez azul e branco, andar central com nome em glitter. O destaque é o topo em formato de bola de futebol grande com uma chuteira dourada brilhante.'
    },
    {
        id: 'meninos60',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Realeza',
        imagemPrincipal: 'imagens/infantil meninos/meninos60.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Capitonê e Laço', diferencial: 'Príncipe no Topo' },
        descricao: 'Design majestoso em azul royal e dourado. Base com pérolas douradas, andar central com textura capitonê branca e topo dourado com brasão personalizado, coroado por um pequeno príncipe esculpido.'
    },    
    
    {
        id: 'meninos61',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Carros',
        imagemPrincipal: 'imagens/infantil meninos/meninos61.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário de Pista', diferencial: 'Bandeiras de Chegada' },
        descricao: 'Bolo temático vibrante inspirado na franquia Carros. Apresenta base xadrez com placa Route 66, andar central com logo oficial e topo com cenário de deserto, cactos e carros em miniatura sob o nome personalizado.'
    },
    {
        id: 'meninos62',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos62.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos62.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Torre de Comando' },
        descricao: 'Bolo monumental inspirado na Patrulha Canina. Apresenta andares temáticos com pegadas, logo oficial, finalizado com uma imponente torre de comando no topo com personagens.'
    },
    {
        id: 'meninos63',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Transformers',
        imagemPrincipal: 'imagens/infantil meninos/meninos63.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos63.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Urbano', diferencial: 'Labaredas em Relevo' },
        descricao: 'Bolo radical com temática Transformers. Base simulando prédios iluminados, andar central envolto em labaredas de fogo e topo laranja com engrenagens e o logo Autobot, finalizado com robô articulado.'
    },
    {
        id: 'meninos64',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Homem-Aranha',
        imagemPrincipal: 'imagens/infantil meninos/meninos64.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Urbano', diferencial: 'Máscara em Relevo' },
        descricao: 'Design focado no Homem-Aranha com três andares temáticos. Apresenta base e topo simulando o traje do herói com teias, e andar central destacando o horizonte de prédios da cidade sob o painel do personagem.'
    },
    {
        id: 'meninos65',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Bita',
        imagemPrincipal: 'imagens/infantil meninos/meninos65.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Clean', diferencial: 'Cascata de Balões' },
        descricao: 'Bolo encantador inspirado no Mundo Bita. Design clean em azul bebê com laço amarelo, decorado com uma cascata de balões coloridos e os personagens principais acompanhados pelo Bita no topo.'
    },
    {
        id: 'meninos66',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Cebolinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos66.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Gibi', diferencial: 'Estampa de Quadrinhos' },
        descricao: 'Bolo temático vibrante inspirado na Turma da Mônica. Andar central amarelo com a personagem e topo envolto em tirinhas de quadrinhos, finalizado com personagens e idade.'
    },
    {
        id: 'meninos67',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Revelação',
        imagemPrincipal: 'imagens/infantil meninos/meninos67.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Poás Coloridos', diferencial: 'Tênis em Biscuit' },
        descricao: 'Bolo para chá de revelação em azul e rosa pastel. Decorado com botões coloridos e laços, finalizado no topo com silhuetas de menino e menina calçando tênis esculpidos em biscuit.'
    },
    {
        id: 'meninos68',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Oceano',
        imagemPrincipal: 'imagens/infantil meninos/meninos68.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Degradê Azul', diferencial: 'Animais Marinhos' },
        descricao: 'Bolo encantador com temática de fundo do mar em degradê. Apresenta base simulando areia com tartaruga, polvo e arraia esculpidos em 3D, decorado com algas, corais e pérolas cenográficas.'
    },
    {
        id: 'meninos69',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Naruto',
        imagemPrincipal: 'imagens/infantil meninos/meninos69.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Modelagem 3D', diferencial: 'Bandana de Metal' },
        descricao: 'Bolo temático ninja em tons de laranja, preto e cinza. Apresenta base simulando a bandana de metal característica e andar superior com o nome personalizado, decorado com shurikens e painel do personagem.'
    },
    {
        id: 'meninos70',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'PJ Masks',
        imagemPrincipal: 'imagens/infantil meninos/meninos70.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Heróis Pijama', diferencial: 'Cenário Noturno' },
        descricao: 'Bolo monumental de cinco andares inspirado nos PJ Masks. Cada camada destaca um herói (Menino Gato, Corujita e Lagartixo) com texturas de escamas e prédios, finalizado com painel dos personagens no topo.'
    },
    {
        id: 'meninos71',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Carros',
        imagemPrincipal: 'imagens/infantil meninos/meninos71.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos71.mp4',
        detalhes: { altura: '4 Andares', acabamento: 'Cenário Espiral', diferencial: 'Pista de Corrida' },
        descricao: 'Bolo temático monumental inspirado na franquia Carros. Com estrutura em espiral, recria uma pista de corrida completa com subidas, descidas, sinalização de trânsito e carros em miniatura sob o nome personalizado.'
    },
    {
        id: 'meninos72',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Praia',
        imagemPrincipal: 'imagens/infantil meninos/meninos72.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Degradê Aerografado', diferencial: 'Cenário de Verão' },
        descricao: 'Bolo tropical com o tema "Tardezinha". Apresenta pintura em degradê simulando o pôr do sol no mar, decorado com silhuetas de coqueiros, hibiscos, óculos de sol e cadeira de praia em biscuit.'
    },
    {
        id: 'meninos73',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Trator',
        imagemPrincipal: 'imagens/infantil meninos/meninos73.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Rural', diferencial: 'Pneu e Feno' },
        descricao: 'Bolo temático inspirado na marca John Deere. Apresenta base simulando um pneu de trator, andar central verde com o logo oficial e topo decorado com fardo de feno, cerca de madeira e um trator em miniatura.'
    },
    {
        id: 'meninos74',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Revelação',
        imagemPrincipal: 'imagens/infantil meninos/meninos74.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Poás Coloridos', diferencial: 'Tênis em Biscuit' },
        descricao: 'Bolo clássico para chá de revelação de gênero. Decorado com botões coloridos em azul e rosa, laços e balões, finalizado no topo com silhuetas de menino e menina acompanhadas de pequenos tênis esculpidos.'
    },
    {
        id: 'meninos75',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos75.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Torre com Luz' },
        descricao: 'Bolo monumental de cinco andares da Patrulha Canina. Apresenta andares temáticos coloridos com pegadas e logos, finalizado com uma imponente torre de comando equipada com iluminação LED funcional.'
    },
    {
        id: 'meninos76',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Mario',
        imagemPrincipal: 'imagens/infantil meninos/meninos76.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Personagem 3D', diferencial: 'Plantas Piranha' },
        descricao: 'Bolo temático vibrante do Super Mario Bros. Apresenta base azul com o nome personalizado, andar central de tijolinhos com o Mario e topo com o Luigi, decorado com estrelas e plantas carnívoras saindo de canos.'
    },
    {
        id: 'meninos77',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Gaúcho',
        imagemPrincipal: 'imagens/infantil meninos/meninos77.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico Chic', diferencial: 'Cenário de Fogo' },
        descricao: 'Design temático regionalista com foco na cultura gaúcha. Apresenta base marrom com silhuetas de cavalos, andar central bege com chaleiras e cuias de chimarrão, e topo com laço de corda e churrasco cenográfico ao fogo.'
    },
    {
        id: 'meninos78',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninos/meninos78.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Animal Print', diferencial: 'Faróis com Luz' },
        descricao: 'Bolo de luxo unindo Safari e Mickey Mouse. Composto por andares texturizados de zebra e girafa, apresenta animais da selva em biscuit e um jipe camuflado na base equipado com faróis que acendem de verdade.'
    },
    {
        id: 'meninos79',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Patrulha',
        imagemPrincipal: 'imagens/infantil meninos/meninos79.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Skates com Rodas' },
        descricao: 'Bolo temático da Patrulha Canina focado nos personagens Chase e Zuma. Apresenta base vermelha com ossos e andar superior azul com o logo oficial, decorado com os personagens sobre skates e patinhas em relevo.'
    },
    {
        id: 'meninos80',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Futebol',
        imagemPrincipal: 'imagens/infantil meninos/meninos80.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Glitter e Brilho', diferencial: 'Bola na Taça' },
        descricao: 'Bolo temático do Sport Club Internacional. Decorado com as cores e brasão do clube, apresenta base listrada em vermelho e branco, andar superior com nome personalizado e um topo imponente com taça dourada e bola de futebol.'
    },
    {
        id: 'meninos81',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Ursinho',
        imagemPrincipal: 'imagens/infantil meninos/meninos81.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Matelassê', diferencial: 'Blocos ABC' },
        descricao: 'Bolo clássico em azul bebê e bege. Apresenta andares em matelassê com pérolas e ursinhos esculpidos brincando com blocos de letras e um trenzinho de biscuit personalizado.'
    },
    {
        id: 'meninos82',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Meninos',
        subtitulo: 'Ovelhinha',
        imagemPrincipal: 'imagens/infantil meninos/meninos82.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura de Lã', diferencial: 'Cenário de Cerca' },
        descricao: 'Bolo ultra delicado em tons de bege e verde água. O andar superior simula o corpo de uma ovelha com textura de lã, enquanto a base apresenta um cenário campestre com cercas e ovelhas em relevo.'
    },
    {
        id: 'meninos83',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Mickey',
        imagemPrincipal: 'imagens/infantil meninos/meninos83.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos83.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Smoking Central', diferencial: 'Janela Panorâmica' },
        descricao: 'Design criativo inspirado no traje de gala do Mickey Mouse. Apresenta base vermelha com botões, andar central simulando um smoking preto com gravata borboleta e topo amarelo com uma janela redonda onde o personagem aparece.'
    },
    {
        id: 'meninos84',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Brinquedos',
        imagemPrincipal: 'imagens/infantil meninos/meninos84.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos84.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Cataventos Giratórios' },
        descricao: 'Bolo vibrante que celebra a infância. Decorado com carros, pipas e um trenzinho que circula a base, finalizado com cataventos coloridos no topo que possuem movimento real e um avião em relevo.'
    },
    {
        id: 'meninos85',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Infantil Meninos',
        subtitulo: 'Pirata',
        imagemPrincipal: 'imagens/infantil meninos/meninos85.jpg',
        videoSrc: 'imagens/infantil meninos/videos/meninos85.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Listrado', diferencial: 'Navio em Movimento' },
        descricao: 'Aventura em alto mar com base listrada em vermelho e branco. O andar superior azul simula as ondas do mar com o rosto de um pequeno pirata, coroado por um detalhado navio negreiro esculpido no topo.'
    },
    {
        id: 'infantilm86',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Masculino',
        subtitulo: 'Harry Potter Ravenclaw',
        imagemPrincipal: 'imagens/infantil meninos/meninos86.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Temático', 
            diferencial: 'Cores da Corvinal' 
        },
        descricao: 'Opção mágica para aniversários infantis. O bolo traz os óculos do Harry Potter, pomo de ouro dourado e o cachecol azul, unindo aventura e delicadeza em um design exclusivo.'
    },
    {
        id: 'infantilm87',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Masculino',
        subtitulo: 'Harry Potter Gryffindor',
        imagemPrincipal: 'imagens/infantil meninos/meninos87.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Temático', 
            diferencial: 'Cores da Grifinória' 
        },
        descricao: 'O bruxinho mais famoso do mundo em um bolo decorado com cachecol vermelho e amarelo, varinha e pomo de ouro. Perfeito para festas infantis com tema de magia.'
    },
    /* --- AGUARDANDO FEVEREIRO ---
    {
        id: 'infantilm88',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Masculino',
        subtitulo: 'CR7',
        imagemPrincipal: 'imagens/infantil meninos/meninos88.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Liso e Geométrico', 
            diferencial: 'Balões Orgânicos' 
        },
        descricao: 'Homenagem ao CR7 com as cores de Portugal. Design moderno em vermelho com estampa de bola de futebol na lateral, finalizado com balões em tons de ouro, branco e verde, além da camisa 7 personalizada.'
    },
    {
        id: 'infantilm89',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Infantil Masculino',
        subtitulo: 'Grêmio',
        imagemPrincipal: 'imagens/infantil meninos/meninos89.png',
        detalhes: { 
            altura: '3 Andares', 
            acabamento: 'Cenográfico 3D', 
            diferencial: 'Gol com Personagem' 
        },
        descricao: 'Bolo imponente para tricolores. A estrutura criativa apresenta um andar base simulando uma goleira com jogador em biscuit, sustentando andares de bolas de futebol e o topo com a silhueta da torcida e o escudo do Grêmio.'
    },
    */
];