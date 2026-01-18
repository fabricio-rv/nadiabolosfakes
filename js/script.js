const MAPA_TEMAS = {
    // --- TEMÁTICOS ---
    'tematicos': {
        'Religiosos': '2, 8, 13, 22, 31, 34, 36, 47, 52, 55',
        'Institucional': '1, 4, 69, 70, 5, 6, 9, 25, 29, 53, 57, 61, 67',
        'Gaúcho': '3, 16, 38, 68, 60',
        'Gastronomia': '10, 20, 26, 27, 35, 48, 49',
        'Floral': '43, 66, 44, 54',
        'Fazenda': '7, 17, 28, 59',
        'Futebol': '40, 51, 56',
        'Personagens': '15, 58, 64, 71',
        'Música': '37, 45',
        'Festa Junina': '11, 12, 62',
        'Redes Sociais': '18, 19',
        'Comemorativos': 'default' 
    },

    // --- FILTROS INFANTIL MENINOS (PALAVRA ÚNICA) ---
    'infantil m': {
        'Futebol': '2, 14, 56, 80, 53, 59, 88, 89',
        'Patrulha': '32, 43, 57, 62, 75, 79',
        'Safari': '12, 21, 50, 54, 58, 78',
        'Fazendinha': '4, 13, 19, 31, 44, 73, 77',
        'Carros': '6, 15, 16, 37, 61, 63, 71',
        'Heróis': '8, 9, 64, 70',
        'Mickey': '25, 38, 83',
        'Games': '20, 28, 30, 33, 36, 52, 76',
        'Bebês': '10, 35, 39, 49, 51, 67, 74, 81, 82',
        'Desenhos': '5, 7, 18, 23, 26, 34, 45, 48, 69, 65, 66, 46, 86, 87',
        'Oceano': '41, 85, 68, 72',
        'Astronauta': '3, 29',
        'Animais': '1, 22, 40',
        'Diversos': '11, 17, 24, 27, 41, 47, 42, 55 60, 84'
    },

    // --- FILTROS INFANTIL MENINAS (ORGANIZADOS POR PALAVRA ÚNICA) ---
    'infantil f': {
        'Borboletas': '1, 9, 38, 43, 64, 70, 71, 72',
        'Jardim': '2, 57, 63, 66',
        'Minnie': '5, 16, 33, 46, 54, 62',
        'Fazendinha': '4, 25, 28, 26, 41, 74, 61, 75',
        'Safari': '8, 58',
        'Unicórnio': '6, 32',
        'Princesas': '12, 14, 17, 23, 31, 40, 53, 60',
        'Desenhos': '7, 18, 19, 21, 24, 30, 34, 37, 47, 49, 51, 69, 77, 79, 80',
        'Bebês': '10, 13, 22, 29, 52, 67, 73, 78',
        'Sereia': '27, 42, 56',
        'Doces': '11, 20',
        'Diversos': '15, 35, 36, 39, 44, 45, 48, 50, 55, 59, 65, 68, 76'
    },

    // --- FORMATURAS ---
    'formatura': {
        'Terceirão': '3',
        'Design': '1, 5, 6',
        'Enfermagem': '2',
        'Pedagogia': '7',
        'Radiologia': '8',
        'Farmácia': '9',
        'Veterinária': '10',
        'Outros': '4'
    },

    // --- 15 ANOS ---
    '15anos': {
        'Floral': '151, 152, 159, 1513, 1531, 1512, 1544, 153, 1515, 158, 1512, 1523, 1534, 1510, 1539, 1520, 1527, 1543, 1553, 1551, 1547, 1549, 1528, 1552, 1533, 1525, 1516, 1544, 1545, 1548, 1542, 1519,',
        'Jardim': '1554, 1521, 1538, 156',
        'Rústico': '155, 1526, 1532',
        'Clássicos': 'default',
        'Marcantes': '1555, 1546, 154, 1550, 1540, 1520, 1514, 1541, 1556, 1530'
    },

    // --- ADULTO FEMININO (Filtro por Estilo e Ocasião) ---
    'adultof': {
        'Floral': '26, 30, 23, 28, 5, 6, 14, 20, 15, 21, 24, 25, 13, 9, 8',
        'Glamour': '16, 7, 12, 17, 18, 22, 29, 10', 
        'Temáticos': '19, 27, 1, 2, 3, 4',
    },

    // --- ADULTO MASCULINO (Filtro por Interesses) ---
    'adultom': {
        'Clássico': '7, 11, 8, 15, 18',
        'Churrasco': '14',
        'Bar': '12, 19',
        'Fazenda': '1, 4, 13, 20',
        'Terno': '2, 3',
        'Música': '5, 10',
        'Viagem': '6',
    },

    // --- CASAMENTO (Filtro por Estilo de Cerimônia) ---
    'casamento': {
        'Clássico': '1, 4, 3, 8, 10, 13, 16, 5, 15',
        'Rústico': '7, 12, 11, 14',
        'Moderno': '2, 6, 9, 17, 18, 19', 
    }
};

