const dadosBolos = [
    // ==========================================
    //           INFANTIL MENINAS
    // ==========================================
    {
        id: 'infantilf1',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Jardim das Borboletas',
        subtitulo: 'Infantil Meninas • Luxo',
        videoSrc: 'imagens/videos/bolo_borboleta.mp4',
        imagemPrincipal: 'imagens/infantil meninas/fotoborboleta.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit Premium', diferencial: 'Topo Giratório Motorizado' },
        descricao: 'Uma obra de arte em movimento. Este modelo exclusivo traz a leveza do tema Jardim Encantado. Acabamento realista e cores suaves.'
    },
    {
        id: 'infantilf4',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Castelo da Princesa',
        subtitulo: 'Infantil Meninas • Clássico',
        imagemPrincipal: 'imagens/infantil meninas/meninas3.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Porcelana Fria', diferencial: 'Renda e Pérolas' },
        descricao: 'Modelo clássico e imponente, ideal para festas com temas de Realeza e Princesas. Estrutura alta que garante destaque total na mesa principal.'
    },
    {
        id: 'infantilf5',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Jardim Encantado',
        subtitulo: 'Infantil Meninas • Temático',
        imagemPrincipal: 'imagens/infantil meninas/meninas4.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit', diferencial: 'Modelagem 3D' },
        descricao: 'Riqueza de detalhes em cada flor e personagem. Perfeito para festas diurnas e temas lúdicos, trazendo a magia da natureza para a decoração.'
    },
    {
        id: 'infantilf6',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Bosque das Fadas',
        subtitulo: 'Infantil Meninas • Delicado',
        imagemPrincipal: 'imagens/infantil meninas/meninas5.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura Suave', diferencial: 'Cores Pastéis' },
        descricao: 'Um bolo delicado com tons suaves, ideal para chás de bebê ou primeiros aninhos. A combinação de texturas cria um visual fotogênico e elegante.'
    },
    {
        id: 'infantilf7',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Realeza Dourada',
        subtitulo: 'Infantil Meninas • Luxo',
        imagemPrincipal: 'imagens/infantil meninas/meninas6.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Detalhes em Ouro', diferencial: 'Coroas Modeladas' },
        descricao: 'Para quem busca sofisticação. O contraste das cores com os detalhes dourados faz deste bolo uma peça central inesquecível para festas de princesas.'
    },
    {
        id: 'infantilf8',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Doce Fantasia',
        subtitulo: 'Infantil Meninas • Colorido',
        imagemPrincipal: 'imagens/infantil meninas/meninas7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit', diferencial: 'Cores Vibrantes' },
        descricao: 'Alegria em forma de bolo. Com cores vivas e modelagens divertidas, este modelo é perfeito para temas modernos e festas cheias de energia.'
    },
    {
        id: 'infantilf9',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Jardim Secreto',
        subtitulo: 'Infantil Meninas • Floral',
        imagemPrincipal: 'imagens/infantil meninas/meninas8.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Flores Manuais', diferencial: 'Acabamento Rústico Chic' },
        descricao: 'A união perfeita entre o rústico e o delicado. As flores modeladas à mão dão um toque de exclusividade e romantismo à composição.'
    },
    {
        id: 'infantilf11',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Princesa Sofia',
        subtitulo: 'Infantil Meninas • Personagem',
        imagemPrincipal: 'imagens/infantil meninas/meninas10.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Drapeado', diferencial: 'Fiel ao Tema' },
        descricao: 'Homenagem às personagens clássicas favoritas. Cada andar conta uma parte da história, encantando as crianças e compondo perfeitamente o cenário.'
    },
    {
        id: 'infantilf13',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Mundo Mágico',
        subtitulo: 'Infantil Meninas • Lúdico',
        imagemPrincipal: 'imagens/infantil meninas/meninas12.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit 3D', diferencial: 'Topo Detalhado' },
        descricao: 'Um convite à imaginação. Bolo rico em detalhes, perfeito para festas onde a magia e a criatividade são os destaques.'
    },

    // --- NOVOS ITENS ADICIONADOS (LISTA DO PRINT) ---

    {
        id: 'meninas11',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 11',
        subtitulo: 'Infantil Meninas • Temático',
        imagemPrincipal: 'imagens/infantil meninas/meninas11.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Alta Definição', diferencial: 'Design Único' },
        descricao: 'Modelo cenográfico com acabamento impecável, ideal para compor a mesa principal com elegância e fidelidade ao tema.'
    },
    {
        id: 'meninas13',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 13',
        subtitulo: 'Infantil Meninas • Encantador',
        imagemPrincipal: 'imagens/infantil meninas/meninas13.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Detalhado', diferencial: 'Cores Vivas' },
        descricao: 'Uma peça cheia de charme que traz personalidade para a sua decoração. Feito com materiais de alta qualidade para fotos perfeitas.'
    },
    {
        id: 'meninas14',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 14',
        subtitulo: 'Infantil Meninas • Delicado',
        imagemPrincipal: 'imagens/infantil meninas/meninas14.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Biscuit', diferencial: 'Toque Artesanal' },
        descricao: 'Delicadeza em cada detalhe. Este bolo foi pensado para festas que pedem um toque de suavidade e requinte.'
    },
    {
        id: 'meninas15',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 15',
        subtitulo: 'Infantil Meninas • Temático',
        imagemPrincipal: 'imagens/infantil meninas/meninas15.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Premium', diferencial: 'Fiel ao Personagem' },
        descricao: 'Transforme o sonho da aniversariante em realidade com este modelo temático rico em detalhes e cores.'
    },
    {
        id: 'meninas16',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 16',
        subtitulo: 'Infantil Meninas • Festa',
        imagemPrincipal: 'imagens/infantil meninas/meninas16.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Liso', diferencial: 'Moderno' },
        descricao: 'Design moderno e acabamento perfeito. A escolha ideal para quem busca praticidade sem abrir mão da beleza.'
    },
    {
        id: 'meninas17',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 17',
        subtitulo: 'Infantil Meninas • Criativo',
        imagemPrincipal: 'imagens/infantil meninas/meninas17.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Texturizado', diferencial: 'Original' },
        descricao: 'Um bolo criativo que foge do comum, garantindo que a mesa do bolo seja o centro das atenções.'
    },
    {
        id: 'meninas18',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 18',
        subtitulo: 'Infantil Meninas • Luxo',
        imagemPrincipal: 'imagens/infantil meninas/meninas18.jpg',
        detalhes: { altura: 'Alto', acabamento: 'Fino', diferencial: 'Imponente' },
        descricao: 'Imponência e luxo para festas inesquecíveis. Cada andar trabalhado para refletir sofisticação.'
    },
    {
        id: 'meninas19',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 19',
        subtitulo: 'Infantil Meninas • Colorido',
        imagemPrincipal: 'imagens/infantil meninas/meninas19.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Alegre', diferencial: 'Vibrante' },
        descricao: 'Cores vibrantes para celebrar a alegria. Este modelo ilumina a decoração e encanta os convidados.'
    },
    {
        id: 'meninas20',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 20',
        subtitulo: 'Infantil Meninas • Clássico',
        imagemPrincipal: 'imagens/infantil meninas/meninas20.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Tradicional', diferencial: 'Elegante' },
        descricao: 'A elegância do clássico com um toque infantil. Perfeito para quem busca uma decoração atemporal.'
    },
    {
        id: 'meninas21',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 21',
        subtitulo: 'Infantil Meninas • Doce',
        imagemPrincipal: 'imagens/infantil meninas/meninas21.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Pastel', diferencial: 'Suave' },
        descricao: 'Tons pastéis e modelagens fofas compõem este bolo que é pura doçura para os olhos.'
    },
    {
        id: 'meninas22',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 22',
        subtitulo: 'Infantil Meninas • Natureza',
        imagemPrincipal: 'imagens/infantil meninas/meninas22.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Floral', diferencial: 'Orgânico' },
        descricao: 'Elementos da natureza representados com maestria. Ideal para temas de jardim, floresta ou piquenique.'
    },
    {
        id: 'meninas23',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 23',
        subtitulo: 'Infantil Meninas • Mágico',
        imagemPrincipal: 'imagens/infantil meninas/meninas23.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Brilho', diferencial: 'Conto de Fadas' },
        descricao: 'Um toque de magia para sua festa. Detalhes que remetem aos contos de fadas mais amados.'
    },
    {
        id: 'meninas24',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 24',
        subtitulo: 'Infantil Meninas • Divertido',
        imagemPrincipal: 'imagens/infantil meninas/meninas24.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Lúdico', diferencial: 'Interativo' },
        descricao: 'Visual divertido e lúdico, perfeito para estimular a imaginação das crianças e decorar com alegria.'
    },
    {
        id: 'meninas25',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 25',
        subtitulo: 'Infantil Meninas • Especial',
        imagemPrincipal: 'imagens/infantil meninas/meninas25.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Personalizado', diferencial: 'Exclusivo' },
        descricao: 'Um modelo especial para momentos únicos. Acabamento de primeira linha que garante durabilidade e beleza.'
    },

    // --- BOLO 26 (COM CARROSSEL DE FOTOS) ---
    {
        id: 'meninas26',
        categoria: 'infantilf',
        tipo: 'image', // Mantém image, mas o script vai detectar a galeria
        titulo: 'Modelo Especial Detalhado',
        subtitulo: 'Infantil Meninas • Destaque',
        imagemPrincipal: 'imagens/infantil meninas/meninas26.jpg',
        galeria: [
            'imagens/infantil meninas/meninas26.jpg',
            'imagens/infantil meninas/meninas26.1.jpg',
            'imagens/infantil meninas/meninas26.2.jpg',
            'imagens/infantil meninas/meninas26.3.png'
        ],
        detalhes: { altura: 'Especial', acabamento: 'Luxo', diferencial: 'Vários Ângulos' },
        descricao: 'Um modelo rico em detalhes. Visualize todas as fotos na galeria para conferir o acabamento impecável de todos os ângulos.'
    },

    {
        id: 'meninas27',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 27',
        subtitulo: 'Infantil Meninas • Encanto',
        imagemPrincipal: 'imagens/infantil meninas/meninas27.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Soft', diferencial: 'Romântico' },
        descricao: 'Charme e romantismo em forma de bolo. Perfeito para comemorações intimistas e delicadas.'
    },
    {
        id: 'meninas28',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 28',
        subtitulo: 'Infantil Meninas • Vibrante',
        imagemPrincipal: 'imagens/infantil meninas/meninas28.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Color', diferencial: 'Energia' },
        descricao: 'Energia pura! Cores e formas que trazem vida para a mesa do bolo.'
    },
    {
        id: 'meninas29',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 29',
        subtitulo: 'Infantil Meninas • Sonho',
        imagemPrincipal: 'imagens/infantil meninas/meninas29.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Nuvens', diferencial: 'Etéreo' },
        descricao: 'Leveza e suavidade. Um bolo que parece ter saído de um sonho doce.'
    },
    {
        id: 'meninas30',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 30',
        subtitulo: 'Infantil Meninas • Fantasia',
        imagemPrincipal: 'imagens/infantil meninas/meninas30.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Brilhante', diferencial: 'Mágico' },
        descricao: 'Para festas onde a fantasia reina. Detalhes que brilham e encantam.'
    },
    {
        id: 'meninas31',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 31',
        subtitulo: 'Infantil Meninas • Moderno',
        imagemPrincipal: 'imagens/infantil meninas/meninas31.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Geométrico', diferencial: 'Atual' },
        descricao: 'Design atual para festas modernas. Linhas e formas que fogem do óbvio.'
    },
    {
        id: 'meninas32',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 32',
        subtitulo: 'Infantil Meninas • Princesa',
        imagemPrincipal: 'imagens/infantil meninas/meninas32.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Realeza', diferencial: 'Coroa' },
        descricao: 'Digno de uma princesa. Acabamento real para celebrar em grande estilo.'
    },
    {
        id: 'meninas33',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 33',
        subtitulo: 'Infantil Meninas • Floral',
        imagemPrincipal: 'imagens/infantil meninas/meninas33.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Flores', diferencial: 'Primavera' },
        descricao: 'A beleza da primavera na sua festa. Flores que trazem alegria e cor.'
    },
    {
        id: 'meninas34',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 34',
        subtitulo: 'Infantil Meninas • Doçura',
        imagemPrincipal: 'imagens/infantil meninas/meninas34.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Confeitaria', diferencial: 'Apetitoso' },
        descricao: 'Visual que dá água na boca. Cores e formas que lembram doces deliciosos.'
    },
    {
        id: 'meninas35',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 35',
        subtitulo: 'Infantil Meninas • Charme',
        imagemPrincipal: 'imagens/infantil meninas/meninas35.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Laços', diferencial: 'Fofo' },
        descricao: 'Muito charme e fofura em cada detalhe. Perfeito para celebrar momentos especiais.'
    },
    {
        id: 'meninas36',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 36',
        subtitulo: 'Infantil Meninas • Estilo',
        imagemPrincipal: 'imagens/infantil meninas/meninas36.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Fashion', diferencial: 'Tendência' },
        descricao: 'Cheio de estilo e personalidade. Um bolo para quem gosta de estar na moda.'
    },
    {
        id: 'meninas37',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 37',
        subtitulo: 'Infantil Meninas • Alegria',
        imagemPrincipal: 'imagens/infantil meninas/meninas37.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Festivo', diferencial: 'Animado' },
        descricao: 'Alegria contagiante. Um modelo que transmite a felicidade da celebração.'
    },
    {
        id: 'meninas38',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 38',
        subtitulo: 'Infantil Meninas • Ternura',
        imagemPrincipal: 'imagens/infantil meninas/meninas38.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Baby', diferencial: 'Carinho' },
        descricao: 'Ternura em cada camada. Ideal para celebrar os primeiros anos de vida.'
    },
    {
        id: 'meninas39',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 39',
        subtitulo: 'Infantil Meninas • Magia',
        imagemPrincipal: 'imagens/infantil meninas/meninas39.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Estrelas', diferencial: 'Brilhante' },
        descricao: 'Magia e brilho para iluminar a festa. Um bolo que encanta a todos.'
    },
    {
        id: 'meninas40',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 40',
        subtitulo: 'Infantil Meninas • Fabuloso',
        imagemPrincipal: 'imagens/infantil meninas/meninas40.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Detalhes', diferencial: 'Incrível' },
        descricao: 'Simplesmente fabuloso. Acabamento de alta qualidade para fotos memoráveis.'
    },
    {
        id: 'meninas41',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 41',
        subtitulo: 'Infantil Meninas • Encantado',
        imagemPrincipal: 'imagens/infantil meninas/meninas41.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Floresta', diferencial: 'Natural' },
        descricao: 'O encanto da floresta na sua festa. Detalhes naturais e delicados.'
    },
    {
        id: 'meninas42',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 42',
        subtitulo: 'Infantil Meninas • Real',
        imagemPrincipal: 'imagens/infantil meninas/meninas42.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Dourado', diferencial: 'Nobre' },
        descricao: 'Nobreza e requinte. Detalhes dourados que trazem sofisticação.'
    },
    {
        id: 'meninas43',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 43',
        subtitulo: 'Infantil Meninas • Divertido',
        imagemPrincipal: 'imagens/infantil meninas/meninas43.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Personagens', diferencial: 'Brincadeira' },
        descricao: 'Diversão garantida. Um bolo que convida para a brincadeira.'
    },
    {
        id: 'meninas44',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 44',
        subtitulo: 'Infantil Meninas • Suave',
        imagemPrincipal: 'imagens/infantil meninas/meninas44.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Candy Colors', diferencial: 'Doce' },
        descricao: 'Suavidade das Candy Colors. Um visual moderno e muito doce.'
    },
    {
        id: 'meninas45',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 45',
        subtitulo: 'Infantil Meninas • Elegante',
        imagemPrincipal: 'imagens/infantil meninas/meninas45.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Fino', diferencial: 'Classe' },
        descricao: 'Elegância desde cedo. Um bolo refinado para pequenas damas.'
    },
    {
        id: 'meninas46',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 46',
        subtitulo: 'Infantil Meninas • Sonhador',
        imagemPrincipal: 'imagens/infantil meninas/meninas46.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Nuvens', diferencial: 'Céu' },
        descricao: 'Para sonhar alto. Um bolo que traz o céu para a festa.'
    },
    {
        id: 'meninas47',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 47',
        subtitulo: 'Infantil Meninas • Floral',
        imagemPrincipal: 'imagens/infantil meninas/meninas47.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Rosas', diferencial: 'Jardim' },
        descricao: 'Um jardim de rosas. Romantismo e beleza em cada detalhe.'
    },
    {
        id: 'meninas48',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 48',
        subtitulo: 'Infantil Meninas • Mimo',
        imagemPrincipal: 'imagens/infantil meninas/meninas48.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Laços', diferencial: 'Presente' },
        descricao: 'Um verdadeiro mimo. Detalhes que parecem um presente.'
    },
    {
        id: 'meninas49',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 49',
        subtitulo: 'Infantil Meninas • Fantástico',
        imagemPrincipal: 'imagens/infantil meninas/meninas49.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Criativo', diferencial: 'Imaginação' },
        descricao: 'Fantástico mundo da imaginação. Um bolo que conta histórias.'
    },
    {
        id: 'meninas50',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 50',
        subtitulo: 'Infantil Meninas • Dourado',
        imagemPrincipal: 'imagens/infantil meninas/meninas50.png',
        detalhes: { altura: 'Padrão', acabamento: 'Gold', diferencial: 'Brilho' },
        descricao: 'Brilho dourado para celebrar momentos de ouro.'
    },
    {
        id: 'meninas51',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 51',
        subtitulo: 'Infantil Meninas • Delícia',
        imagemPrincipal: 'imagens/infantil meninas/meninas51.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Realista', diferencial: 'Bonito' },
        descricao: 'Beleza que encanta. Um bolo feito para ser admirado.'
    },
    {
        id: 'meninas52',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 52',
        subtitulo: 'Infantil Meninas • Especial',
        imagemPrincipal: 'imagens/infantil meninas/meninas52.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Único', diferencial: 'Arte' },
        descricao: 'Uma obra de arte especial para sua festa.'
    },
    {
        id: 'meninas53',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 53',
        subtitulo: 'Infantil Meninas • Magia',
        imagemPrincipal: 'imagens/infantil meninas/meninas53.png',
        detalhes: { altura: 'Padrão', acabamento: 'Detalhado', diferencial: 'Encanto' },
        descricao: 'Magia e encanto para um dia inesquecível.'
    },
    {
        id: 'meninas54',
        categoria: 'infantilf',
        tipo: 'image',
        titulo: 'Modelo Exclusivo 54',
        subtitulo: 'Infantil Meninas • Final',
        imagemPrincipal: 'imagens/infantil meninas/meninas54.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Perfeito', diferencial: 'Qualidade' },
        descricao: 'Qualidade e perfeição para fechar com chave de ouro.'
    },
    {
        id: 'meninas55',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Carrossel Encantado',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas55.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas55.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Motorizado', diferencial: 'Giratório' },
        descricao: 'A magia do carrossel em sua festa. Este bolo possui movimento giratório que encanta a todos os convidados.'
    },
    {
        id: 'meninas56',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Fazendinha Rosa',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas56.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas56.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Biscuit', diferencial: 'Peças Móveis' },
        descricao: 'Uma fazendinha cheia de charme e movimento. Detalhes que trazem vida ao tema rural de forma delicada.'
    },
    {
        id: 'meninas57',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Jardim da Boneca',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas57.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas57.jpg',
        detalhes: { altura: 'Alto', acabamento: 'Floral', diferencial: 'Interativo' },
        descricao: 'Um jardim lúdico onde a imaginação ganha vida. O movimento suave dos elementos complementa a beleza das flores.'
    },
    {
        id: 'meninas58',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Bosque Encantado',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas58.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas58.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Rústico Chic', diferencial: 'Animais Móveis' },
        descricao: 'O bosque ganha vida com este bolo motorizado. Perfeito para temas de natureza e contos de fadas.'
    },
    {
        id: 'meninas59',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Bosque Mágico Rosê',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas59.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas59.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Delicado', diferencial: 'Suave Movimento' },
        descricao: 'Tons de rosê e elementos mágicos com movimento delicado, criando uma atmosfera de sonho na mesa do bolo.'
    },
    {
        id: 'meninas60',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Realeza Imperial',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas60.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas60.jpg',
        detalhes: { altura: 'Alto', acabamento: 'Luxo', diferencial: 'Coroa Giratória' },
        descricao: 'Imponência e realeza com um toque moderno de movimento. O destaque fica para os detalhes dourados e a dinâmica da peça.'
    },
    {
        id: 'meninas61',
        categoria: 'infantilf',
        tipo: 'foto',
        titulo: 'Casinha de Bonecas',
        subtitulo: 'Infantil Meninas',
        imagemPrincipal: 'imagens/infantil meninas/meninas61.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Lúdico', diferencial: 'Cenário Vivo' },
        descricao: 'Mais que um bolo, um cenário vivo. Uma casinha de bonecas repleta de detalhes encantadores.'
    },
    {
        id: 'meninas62',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Mundo da Minnie',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas62.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas62.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Personagem', diferencial: 'Temático' },
        descricao: 'O clássico tema da Minnie com um diferencial incrível de movimento. Alegria garantida para a aniversariante.'
    },
    {
        id: 'meninas63',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Jardim das Fadas',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas63.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas63.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Mágico', diferencial: 'Fadas Móveis' },
        descricao: 'Um bolo onde a magia acontece. O movimento das fadas e elementos do jardim encanta a todos.'
    },
    {
        id: 'meninas64',
        categoria: 'infantilf',
        tipo: 'video',
        titulo: 'Fazendinha Divertida',
        subtitulo: 'Infantil Meninas • Com Movimento',
        videoSrc: 'imagens/videos/meninas64.mp4',
        imagemPrincipal: 'imagens/infantil meninas/meninas64.jpg',
        detalhes: { altura: 'Padrão', acabamento: 'Colorido', diferencial: 'Dinâmico' },
        descricao: 'Uma versão vibrante e cheia de movimento do tema fazendinha. Ideal para festas alegres e dinâmicas.'
    },

    // ==========================================
    //           INFANTIL MENINOS
    // ==========================================
    {
        id: 'infantilm1',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Heróis em Ação',
        subtitulo: 'Infantil Meninos • Aventura',
        imagemPrincipal: 'imagens/infantil meninos/meninos1.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit HD', diferencial: 'Cores Vibrantes' },
        descricao: 'Acabamento impecável com cores vivas que saltam aos olhos. Ideal para capturar a energia do tema e garantir fotos incríveis.'
    },
    {
        id: 'infantilm3',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Mundo Bita',
        subtitulo: 'Infantil Meninos • Musical',
        imagemPrincipal: 'imagens/infantil meninos/meninos3.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Biscuit', diferencial: 'Personagens 3D' },
        descricao: 'O tema favorito dos pequenos representado com fidelidade e alegria. Estrutura leve e segura, com todos os personagens amados pela criançada.'
    },
    {
        id: 'infantilm4',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Super Aventura',
        subtitulo: 'Infantil Meninos • Quadrinhos',
        imagemPrincipal: 'imagens/infantil meninos/meninos4.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pop Art', diferencial: 'Explosão de Cores' },
        descricao: 'Inspirado nos clássicos quadrinhos, este bolo traz onomatopeias e símbolos que transformam a mesa em uma verdadeira página de gibi.'
    },
    {
        id: 'infantilm5',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Safari Baby',
        subtitulo: 'Infantil Meninos • Natureza',
        imagemPrincipal: 'imagens/infantil meninos/meninos5.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura de Folhas', diferencial: 'Bichinhos Modelados' },
        descricao: 'A fofura da selva na sua festa. Tons terrosos e verdes combinados com animais modelados à mão para um visual encantador.'
    },
    {
        id: 'infantilm6',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Reino dos Sonhos',
        subtitulo: 'Infantil Meninos • Clássico',
        imagemPrincipal: 'imagens/infantil meninos/meninos6.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Azul Real', diferencial: 'Coroa no Topo' },
        descricao: 'Elegância para o príncipe da festa. Um bolo clássico em tons de azul e dourado que nunca sai de moda.'
    },
    {
        id: 'infantilm7',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Espaço Sideral',
        subtitulo: 'Infantil Meninos • Galáxia',
        imagemPrincipal: 'imagens/infantil meninos/meninos7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pintura à Mão', diferencial: 'Efeito Galáxia' },
        descricao: 'Uma viagem às estrelas. O acabamento simula o céu noturno, perfeito para pequenos astronautas e sonhadores.'
    },
    {
        id: 'infantilm8',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Fazendinha',
        subtitulo: 'Infantil Meninos • Rústico',
        imagemPrincipal: 'imagens/infantil meninos/meninos8.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura de Madeira', diferencial: 'Animais da Fazenda' },
        descricao: 'O charme do campo. Texturas que imitam madeira e palha, criando um cenário aconchegante e divertido.'
    },
    {
        id: 'infantilm10',
        categoria: 'infantilm',
        tipo: 'video',
        titulo: 'Fundo do Mar',
        subtitulo: 'Infantil Meninos • Movimento',
        videoSrc: 'imagens/videos/meninos10.mp4',
        imagemPrincipal: 'imagens/infantil meninos/meninos10.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Biscuit', diferencial: 'Movimento Aquático' },
        descricao: 'Surpreenda seus convidados com este modelo motorizado. O movimento suave simula a vida marinha, trazendo a magia do oceano para dentro da sua festa.'
    },
    {
        id: 'infantilm11',
        categoria: 'infantilm',
        tipo: 'image',
        titulo: 'Circo Mágico',
        subtitulo: 'Infantil Meninos • Colorido',
        imagemPrincipal: 'imagens/infantil meninos/meninos11.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Cores Primárias', diferencial: 'Topo Temático' },
        descricao: 'O espetáculo vai começar! Um bolo grandioso e colorido que captura toda a alegria e diversão do picadeiro.'
    },

    // ==========================================
    //           15 ANOS / CASAMENTO
    // ==========================================
    {
        id: '15anos2',
        categoria: '15anos',
        tipo: 'image',
        titulo: 'Debutante Rosé',
        subtitulo: '15 Anos • Elegância',
        imagemPrincipal: 'imagens/15 anos/15anos2.jpg',
        detalhes: { altura: '5 Andares', acabamento: 'Textura e Flores', diferencial: 'Design Moderno' },
        descricao: 'Sofisticação pura. Um bolo que combina texturas modernas com a delicadeza das flores, perfeito para uma festa inesquecível de 15 anos.'
    },
    {
        id: '15anos3',
        categoria: '15anos',
        tipo: 'image',
        titulo: 'Debutante Clássico',
        subtitulo: '15 Anos • Tradicional',
        imagemPrincipal: 'imagens/15 anos/15anos3.jpg',
        detalhes: { altura: '5 Andares', acabamento: 'Renda Branca', diferencial: 'Flores em Cascata' },
        descricao: 'A imponência do branco clássico. Com rendas minuciosas e flores em cascata, este bolo é a definição de luxo e tradição para debutantes.'
    }
];