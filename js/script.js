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

/* --- 2. GERAÇÃO DINÂMICA DA GALERIA --- */
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid || typeof dadosBolos === 'undefined') return;

    galleryGrid.innerHTML = dadosBolos.map(bolo => {
        const mediaHtml = bolo.tipo === 'video'
            ? `<video src="${bolo.videoSrc}" poster="${bolo.imagemPrincipal}" muted loop playsinline></video>
               <div class="motion-badge"><i class="fas fa-play"></i> Com Movimento</div>`
            : `<img src="${bolo.imagemPrincipal}" alt="${bolo.titulo}">`;

        return `
            <div class="gallery-item" data-category="${bolo.categoria}" onclick="openModal('${bolo.id}')">
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

/* --- 2. GERAÇÃO DINÂMICA DA GALERIA --- */
function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid || typeof dadosBolos === 'undefined') return;

    galleryGrid.innerHTML = dadosBolos.map(bolo => {
        // TRUQUE DO MESTRE: Se não tiver tipo definido, assume que é 'foto'
        const tipoItem = bolo.tipo === 'video' ? 'video' : 'foto';

        const mediaHtml = bolo.tipo === 'video'
            ? `<video src="${bolo.videoSrc}" poster="${bolo.imagemPrincipal}" muted loop playsinline></video>
               <div class="motion-badge"><i class="fas fa-play"></i> Com Movimento</div>`
            : `<img src="${bolo.imagemPrincipal}" alt="${bolo.titulo}">`;

        // Note que agora usamos ${tipoItem} no data-type
        return `
            <div class="gallery-item" data-category="${bolo.categoria}" data-type="${tipoItem}" onclick="openModal('${bolo.id}')">
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

/* --- 3. FILTRAGEM (ATUALIZADO PARA FILTRO DUPLO) --- */
const filterBtns = document.querySelectorAll('.filter-btn');
const subFilterBtns = document.querySelectorAll('.sub-filter-btn'); // Novos botões
const viewAllBtn = document.getElementById('viewAllBtn');
const viewLessBtn = document.getElementById('viewLessBtn');
const emptyState = document.getElementById('emptyState');

let currentCategory = 'all';
let currentType = 'all'; // Nova variável para controlar o tipo (foto/video/all)
const itemsLimit = 6;

function renderGallery(showAll) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let visibleCount = 0;
    let totalMatching = 0;

    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        const itemType = item.getAttribute('data-type'); // Lê se é 'foto' ou 'video'

        // A MÁGICA: Verifica se bate com a Categoria E com o Tipo ao mesmo tempo
        const matchesCategory = (currentCategory === 'all' || itemCategory === currentCategory);
        const matchesType = (currentType === 'all' || itemType === currentType);

        // Só mostra se passar nos DOIS testes
        if (matchesCategory && matchesType) {
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

    // Lógica do Empty State (Sem resultados)
    if (totalMatching === 0) {
        if (emptyState) emptyState.style.display = 'block';
        if (viewAllBtn) viewAllBtn.style.display = 'none';
        if (viewLessBtn) viewLessBtn.style.display = 'none';
    } else {
        if (emptyState) emptyState.style.display = 'none';

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

// Eventos dos Botões de Categoria (Grandes)
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter');
        renderGallery(false);
    });
});

// Eventos dos Botões de Tipo (Pequenos - Com/Sem Movimento)
subFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        subFilterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentType = btn.getAttribute('data-type'); // Atualiza a variável de tipo
        renderGallery(false);
    });
});

if (viewAllBtn) viewAllBtn.addEventListener('click', () => renderGallery(true));
if (viewLessBtn) viewLessBtn.addEventListener('click', () => {
    renderGallery(false);
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
});