/* --- 1. DARK MODE & MENU MOBILE --- */
const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

if (themeBtn) {
    const themeIcon = themeBtn.querySelector('i');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) { body.setAttribute('data-theme', savedTheme); updateIcon(savedTheme); }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { body.setAttribute('data-theme', 'dark'); updateIcon('dark'); }

    themeBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (!themeIcon) return;
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li a');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('active-fixed');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}
navLinksItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('nav-active')) {
            navLinks.classList.remove('nav-active');
            hamburger.querySelector('i').classList.replace('fa-times', 'fa-bars');
        }
    });
});

/* ==========================================================================
   BLOCO 2: LÓGICA DE PROCESSAMENTO E FILTRAGEM (COLE ISSO SUBSTITUINDO O RESTO)
   ========================================================================== */

/* --- 2. PROCESSAMENTO DE DADOS (O CÉREBRO DA OPERAÇÃO) --- */
// Essa função transforma "meninas6" em "6" e acha o tema na lista
function processarDados() {
    if (typeof dadosBolos === 'undefined') return;

    dadosBolos.forEach(bolo => {
        // Dentro da função processarDados(), localize o passo 1:
        // 1. Descobrir a Categoria Base
        let idLimpo = bolo.id.toLowerCase();
        let categoriaChave = '';

        if (idLimpo.includes('tematicos')) {
            categoriaChave = 'tematicos';
        } else if (idLimpo.includes('formatura')) {
            categoriaChave = 'formatura';
        } else if (idLimpo.includes('casamento')) {
            categoriaChave = 'casamento';
        } else if (idLimpo.includes('15anos')) { // Identificação direta do 15 anos
            categoriaChave = '15anos';
        } else if (idLimpo.includes('adultom') || idLimpo.includes('masc')) {
            categoriaChave = 'adultom';
        } else if (idLimpo.includes('adultof') || idLimpo.includes('fem')) {
            categoriaChave = 'adultof';
        } else if (idLimpo.includes('meninos') || idLimpo.includes('infantilm')) {
            categoriaChave = 'infantil m';
        } else if (idLimpo.includes('meninas') || idLimpo.includes('infantilf')) {
            categoriaChave = 'infantil f';
        }

        // 2. Descobrir o Número do Bolo (AQUI ESTÁ A MÁGICA)
        // Remove tudo que não for número ou ponto. Ex: "meninas26.1" vira "26.1"
        let numeroBolo = idLimpo.replace(/[^0-9.]/g, '');

        // 3. Atribuir Tema
        bolo.tema = null; // Começa sem tema

        if (typeof MAPA_TEMAS !== 'undefined' && MAPA_TEMAS[categoriaChave]) {
            let temaEncontrado = 'default'; // Se não achar número, vai pro default

            for (const [nomeTema, numerosString] of Object.entries(MAPA_TEMAS[categoriaChave])) {
                if (numerosString === 'default') continue;

                // Cria lista de números exatos para comparar
                const listaNumeros = numerosString.split(',').map(s => s.trim());

                // Se o número "6" estiver na lista do tema, BINGO!
                if (listaNumeros.includes(numeroBolo)) {
                    temaEncontrado = nomeTema;
                    break;
                }
            }

            // Se caiu no default, descobre qual é o nome do grupo default (ex: Outros)
            if (temaEncontrado === 'default') {
                for (const [nome, lista] of Object.entries(MAPA_TEMAS[categoriaChave])) {
                    if (lista === 'default') temaEncontrado = nome;
                }
            }
            bolo.tema = temaEncontrado;
        }

        // 4. Atribuir Andares (Futuro - Por enquanto 'all')
        bolo.andares = 'all';
    });
}

