# Мастерская Нелли

Russian-language showcase for a grandmother’s handmade jewelry. The design follows the photographed pieces: warm linen, soft pastel amber accents (#e8c58e), warm brown text, editorial serif headings, and full, uncropped product photography. Static HTML/CSS/JavaScript; no installation, build step, or backend.

## Preview

Open `index.html` directly in a browser, or serve this directory with `python3 -m http.server 8080 --bind 127.0.0.1`. Navigation, filters, sorting, and product pages work from disk as well as on static hosting. Photographs are local. Only Google Fonts requires an internet connection; system font fallbacks are provided.

## Catalog and photographs

`app.js` contains 15 listings: 7 pairs of earrings, 4 necklaces, 1 bracelet, and 3 sets. All 16 supplied photographs are represented. `Pictures/Individual/31613.jpg` and `31617.jpg` appear to show the same necklace, so they form a two-view gallery for «Медовая тропа». Confirm that grouping with the maker when completing the product specifications.

Original photos remain unchanged in `Pictures/`. The site uses JPEG derivatives in `assets/products/`, at maximum dimensions of 720px for cards and 1440px for detail pages. Each filename retains its original photo number. Images use `object-fit: contain` to keep the supplied composition visible, including landscape photographs and all set components.

| Photo number | Listing | Type |
| --- | --- | --- |
| 31603 | Лесные истории | Earrings |
| 31607 | Синий каскад | Earrings |
| 31608 | Голубой лёд | Earrings |
| 31610 | Античный медальон | Necklace |
| 31611 | Лесная геометрия | Earrings |
| 31612 | Графитовый каскад | Earrings |
| 31613, 31617 | Медовая тропа | Necklace; two views |
| 31614 | Молочный узел | Necklace |
| 31615 | Белый дождь | Earrings |
| 31620 | Чёрное и молочное | Earrings |
| 31621 | Медовый браслет | Bracelet |
| 31622 | Белые лепестки | Necklace |
| 31616 | Лесная геометрия | Set: necklace and earrings |
| 31618 | Медовая тропа | Set: necklace and bracelet |
| 31619 | Молочный узел | Set: necklace and earrings |

Names are editorial suggestions. Descriptions identify visible forms and colors; they do not certify stone identity, metal composition, dimensions, weight, or availability. Prices are `null` and display «Цена уточняется». Price sorting remains disabled until prices are supplied; workshop order and Russian alphabetical sorting work now. Unknown prices always sort after known prices in either price direction.

## Structure

- `index.html`: introduction, inspiration, workshop story, and choosing guidance. No product listings.
- `catalog.html`: the only product grid, category filters, sorting, and announced result count.
- `product.html`: shared detail template with descriptions, set contents, specifications, photo views, and care/order disclosures.
- `app.js`: catalog data and rendering.
- `styles.css`: shared visual design, responsive layouts, and accessibility styles.
- `description.md`: site structure and working requirements.

The browsing path remains homepage → catalog → item or set. The header’s «Каталог» is the single forward catalog entry; breadcrumbs provide back-navigation.

## Verification

The photography update was checked in the Codex browser at 320, 375, 390, 768, 1024, and 1440px for the homepage, catalog, and product template. No horizontal overflow was found; navigation, filters, sorting, and disclosure controls meet the 44px minimum. All 15 product/set pages, category counts, alphabetical sorting, gallery switching, disclosures, invalid identifiers, and category deep links were checked. JavaScript syntax and local image/link references were checked separately.

Real-device iOS Safari / Android Chrome and actual 200% browser zoom remain untested and required before launch. Responsive browser checks do not replace these.

## Before accepting orders

Confirm the product names and photo grouping, then supply prices, exact materials, measurements, weights, and availability. Add the maker’s fuller story, portrait, contact details, and verified order/delivery terms. No checkout, payment collection, contact form, analytics, or simulated order confirmation is implemented. Choose HTTPS hosting and review product indexing before launch; details currently render in the browser.
