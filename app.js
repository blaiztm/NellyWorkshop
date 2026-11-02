// Names are editorial; descriptions describe visible details, not certified materials.
// 31613 and 31617 appear to show the same necklace and share one product gallery.
const products = [
  {
    id: 'forest-tassels', name: 'Лесные истории', category: 'earrings', type: 'Серьги',
    subtitle: 'Зелёные бусины · каскад цепочек', photos: ['31603'],
    alt: 'Длинные серьги с зелёными бусинами разных форм и цепочками бронзового оттенка',
    description: 'Светло-зелёные бусины, тёмные узоры и ажурные детали собраны на цепочках разной длины. Подвижный каскад красиво сочетается с льняной рубашкой или мягким трикотажем.',
    contents: 'Пара серёг', palette: 'Зелёный, бронзовый'
  },
  {
    id: 'blue-cascade', name: 'Синий каскад', category: 'earrings', type: 'Серьги',
    subtitle: 'Синие искры · длинная бахрома', photos: ['31607'],
    alt: 'Серьги с длинной ступенчатой бахромой из синих сверкающих элементов и золотистыми застёжками',
    description: 'Ряды синих сверкающих элементов складываются в ступенчатую бахрому. Золотистая перекладина и узорные застёжки подчёркивают чёткую форму. Выразительный акцент к однотонному вечернему наряду.',
    contents: 'Пара серёг', palette: 'Синий, золотистый'
  },
  {
    id: 'blue-ice', name: 'Голубой лёд', category: 'earrings', type: 'Серьги',
    subtitle: 'Прозрачный голубой · серебристые детали', photos: ['31608'],
    alt: 'Серьги с прозрачными голубыми прямоугольными вставками и гранёными подвесками',
    description: 'Прямоугольные прозрачные вставки с тонким внутренним рисунком переходят в две гранёные подвески. Голубой оттенок и серебристые детали создают прохладное, светлое сочетание.',
    contents: 'Пара серёг', palette: 'Голубой, серебристый'
  },
  {
    id: 'antique-medallion', name: 'Античный медальон', category: 'necklaces', type: 'Колье',
    subtitle: 'Фигурный медальон · два оттенка металла', photos: ['31610'],
    alt: 'Колье из серебристых вытянутых и золотистых бусин с прозрачными подвесками и круглым медальоном',
    description: 'Вытянутые серебристые элементы чередуются с небольшими золотистыми деталями и прозрачными подвесками. Круглый медальон с рельефным профилем придаёт украшению характер старинной находки.',
    contents: 'Одно колье с медальоном', palette: 'Серебристый, золотистый, прозрачный'
  },
  {
    id: 'forest-geometry', name: 'Лесная геометрия', category: 'earrings', type: 'Серьги',
    subtitle: 'Квадратные бусины · узорные детали', photos: ['31611'],
    alt: 'Серьги с вытянутыми серебристыми дужками, разноцветными квадратными бусинами и геометрическим орнаментом',
    description: 'На вытянутых дужках — подвески разной длины, квадратные бусины с зелёными, молочными и землистыми узорами. Серебристые детали с орнаментом поддерживают геометрию украшения.',
    contents: 'Пара серёг', palette: 'Лесной зелёный, молочный, серебристый'
  },
  {
    id: 'graphite-cascade', name: 'Графитовый каскад', category: 'earrings', type: 'Серьги',
    subtitle: 'Тёмное сияние · ступенчатая бахрома', photos: ['31612'],
    alt: 'Серьги с чёрной сверкающей бахромой разной длины и серебристыми застёжками',
    description: 'Тёмная бахрома мягко ловит свет, а серебристая перекладина задаёт строгую линию. Эти серьги добавят движения и блеска образу с открытой шеей или собранными волосами.',
    contents: 'Пара серёг', palette: 'Графитовый, серебристый'
  },
  {
    id: 'honey-trail', name: 'Медовая тропа', category: 'necklaces', type: 'Колье',
    subtitle: 'Медовые оттенки · цепочка с подвесками', photos: ['31613', '31617'],
    alt: 'Колье с бусинами неровной формы медовых оттенков, бронзовой цепочкой и подвеской-клевером',
    description: 'Медовые, карамельные и тёмно-коричневые оттенки встречаются с деталями под старую бронзу. Ряд бусин дополнен цепочкой с небольшими подвесками; на удлинителе — ажурный клевер.',
    contents: 'Одно колье', palette: 'Медовый, карамельный, бронзовый'
  },
  {
    id: 'ivory-knot', name: 'Молочный узел', category: 'necklaces', type: 'Колье',
    subtitle: 'Светлые бусины · золотистые звенья', photos: ['31614'],
    alt: 'Асимметричное колье из светлых бусин и золотистой цепи с узлами и крупной застёжкой',
    description: 'Одна половина колье — светлые бусины с мягким переливом, другая — золотистые звенья с узелками. Крупная застёжка становится самостоятельной деталью этой асимметричной композиции.',
    contents: 'Одно колье', palette: 'Молочный, золотистый'
  },
  {
    id: 'white-rain', name: 'Белый дождь', category: 'earrings', type: 'Серьги',
    subtitle: 'Светлые подвески · тонкие цепочки', photos: ['31615'],
    alt: 'Серьги-кольца с серебристыми цепочками, белыми и прозрачными бусинами и тёмными акцентами',
    description: 'С небольших колец спускаются тонкие цепочки со светлыми бусинами свободной формы и прозрачными гранями. Редкие тёмные акценты делают эту воздушную композицию выразительнее.',
    contents: 'Пара серёг', palette: 'Белый, прозрачный, серебристый'
  },
  {
    id: 'black-and-milk', name: 'Чёрное и молочное', category: 'earrings', type: 'Серьги',
    subtitle: 'Контрастные бусины · свободные линии', photos: ['31620'],
    alt: 'Серьги на серебристых цепочках с круглыми чёрными и вытянутыми белыми бусинами',
    description: 'Гладкие чёрные бусины и вытянутые молочные подвески расположены на цепочках разной длины. Простое контрастное сочетание легко поддержать белой рубашкой или тёмным платьем.',
    contents: 'Пара серёг', palette: 'Чёрный, молочный, серебристый'
  },
  {
    id: 'honey-bracelet', name: 'Медовый браслет', category: 'bracelets', type: 'Браслет',
    subtitle: 'Тёплые оттенки · ажур и цепочки', photos: ['31621'],
    alt: 'Широкий браслет с медовыми бусинами, ажурными шариками и цепочками бронзового оттенка',
    description: 'Бусины тёплых оттенков соседствуют с ажурными шариками и волнистой цепочкой. Маленькие подвески добавляют движения, а несколько рядов создают объёмный силуэт.',
    contents: 'Один браслет', palette: 'Медовый, коричневый, бронзовый'
  },
  {
    id: 'white-petals', name: 'Белые лепестки', category: 'necklaces', type: 'Колье',
    subtitle: 'Переливы белого · свободная форма', photos: ['31622'],
    alt: 'Колье из белых переливающихся элементов вытянутой неровной формы с маленькими золотистыми бусинами',
    description: 'Белые переливающиеся элементы похожи на вытянутые лепестки. Их неровный ритм и небольшие золотистые акценты создают объёмную, живую линию — к льну, хлопку или гладкой ткани.',
    contents: 'Одно колье', palette: 'Белый, молочный, золотистый'
  },
  {
    id: 'forest-geometry-set', name: 'Лесная геометрия', category: 'sets', type: 'Комплект',
    subtitle: 'Колье и серьги · природная геометрия', photos: ['31616'],
    alt: 'Комплект из колье и пары серёг с квадратными узорчатыми бусинами и серебристыми деталями',
    description: 'Квадратные бусины природных оттенков, тёмные вытянутые элементы и серебристый орнамент объединяют колье и серьги. Вместе они создают графичный образ с мягкой, неоднородной палитрой.',
    contents: 'Одно колье и пара серёг', palette: 'Зелёный, землистый, серебристый'
  },
  {
    id: 'honey-trail-set', name: 'Медовая тропа', category: 'sets', type: 'Комплект',
    subtitle: 'Колье и браслет · медовая палитра', photos: ['31618'],
    alt: 'Комплект из колье и широкого браслета с медовыми бусинами и бронзовыми цепочками',
    description: 'Колье с подвесками и объёмный браслет объединены медовыми оттенками и деталями под старую бронзу. Неровные формы бусин и ажурные элементы придают комплекту винтажное настроение.',
    contents: 'Одно колье и один браслет', palette: 'Медовый, карамельный, бронзовый'
  },
  {
    id: 'ivory-knot-set', name: 'Молочный узел', category: 'sets', type: 'Комплект',
    subtitle: 'Колье и серьги · светлые переливы', photos: ['31619'],
    alt: 'Комплект из асимметричного колье и длинных серёг с молочными бусинами и золотистыми цепочками',
    description: 'Светлые бусины и золотистые цепочки связывают асимметричное колье с длинными серьгами. Узловатые звенья колье и тонкие каскады серёг по-разному раскрывают одно сочетание цветов.',
    contents: 'Одно колье и пара серёг', palette: 'Молочный, золотистый'
  }
].map((product) => ({
  price: null,
  materials: 'Состав бусин и фурнитуры уточняется',
  size: 'Замеры уточняются',
  ...product,
  image: `assets/products/${product.photos[0]}-720.jpg`
}));