// Roda o processamento AGORA
processarDados();


/* --- 3. GERAÇÃO DINÂMICA DA GALERIA --- */
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) return;

    galleryGrid.innerHTML = dadosBolos.map(bolo => {
        const tipoItem = bolo.tipo === 'video' ? 'video' : 'foto';
        const mediaHtml = bolo.tipo === 'video'
            ? `<video src="${bolo.videoSrc}" poster="${bolo.imagemPrincipal}" muted loop playsinline></video>
               <div class="motion-badge"><i class="fas fa-play"></i> Com Vídeo</div>`
            : `<img src="${bolo.imagemPrincipal}" alt="${bolo.titulo}">`;

        // Agora injetamos o tema descoberto no HTML para poder filtrar depois
        return `
            <div class="gallery-item" 
                 data-category="${bolo.categoria}" 
                 data-type="${tipoItem}" 
                data-theme="${bolo.tema || 'none'}"
                data-tier="${bolo.detalhes.altura.replace(/[^0-9]/g, '')}" 
                onclick="openModal('${bolo.id}')">
                ${mediaHtml}
                <div class="gallery-overlay">
                    <h3>${bolo.titulo}</h3>
                    <p>${bolo.subtitulo.split('•')[1] || 'Exclusivo'}</p>
                </div>
            </div>
        `;
    }).join('');

    renderGallery(false);
}


/* --- 4. SISTEMA DE FILTRAGEM --- */
// Seletores
const filterBtns = document.querySelectorAll('.filter-btn');
const genderFilterContainer = document.getElementById('genderFilters');
const genderBtns = document.querySelectorAll('.gender-btn');
const tierFiltersContainer = document.getElementById('tierFilters');
const tierBtns = document.querySelectorAll('.tier-btn');
const themeFiltersContainer = document.getElementById('themeFiltersContainer');
const themeButtonsArea = document.getElementById('themeButtonsArea');
const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
const viewAllBtn = document.getElementById('viewAllBtn');
const viewLessBtn = document.getElementById('viewLessBtn');
const emptyState = document.getElementById('emptyState');

// Estados
let currentCategory = 'all';
let currentGender = 'all';
let currentTier = 'all';
let currentTheme = 'all';
let currentType = 'all';
const itemsLimit = 6;

