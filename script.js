// URL de busca da API do Unsplash para temas do Microcosmo
const termosBusca = ['microscope', 'cells', 'bacteria', 'virus', 'dna', 'laboratory'];

async function carregarGaleria() {
    const gridGaleria = document.getElementById('grid-galeria');
    gridGaleria.innerHTML = ''; // Limpa o texto de carregando

    // Simulação de resposta com IDs de fotos licenciadas gratuitas do Unsplash sobre ciência/microcosmo
    const fotosMicrocosmo = [
        { id: '46B6N167Wb0', titulo: 'Estruturas Celulares', alt: 'Fotografia em zoom de estruturas moleculares brilhantes' },
        { id: 'pSby76G6S1c', titulo: 'Exploração Científica', alt: 'Luz de laser passando por lentes de microscopia' },
        { id: 'f9NAnv08T0w', titulo: 'Foco no Invisível', alt: 'Lâmina de vidro de microscópio com amostra biológica' },
        { id: 'Mv9hjnEUHR4', titulo: 'Análise de DNA', alt: 'Visualização gráfica de sequenciamento genético em tela' },
        { id: 'N049N76mS9U', titulo: 'Cultura de Micro-organismos', alt: 'Placa de Petri em laboratório com colônias de bactérias' },
        { id: 'ZSpP969C89s', titulo: 'Universo Microscópico', alt: 'Abstração visual de vírus e células flutuando no organismo' }
    ];

    fotosMicrocosmo.forEach(foto => {
        // Criando a estrutura do Card
        const card = document.createElement('div');
        card.className = 'card';

        // URL da imagem vinda dos servidores do Unsplash
        const urlImagem = `https://images.unsplash.com/photo-${foto.id}?auto=format&fit=crop&w=600&q=80`;

        card.innerHTML = `
            <img src="${urlImagem}" alt="${foto.alt}">
            <div class="card-info">
                <h3>${foto.titulo}</h3>
                <p>Imagem de alta resolução obtida via licença livre do Unsplash para estudos biológicos.</p>
            </div>
        `;
        
        gridGaleria.appendChild(card);
    });
}

// Funcionalidade de Acessibilidade: Alto Contraste
const btnContraste = document.getElementById('alto-contraste');
btnContraste.addEventListener('click', () => {
    document.body.classList.toggle('alto-contraste');
    
    // Atualiza o estado para leitores de tela
    const ativo = document.body.classList.contains('alto-contraste');
    btnContraste.setAttribute('aria-pressed', ativo);
});

// Inicializa a galeria ao carregar a página
document.addEventListener('DOMContentLoaded', carregarGaleria); 











