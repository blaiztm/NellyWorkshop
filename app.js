const photo = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=85`;

// Sample catalog only: replace images and specifications with verified product information.
const products = [
  {
    id: 'pearl-morning', name: 'Жемчужное утро', category: 'necklaces', type: 'Колье',
    subtitle: 'Жемчуг · золотистые акценты', price: 3200, tag: 'Новая коллекция',
    image: photo('photo-1611652022419-a9419f74343d'), alt: 'Пример золотистого украшения с жемчужными деталями',
    description: 'Мягкое сияние жемчуга и тёплые золотистые акценты — нежная история для неспешного утра. Такое колье легко представить и с любимой белой рубашкой, и с платьем для особенного вечера.',
    materials: 'Пример: пресноводный жемчуг, бижутерный сплав', size: 'Пример: 40 см + удлинитель 5 см',
    contents: 'Одно колье', collection: 'Тихое сияние'
  },
  {
    id: 'warm-light', name: 'Тёплый свет', category: 'earrings', type: 'Серьги',
    subtitle: 'Лаконичная форма · мягкое сияние', price: 1800, tag: 'Любимые детали',
    image: photo('photo-1630019852942-f89202989a4d'), alt: 'Демонстрационная фотография золотистых серёг',
    description: 'Небольшой акцент, который меняет настроение целого образа. Простые линии и тёплый оттенок задуманы для тех дней, когда хочется оставить только самое любимое.',
    materials: 'Пример: бижутерный сплав с золотистым покрытием', size: 'Пример: длина 2,5 см',
    contents: 'Пара серёг', collection: 'Тихое сияние'
  },
  {
    id: 'quiet-moment', name: 'Тихий момент', category: 'bracelets', type: 'Браслет',
    subtitle: 'Нежные акценты · на каждый день', price: 2400, tag: 'Ручная работа',
    image: photo('photo-1611591437281-460bfbe1220a'), alt: 'Демонстрационная фотография золотистого браслета',
    description: 'Украшение как маленькое напоминание: можно остановиться, выдохнуть и заметить красоту вокруг. Нежный браслет для повседневных историй и тёплых встреч.',
    materials: 'Пример: бижутерный сплав, декоративные бусины', size: 'Пример: 16 см + удлинитель 3 см',
    contents: 'Один браслет', collection: 'Тихое сияние'
  },
  {
    id: 'together', name: 'В гармонии', category: 'sets', type: 'Комплект',
    subtitle: 'Колье и серьги · единое настроение', price: 4600, tag: 'Комплект',
    image: photo('photo-1617038220319-276d3cfab638'), alt: 'Пример ювелирной композиции для демонстрации комплекта',
    description: 'Две детали, задуманные как одна история. Колье и серьги можно носить вместе для более собранного образа или по отдельности — под настроение. Состав комплекта здесь показан как пример.',
    materials: 'Пример: декоративный жемчуг, бижутерный сплав', size: 'Пример: колье 40–45 см; серьги 2,5 см',
    contents: 'Одно колье и пара серёг', collection: 'Тихое сияние'
  },
  {
    id: 'petal', name: 'Лепесток', category: 'earrings', type: 'Серьги',
    subtitle: 'Плавные линии · природные мотивы', price: 2100, tag: 'Нежный акцент',
    image: photo('photo-1535632066927-ab7c9ab60908'), alt: 'Пример изящных серёг для демонстрационного каталога',
    description: 'Лёгкость лепестка и плавность природных линий стали идеей этого украшения. Небольшая деталь, которая добавляет мягкости даже самому простому образу.',
    materials: 'Пример: бижутерный сплав, стеклянные бусины', size: 'Пример: длина 3 см',
    contents: 'Пара серёг', collection: 'Природные истории'
  },
  {
    id: 'little-story', name: 'Маленькая история', category: 'necklaces', type: 'Колье',
    subtitle: 'Тонкая цепочка · особенная деталь', price: 2700, tag: 'На каждый день',
    image: photo('photo-1599643477877-530eb83abc8e'), alt: 'Демонстрационная фотография колье с декоративным акцентом',
    description: 'Тонкая линия, один выразительный акцент и пространство для вашей собственной истории. Лаконичное украшение, которое не спорит с образом, а тихо его дополняет.',
    materials: 'Пример: бижутерный сплав с декоративным покрытием', size: 'Пример: 42 см + удлинитель 5 см',
    contents: 'Одно колье', collection: 'Природные истории'
  }
];

const formatPrice = (price) => new Intl.NumberFormat('ru-RU', {
  style: 'currency', currency: 'RUB', maximumFractionDigits: 0
}).format(price);

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

const productUrl = (product) => `product.html?id=${encodeURIComponent(product.id)}`;

function productCard(product) {
  return `<article class="product-card">
    <a class="product-card-link" href="${productUrl(product)}">
      <div class="product-photo">
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy" width="600" height="700">
      <span class="product-tag">${escapeHtml(product.tag)}</span>
      </div>
      <div class="product-info"><div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.subtitle)}</p></div><span class="product-price">${formatPrice(product.price)}</span></div>
    </a>
  </article>`;
}

function renderCatalog() {
  const grid = document.querySelector('[data-catalog]');
  if (!grid) return;

  const buttons = [...document.querySelectorAll('[data-filter]')];
  const sort = document.querySelector('#catalog-sort');
  const count = document.querySelector('[data-catalog-count]');
  const validCategories = ['all', ...new Set(products.map((product) => product.category))];
  const requestedCategory = new URLSearchParams(window.location.search).get('category');
  let category = validCategories.includes(requestedCategory) ? requestedCategory : 'all';

  function render() {
    const visible = products.filter((product) => category === 'all' || product.category === category);
    if (sort.value === 'price-asc') visible.sort((a, b) => a.price - b.price);
    if (sort.value === 'price-desc') visible.sort((a, b) => b.price - a.price);
    grid.innerHTML = visible.map(productCard).join('');
    count.textContent = `Показано: ${visible.length} из ${products.length} · демонстрационная коллекция`;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    render();
  }));
  sort.addEventListener('change', render);
  render();
}

function renderProduct() {
  const target = document.querySelector('[data-product]');
  if (!target) return;
  const id = new URLSearchParams(window.location.search).get('id');
  const product = products.find((item) => item.id === id);

  if (!product) {
    document.title = 'Украшение не найдено — Мастерская Нелли';
    document.querySelector('[data-product-breadcrumb]').textContent = 'Украшение не найдено';
    target.innerHTML = '<section class="empty-state"><p class="eyebrow">Кажется, мы разминулись</p><h1>Такого украшения<br><em>пока нет.</em></h1><p>Возможно, ссылка устарела. Вернитесь в каталог через меню или хлебные крошки выше.</p></section>';
    return;
  }

  document.title = `${product.name} — ${product.type.toLowerCase()} | Мастерская Нелли`;
  document.querySelector('meta[name="description"]').content = `${product.type} «${product.name}»: ${product.subtitle.toLowerCase()}. Демонстрационное изделие Мастерской Нелли.`;
  document.querySelector('[data-product-breadcrumb]').textContent = product.name;
  const specifications = [
    ['Материалы', product.materials], ['Размер', product.size],
    ['В составе', product.contents], ['Коллекция', product.collection]
  ];
  target.innerHTML = `<article class="product-layout">
    <div><img class="detail-photo" src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" width="900" height="1080" fetchpriority="high"><p class="photo-credit">Иллюстративная фотография · Unsplash. Не является фотографией реального изделия мастерской.</p></div>
    <div class="product-detail"><p class="eyebrow">${escapeHtml(product.collection)} · ${escapeHtml(product.type)}</p><h1>${escapeHtml(product.name)}</h1><p class="detail-subtitle">${escapeHtml(product.subtitle)}</p><p class="detail-price">${formatPrice(product.price)}</p>
    <p class="prototype-note">Образец для знакомства с сайтом. Фотография, материалы, размеры и цена — примеры. Заказать или оплатить это изделие пока нельзя.</p>
    <p class="detail-description">${escapeHtml(product.description)}</p>
    <dl class="specifications">${specifications.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>
    <details><summary>Как беречь украшение</summary><p>Избегайте контакта с водой, парфюмом и бытовой химией. Храните отдельно в мягком мешочке, протирайте сухой салфеткой. Точные рекомендации будут зависеть от материалов настоящего изделия.</p></details>
    <details><summary>Заказ и доставка</summary><p>Мастерская готовится к открытию. Перед запуском здесь появятся подтверждённые способы связи, условия заказа, оплаты, доставки и возврата.</p></details>
    </div>
  </article>`;
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
renderCatalog();
renderProduct();