function renderGallery(showAll) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let visibleCount = 0;
    let totalMatching = 0;

    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const itemType = item.getAttribute('data-type');
        const itemTheme = item.getAttribute('data-theme');

        // 1. Categoria
        let matchesCategory = (currentCategory === 'all') ? true : itemCategory.includes(currentCategory);

        // 2. Gênero 
        let matchesGender = true;
        if (currentGender !== 'all' && (currentCategory === 'infantil' || currentCategory === 'adulto')) {
            if (currentGender === 'f') matchesGender = itemCategory.endsWith('f') || itemCategory.includes('fem');
            else if (currentGender === 'm') matchesGender = itemCategory.endsWith('m') || itemCategory.includes('masc');
        }


        // 3. Andares (Lógica funcional agora)
        let matchesTier = true;
        if (currentTier !== 'all') {
            // Busca o objeto original do bolo pelo ID para ler os 'detalhes.altura'
            const boloData = dadosBolos.find(b => b.id === item.getAttribute('onclick').match(/'([^']+)'/)[1]);

            if (boloData && boloData.detalhes && boloData.detalhes.altura) {
                // Extrai apenas o número da string (Ex: "2 Andares" vira "2")
                let numeroAltura = boloData.detalhes.altura.replace(/[^0-9]/g, '');

                // Se o botão for "5", ele filtra qualquer bolo com 5 ou mais
                if (currentTier === '5') {
                    matchesTier = parseInt(numeroAltura) >= 5;
                } else {
                    matchesTier = numeroAltura === currentTier;
                }
            }
        }

        // 4. Temas 
        let matchesTheme = true;
        if (currentTheme !== 'all') {
            matchesTheme = (itemTheme === currentTheme);
        }

        // 5. Tipo 
        let matchesType = (currentType === 'all' || itemType === currentType);

        // --- RESULTADO FINAL ---
        if (matchesCategory && matchesGender && matchesTier && matchesTheme && matchesType) {
            totalMatching++;
            if (showAll || visibleCount < itemsLimit) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        } else {
            item.style.display = 'none';
        }
    });

    updateViewButtons(totalMatching, showAll);
}

function updateViewButtons(totalMatching, showAll) {
    const persistentCta = document.querySelector('.persistent-cta');

    if (totalMatching === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (viewAllBtn) viewAllBtn.style.display = 'none';
        if (viewLessBtn) viewLessBtn.style.display = 'none';
        if (persistentCta) persistentCta.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        if (persistentCta) persistentCta.style.display = 'block';

        if (viewAllBtn && viewLessBtn) {
            if (totalMatching <= itemsLimit) {
                viewAllBtn.style.display = 'none';
                viewLessBtn.style.display = 'none';
            } else {
                if (showAll) {
                    viewAllBtn.style.display = 'none';
                    viewLessBtn.style.display = 'inline-block';
                } else {
                    viewAllBtn.style.display = 'inline-block';
                    viewLessBtn.style.display = 'none';
                }
            }
        }
    }
}

// --- EVENTOS DE CLIQUE ---

// 1. Categoria Principal
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter');

        // Reset sub-filtros
        currentGender = 'all'; genderBtns.forEach(b => b.classList.remove('active')); genderBtns[0].classList.add('active');
        currentTheme = 'all';

        updateFiltersVisibility();
        renderGallery(false);
    });
});

// 2. Gênero
genderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        genderBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentGender = btn.getAttribute('data-gender');

        updateThemeButtons();
        currentTheme = 'all';
        renderGallery(false);
    });
});

// 3. Andares
tierBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tierBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTier = btn.getAttribute('data-tier');
        renderGallery(false);
    });
});

// 4. Tipo
subFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        subFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.getAttribute('data-type');
        renderGallery(false);
    });
});

// 5. Temas (Dinâmico)
if (themeButtonsArea) {
    themeButtonsArea.addEventListener('click', (e) => {
        if (e.target.classList.contains('theme-btn-filter')) {
            const btns = themeButtonsArea.querySelectorAll('.theme-btn-filter');
            btns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentTheme = e.target.getAttribute('data-theme-name');
            renderGallery(false);
        }
    });
}

// Funções de UI
function updateFiltersVisibility() {
    // 1. Controle de exibição do container
    if (currentCategory === 'infantil' || currentCategory === 'adulto') {
        genderFilterContainer.style.display = 'block';

        // 2. FORÇAR "TODOS" A FICAR ATIVO E DOURADO
        if (currentGender === 'all') {
            genderBtns.forEach(b => b.classList.remove('active'));
            const btnAllGender = document.querySelector('.gender-btn[data-gender="all"]');
            if (btnAllGender) btnAllGender.classList.add('active');
        }
    } else {
        genderFilterContainer.style.display = 'none';
    }

    // Atualiza os botões de temas
    updateThemeButtons();
}

