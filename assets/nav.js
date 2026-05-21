/* Navegação por teclado · setas ←/→ */
document.addEventListener('keydown', (e) => {
  const prev = document.querySelector('[data-nav="prev"]');
  const next = document.querySelector('[data-nav="next"]');
  if (e.key === 'ArrowLeft' && prev && !prev.classList.contains('disabled')) {
    window.location.href = prev.href;
  } else if (e.key === 'ArrowRight' && next && !next.classList.contains('disabled')) {
    window.location.href = next.href;
  }
});

const dotPages = [
  { label: 'Capa', path: 'index.html' },
  { label: 'Como ler', path: 'pages/02-como-ler.html' },
  { label: 'Homepage', path: 'pages/03-homepage.html' },
  { label: 'Institucionais', path: 'pages/04-institucionais.html' },
  { label: 'Produtos Imóvel / Automóvel', path: 'pages/05-produtos-imovel-automovel.html' },
  { label: 'Produtos Terreno / Construção / Pesados', path: 'pages/06-produtos-terreno-construcao-pesados.html' },
  { label: 'Produtos Agro / Investimento / Solar / Empresarial', path: 'pages/07-produtos-agro-investimento-solar-empresarial.html' },
  { label: 'Adicionais', path: 'pages/08-adicionais.html' },
  { label: 'Ajustes e Bugs', path: 'pages/09-ajustes-bugs.html' },
  { label: 'Encerramento', path: 'pages/10-encerramento.html' }
];

const currentUrl = new URL(window.location.href);
const rootUrl = currentUrl.pathname.includes('/pages/') ? new URL('..', currentUrl) : new URL('.', currentUrl);

document.querySelectorAll('.dot-track .dot').forEach((dot, index) => {
  const page = dotPages[index];
  if (!page) return;

  dot.setAttribute('title', `${page.label}`);
  dot.setAttribute('aria-label', `Página ${index + 1}: ${page.label}`);
  dot.setAttribute('tabindex', '0');

  const targetUrl = new URL(page.path, rootUrl).href;

  const navigateToDot = () => {
    if (!dot.classList.contains('active')) {
      window.location.href = targetUrl;
    }
  };

  dot.addEventListener('click', navigateToDot);
  dot.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      navigateToDot();
    }
  });
});
