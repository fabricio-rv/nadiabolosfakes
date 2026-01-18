const listaTematicos = [
    // --- 1 ao 10 ---
    {
        id: 'tematicos1',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Aniversário Escolar',
        imagemPrincipal: 'imagens/tematicos/tematicos1.jpg',
        galeria: [
            'imagens/tematicos/tematicos1.jpg',
            'imagens/tematicos/tematicos1.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Adamascado e Matelassê', diferencial: 'Livros no Topo' },
        descricao: 'Bolo imponente de 5 andares em azul e branco. Intercala andares com estampa adamascada prateada e matelassê com strass. O topo apresenta dois livros grandes esculpidos com o nome da escola e a idade celebrada.'
    },
    {
        id: 'tematicos2',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Tradição Judaica',
        imagemPrincipal: 'imagens/tematicos/tematicos2.png',
        detalhes: { altura: '3 Andares', acabamento: 'Símbolos Religiosos', diferencial: 'Candelabro (Menorá)' },
        descricao: 'Celebração das tradições judaicas em azul e branco. A base possui franjas simulando o manto de oração (Talit), decorado com Estrela de Davi dourada e finalizado com uma Menorá no topo.'
    },
    {
        id: 'tematicos3',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Narrativa Rústica',
        imagemPrincipal: 'imagens/tematicos/tematicos3.png',
        detalhes: { altura: '4 Andares', acabamento: 'Pintura à Mão', diferencial: 'Cenário Rural' },
        descricao: 'Bolo artístico com pintura estilo cenário. As camadas narram uma história visual com pescaria no rio, pôr do sol, silhueta de carro de boi e acabamento simulando madeira no topo com pergaminho comemorativo.'
    },
    {
        id: 'tematicos4',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Lojas Lebes',
        imagemPrincipal: 'imagens/tematicos/tematicos4.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Metalizado', diferencial: 'Cores da Marca' },
        descricao: 'Design moderno nas cores institucionais verde e branco, intercalado com andares de acabamento prateado liso e base espelhada. Possui logo da empresa em relevo central.'
    },
    {
        id: 'tematicos5',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Rádio FM',
        imagemPrincipal: 'imagens/tematicos/tematicos5.jpg',
        detalhes: { altura: '5 Andares', acabamento: 'Glitter', diferencial: 'Microfone Retrô' },
        descricao: 'Bolo vibrante para festa musical. Base decorada com teclas de piano, seguida por andares revestidos em glitter azul e vermelho. Detalhes incluem fones de ouvido laterais e um grande microfone prateado no topo.'
    },
    {
        id: 'tematicos6',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: 'Campanha Outubro Rosa',
        imagemPrincipal: 'imagens/tematicos/tematicos6.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos6.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Renda e Flores', diferencial: 'Placas Personalizadas' },
        descricao: 'Bolo imponente de 5 andares, ideal para eventos corporativos e públicos. Acabamento em rosa com renda branca, arranjo floral volumoso na base e placas temáticas (CRAS, Secretaria de Saúde, Outubro Rosa).'
    },
    {
        id: 'tematicos7',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Rústico',
        subtitulo: 'Estilo Gaúcho',
        imagemPrincipal: 'imagens/tematicos/tematicos7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura de Couro', diferencial: 'Cavalos no Topo' },
        descricao: 'Riqueza de texturas para temas rurais. Base simulando madeira com corda e chapéu em relevo, andar intermediário com cinto de fivela prateada e topo com estampa xadrez e ferraduras. Decorado com cavalos realistas.'
    },
    {
        id: 'tematicos8',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Batizado Luxo',
        imagemPrincipal: 'imagens/tematicos/tematicos8.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê e Pérolas', diferencial: 'Bíblia e Cruz' },
        descricao: 'Clássico branco e dourado. Intercala andares lisos e em matelassê com pérolas, finalizado com renda dourada na base. Possui cruz em relevo e topo com bíblia e mandala "Meu Batizado" espelhada.'
    },
    {
        id: 'tematicos9',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Aniversário',
        subtitulo: 'Aniversário da Cidade',
        imagemPrincipal: 'imagens/tematicos/tematicos9.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos9.mp4',
        detalhes: { altura: '+5 Andares', acabamento: 'Arquitetura Moderna', diferencial: 'Letreiro Espiral' },
        descricao: 'Design arquitetônico contemporâneo em branco com detalhes dourados verticais. O destaque é o letreiro dourado "Encruzilhada do Sul" que sobe em espiral ao redor do bolo, finalizando com o número 176 no topo.'
    },
    {
        id: 'tematicos10',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Mestre Cuca',
        imagemPrincipal: 'imagens/tematicos/tematicos10.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê Verde', diferencial: 'Panela Dourada' },
        descricao: 'Para temas de culinária e chá de cozinha. Base verde esmeralda em matelassê com ornamentos dourados e laço frontal. O topo branco com renda sustenta uma panela e talheres dourados em destaque.'
    },
    // --- 11 ao 20 ---
    {
        id: 'tematicos11',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Festa Junina',
        subtitulo: 'Arraiá da Maria',
        imagemPrincipal: 'imagens/tematicos/tematicos11.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário em Biscuit', diferencial: 'Fogueira no Topo' },
        descricao: 'Bolo cenográfico rico em detalhes para São João. Base azul com cenário de vila e igreja em relevo, andar intermediário com estampa xadrez rosa e girassóis, finalizando com bandeirinhas coloridas e fogueira decorativa no topo.'
    },
    {
        id: 'tematicos12',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Festa Junina',
        subtitulo: 'Arraiá do Espantalho',
        imagemPrincipal: 'imagens/tematicos/tematicos12.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Colorido', diferencial: 'Topo de Espantalho' },
        descricao: 'Bolo fake vibrante para festa junina. Base com bandeirinhas texturizadas em relevo, meio azul com aplicações de retalhos e pipas, e topo simulando cesto com espigas de milho e um espantalho de tecido em destaque.'
    },
    {
        id: 'tematicos13',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Gratidão em Azul e Ouro',
        imagemPrincipal: 'imagens/tematicos/tematicos13.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda Dourada', diferencial: 'Sofisticado' },
        descricao: 'Composição elegante de dois andares. Base em azul marinho fosco com pérolas douradas e pontilhismo delicado, sobreposta por andar branco adornado com faixa larga de renda dourada. Inclui topo com mensagem religiosa.'
    },
    {
        id: 'tematicos14',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Páscoa',
        subtitulo: 'Coelhinho Flocado',
        imagemPrincipal: 'imagens/tematicos/tematicos14.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Textura Aveludada', diferencial: 'Tema Infantil' },
        descricao: 'Bolo temático infantil de Páscoa. Primeiro andar branco decorado com poás coloridos e ovinhos na base, segundo andar azul com patinhas em relevo. O destaque é o topo com um coelho grande de acabamento flocado (textura de pelúcia) e laço rosa.'
    },
    {
        id: 'tematicos15',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Personagens',
        subtitulo: 'Família Simpson',
        imagemPrincipal: 'imagens/tematicos/tematicos15.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos15.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Personagens 2D', diferencial: 'Cores Vibrantes' },
        descricao: 'Bolo divertido inspirado em Os Simpsons. Camadas lisas nas cores icônicas (vermelho, azul ceú e laranja), decoradas com recortes dos personagens Homer, Marge, Bart e Lisa, além de donuts cenográficos no topo.'
    },
    {
        id: 'tematicos16',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: '50 Anos Gaúcho',
        imagemPrincipal: 'imagens/tematicos/tematicos16.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Trama de Cestaria', diferencial: 'Espetinhos no Topo' },
        descricao: 'Bolo rico em texturas para os amantes de churrasco. Base azul com detalhes dourados, andar intermediário branco com textura complexa de trama/cestaria e topo dourado liso. Decorado com tábua de carne e espetinhos realistas em biscuit.'
    },
    {
        id: 'tematicos17',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Trator',
        subtitulo: 'Trator Massey Ferguson',
        imagemPrincipal: 'imagens/tematicos/tematicos17.jpg',
        galeria: [
            'imagens/tematicos/tematicos17.jpg',
            'imagens/tematicos/tematicos17.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Pneu Realista', diferencial: 'Milharal em Relevo' },
        descricao: 'Tema agrícola detalhado. A base simula com precisão um pneu de trator preto com frisos em relevo. O andar superior branco possui aplicações de pés de milho em biscuit, finalizado com um trator vermelho modelo Massey Ferguson no topo.'
    },
    {
        id: 'tematicos18',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Redes Sociais',
        subtitulo: 'Instagram Gold 80K',
        imagemPrincipal: 'imagens/tematicos/tematicos18.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Preto e Ouro', diferencial: 'Logo Glitter' },
        descricao: 'Celebração de seguidores com sofisticação. Base dourada fosca com logo do Instagram em glitter, sobreposta por andar preto texturizado com estrelas douradas. Topo com letreiro comemorativo.'
    },
    {
        id: 'tematicos19',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Redes Sociais',
        subtitulo: 'Instagram 20K',
        imagemPrincipal: 'imagens/tematicos/tematicos19.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Degradê Aerografado', diferencial: 'Corda Dourada' },
        descricao: 'Bolo de andar único e altura dupla. Acabamento branco com efeito degradê (ombre) dourado na base, finalizado com cordão de São Francisco dourado e logo da rede social em glitter.'
    },
    {
        id: 'tematicos20',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Chopp e Petiscos',
        imagemPrincipal: 'imagens/tematicos/tematicos20.jpg',
        galeria: [
            'imagens/tematicos/tematicos20.jpg',
            'imagens/tematicos/tematicos20.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Madeira e Xadrez', diferencial: 'Torneira de Barril' },
        descricao: 'Clássico tema de Boteco. Base com losangos preto e branco, andar central simulando barril de madeira com torneira prateada em relevo, e topo com toalha xadrez e canecas de chopp brindando.'
    },
    // --- 21 ao 30 ---
    {
        id: 'tematicos21',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Festa Retrô Disco',
        imagemPrincipal: 'imagens/tematicos/tematicos21.jpg',
        galeria: [
            'imagens/tematicos/tematicos21.jpg',
            'imagens/tematicos/tematicos21.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Mosaico Espelhado', diferencial: 'Globo de Discoteca' },
        descricao: 'Viagem no tempo com este bolo preto e branco. Decoração com silhuetas de dançarinos, estampas de poás (bolinhas) e faixas com mosaico de espelhos reais. O topo é um globo de discoteca prateado.'
    },
    {
        id: 'tematicos22',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Nossa Senhora Aparecida',
        imagemPrincipal: 'imagens/tematicos/tematicos22.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Ruffles (Babados)', diferencial: 'Bordas Douradas' },
        descricao: 'Bolo branco delicado com técnica de ruffles (ondas) em todas as camadas, finalizadas com borda fina dourada. Decorado com rosas azuis e um topo artesanal em feltro de Nossa Senhora.'
    },
    {
        id: 'tematicos23',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Romântico',
        subtitulo: 'Love & Flores',
        imagemPrincipal: 'imagens/tematicos/tematicos23.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Dourado Liso', diferencial: 'Topo Aberto' },
        descricao: 'Design romântico e moderno. Base rosa com textura geométrica vazada, andar superior dourado liso com a palavra "Love" em glitter vermelho. O topo simula uma abertura recheada de rosas vermelhas.'
    },
    {
        id: 'tematicos24',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Verde Esmeralda e Ouro',
        imagemPrincipal: 'imagens/tematicos/tematicos24.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda e Matelassê', diferencial: 'Sofisticado' },
        descricao: 'Combinação luxuosa de verde esmeralda e branco. Base com textura matelassê e ornamentos dourados, topo branco envolto em faixa larga de renda dourada e laço estruturado.'
    },
    {
        id: 'tematicos25',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: '14 Anos da Emissora',
        imagemPrincipal: 'imagens/tematicos/tematicos25.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos25.mp4',
        detalhes: { altura: '4 Andares', acabamento: 'Mix de Texturas', diferencial: 'Glitter Azul' },
        descricao: 'Bolo festivo e colorido. Intercala andares em rosa (matelassê e geométrico) com andar azul revestido em glitter. Topo dourado liso com logo da rádio.'
    },
    {
        id: 'tematicos26',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Quiosque da Jana',
        imagemPrincipal: 'imagens/tematicos/tematicos26.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Toalha Xadrez', diferencial: 'Miniaturas Realistas' },
        descricao: 'Bolo divertido e colorido. Base branca com faixas azuis, andar superior coberto por uma toalha xadrez preto e branco modelada. O topo é um banquete de biscuit com hambúrguer, fritas, pizza, hot dog e um milkshake detalhado.'
    },
    {
        id: 'tematicos27',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Dani Lanches',
        imagemPrincipal: 'imagens/tematicos/tematicos27.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos27.mp4',
        galeria: [
            'imagens/tematicos/tematicos27.jpg',
            'imagens/tematicos/tematicos27.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Poás Verdes', diferencial: 'Pizza no Topo' },
        descricao: 'Design temático para lanchonete em branco e verde. Decorado com mini hambúrgueres e batatas ao redor da base. O destaque é o topo com uma pizza realista sobre uma pá de servir prateada.'
    },
    {
        id: 'tematicos28',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Rústico',
        subtitulo: 'Sela e Violão',
        imagemPrincipal: 'imagens/tematicos/tematicos28.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura de Madeira', diferencial: 'Sela Esculpida' },
        descricao: 'Bolo rico em texturas rústicas. Base simulando tábuas de madeira vertical com um violão encostado. Andar central marrom liso com relevo de cavalo, cordas de laço e uma sela de montaria detalhada no topo.'
    },
    {
        id: 'tematicos29',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: 'Farmácias Associadas',
        imagemPrincipal: 'imagens/tematicos/tematicos29.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos29.mp4',
        galeria: [
            'imagens/tematicos/tematicos29.jpg',
            'imagens/tematicos/tematicos29.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Gradeado Turquesa', diferencial: 'Laço Dourado' },
        descricao: 'Personalização elegante com as cores da marca. Base branca com textura de losangos (gradeado) em turquesa e pontos de luz dourados. Separado por um laço dourado volumoso e topo liso com a logo da empresa.'
    },
    {
        id: 'tematicos31',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Religioso',
        subtitulo: 'Assembleia de Deus',
        imagemPrincipal: 'imagens/tematicos/tematicos31.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos31.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Espelhos e Cristais', diferencial: 'Fachada 3D' },
        descricao: 'Homenagem arquitetônica ao templo. Base decorada com faixas de espelho prateado e nome da igreja. Andar intermediário branco com cristais aplicados. O topo é uma maquete 3D fiel da fachada da igreja.'
    },
    {
        id: 'tematicos32',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Viagem',
        subtitulo: 'Volta ao Mundo',
        imagemPrincipal: 'imagens/tematicos/tematicos32.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos32.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Mala Vintage', diferencial: 'Globo Terrestre' },
        descricao: 'Homenagem a viajantes e pilotos. Base simulando uma mala de viagem bege com correias e fotos personalizadas, sustentando um globo terrestre azul com avião e bandeiras no topo.'
    },
    {
        id: 'tematicos33',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Chandon 50 Anos',
        imagemPrincipal: 'imagens/tematicos/tematicos33.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos33.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Iluminação LED', diferencial: 'Base Hexagonal' },
        descricao: 'Bolo monumental de 5 andares com iluminação interna entre as folhagens. Base hexagonal com iniciais, decorado com parreiras de uvas, folhas douradas e topo com duas garrafas de Chandon.'
    },
    {
        id: 'tematicos34',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Religioso',
        subtitulo: 'Congregação Pedregais',
        imagemPrincipal: 'imagens/tematicos/tematicos34.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos34.mp4',
        galeria: [
            'imagens/tematicos/tematicos34.jpg',
            'imagens/tematicos/tematicos34.1.jpg',
            'imagens/tematicos/tematicos34.2.jpg',
            'imagens/tematicos/tematicos34.3.jpg'
        ],
        detalhes: { altura: '1 Andar', acabamento: 'Cerca de Madeira', diferencial: 'Fachada Realista' },
        descricao: 'Réplica fiel da fachada da igreja. Base simulando gramado cercado por madeira rústica em relevo, sustentando a maquete arquitetônica do templo em rosa e branco.'
    },
    {
        id: 'tematicos35',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Chá de Cozinha',
        imagemPrincipal: 'imagens/tematicos/tematicos35.jpg',
        galeria: [
            'imagens/tematicos/tematicos35.jpg',
            'imagens/tematicos/tematicos35.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Drapeado de Renda', diferencial: 'Bule e Xícara' },
        descricao: 'Delicadeza em azul tiffany e branco. Base com poás e nomes personalizados, andar superior com efeito de toalha de renda drapeada. O topo apresenta um bule e xícara de chá clássicos em biscuit.'
    },
    {
        id: 'tematicos36',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Jubileu 5 Anos',
        imagemPrincipal: 'imagens/tematicos/tematicos36.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Renda Dourada', diferencial: 'Marsala e Ouro' },
        descricao: 'Elegância para celebrações religiosas. Base na cor marsala com cordões dourados, intercalada com andares dourados lisos e brancos com renda vazada. Topo personalizado para aniversário da congregação.'
    },
    {
        id: 'tematicos37',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Música',
        subtitulo: 'Gala e Piano',
        imagemPrincipal: 'imagens/tematicos/tematicos37.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos37.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Iluminação LED', diferencial: 'Smoking e Piano' },
        descricao: 'Bolo sofisticado com iluminação LED entre os andares. O topo simula um smoking branco com gravata borboleta azul, o meio traz pautas musicais e clave de sol, e a base representa teclas de piano.'
    },
    {
        id: 'tematicos38',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Rústico',
        subtitulo: 'Tradição Gaúcha',
        imagemPrincipal: 'imagens/tematicos/tematicos38.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Cenário em Biscuit', diferencial: 'Roda de Chimarrão' },
        descricao: 'Homenagem à cultura do Rio Grande do Sul. Tons terrosos com silhuetas de cavalos, cuias de chimarrão e chaleiras. O topo possui um cenário detalhado com gaúcho pilchado ao redor do fogo de chão.'
    },
    {
        id: 'tematicos39',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Dia das Mães',
        subtitulo: 'Homenagem Mãe',
        imagemPrincipal: 'imagens/tematicos/tematicos39.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Dourado e Rosa', diferencial: 'Topo Porta-Joias' },
        descricao: 'Bolo luxuoso em rosa pink e dourado. Base com textura geométrica aveludada, andar superior liso com a palavra "Mãe" em glitter vermelho. O topo simula uma caixa de joias aberta repleta de rosas vermelhas.'
    },
    {
        id: 'tematicos40',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Futebol',
        subtitulo: 'Sport Club Internacional',
        imagemPrincipal: 'imagens/tematicos/tematicos40.jpg',
        galeria: [
            'imagens/tematicos/tematicos40.jpg',
            'imagens/tematicos/tematicos40.1.jpg'
        ],
        detalhes: { altura: '2 Andares', acabamento: 'Listrado', diferencial: 'Taça Dourada' },
        descricao: 'Para os colorados. Base com listras verticais vermelhas e brancas e logo do Inter. Andar superior branco com nome em glitter. O destaque é a taça dourada no topo sustentando uma grande bola de futebol texturizada.'
    },
    {
        id: 'tematicos42',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Costura',
        subtitulo: 'Ateliê Vintage',
        imagemPrincipal: 'imagens/tematicos/tematicos42.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Renda e Botões', diferencial: 'Máquina de Costura' },
        descricao: 'Uma obra de arte para costureiras e estilistas. Base azul tiffany em matelassê com pérolas, andar intermediário marrom decorado com fita métrica, botões e carretéis. O topo é uma máquina de costura preta vintage esculpida com drapeado de renda.'
    },
    {
        id: 'tematicos43',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Floral',
        subtitulo: 'Azul e Amarelo',
        imagemPrincipal: 'imagens/tematicos/tematicos43.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Formato Quadrado', diferencial: 'Trama Trançada' },
        descricao: 'Bolo de estrutura quadrada diferenciada. A base azul possui textura de trama/cestaria trançada, enquanto o andar superior amarelo é liso com ornamentos nas bordas. Decorado com diversas rosas em azul e amarelo.'
    },
    {
        id: 'tematicos44',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Jardim',
        subtitulo: 'Gaiola das Flores',
        imagemPrincipal: 'imagens/tematicos/tematicos44.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Flores de Açúcar', diferencial: 'Gaiola no Topo' },
        descricao: 'Delicadeza para temas de Jardim Encantado. Base branca com cascata de rosas amarelas e flores menores em tons pastéis. O topo simula a estrutura de uma gaiola dourada aberta com borboletas.'
    },
    {
        id: 'tematicos45',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Música',
        subtitulo: 'Violão e Smoking',
        imagemPrincipal: 'imagens/tematicos/tematicos45.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Preto e Branco', diferencial: 'Violão Vermelho' },
        descricao: 'Clássico tema musical. Base simulando teclas de piano, meio com pautas musicais e clave de sol em relevo, e topo representando uma camisa branca com gravata borboleta preta. Finalizado com um violão vermelho e case de instrumento.'
    },
    {
        id: 'tematicos46',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Comemorativos',
        subtitulo: 'Pet',
        imagemPrincipal: 'imagens/tematicos/tematicos46.jpg',
        detalhes: { 
            altura: '2 Andares', 
            acabamento: 'Pasta Americana', 
            diferencial: 'Salsichas ' 
        },
        descricao: 'Uma celebração única de 15 anos para pet. O bolo em preto e branco apresenta texturas de ossinhos e patinhas em relevo, com destaque para as esculturas modeladas de cachorrinhos da raça Dachshund e topo personalizado com a idade.'
    },
    {
        id: 'tematicos47',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Salmo 23',
        imagemPrincipal: 'imagens/tematicos/tematicos47.jpg',
        galeria: [
            'imagens/tematicos/tematicos47.jpg',
            'imagens/tematicos/tematicos47.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Escamas Douradas', diferencial: 'Bíblia Aberta' },
        descricao: 'Bolo bíblico majestoso. Base branca com versículos do Salmo 23, andar azul royal com arabescos, andar superior com textura de escamas douradas. O topo sustenta uma bíblia aberta com o texto sagrado legível.'
    },
    {
        id: 'tematicos49',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gastronomia',
        subtitulo: 'Naked Cake Chocolate',
        imagemPrincipal: 'imagens/tematicos/tematicos49.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Simulação de Massa', diferencial: 'Suspiros' },
        descricao: 'Réplica visual de um Naked Cake. Simula camadas de massa de chocolate com recheio branco aparente. O topo é decorado com suspiros brancos e granulados coloridos.'
    },
    {
        id: 'tematicos51',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Futebol',
        subtitulo: 'Grêmio FBPA',
        imagemPrincipal: 'imagens/tematicos/tematicos51.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Glitter Azul', diferencial: 'Chuteira Dourada' },
        descricao: 'Para a torcida tricolor. Base com padrão xadrez azul e branco, andar central com nome em glitter. O destaque é o topo em formato de bola de futebol grande com uma chuteira dourada brilhante.'
    },
    {
        id: 'tematicos52',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Batizado Clássico',
        imagemPrincipal: 'imagens/tematicos/tematicos52.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Cruz e Terço' },
        descricao: 'Solenidade em branco e dourado. Base com efeito de tecido fluido, laço estruturado e andar em matelassê com pérolas. O topo possui uma cruz dourada texturizada envolta por um terço (rosário).'
    },

    {
        id: 'tematicos53',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Torre de Transmissão',
        imagemPrincipal: 'imagens/tematicos/tematicos53.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Glitter Vermelho', diferencial: 'Antena no Topo' },
        descricao: 'Homenagem à radiodifusão. Base azul com estrelas e parabéns em relevo. O grande destaque é o topo com uma torre de transmissão (antena) estilizada em glitter vermelho e números em matelassê.'
    },
    {
        id: 'tematicos54',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Jardim',
        subtitulo: 'Girassóis e Regador',
        imagemPrincipal: 'imagens/tematicos/tematicos54.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos54.mp4',
        detalhes: { altura: '3 Andares', acabamento: 'Pintura Degradê', diferencial: 'Regador Rústico' },
        descricao: 'Obra de arte com pintura aerografada em degradê (amarelo e laranja). Detalhes simulam papel envelhecido/queimado nas bordas. O topo sustenta um regador estilo vintage com um grande girassol.'
    },
    {
        id: 'tematicos55',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Religioso',
        subtitulo: 'Assembleia 30 Anos',
        imagemPrincipal: 'imagens/tematicos/tematicos55.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Matelassê Marsala', diferencial: 'Fachada da Igreja' },
        descricao: 'Bolo de proporções largas para grandes celebrações. Base branca com texto "Juntos Somos Mais Fortes", andar superior na cor marsala com textura matelassê e pérolas. Topo com maquete da fachada da igreja.'
    },
    {
        id: 'tematicos56',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Futebol',
        subtitulo: 'Inter (Chuteira)',
        imagemPrincipal: 'imagens/tematicos/tematicos56.jpg',
        detalhes: { altura: '2 Andares', acabamento: 'Listrado', diferencial: 'Glitter Vermelho' },
        descricao: 'Modelo vibrante para colorados. Base vermelha lisa, andar superior com listras verticais brancas e vermelhas. O topo exibe uma bola e uma chuteira de futebol, ambas com acabamento total em glitter vermelho.'
    },
    {
        id: 'tematicos57',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: 'Azul e Prata',
        imagemPrincipal: 'imagens/tematicos/tematicos57.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos57.mp4',
        galeria: [
            'imagens/tematicos/tematicos57.jpg',
            'imagens/tematicos/tematicos57.1.jpg'
        ],
        detalhes: { altura: '4 Andares', acabamento: 'Adamascado', diferencial: 'Letreiro em Espiral' },
        descricao: 'Elegância em azul royal e branco. Intercala andares com textura matelassê e estampa adamascada prateada. O diferencial é a estrutura prateada em espiral que "flutua" ao redor do topo segurando o nome.'
    },
    {
        id: 'tematicos58',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Personagens',
        subtitulo: 'Harry Potter (Ravenclaw)',
        imagemPrincipal: 'imagens/tematicos/tematicos58.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Pasta Americana', 
            diferencial: 'Pomo de Ouro e Cachecol Azul' 
        },
        descricao: 'Bolo inspirado no universo Harry Potter com elementos da casa Ravenclaw (Corvinal). Decorado com óculos icônicos, varinha, pomo de ouro esculpido e cachecol azul em relevo.'
    },
    {
        id: 'tematicos59',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Rústico',
        subtitulo: 'Colheita no Sítio',
        imagemPrincipal: 'imagens/tematicos/tematicos59.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos59.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Textura de Milho', diferencial: 'Carroça de Madeira' },
        descricao: 'Homenagem à vida no campo. Base com pintura à mão de estrada de terra e cerquinha. Andar superior amarelo texturizado simulando grãos de milho. O topo possui uma carroça de madeira cheia de espigas.'
    },
    {
        id: 'tematicos60',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Rústico',
        subtitulo: 'Prenda Gaúcha',
        imagemPrincipal: 'imagens/tematicos/tematicos60.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Pintura Cenário', diferencial: 'Silhueta de Prenda' },
        descricao: 'Bolo alto narrativo da cultura gaúcha. Andares pintados com cenas de pescaria, carreta de bois e paisagens. O topo apresenta a silhueta de uma Prenda segurando a bandeira do Rio Grande do Sul.'
    },
    {
        id: 'tematicos61',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Bicentenário 200 Anos',
        imagemPrincipal: 'imagens/tematicos/tematicos61.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos61.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Azul e Branco', diferencial: 'Igreja Pintada' },
        descricao: 'Bolo comemorativo histórico. Decorado nas cores azul e branco com letreiros em relevo "São José do Patrocínio" e datas "1822". O destaque é a pintura detalhada da fachada da igreja antiga no andar superior.'
    },
    {
        id: 'tematicos62',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Festa Junina',
        subtitulo: 'Arraiá com Pipoca',
        imagemPrincipal: 'imagens/tematicos/tematicos62.jpg',
        galeria: [
            'imagens/tematicos/tematicos62.jpg',
            'imagens/tematicos/tematicos62.1.jpg'
        ],
        detalhes: { altura: '3 Andares', acabamento: 'Revestimento de Pipoca', diferencial: 'Fogueira' },
        descricao: 'Bolo super texturizado para São João. Base inteiramente revestida com pipocas cenográficas realistas. Andar do meio com pintura de paisagem rural e topo simulando milho amarelo com uma fogueira.'
    },
    {
        id: 'tematicos63',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Vermelho e Dourado',
        imagemPrincipal: 'imagens/tematicos/tematicos63.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos63.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Renda e Matelassê', diferencial: 'Letreiro Espiral' },
        descricao: 'Bolo majestoso. Paleta de cores em branco, dourado e vermelho (com textura matelassê). O grande diferencial é a estrutura em espiral que envolve o bolo segurando o nome personalizado.'
    },
    {
        id: 'tematicos64',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Personagens',
        subtitulo: 'Rosa Encantada',
        imagemPrincipal: 'imagens/tematicos/tematicos64.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Ouro Envelhecido', diferencial: 'Redoma com Rosa' },
        descricao: 'Luxo e romance inspirados no clássico. Intercala andares brancos com renda e matelassê, com andares inteiros em dourado. O topo traz a icônica rosa vermelha dentro da cúpula de vidro.'
    },
    {
        id: 'tematicos65',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Ano Novo',
        subtitulo: 'Réveillon 2023',
        imagemPrincipal: 'imagens/tematicos/tematicos65.jpg',
        detalhes: { altura: '1 Andar', acabamento: 'Degradê Dourado', diferencial: 'Estrelas' },
        descricao: 'Design festivo para virada de ano. Base branca com pintura aerografada em degradê dourado na parte inferior. Decorado com estrelas, cordão de São Francisco e topo com leques de papel e ano em glitter.'
    },
    {
        id: 'tematicos66',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Comemorativo',
        subtitulo: 'Celebração da Colônia',
        imagemPrincipal: 'imagens/tematicos/tematicos66.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos66.mp4',
        galeria: [
            'imagens/tematicos/tematicos66.jpg',
            'imagens/tematicos/tematicos66.1.jpg'
        ],
        detalhes: { altura: '5 Andares', acabamento: 'Base Hexagonal', diferencial: 'Iluminação LED' },
        descricao: 'Bolo monumental com base hexagonal com faixas douradas. Decorado com folhagens e cachos de uvas (roxas e verdes) contornando a estrutura. Possui pontos de luz (LED) entre as folhas.'
    },
    {
        id: 'tematicos67',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: '15 Anos Prateado',
        imagemPrincipal: 'imagens/tematicos/tematicos67.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos67.mp4',
        detalhes: { altura: '5 Andares', acabamento: 'Espelhado', diferencial: 'Microfone e LED' },
        descricao: 'Visual futurista e impactante. Bolo inteiramente metalizado em prata, com faixas de mosaico espelhado. Possui iluminação LED nos espaçadores dos andares e topo com microfone e idade em prata.'
    },
    {
        id: 'tematicos68',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Gaúcho',
        subtitulo: 'Tradição e História',
        imagemPrincipal: 'imagens/tematicos/tematicos68.jpg',
        detalhes: { 
            altura: '4 Andares', 
            acabamento: 'Pintura Artística', 
            diferencial: 'Bandeira e Pergaminho' 
        },
        descricao: 'Bolo temático que exalta a cultura gaúcha. Apresenta andares com pinturas detalhadas de paisagens rurais, carro de boi e arquitetura histórica, finalizado com a bandeira do Rio Grande do Sul e um pergaminho personalizado no topo.'
    },
    {
        id: 'tematicos69',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Institucional',
        subtitulo: 'Lojas Lebes',
        imagemPrincipal: 'imagens/tematicos/tematicos69.jpg',
        detalhes: { 
            altura: '3 Andares', 
            acabamento: 'Cores da Marca', 
            diferencial: 'Estrelas no Topo' 
        },
        descricao: 'Modelo festivo personalizado para celebração empresarial. Utiliza o verde e branco da marca, com letreiros "Parabéns" e o logotipo em destaque, coroado com estrelas e o número um de aniversário.'
    },
    {
        id: 'tematicos70',
        categoria: 'tematicos',
        tipo: 'video',
        titulo: 'Temático • Institucional',
        subtitulo: 'Lojas Lebes',
        imagemPrincipal: 'imagens/tematicos/tematicos70.jpg',
        videoSrc: 'imagens/tematicos/videos/tematicos70.mp4',
        detalhes: { 
            altura: '5 Andares', 
            acabamento: 'Geométrico e Matelassê', 
            diferencial: 'Andares Hexagonais' 
        },
        descricao: 'Design arrojado de 5 andares intercalando formatos redondos e hexagonais. Combina texturas de matelassê com cristais, padrões geométricos modernos e as cores institucionais da empresa.'
    },
    {
        id: 'tematicos71',
        categoria: 'tematicos',
        tipo: 'image',
        titulo: 'Temático • Personagens',
        subtitulo: 'Harry Potter (Gryffindor)',
        imagemPrincipal: 'imagens/tematicos/tematicos71.jpg',
        detalhes: { 
            altura: '1 Andar', 
            acabamento: 'Pasta Americana', 
            diferencial: 'Pomo de Ouro e Cachecol Vermelho' 
        },
        descricao: 'Modelo clássico de Harry Potter com foco na casa Gryffindor (Grifinória). Destaca-se pelo pomo de ouro no topo, varinha transversal e o cachecol nas cores vermelho e dourado, além de pergaminho personalizado.'
    },
];