function updateThemeButtons() {

    themeButtonsArea.innerHTML = '';
    let chaveMapa = '';

    if (currentCategory === 'tematicos') chaveMapa = 'tematicos';
    else if (currentCategory === 'formatura') chaveMapa = 'formatura';
    else if (currentCategory === '15anos') chaveMapa = '15anos';
    else if (currentCategory === 'casamento') chaveMapa = 'casamento';

    // Lógica para categorias que dependem de Gênero
    else if (currentCategory === 'adulto') {
        if (currentGender === 'f') chaveMapa = 'adultof';
        else if (currentGender === 'm') chaveMapa = 'adultom';
    }
    else if (currentCategory === 'infantil') {
        // Se o gênero for 'all', chaveMapa continua vazia e os botões não aparecem
        if (currentGender === 'f') chaveMapa = 'infantil f'; // Use o nome EXATO do MAPA_TEMAS
        else if (currentGender === 'm') chaveMapa = 'infantil m'; // Use o nome EXATO do MAPA_TEMAS
    }

    // Só renderiza se achou a chave no MAPA_TEMAS
    if (chaveMapa && MAPA_TEMAS[chaveMapa]) {
        themeFiltersContainer.style.display = 'block';

        const btnAll = document.createElement('button');
        btnAll.className = 'theme-btn-filter active';
        btnAll.textContent = 'Todos';
        btnAll.setAttribute('data-theme-name', 'all');
        themeButtonsArea.appendChild(btnAll);

        Object.keys(MAPA_TEMAS[chaveMapa]).forEach(tema => {
            const btn = document.createElement('button');
            btn.className = 'theme-btn-filter';
            btn.textContent = tema;
            btn.setAttribute('data-theme-name', tema);
            themeButtonsArea.appendChild(btn);
        });
    } else {
        themeFiltersContainer.style.display = 'none';
    }
}

if (viewAllBtn) viewAllBtn.addEventListener('click', () => renderGallery(true));
if (viewLessBtn) viewLessBtn.addEventListener('click', () => {
    renderGallery(false);
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});


/* --- 5. MODAL PROFISSIONAL --- */
const modal = document.getElementById('cakeModal');
const modalMedia = document.getElementById('modalMedia');
const modalBody = modal ? modal.querySelector('.modal-body') : null;
const modalDetailsContainer = modal ? modal.querySelector('.modal-details') : null;

let currentSlideIndex = 0;
let totalSlides = 0;
let currentBoloSlides = [];

