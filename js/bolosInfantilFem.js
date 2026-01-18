const listaInfantilFem = [
    // --- 1 ao 10 ---
    {
        id: 'meninas1',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas1.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas1.mp4',
        galeria: [
            'imagens/infantil meninas/meninas1.jpg',
            'imagens/infantil meninas/meninas1.1.jpg',
            'imagens/infantil meninas/meninas1.2.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Cenográfico', diferencial: 'Asas Gigantes' },
        descricao: 'Bolo cenográfico rosa com aplicação de diversas borboletas em biscuit e flores delicadas. O grande destaque visual são as asas laterais translúcidas com detalhes em pérolas.'
    },
    {
        id: 'meninas2',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Jardim',
        imagemPrincipal: 'imagens/infantil meninas/meninas2.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Tons Pastéis', diferencial: 'Gaiola no Topo' },
        descricao: 'Composição delicada em tons pastéis com andares decorados por galhos, passarinhos modelados e flores. Finalizado com uma gaiola de biscuit detalhada no topo.'
    },
    {
        id: 'meninas3',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Realeza',
        imagemPrincipal: 'imagens/infantil meninas/meninas3.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê', diferencial: 'Coroa Dourada' },
        descricao: 'Bolo elegante com textura matelassê e pérolas. Apresenta laço estruturado dourado, brasão real e topo personalizado com número decorado e mini coroa.'
    },
    {
        id: 'meninas4',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas4.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas4.mp4',
        galeria: [
            'imagens/infantil meninas/meninas4.jpg',
            'imagens/infantil meninas/meninas4.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Modelagem 3D', diferencial: 'Moinho de Vento' },
        descricao: 'Cenário completo de fazenda para meninas. Inclui moinho rosa, lago com patos, árvores, cercas e diversos animais da fazenda modelados em biscuit ao redor da base branca.'
    },
    {
        id: 'meninas5',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas5.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Babados e Poás', diferencial: 'Laço Amarelo' },
        descricao: 'Bolo temático nas cores vermelho e branco com detalhes em amarelo. Base com camadas de babados, andar central em poás e topo com a silhueta da personagem e laço de tecido.'
    },
    {
        id: 'meninas6',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Unicórnio',
        imagemPrincipal: 'imagens/infantil meninas/meninas6.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Degradê Arco-íris', diferencial: 'Chifre Dourado' },
        descricao: 'Bolo encantador com base em degradê arco-íris, andar central decorado com rosas coloridas em biscuit e topo azul com estrelas, finalizado com rosto de unicórnio e chifre dourado esculpido.'
    },
    {
        id: 'meninas7',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Masha e o Urso',
        imagemPrincipal: 'imagens/infantil meninas/meninas7.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Babados Marsala', diferencial: 'Casa de Madeira 3D' },
        descricao: 'Tema Masha e o Urso com base em babados roxos/marsala. O andar superior apresenta cenário de jardim com girassóis e uma réplica detalhada da casa de madeira da personagem no topo.'
    },
    {
        id: 'meninas8',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninas/meninas8.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Selva', diferencial: 'Animais Baby' },
        descricao: 'Safari lúdico para meninas em tons de verde e creme. Decorado com folhagens e animais da selva modelados (girafa, leão, elefante, macaco e sapo), finalizado com base simulando bambu.'
    },
    {
        id: 'meninas9',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas9.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Acetinado Azul', diferencial: 'Borboletas Prateadas' },
        descricao: 'Design moderno e clean em azul royal. Composto por dois andares lisos decorados com flores aplicadas na base e diversas borboletas prateadas com brilho acetinado "voando" pelo bolo.'
    },
    {
        id: 'meninas10',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Carrinho de Bebê',
        imagemPrincipal: 'imagens/infantil meninas/meninas10.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Drapeado com Poás', diferencial: 'Carrinho de Bebê no Topo' },
        descricao: 'Bolo clássico para chá de bebê ou primeiro aninho. Possui andar base rosa com drapeado e poás brancos, segundo andar em matelassê com pérolas e um delicado carrinho de bebê esculpido no topo.'
    },
    {
        id: 'meninas11',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Doces',
        imagemPrincipal: 'imagens/infantil meninas/meninas11.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Drip Cake', diferencial: 'Sorvetes e Donuts' },
        descricao: 'Bolo temático ultra colorido simulando uma confeitaria. Base rosa com cupcakes, segundo andar com efeito de cobertura escorrida (drip), decorado com donuts, pirulitos e casquinhas de sorvete modeladas.'
    },
    {
        id: 'meninas12',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Branca de Neve',
        imagemPrincipal: 'imagens/infantil meninas/meninas12.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Personalizado', diferencial: 'Maçãs Pintadas' },
        descricao: 'Clássico Branca de Neve com base amarela e maçãs pintadas à mão. Andar central em matelassê vermelho com laço estruturado e topo azul com a personagem e o número da idade personalizados.'
    },
    {
        id: 'meninas13',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Ursa Princesa',
        imagemPrincipal: 'imagens/infantil meninas/meninas13.jpg',
        galeria: [
            'imagens/infantil meninas/meninas13.jpg',
            'imagens/infantil meninas/meninas13.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Clean', diferencial: 'Laço Gigante' },
        descricao: 'Design delicado em branco e rosa. Base decorada com cubos de nome, andar central com um laço rosa gigante e andar superior com corações em relevo, finalizado com uma ursa de coroa no topo.'
    },
    {
        id: 'meninas14',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Branca de Neve',
        imagemPrincipal: 'imagens/infantil meninas/meninas14.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Realeza', diferencial: 'Moldura de Personagem' },
        descricao: 'Variação luxuosa do tema Branca de Neve. Andar base amarelo, central em matelassê vermelho e topo azul com moldura dourada estilo espelho trazendo a imagem da personagem sob o topo de idade.'
    },
    {
        id: 'meninas15',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Pool Party',
        imagemPrincipal: 'imagens/infantil meninas/meninas15.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Vibrante', diferencial: 'Palmeira e Boneca' },
        descricao: 'Bolo ideal para festas na piscina. Base azul com desenhos de picolé e sol, andar superior vermelho com letreiro "Pool Party", decorado com boias coloridas e uma palmeira cenográfica no topo.'
    },
    {
        id: 'meninas16',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas16.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê e Poás', diferencial: 'Topo de Orelhas' },
        descricao: 'Bolo imponente da Minnie Mouse em vermelho, branco e preto. Apresenta base em poás, andar central com molduras da personagem e laço, andar superior em matelassê com pérolas e topo com as icônicas orelhas e laço de poá.'
    },
    {
        id: 'meninas17',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Cinderela e Aurora',
        imagemPrincipal: 'imagens/infantil meninas/meninas17.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê', diferencial: 'Molduras Reais' },
        descricao: 'Bolo delicado em rosa e azul tiffany decorado com flores em biscuit e borboletas. Traz molduras brancas ornamentadas com as imagens da Cinderela e da Aurora (Bela Adormecida).'
    },
    {
        id: 'meninas18',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Bolofofos',
        imagemPrincipal: 'imagens/infantil meninas/meninas18.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Personagens em Biscuit', diferencial: 'Cores Pastéis' },
        descricao: 'Tema Bolofofos em tons suaves de amarelo e rosa. Cada andar apresenta os personagens em destaque com acabamento liso e laços brancos estruturados, criando uma composição lúdica e alegre.'
    },
    {
        id: 'meninas19',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'A Casa Mágica da Gabby',
        imagemPrincipal: 'imagens/infantil meninas/meninas19.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas19.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 3D', diferencial: 'Topo de Casinha' },
        descricao: 'Bolo temático vibrante com granulados coloridos. Base roxa e andar central rosa com os personagens principais, finalizado com o topo simulando a própria casa mágica da Gabby com orelhas de gato.'
    },
    {
        id: 'meninas20',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Chocolate',
        imagemPrincipal: 'imagens/infantil meninas/meninas20.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Drip Cake', diferencial: 'Barras de Chocolate' },
        descricao: 'Bolo moderno estilo Drip Cake simulando chocolate escorrido. O topo é ricamente decorado com diversas barras de chocolate e granulados cenográficos, perfeito para aniversários contemporâneos.'
    },
    {
        id: 'meninas21',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Galinha Pintadinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas21.jpg',
        galeria: [
            'imagens/infantil meninas/meninas21.jpg',
            'imagens/infantil meninas/meninas21.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Renda de Biscuit', diferencial: 'Moinho 3D' },
        descricao: 'Bolo lúdico em tons pastéis de amarelo, rosa e azul. Possui detalhes em renda branca de biscuit, poás delicados e cenário de fazenda com moinho e personagens modelados, finalizado com a Galinha Pintadinha no topo.'
    },
    {
        id: 'meninas22',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Rústico',
        imagemPrincipal: 'imagens/infantil meninas/meninas22.jpg',
        galeria: [
            'imagens/infantil meninas/meninas22.jpg',
            'imagens/infantil meninas/meninas22.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Textura Amadeirada', diferencial: 'Sapatinhos de Bebê' },
        descricao: 'Design rústico e orgânico que simula troncos de madeira com preenchimento branco entre as camadas. Decorado com mini margaridas, um grande laço de juta com renda e sapatinhos de bebê rosa no topo.'
    },
    {
        id: 'meninas23',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Jasmine',
        imagemPrincipal: 'imagens/infantil meninas/meninas23.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Dourado e Matelassê', diferencial: 'Renda Árabe' },
        descricao: 'Inspirado na princesa Jasmine, apresenta paleta turquesa e roxa. O andar superior traz renda dourada trabalhada, o central possui textura matelassê com a personagem em destaque, e a base exibe ornamentos árabes e nome personalizado.'
    },
    {
        id: 'meninas24',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Metoo Doll',
        imagemPrincipal: 'imagens/infantil meninas/meninas24.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cores Pastéis', diferencial: 'Arco-íris e Lua' },
        descricao: 'Bolo temático ultra delicado com as famosas bonecas Metoo. Apresenta andares em rosa, azul e verde água com detalhes de nuvens, estrelas, corações, arco-íris frontal e boneca sentada na lua no topo.'
    },
    {
        id: 'meninas25',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Montaria',
        imagemPrincipal: 'imagens/infantil meninas/meninas25.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Corda de Biscuit', diferencial: 'Boneca e Cavalo' },
        descricao: 'Bolo temático para pequenas amazonas. Apresenta base marrom com ferraduras douradas, andar central rosa com brasão personalizado e topo branco com textura de corda, finalizado com uma boneca em biscuit montada em um cavalo.'
    },
    {
        id: 'meninas26',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Montaria',
        imagemPrincipal: 'imagens/infantil meninas/meninas26.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico Chic', diferencial: 'Ferraduras e Laço' },
        descricao: 'Design sofisticado no tema montaria. Base marrom com ferraduras, andar central em rosa antigo com inicial dourada e topo simulando corda branca trançada, acompanhado por velas de 18 anos.'
    },
    {
        id: 'meninas27',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fundo do Mar',
        imagemPrincipal: 'imagens/infantil meninas/meninas27.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 3D', diferencial: 'Cauda de Sereia' },
        descricao: 'Bolo encantador com o tema oceano em tons pastéis. Decorado com golfinhos, cavalos-marinhos, corais e conchas, possui topo com o nome da aniversariante, número da idade e uma cauda de sereia brilhante.'
    },
    {
        id: 'meninas28',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas28.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Country Rosa', diferencial: 'Chapéu no Topo' },
        descricao: 'Tema fazendinha para meninas nas cores rosa e creme. Base com silhueta de cavalo e cerquinha, andar superior com nome personalizado, laço de corda e um chapéu rosa de biscuit no topo.'
    },
    {
        id: 'meninas29',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Ovelhinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas29.png',
        galeria: [
            'imagens/infantil meninas/meninas29.png',
            'imagens/infantil meninas/meninas29.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Textura de Lã', diferencial: 'Rosto de Ovelha' },
        descricao: 'Bolo ultra delicado inteiramente revestido com textura que simula lã de ovelha em biscuit. Apresenta o rosto de uma ovelhinha baby centralizado, ideal para chás de bebê ou aniversários de um ano.'
    },
    {
        id: 'meninas30',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Stitch e Angel',
        imagemPrincipal: 'imagens/infantil meninas/meninas30.jpg',
        galeria: [
            'imagens/infantil meninas/meninas30.jpg',
            'imagens/infantil meninas/meninas30.1.jpg',
            'imagens/infantil meninas/meninas30.2.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Lilo & Stitch', diferencial: 'Flores de Hibisco' },
        descricao: 'Tema Lilo & Stitch em tons de azul e rosa. Decorado com corações rosa, flores de hibisco em biscuit e a ilustração dos personagens Stitch e Angel abraçados na base.'
    },
   {
        id: 'meninas31',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Frozen',
        imagemPrincipal: 'imagens/infantil meninas/meninas31.jpg',
        galeria: [
            'imagens/infantil meninas/meninas31.jpg',
            'imagens/infantil meninas/meninas31.1.jpg',
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Matelassê e Pérolas', diferencial: 'Flocos de Neve 3D' },
        descricao: 'Bolo imponente inspirado no filme Frozen. Alterna andares em branco e azul tiffany com texturas de matelassê, cordas de biscuit e diversas camadas de flocos de neve em relevo. Topo personalizado com personagem e idade.'
    },
    {
        id: 'meninas32',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Unicórnio',
        imagemPrincipal: 'imagens/infantil meninas/meninas32.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Tons Pastéis', diferencial: 'Chifre Dourado' },
        descricao: 'Design lúdico com base azul trazendo arco-íris e nuvens, andar central rosa com nome personalizado e topo branco com o rosto do unicórnio. Finalizado com orelhas, chifre dourado e uma rosa esculpida no topo.'
    },
    {
        id: 'meninas33',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas33.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Babados e Matelassê', diferencial: 'Topo de Orelhas' },
        descricao: 'Versão da Minnie Mouse em pink e branco. A base apresenta camadas volumosas de ruffles (babados) com lacinhos, andar central em matelassê com pontos dourados e topo preto liso com o icônico laço de poás.'
    },
    {
        id: 'meninas34',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Vera e o Reino do Arco-Íris',
        imagemPrincipal: 'imagens/infantil meninas/meninas34.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Degradê Aerografado', diferencial: 'Cenário Colorido' },
        descricao: 'Bolo de andar único com altura dupla, apresentando pintura em degradê arco-íris. Decorado com estrelas brilhantes, arco-íris em relevo e a personagem principal com seu gato Bartleby em destaque frontal.'
    },
    {
        id: 'meninas35',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Balada',
        imagemPrincipal: 'imagens/infantil meninas/meninas35.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Drip Cake Branco', diferencial: 'Globo Espelhado' },
        descricao: 'Bolo moderno e sofisticado para festas de adolescentes. Estrutura branca com efeito de calda escorrida (drip), pérolas e estrelas prateadas. O destaque é o globo de discoteca espelhado no topo e letreiro Happy Birthday.'
    },
    {
        id: 'meninas36',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Paris',
        imagemPrincipal: 'imagens/infantil meninas/meninas36.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda Dourada', diferencial: 'Torre Eiffel' },
        descricao: 'Bolo sofisticado em azul marinho e branco. Base azul com pontos dourados, andar central branco com renda dourada vazada e topo liso com uma miniatura da Torre Eiffel e nome personalizado.'
    },
    {
        id: 'meninas37',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Bita e os Animais',
        imagemPrincipal: 'imagens/infantil meninas/meninas37.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Colorido Lúdico', diferencial: 'Balões 3D' },
        descricao: 'Bolo temático vibrante inspirado no Mundo Bita. Base vermelha com corações, andar central com listras verticais azuis e amarelas com a personagem Lila, e topo com nome e balões coloridos em relevo.'
    },
    {
        id: 'meninas38',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas38.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Renda e Flores', diferencial: 'Jardim de Borboletas' },
        descricao: 'Design delicado em tons de rosa e branco. Base e andar central envoltos em renda branca de biscuit com cascata de rosas, e topo branco decorado com diversas borboletas coloridas e nome personalizado.'
    },
    {
        id: 'meninas39',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Abelhinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas39.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Drip Cake Mel', diferencial: 'Colmeia 3D' },
        descricao: 'Bolo temático ultra charmoso em tons de laranja, amarelo e branco. Base com estampa de favos de mel e margaridas, andar superior com efeito de mel escorrendo (drip), decorado com abelhas em biscuit e uma colmeia esculpida no centro.'
    },
    {
        id: 'meninas40',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Realeza',
        imagemPrincipal: 'imagens/infantil meninas/meninas40.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê e Pérolas', diferencial: 'Coroa Vazada' },
        descricao: 'Elegância em rosa suave. Base em matelassê com pérolas rosadas, andar superior com brasão dourado e rosa branca central, coroado por uma majestosa coroa dourada vazada no topo.'
    },
    {
        id: 'meninas41',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Montaria',
        imagemPrincipal: 'imagens/infantil meninas/meninas41.png',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico Chic', diferencial: 'Chapéu de Cowboy' },
        descricao: 'Design temático de hipismo em tons de marrom e rosa antigo. Apresenta base com ferraduras douradas, andar central com inicial personalizada e topo simulando corda trançada branca, finalizado com um chapéu rosa decorado com rosas.'
    },
    {
        id: 'meninas42',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Sereia',
        imagemPrincipal: 'imagens/infantil meninas/meninas42.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Cintilante', diferencial: 'Cauda Iridescente' },
        descricao: 'Bolo de andar único em rosa suave decorado com pérolas comestíveis e elementos marinhos em relevo. O destaque é a cauda de sereia com acabamento furta-cor iridescente cercada por conchas e corais.'
    },
    {
        id: 'meninas43',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas43.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Clean', diferencial: 'Cascata de Balões' },
        descricao: 'Bolo delicado de dois andares brancos com detalhes dourados. Decorado com cascatas de balões em tons de rosa e ouro, borboletas vazadas em dourado e nome da aniversariante em relevo.'
    },
    {
        id: 'meninas44',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fada',
        imagemPrincipal: 'imagens/infantil meninas/meninas44.jpg',
        galeria: [
            'imagens/infantil meninas/meninas44.jpg',
            'imagens/infantil meninas/meninas44.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Casa de Fada' },
        descricao: 'Bolo temático imponente que simula um bosque encantado. Base branca com flores silvestres, andar central rosa com porta de celeiro e topo com o nome da aniversariante e uma fada sentada sobre a estrutura.'
    },
    {
        id: 'meninas45',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Festa Junina',
        imagemPrincipal: 'imagens/infantil meninas/meninas45.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Xadrez e Relevo', diferencial: 'Topo de Fogueira' },
        descricao: 'Bolo festivo rico em detalhes juninos. Base azul com fachada de vila e igreja em relevo, andar central em xadrez rosa com girassóis e topo com bandeirinhas coloridas e fogueira cenográfica.'
    },
    {
        id: 'meninas46',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Castelo da Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas46.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas46.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Arquitetura 3D', diferencial: 'Torres Douradas' },
        descricao: 'Bolo monumental em formato de castelo rosa. Apresenta textura de tijolinhos, diversas torres com telhados dourados e a personagem Minnie Mouse em destaque no portal central sob nuvens esculpidas.'
    },
    {
        id: 'meninas47',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: '3 Palavrinhas',
        imagemPrincipal: 'imagens/infantil meninas/meninas47.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Personagens 2D', diferencial: 'Sol no Topo' },
        descricao: 'Bolo temático cristão baseado no grupo 3 Palavrinhas. Decorado com os personagens segurando placas "Deus é Amor", possui base rosa com logo colorido e topo com nuvens e um grande sol amarelo.'
    },
    {
        id: 'meninas48',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Galeria de Arte',
        imagemPrincipal: 'imagens/infantil meninas/meninas48.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas48.mp4',
        galeria: [
            'imagens/infantil meninas/meninas48.jpg',
            'imagens/infantil meninas/meninas48.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Lápis Gigante', diferencial: 'Paleta e Tintas' },
        descricao: 'Design ultra criativo que simula uma galeria de arte. Apresenta base em formato de loja, andares decorados com mãos carimbadas, paleta de tintas, balões coloridos e um grande lápis verde que forma o topo.'
    },
    {
        id: 'meninas49',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Stitch e Angel',
        imagemPrincipal: 'imagens/infantil meninas/meninas49.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Floral Tropical', diferencial: 'Placa Amadeirada' },
        descricao: 'Tema Lilo & Stitch em azul e rosa. Decorado com flores de hibisco, traz os personagens na base e uma placa central personalizada simulando textura de madeira com o nome da aniversariante.'
    },
    {
        id: 'meninas50',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Margaridas',
        imagemPrincipal: 'imagens/infantil meninas/meninas50.png',
        detalhes: { altura: '2 Andares', acabamento: 'Xadrez e Laço', diferencial: 'Flores em Relevo' },
        descricao: 'Bolo delicado com base em padrão xadrez rosa e branco, adornado com um grande laço rosa. O andar superior é liso com moldura para nome, cercado por diversas margaridas brancas em biscuit.'
    },
    {
        id: 'meninas51',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Spirit',
        imagemPrincipal: 'imagens/infantil meninas/meninas51.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Campestre', diferencial: 'Ferraduras Prateadas' },
        descricao: 'Inspirado na animação Spirit: Cavalgando Livre. Apresenta base marrom com cavalos em relevo, andar superior azul com nuvens e cercas de madeira, finalizado com ferraduras prateadas e painel dos personagens no topo.'
    },
    {
        id: 'meninas52',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Ovelhinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas52.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Pintura Cenário', diferencial: 'Cascata de Rosas' },
        descricao: 'Bolo artístico de quatro andares. Intercala camadas com cascatas de rosas em biscuit, cenário pintado à mão com ovelhas em relevo e topo personalizado com inicial dourada e uma ovelha baby esculpida.'
    },
    {
        id: 'meninas53',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Rapunzel',
        imagemPrincipal: 'imagens/infantil meninas/meninas53.png',
        detalhes: { altura: '2 Andares', acabamento: 'Xadrez e Margaridas', diferencial: 'Personagem no Topo' },
        descricao: 'Inspirado na Rapunzel (Enrolados), apresenta base com padrão xadrez rosa e laço volumoso. O andar superior liso é rodeado por margaridas em biscuit, finalizado com a personagem e idade no topo.'
    },
    {
        id: 'meninas54',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas54.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê de Pérolas', diferencial: 'Silhuetas Clássicas' },
        descricao: 'Design clássico em rosa e branco. Base em poás com laço estruturado, andar central com silhuetas da Minnie e topo em matelassê com pérolas formando o icônico rosto da personagem com laço de pérolas.'
    },
    {
        id: 'meninas55',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Chuva de Amor',
        imagemPrincipal: 'imagens/infantil meninas/meninas55.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas55.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Renda e Pérolas', diferencial: 'Boneca em Bicicleta' },
        descricao: 'Bolo temático em azul e rosa pastel com efeito de carrossel. Apresenta andares decorados com corações e arco-íris, base rendada com nuvens pendentes e topo lúdico com uma boneca e urso em uma bicicleta cenográfica.'
    },
    {
        id: 'meninas56',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Sereia',
        imagemPrincipal: 'imagens/infantil meninas/meninas56.jpg',
        galeria: [
            'imagens/infantil meninas/meninas56.jpg',
            'imagens/infantil meninas/meninas56.1.jpg',
            'imagens/infantil meninas/meninas56.2.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Escamas em Relevo', diferencial: 'Cascata de Balões' },
        descricao: 'Bolo temático luxuoso de fundo do mar com degradê de cores. Apresenta andares com texturas de escamas, babados, estrelas do mar douradas e uma imponente cascata lateral de balões, finalizado com concha e cauda de sereia no topo.'
    },
    {
        id: 'meninas57',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Jardim',
        imagemPrincipal: 'imagens/infantil meninas/meninas57.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas57.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Floral', diferencial: 'Boneca no Balanço' },
        descricao: 'Bolo encantador com base simulando uma saia rendada rosa. O andar superior azul traz o nome personalizado e é coroado por uma estrutura floral com uma boneca em um balanço funcional com movimento.'
    },
    {
        id: 'meninas58',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Safari',
        imagemPrincipal: 'imagens/infantil meninas/meninas58.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas58.mp4',
        galeria: [
            'imagens/infantil meninas/meninas58.jpg',
            'imagens/infantil meninas/meninas58.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Animal Print', diferencial: 'Jipe Giratório' },
        descricao: 'Safári lúdico em tons de rosa e creme. Apresenta texturas de zebra e girafa, diversos animais baby em biscuit e um destaque motorizado: um jipe rosa com personagens que gira ao redor do bolo.'
    },
    {
        id: 'meninas59',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Balão',
        imagemPrincipal: 'imagens/infantil meninas/meninas59.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas59.mp4',
        detalhes: { altura: '4 Andares', acabamento: 'Rosê Gold', diferencial: 'Balão Gigante' },
        descricao: 'Bolo monumental com temática de balões em tons pastéis e rosê gold. Decorado com mini balões em relevo e nuvens, finalizado com um grande balão estruturado no topo com detalhes em renda e cordas.'
    },
    {
        id: 'meninas60',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'A Bela e a Fera',
        imagemPrincipal: 'imagens/infantil meninas/meninas60.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas60.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Dourado e Vermelho', diferencial: 'Rosa na Cúpula' },
        descricao: 'Design luxuoso inspirado no clássico da Disney. Base vermelha com textura arabesca, andar superior dourado liso e topo com a icônica rosa vermelha protegida por uma cúpula de vidro com luzes LED.'
    },
    {
        id: 'meninas61',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas61.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 3D', diferencial: 'Trator e Celeiro' },
        descricao: 'Riquíssimo em detalhes lúdicos, este modelo apresenta cenário completo de fazenda. Inclui celeiro rosa, trator com milho, diversos animais esculpidos e placa de nome personalizada, tudo em acabamento premium de biscuit.'
    },
    {
        id: 'meninas62',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Minnie',
        imagemPrincipal: 'imagens/infantil meninas/meninas62.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas62.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Babados e Poás', diferencial: 'Corações Giratórios' },
        descricao: 'Tema Minnie Mouse em tons de rosa. Base composta por degradê de babados (ruffles), andar central com a personagem em destaque e topo lúdico com corações e silhuetas da Minnie em hastes móveis.'
    },
    {
        id: 'meninas63',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Bosque Encantado',
        imagemPrincipal: 'imagens/infantil meninas/meninas63.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas63.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Tronco de Árvore', diferencial: 'Cenário com Movimento' },
        descricao: 'Obra de arte cenográfica que simula um bosque mágico. Apresenta andares rosa com animais da floresta, cogumelos e flores, encimados por um tronco de árvore esculpido com fadas, coruja e animais móveis.'
    },
    {
        id: 'meninas64',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fada',
        imagemPrincipal: 'imagens/infantil meninas/meninas64.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas64.mp4',
        galeria: [
            'imagens/infantil meninas/meninas64.jpg',
            'imagens/infantil meninas/meninas64.1.jpg'
        ],
        detalhes: { altura: '5 Andares', acabamento: 'Cenário Lúdico', diferencial: 'Portas de Madeira' },
        descricao: 'Bolo monumental de cinco andares que narra uma história encantada. Decorado com portas de madeira de fadas, cogumelos, passarinhos e flores delicadas, finalizado com uma fada esculpida e topo de idade.'
    },

   {
        id: 'meninas65',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Moranguinho',
        imagemPrincipal: 'imagens/infantil meninas/meninas65.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê', diferencial: 'Morangos Pendentes' },
        descricao: 'Bolo temático vibrante em verde e rosa. Apresenta base em matelassê com pérolas, laço de poás e andar superior decorado com flores brancas e morangos esculpidos que pendem da estrutura.'
    },
    {
        id: 'meninas66',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Jardim',
        imagemPrincipal: 'imagens/infantil meninas/meninas66.jpg',
        galeria: [
            'imagens/infantil meninas/meninas66.jpg',
            'imagens/infantil meninas/meninas66.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Floral', diferencial: 'Boneca Sentada' },
        descricao: 'Bolo encantador em tons de branco e lilás. Apresenta andares decorados com rosas e lírios em biscuit, diversas borboletas coloridas em relevo e o topo finalizado com uma delicada boneca em trajes de balé e número da idade.'
    },
    {
        id: 'meninas67',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Chá de Revelação',
        imagemPrincipal: 'imagens/infantil meninas/meninas67.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Poás Coloridos', diferencial: 'Tênis em Biscuit' },
        descricao: 'Bolo para revelação de gênero em azul e rosa pastel. Decorado com botões coloridos, laços e orelhas, finalizado no topo com um par de tênis esculpidos e silhuetas de menino e menina.'
    },
    {
        id: 'meninas68',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Paris',
        imagemPrincipal: 'imagens/infantil meninas/meninas68.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Adamascado', diferencial: 'Torre Eiffel Prata' },
        descricao: 'Estilo romântico francês em rosa, preto e branco. Apresenta base em matelassê marsala, andar central com estampa adamascada preta e topo em poás com uma grande flor de tecido e miniatura da Torre Eiffel.'
    },
    {
        id: 'meninas69',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Magali',
        imagemPrincipal: 'imagens/infantil meninas/meninas69.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas69.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário Gibi', diferencial: 'Estampa de Melancia' },
        descricao: 'Bolo temático da Turma da Mônica. Base simulando uma melancia com sementes, andar central amarelo com a personagem e topo envolto em tirinhas de quadrinhos, finalizado com a Magali e idade.'
    },
    {
        id: 'meninas70',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas70.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Renda e Flores', diferencial: 'Jardim de Rosas' },
        descricao: 'Bolo temático delicado com base azul e poás brancos. O andar central é envolto em renda de biscuit com cascata de rosas, e o topo branco é decorado com diversas borboletas coloridas em relevo e nome personalizado.'
    },
    {
        id: 'meninas71',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas71.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda e Flores', diferencial: 'Close Detalhado' },
        descricao: 'Visão aproximada das texturas deste modelo, destacando a aplicação minuciosa de flores e borboletas em biscuit sobre a camada de renda branca trabalhada.'
    },
    {
        id: 'meninas72',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Borboletas',
        imagemPrincipal: 'imagens/infantil meninas/meninas72.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Floral', diferencial: 'Borboletas em Relevo' },
        descricao: 'Bolo encantador com dois andares em tons de branco e verde grama. Decorado com pinturas de flores e folhagens, apresenta diversas borboletas coloridas aplicadas em relevo e um exuberante arranjo floral no topo.'
    },
    {
        id: 'meninas73',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Elefantinho',
        imagemPrincipal: 'imagens/infantil meninas/meninas73.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Liso', diferencial: 'Elefante no Topo' },
        descricao: 'Bolo para chá de bebê ou primeiro aninho em tons de rosa e branco. Decorado com flores delicadas e um charmoso elefantinho baby no topo sob um fundo de corações em tons pastéis.'
    },
    {
        id: 'meninas74',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Montaria',
        imagemPrincipal: 'imagens/infantil meninas/meninas74.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Rústico Chic', diferencial: 'Ferradura e Corda' },
        descricao: 'Design temático de hipismo em tons de marrom e rosa antigo. Apresenta base com ferraduras douradas, andar central com inicial personalizada e topo simulando corda trançada com ferradura rosa e idade.'
    },
    {
        id: 'meninas75',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Fazendinha',
        imagemPrincipal: 'imagens/infantil meninas/meninas75.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Papelaria', diferencial: 'Moinho no Topo' },
        descricao: 'Bolo temático de fazenda para meninas em tons pastéis de verde e amarelo. Decorado com cercas, animais e sol em papelaria criativa, finalizado com um moinho de vento no topo.'
    },
    {
        id: 'meninas76',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Frutas',
        imagemPrincipal: 'imagens/infantil meninas/meninas76.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas76.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Colorido', diferencial: 'Topo de Abacaxi' },
        descricao: 'Bolo tropical vibrante com andares simulando fatias de frutas. Base de laranja, centro de melancia e topo de abacaxi texturizado, decorado com diversas frutas em relevo como morangos e cerejas.'
    },
    {
        id: 'meninas77',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Baby Shark',
        imagemPrincipal: 'imagens/infantil meninas/meninas77.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Fundo do Mar', diferencial: 'Areia de Biscuit' },
        descricao: 'Bolo temático rosa em degradê com os personagens da família Shark. Decorado com elementos marinhos coloridos, algas em relevo e base simulando areia da praia, coroado com o Baby Shark.'
    },
    {
        id: 'meninas78',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Meninas',
        subtitulo: 'Ursa Princesa',
        imagemPrincipal: 'imagens/infantil meninas/meninas78.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Matelassê', diferencial: 'Ursa com Coroa' },
        descricao: 'Versão compacta e delicada do tema Ursa Princesa. Bolo de andar único com textura matelassê, pérolas e renda de biscuit, finalizado com uma ursa modelada e nome personalizado.'
    },
    {
        id: 'meninas79',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Infantil Meninas',
        subtitulo: 'Simpsons',
        imagemPrincipal: 'imagens/infantil meninas/meninas79.jpg',
        videoSrc: 'imagens/infantil meninas/videos/meninas79.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário 2D', diferencial: 'Televisão Central' },
        descricao: 'Bolo temático divertido da família Simpsons. Apresenta base vermelha, andar central azul com uma televisão cenográfica exibindo a personagem Maggie, e topo marrom decorado com donuts e personagens.'
    },
    /* --- AGUARDANDO FEVEREIRO ---
    {
        id: 'meninas80',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Infantil Feminino',
        subtitulo: 'Gatinha Marie',
        imagemPrincipal: 'imagens/infantil meninas/meninas80.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Temático', 
            diferencial: 'Borboletas Suspensas' 
        },
        descricao: 'Bolo encantador com o tema da Gatinha Marie. Possui acabamento degradê suave, decorado com flores delicadas em rosa e um topo lúdico com a personagem interagindo com borboletas suspensas em arame.'
    },
    */
];