/* --- 4. MODAL PROFISSIONAL (HÍBRIDO: FITTED & SCROLL) --- */
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

    // --- 4.1 CONSTRÓI A FICHA TÉCNICA ---
    if (modalDetailsContainer) {
        // AQUI: Mudei para dizer "Vi no site"
        const msg = `Olá Nadia! Vi no site o bolo *${data.titulo}* e gostaria de saber a disponibilidade.`;

        // O resto do código continua igual, mantendo o visual do botão:
        const zapLink = `https://wa.me/5551999973725?text=${encodeURIComponent(msg)}`;

        modalDetailsContainer.innerHTML = `
            <div class="modal-header-custom">
                <span class="modal-badge">Disponível para Locação</span>
                <h3 id="modalTitle">${data.titulo}</h3>
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
                <button id="btnShareModal" class="btn-compartilhar-modal" aria-label="Compartilhar">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
        `;

        setTimeout(() => {
            const btnShare = document.getElementById('btnShareModal');
            if (btnShare) {
                btnShare.addEventListener('click', async () => {
                    if (navigator.share) {
                        try {
                            await navigator.share({
                                title: `Nadia Bolo Fake - ${data.titulo}`,
                                text: `Olha que lindo esse bolo da Nadia: ${data.titulo}`,
                                url: window.location.href
                            });
                        } catch (err) { console.log('Cancelado'); }
                    } else {
                        navigator.clipboard.writeText(`${data.titulo} - Confira em: ${window.location.href}`);
                        alert('Link copiado!');
                    }
                });
            }
        }, 100);
    }

    // --- 4.2 PREPARA AS MÍDIAS (SLIDESHOW HÍBRIDO) ---
    currentBoloSlides = [];
    const isDesktop = window.innerWidth > 768;

    // 1. IMAGEM (Invertido: Detail primeiro, depois Fitted)
    if (isDesktop) {
        currentBoloSlides.push({ type: 'image-detail', src: data.imagemPrincipal }); // 1º Detail (Rola a tela)
    }
    currentBoloSlides.push({ type: 'image', src: data.imagemPrincipal }); // 2º Fitted (Trava a tela)

    // 2. EXTRAS
    if (data.imagensExtras && data.imagensExtras.length > 0) {
        data.imagensExtras.forEach(img => currentBoloSlides.push({ type: 'image', src: img }));
    }

    // 3. VÍDEO
    if (data.tipo === 'video' && data.videoSrc) {
        if (isDesktop) {
            // 1. O Vídeo "Detail" (PRIMEIRO agora)
            currentBoloSlides.push({
                type: 'video-detail',
                src: data.videoSrc,
                poster: data.imagemPrincipal
            });

            // 2. O Vídeo "Fitted" (DEPOIS agora)
            currentBoloSlides.push({
                type: 'video-fitted',
                src: data.videoSrc,
                poster: data.imagemPrincipal
            });

        } else {
            // Mobile (Continua igual)
            currentBoloSlides.push({
                type: 'video',
                src: data.videoSrc,
                poster: data.imagemPrincipal
            });
        }
    }

    totalSlides = currentBoloSlides.length;
    currentSlideIndex = 0;

    renderModalMedia();
    modal.style.display = 'flex';
}

function renderModalMedia() {
    if (!modalMedia) return;
    modalMedia.innerHTML = '';

    let slidesHTML = '';

    currentBoloSlides.forEach((slide, index) => {
        const activeClass = index === currentSlideIndex ? 'active' : '';

        // Verifica qualquer tipo de vídeo
        if (slide.type.includes('video')) {
            // Adicionei poster="${slide.poster}"
            slidesHTML += `<video class="media-slide ${activeClass}" src="${slide.src}" poster="${slide.poster}" loop playsinline muted></video>`;

            // Só adiciona o botão de play no slide atual
            if (index === currentSlideIndex) {
                slidesHTML += `<div class="play-btn"><i class="fas fa-play"></i></div>`;
            }
        } else {
            slidesHTML += `<img class="media-slide ${activeClass}" src="${slide.src}" alt="Foto do Bolo">`;
        }
    });

    modalMedia.innerHTML = `<div class="scroll-wrapper">${slidesHTML}</div>`;

    if (totalSlides > 1) {
        const prevBtn = document.createElement('div'); prevBtn.className = 'slider-arrow prev-arrow'; prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        const nextBtn = document.createElement('div'); nextBtn.className = 'slider-arrow next-arrow'; nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';

        prevBtn.onclick = (e) => { e.stopPropagation(); changeSlide(-1); };
        nextBtn.onclick = (e) => { e.stopPropagation(); changeSlide(1); };

        modalMedia.appendChild(prevBtn);
        modalMedia.appendChild(nextBtn);
    }

    // Se o slide ATUAL for vídeo, ativa os controles
    if (currentBoloSlides[currentSlideIndex].type.includes('video')) {
        setupVideoControls();
    }

    checkLayoutFit();
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= totalSlides) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = totalSlides - 1;
    renderModalMedia();
}

function setupVideoControls() {
    // Busca o vídeo e o botão ATIVOS dentro do modalMedia (mais seguro que getElementById)
    const video = modalMedia.querySelector('video.active');
    const btn = modalMedia.querySelector('.play-btn');

    if (!video || !btn) return;

    function togglePlay(e) {
        // Evita que clique nas setas dispare o play
        if (e && e.target.closest('.slider-arrow')) return;

        e.stopPropagation(); // Impede propagação indesejada

        if (video.paused) {
            video.play()
                .then(() => {
                    btn.classList.add('hidden');
                })
                .catch(err => console.error("Erro ao reproduzir:", err));
        } else {
            video.pause();
            btn.classList.remove('hidden');
        }
    }

    // Adiciona o evento de clique nos dois elementos
    btn.addEventListener('click', togglePlay);
    video.addEventListener('click', togglePlay);
}

function checkLayoutFit() {
    // Lógica para travar a tela (Fitted) ou soltar rolagem (Detail)
    const currentType = currentBoloSlides[currentSlideIndex].type;

    // Tipos que devem ficar "Travados" na tela (sem rolar)
    const fittedTypes = ['image', 'video-fitted'];

    if (window.innerWidth > 768 && fittedTypes.includes(currentType)) {
        modalBody.classList.add('layout-fitted');
    } else {
        modalBody.classList.remove('layout-fitted');
    }
}

function closeModal() {
    if (!modal) return;
    const v = modal.querySelector('video');
    if (v) v.pause();
    modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    initGallery();
    const closeBtn = document.querySelector('.modal-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
});

window.onclick = function (event) { if (event.target === modal) closeModal(); };
window.closeModal = closeModal;
window.openModal = openModal;