function openModal(id) {
    if (!modal) return;
    const data = dadosBolos.find(b => b.id === id);
    if (!data) return;

    // --- POR ESTA LINHA (COM O SEU SITE OFICIAL FIXO): ---
    const linkDireto = 'https://nadiaboloscenograficos.com.br/?bolo=' + id;

    // Atualiza a URL do navegador para o cliente poder copiar se quiser
    history.pushState({ id: id }, '', '?bolo=' + id);

    if (modalDetailsContainer) {
        // --- NOVO: MENSAGEM DO WHATSAPP COM O LINK E LÓGICA PARA NOME DA CATEGORIA NA MENSAGEM ---
        // --- LÓGICA CORRIGIDA PARA MENSAGEM ---
        let catLegivel = '';
        let de = ''; // Conector "de" vazio por padrão

        if (data.categoria.includes('15anos')) {
            catLegivel = '15 Anos';
            de = 'de ';
        } else if (data.categoria.includes('casamento')) {
            catLegivel = 'Casamento';
            de = 'de ';
        } else if (data.categoria.includes('formatura')) {
            catLegivel = 'Formatura';
            de = 'de ';
        } else if (data.categoria.includes('tematicos')) {
            catLegivel = 'Temático';
        } else if (data.categoria.includes('infantil')) {
            // CORREÇÃO AQUI: Verifica se no ID ou Categoria existe 'm' ou 'meninos'
            if (data.categoria.includes('m') || data.id.includes('meninos')) {
                catLegivel = 'Infantil Masculino';
            } else {
                catLegivel = 'Infantil Feminino';
            }
        } else if (data.categoria.includes('adulto')) {
            catLegivel = (data.categoria.includes('f') || data.id.includes('fem')) ? 'Adulto Feminino' : 'Adulto Masculino';
        }

        // --- CRIA A MENSAGEM FINAL (Ajustada com a variável 'de') ---
        const msg = `Olá, Nadia! Gostei deste Bolo Cenográfico ${de}${catLegivel} e gostaria de saber mais sobre ele.\n\nVeja qual é o modelo aqui: ${linkDireto}`;        // Gera o link do Whats
        const zapLink = `https://wa.me/5551999973725?text=${encodeURIComponent(msg)}`;

        modalDetailsContainer.innerHTML = `
            <div class="modal-header-custom">
                <span class="modal-badge">Disponível para Locação</span>
                <h3 id="modalTitle">${data.categoria === 'tematicos'
                ? data.titulo.split(' • ').join('<br>')
                : data.titulo
            }</h3>
                <p class="modal-subtitle">${data.subtitulo}</p>
            </div>
            <div class="modal-specs">
                <div class="spec-item"><i class="fas fa-ruler-vertical"></i> <span>${data.detalhes.altura}</span></div>
                <div class="spec-item"><i class="fas fa-layer-group"></i> <span>${data.detalhes.acabamento}</span></div>
                <div class="spec-item"><i class="fas fa-star"></i> <span>${data.detalhes.diferencial}</span></div>
            </div>
            <p id="modalDesc">${data.descricao}</p>
            <div class="modal-actions">
                <a href="${zapLink}" target="_blank" class="btn-encomendar-modal">
                    <i class="fab fa-whatsapp"></i> Encomendar
                </a>
                <button id="btnShareModal" class="btn-compartilhar-modal"><i class="fas fa-share-alt"></i></button>
            </div>
        `;
        setTimeout(() => {
            const btnShare = document.getElementById('btnShareModal');
            if (btnShare) {
                btnShare.addEventListener('click', async () => {
                    if (navigator.share) {
                        try { await navigator.share({ title: `Nadia Bolo - ${data.titulo}`, text: `Olha esse bolo: ${data.titulo}`, url: window.location.href }); } catch (err) { }
                    } else { navigator.clipboard.writeText(window.location.href); alert('Link copiado!'); }
                });
            }
        }, 100);
    }

    currentBoloSlides = [];
    const isDesktop = window.innerWidth > 1150;
    let imagensParaMostrar = (data.galeria && data.galeria.length > 0) ? data.galeria : [data.imagemPrincipal];

    imagensParaMostrar.forEach(imgSrc => {
        currentBoloSlides.push({ type: 'image', src: imgSrc });
        if (isDesktop) currentBoloSlides.push({ type: 'image-detail', src: imgSrc });
    });

    if (data.videoSrc) {
        if (isDesktop) {
            currentBoloSlides.push({ type: 'video-fitted', src: data.videoSrc, poster: data.imagemPrincipal });
            currentBoloSlides.push({ type: 'video-detail', src: data.videoSrc, poster: data.imagemPrincipal });
        } else {
            currentBoloSlides.push({ type: 'video', src: data.videoSrc, poster: data.imagemPrincipal });
        }
    }

    totalSlides = currentBoloSlides.length;
    currentSlideIndex = 0;
    renderModalMedia();
    modal.style.display = 'flex';
}