const formatPrice = (price) => price == null ? 'Цена уточняется' : new Intl.NumberFormat('ru-RU', {
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
      <img src="${escapeHtml(product.image)}" alt="${escapeHtml(product.alt)}" loading="lazy" decoding="async" width="600" height="700">

      </div>
      <div class="product-info"><div><p class="product-kind">${escapeHtml(product.type)}</p><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(product.subtitle)}</p></div><span class="product-price">${formatPrice(product.price)}</span></div>
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
    if (sort.value === 'name-asc') visible.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    if (sort.value.startsWith('price-')) visible.sort((a, b) => {
      if (a.price == null) return b.price == null ? 0 : 1;
      if (b.price == null) return -1;
      return sort.value === 'price-asc' ? a.price - b.price : b.price - a.price;
    });
    grid.innerHTML = visible.map(productCard).join('');
    count.textContent = `Показано: ${visible.length} из ${products.length}`;
    buttons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.filter === category)));
  }

  buttons.forEach((button) => button.addEventListener('click', () => {
    category = button.dataset.filter;
    render();
  }));
  const hasPrices = products.some((product) => product.price != null);
  [...sort.options].filter((option) => option.value.startsWith('price-')).forEach((option) => {
    option.disabled = !hasPrices;
  });
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
  document.querySelector('meta[name="description"]').content = `${product.type} «${product.name}»: ${product.subtitle.toLowerCase()}. Украшения ручной работы Мастерской Нелли.`;
  document.querySelector('[data-product-breadcrumb]').textContent = product.name;
  const specifications = [
    ['Материалы', product.materials], ['Размер', product.size],
    ['В составе', product.contents], ['Палитра', product.palette]
  ];
  target.innerHTML = `<article class="product-layout">
    <div class="product-gallery">
      <img class="detail-photo" data-detail-photo src="assets/products/${product.photos[0]}-1440.jpg" alt="${escapeHtml(product.alt)}" width="900" height="1080" fetchpriority="high">
      ${product.photos.length > 1 ? `<div class="gallery-views" role="group" aria-label="Ракурсы украшения">${product.photos.map((photo, index) => `<button type="button" class="gallery-view" data-photo="${photo}" aria-label="Ракурс ${index + 1}" aria-pressed="${index === 0}"><img src="assets/products/${photo}-720.jpg" alt="" width="80" height="64"><span>Ракурс ${index + 1}</span></button>`).join('')}</div>` : ''}
      <p class="photo-credit">Фотография из мастерской · ${product.category === 'sets' ? 'Комплект' : 'Отдельное украшение'}</p>
    </div>
    <div class="product-detail"><p class="eyebrow">${product.category === 'sets' ? 'Украшения вместе' : 'Отдельное украшение'} · ${escapeHtml(product.type)}</p><h1>${escapeHtml(product.name)}</h1><p class="detail-subtitle">${escapeHtml(product.subtitle)}</p><p class="detail-price">${formatPrice(product.price)}</p>
    <p class="detail-description">${escapeHtml(product.description)}</p>
    <dl class="specifications">${specifications.map(([label, value]) => `<div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`).join('')}</dl>
    <details><summary>Как беречь украшение</summary><p>Избегайте контакта с водой, парфюмом и бытовой химией. Храните отдельно в мягком мешочке, протирайте сухой салфеткой. Особенности ухода уточняются после подтверждения материалов.</p></details>
    <details><summary>Заказ и доставка</summary><p>Мастерская готовится к открытию. Перед запуском здесь появятся подтверждённые способы связи, условия заказа, оплаты, доставки и возврата.</p></details>
    </div>
  </article>`;
  target.querySelectorAll('[data-photo]').forEach((button) => {
    button.addEventListener('click', () => {
      target.querySelector('[data-detail-photo]').src = `assets/products/${button.dataset.photo}-1440.jpg`;
      target.querySelectorAll('[data-photo]').forEach((view) => view.setAttribute('aria-pressed', String(view === button)));
    });
  });
}

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});
renderCatalog();
renderProduct();
