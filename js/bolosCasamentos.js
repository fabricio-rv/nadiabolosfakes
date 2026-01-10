const listaCasamentos = [
    {
        id: 'casamento1',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Clássico Laços',
        subtitulo: 'Casamento • Tradicional',
        imagemPrincipal: 'imagens/casamentos/casamento1.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Pasta Americana', diferencial: 'Laços Esculpidos' },
        descricao: 'A elegância eterna do branco. Quatro andares majestosos decorados com laços clássicos e texturas suaves, ideal para cerimônias tradicionais.'
    },
    {
        id: 'casamento2',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Porta-Alianças Luxo',
        subtitulo: 'Casamento • Criativo',
        imagemPrincipal: 'imagens/casamentos/casamento2.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento2.mp4',
        detalhes: { altura: '2 Andares', acabamento: 'Capitonê', diferencial: 'Topo Funcional' },
        descricao: 'Um modelo diferenciado que simula uma caixa de joias no topo, perfeito para o momento das alianças ou para mesas de destaque.'
    },
    {
        id: 'casamento3',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Romance em Poá',
        subtitulo: 'Casamento • Delicado',
        imagemPrincipal: 'imagens/casamentos/casamento3.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura Poá', diferencial: 'Noivinhos Clássicos' },
        descricao: 'Delicadeza em cada detalhe. O acabamento em poá (bolinhas) traz um ar vintage e romântico, coroado com o tradicional topo de noivinhos.'
    },
    {
        id: 'casamento4',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Cascata de Rosas',
        subtitulo: 'Casamento • Floral',
        imagemPrincipal: 'imagens/casamentos/casamento4.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Espatulado', diferencial: 'Arranjo Lateral' },
        descricao: 'Rosas brancas descendo lateralmente sobre uma base texturizada. Simples, chique e atemporal.'
    },
    {
        id: 'casamento5',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Jardim Iluminado',
        subtitulo: 'Casamento • Natureza',
        imagemPrincipal: 'imagens/casamentos/casamento5.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento5.mp4',
        detalhes: { altura: '4 Andares', acabamento: 'Folhagens', diferencial: 'Efeito Natural' },
        descricao: 'Uma celebração à natureza. Flores brancas e folhagens verdes envolvem o bolo, criando um visual orgânico e cheio de vida.'
    },
    {
        id: 'casamento6',
        categoria: 'casamento',
        tipo: 'video',
        titulo: 'Moderno Suspenso',
        subtitulo: 'Casamento • Tendência',
        imagemPrincipal: 'imagens/casamentos/casamento6.jpg',
        videoSrc: 'imagens/casamentos/videos/casamento6.mp4',
        detalhes: { altura: '3 Andares + Base', acabamento: 'Separador', diferencial: 'Andar Flutuante' },
        descricao: 'Design contemporâneo com separador transparente que cria a ilusão de um andar flutuante. Sofisticação pura para noivas modernas.'
    },
    {
        id: 'casamento7',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Toque de Coral',
        subtitulo: 'Casamento • Verão',
        imagemPrincipal: 'imagens/casamentos/casamento7.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Liso', diferencial: 'Flores Salmon' },
        descricao: 'O contraste suave das flores em tom coral e verde escuro sobre o branco. Perfeito para casamentos ao ar livre ou no verão.'
    },
    {
        id: 'casamento8',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Paixão Vermelha',
        subtitulo: 'Casamento • Intenso',
        imagemPrincipal: 'imagens/casamentos/casamento8.png',
        detalhes: { altura: '3 Andares', acabamento: 'Perolado', diferencial: 'Rosas Vermelhas' },
        descricao: 'Para casais de personalidade forte. A intensidade das rosas vermelhas destaca-se sobre a base branca clássica.'
    },
    {
        id: 'casamento9',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Movimento Fluido',
        subtitulo: 'Casamento • Artístico',
        imagemPrincipal: 'imagens/casamentos/casamento9.png',
        detalhes: { altura: '3 Andares', acabamento: 'Drapeado', diferencial: 'Design Assimétrico' },
        descricao: 'Um trabalho artístico que simula tecido em movimento. As linhas curvas trazem leveza e sofisticação única.'
    },
    {
        id: 'casamento10',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Bodas de Prata',
        subtitulo: 'Casamento • 25 Anos',
        imagemPrincipal: 'imagens/casamentos/casamento10.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Matelassê', diferencial: 'Topo Temático' },
        descricao: 'Especialmente criado para celebrar 25 anos de união. Acabamento clássico em matelassê com detalhes prateados.'
    },
    {
        id: 'casamento11',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Rústico Outono',
        subtitulo: 'Casamento • Boho',
        imagemPrincipal: 'imagens/casamentos/casamento11.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Textura Rústica', diferencial: 'Tons Terrosos' },
        descricao: 'Textura que imita espatulado rústico, decorado com flores em tons de laranja queimado e marrom. Ideal para casamentos no campo.'
    },
    {
        id: 'casamento12',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Doce Romance',
        subtitulo: 'Casamento • Romântico',
        imagemPrincipal: 'imagens/casamentos/casamento12.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Liso', diferencial: 'Flores Rosas' },
        descricao: 'A suavidade das flores cor-de-rosa trazendo um ar de conto de fadas para a mesa do bolo.'
    },
    {
        id: 'casamento13',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'White Garden',
        subtitulo: 'Casamento • Floral',
        imagemPrincipal: 'imagens/casamentos/casamento13.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Flores Brancas', diferencial: 'Monocromático' },
        descricao: 'A sofisticação do branco sobre branco. Diversos tipos de flores artesanais compõem este visual rico e texturizado.'
    },
    {
        id: 'casamento14',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Boho Terracota',
        subtitulo: 'Casamento • Moderno',
        imagemPrincipal: 'imagens/casamentos/casamento14.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Textura Risca', diferencial: 'Arranjo Assimétrico' },
        descricao: 'Imponente com 4 andares e textura riscada. Os arranjos em terracota e laranja trazem a tendência boho chic.'
    },
    {
        id: 'casamento15',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Botânico Chic',
        subtitulo: 'Casamento • Greenery',
        imagemPrincipal: 'imagens/casamentos/casamento15.jpg',
        detalhes: { altura: '4 Andares', acabamento: 'Espatulado', diferencial: 'Muita Folhagem' },
        descricao: 'Foco total no verde. Folhagens exuberantes abraçam os andares, perfeito para quem ama o estilo botânico.'
    },
    {
        id: 'casamento16',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Pérolas e Flores',
        subtitulo: 'Casamento • Delicado',
        imagemPrincipal: 'imagens/casamentos/casamento16.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Pontilhado', diferencial: 'Flores Miúdas' },
        descricao: 'Acabamento delicado com "pérolas" de açúcar e pequenos buquês de flores brancas e mosquitinhos.'
    },
    {
        id: 'casamento17',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Azul Serenity',
        subtitulo: 'Casamento • Etéreo',
        imagemPrincipal: 'imagens/casamentos/casamento17.png',
        detalhes: { altura: '3 Andares', acabamento: 'Degradê Suave', diferencial: 'Folhagem Prata' },
        descricao: 'Um toque de azul suave combinado com folhagens prateadas. Uma escolha onírica e diferente do tradicional.'
    },
    {
        id: 'casamento18',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Renda Vintage',
        subtitulo: 'Casamento • Clássico',
        imagemPrincipal: 'imagens/casamentos/casamento18.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Renda de Açúcar', diferencial: 'Detalhes Ouro' },
        descricao: 'A textura imita renda fina aplicada sobre o bolo, remetendo aos vestidos de noiva clássicos.'
    },
    {
        id: 'casamento19',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Azul Royal',
        subtitulo: 'Casamento • Majestoso',
        imagemPrincipal: 'imagens/casamentos/casamento19.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Colorido', diferencial: 'Renda Branca' },
        descricao: 'Para quem não tem medo de cor. O azul royal profundo serve de fundo para o trabalho de renda branca em destaque.'
    },
    {
        id: 'casamento20',
        categoria: 'casamento',
        tipo: 'image',
        titulo: 'Espirais de Amor',
        subtitulo: 'Casamento • Escultural',
        imagemPrincipal: 'imagens/casamentos/casamento20.jpg',
        detalhes: { altura: '3 Andares', acabamento: 'Esculpido', diferencial: 'Linhas Curvas' },
        descricao: 'Uma variação do modelo fluido, com curvas mais acentuadas que criam um visual escultural e moderno.'
    }
];