function renderModalMedia() {
    if (!modalMedia) return;
    let slidesHTML = '';
    
    currentBoloSlides.forEach((slide, index) => {
        const activeClass = index === currentSlideIndex ? 'active' : '';
        if (slide.type.includes('video')) {
            slidesHTML += `<video class="media-slide ${activeClass}" src="${slide.src}" poster="${slide.poster}" loop playsinline muted></video>`;
            if (index === currentSlideIndex) slidesHTML += `<div class="play-btn"><i class="fas fa-play"></i></div>`;
        } else {
            slidesHTML += `<img class="media-slide ${activeClass}" src="${slide.src}" alt="Bolo">`;
        }
    });
    modalMedia.innerHTML = `<div class="scroll-wrapper">${slidesHTML}</div>`;

    // --- LÓGICA FINAL CORRIGIDA ---
    // Agora que o Javascript só cria slides duplos acima de 1150px (Desktop Real),
    // podemos usar uma lógica simples para as setas:
    
    const width = window.innerWidth;
    let showArrows = false;

    if (width > 1150) {
        // Desktop Real: Mantém comportamento original (pode ter slides duplos)
        showArrows = totalSlides > 1; 
    } else {
        // Mobile e Tablet (<= 1150):
        // Como não tem mais slides duplicados, se tiver > 1 slide, é porque tem > 1 foto real.
        showArrows = totalSlides > 1;
    }

    if (showArrows) {
        const prevBtn = document.createElement('div'); prevBtn.className = 'slider-arrow prev-arrow'; prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        const nextBtn = document.createElement('div'); nextBtn.className = 'slider-arrow next-arrow'; nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        prevBtn.onclick = (e) => { e.stopPropagation(); changeSlide(-1); };
        nextBtn.onclick = (e) => { e.stopPropagation(); changeSlide(1); };
        modalMedia.appendChild(prevBtn); modalMedia.appendChild(nextBtn);
    }

    if (currentBoloSlides[currentSlideIndex] && currentBoloSlides[currentSlideIndex].type.includes('video')) setupVideoControls();
    checkLayoutFit();
}

function changeSlide(dir) {
    currentSlideIndex += dir;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    renderModalMedia();
}

function setupVideoControls() {
    const video = modalMedia.querySelector('video.active');
    const btn = modalMedia.querySelector('.play-btn');
    if (!video || !btn) return;
    function togglePlay(e) {
        if (e && e.target.closest('.slider-arrow')) return;
        e.stopPropagation();
        if (video.paused) { video.play().then(() => btn.classList.add('hidden')); }
        else { video.pause(); btn.classList.remove('hidden'); }
    }
    btn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
}

function checkLayoutFit() {
    const currentType = currentBoloSlides[currentSlideIndex].type;
    const fittedTypes = ['image', 'video-fitted'];
    if (window.innerWidth > 1150 && fittedTypes.includes(currentType)) modalBody.classList.add('layout-fitted');
    else modalBody.classList.remove('layout-fitted');
}

function closeModal() {
    if (!modal) return;
    const v = modal.querySelector('video');
    if (v) v.pause();
    modal.style.display = 'none';

    // --- NOVO: LIMPA A URL QUANDO FECHA O MODAL ---
    history.pushState(null, '', window.location.pathname);
}

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    updateFiltersVisibility(); // Inicializa visibilidade

    // --- NOVO: SISTEMA QUE ABRE O BOLO SOZINHO PELO LINK ---
    const urlParams = new URLSearchParams(window.location.search);
    const boloId = urlParams.get('bolo');

    // Se tiver um ID de bolo no link, abre ele automaticamente
    if (boloId) {
        // Um pequeno delay para garantir que a galeria carregou
        setTimeout(() => {
            openModal(boloId);
        }, 100);
    }
});

// Adiciona suporte para o botão "Voltar" do navegador fechar o modal
window.onpopstate = function (event) {
    if (modal && modal.style.display === 'flex') {
        closeModal();
    }
};

window.onclick = function (event) { if (event.target === modal) closeModal(); };
window.closeModal = closeModal;
window.openModal = openModal;