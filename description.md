# Мастерская Нелли — site structure and working requirements

## Purpose and scope

A customer-oriented, Russian-language website for a grandmother’s handmade jewelry workshop. The first release is a showcase prototype, not an operational shop. The catalog uses the owner’s jewelry photographs. Product names are editorial suggestions; prices, materials, measurements, weights, availability, and ordering details still need owner confirmation.

The design must remain warm, elegant, and consistent: warm linen backgrounds, deep olive and antique-brass accents, editorial headings, clear body text, and prominent jewelry photography. The refined direction uses a necklace-inspired Cyrillic Н maker’s mark, rectangular photography, open layouts with fine rules instead of repeated colored cards, real workshop photography, and direct, specific Russian copy. Avoid floating badges, decorative star symbols, and repeated generic slogans. Customer-facing content is Russian; prices use Russian rubles. Do not introduce a separate visual style for mobile or individual collections.

## Customer journey: one authoritative browsing path

**Homepage → Catalog → Individual piece or set.**

- The catalog is the only page that lists products. Do not add homepage product grids, recommendations, related-product grids, quick-view catalogs, or alternative shopping interfaces.
- Every page has the same primary navigation: «Каталог», «О мастерской», «Как выбрать». The workshop logo leads home.
- «Каталог» in the header is the single forward entry into product browsing. Do not repeat catalog calls to action in the hero, page body, or footer.
- Breadcrumbs are allowed for orientation and back-navigation. Direct links to individual product pages remain supported and must work after a refresh.
- Each catalog card has one clickable link encompassing its photograph and information, rather than duplicate image/title links.
- Category buttons and price sorting refine the same catalog; they must not open parallel catalogs or different page templates.

## Pages and files

### Homepage — [index.html](index.html)

1. Shared announcement and header navigation.
2. Hero: clear value proposition, photograph of a real jewelry set, and guidance to the catalog in the menu.
3. Brief workshop values.
4. Editorial inspiration: choosing for yourself, a meaningful gift, or a special occasion. No product listings.
5. Maker introduction with real jewelry photography and the family’s account of photographing the pieces together. Do not invent a fuller biography or a portrait.
6. Three-step explanation of how to browse and assess an item.
7. Brand closing message and opening-status information.
8. Shared footer explaining that prices/specifications are being completed and online orders are not yet accepted.

### Catalog — [catalog.html](catalog.html)

- Breadcrumbs, introduction, and a concise note that prices and specifications are being completed.
- Filters: all items, earrings, necklaces, bracelets, and sets.
- Sorting: workshop order and Russian alphabetical order. Price sorting remains disabled until some prices are confirmed. Unknown prices always come last in both price directions.
- Product count announced when the selection changes.
- The only product grid on the site. Cards show photograph, name, short description, and confirmed price or «Цена уточняется».
- Category query links are supported as a technical deep link, not promoted as an additional browsing path.
- A useful explanation is displayed when JavaScript is disabled.

### Product or set — [product.html](product.html)

- One shared template; each item is selected by its identifier in the URL.
- Breadcrumbs, photograph, name, category, palette, description, and confirmed price or «Цена уточняется».
- Materials and dimensions remain explicitly unconfirmed until supplied. Sets use the same template with a list of the pieces visible in their photographs.
- Expandable care and order/delivery information.
- Real local photographs with no stock-photo disclaimer. Multiple photographs of the same piece use accessible thumbnail buttons on its detail page. Preserve every supplied photo’s full framing.
- Missing or invalid identifiers display a readable not-found state with guidance to existing catalog navigation. Do not show unrelated products instead.
- No purchase button, fake checkout, simulated availability, or related-item grid.

### Shared implementation

- [styles.css](styles.css): shared styling and responsive layouts for all pages.
- [app.js](app.js): one catalog data source, safe rendering, category filtering, price sorting, product lookup, dynamic page metadata, and footer year. No framework or bundler.
- [README.md](README.md): quick-start preview instructions and launch checklist.
- [description.md](description.md): authoritative structure and working requirements. Review before changes and update whenever the agreed structure or requirements change.

## Mandatory mobile adaptation

- All pages must be responsive; mobile support is required for every future change, not an optional follow-up.
- Use the same content and functionality on phone, tablet, and desktop. Do not hide products or important information solely to make a layout fit.
- Support widths of 320px and above without page-level horizontal scrolling, clipped text, overlapping decoration, or inaccessible controls.
- Verify representative widths: 320, 375, 390, 768, 1024, and 1440px. Include portrait/landscape checks and actual iOS Safari / Android Chrome checks before production launch.
- Use fluid headings, wrapping navigation, stacked hero/detail layouts, and single-column product cards on narrow phones.
- Main reading copy should be at least 16px; secondary labels and supporting copy must remain comfortably readable. Avoid tiny decorative text for important information.
- Navigation, category filters, sorting, and disclosure controls need touch areas at least 44px high. Do not rely on hover interactions.
- Mobile must retain all 15 listings, all filters, sorting, photo views, specifications, and care/order disclosures.

## Accessibility and usability requirements

- Set Russian as the page language. Keep meaningful page titles, one main heading per page, semantic landmarks, descriptive links, and an accessible heading hierarchy.
- Provide a skip-to-content link, visible keyboard focus, keyboard-operable controls, labeled sorting, pressed states for filters, and an announced result count.
- Provide descriptive alternative text for meaningful photographs; hide purely decorative symbols from assistive technology.
- Target WCAG AA contrast: at least 4.5:1 for normal text and 3:1 for large text. Pastel backgrounds do not justify low-contrast control labels.
- Honor reduced-motion preferences. Content and controls must remain usable at 200% zoom.
- Maintain explicit image dimensions to reduce layout shifts; lazy-load below-the-fold catalog images. Do not lazy-load the main product photograph.
- System font fallbacks are mandatory. The site uses local optimized JPEGs and externally hosted Google Fonts with system fallbacks. Originals in Pictures/ must remain unchanged.

## Marketing and content requirements

- Lead with what the customer gets: a personal accent, an everyday pleasure, or a thoughtful gift. Follow with practical details that make choosing easier.
- Use warm, specific Russian copy without pressure or jargon. Preserve an intimate workshop identity rather than a mass-market storefront tone.
- Do not invent reviews, sales counts, customer testimonials, discounts, urgency, scarcity, free delivery, hypoallergenic properties, or guarantees.
- Claims about handmade production, materials, collections, availability, and fulfillment must be confirmed against actual products before public launch.
- Describe visible colors and shapes without inferring certified materials from photos. Do not invent prices or specifications; use null prices and explicit unconfirmed labels.

## Technical and working requirements

- Keep this phase a static HTML/CSS/JavaScript site with no required installation, build step, account, or backend. Direct local-file preview and static hosting must continue to work.
- Follow existing architecture and reuse shared styles and catalog data. Keep changes scoped; do not introduce a framework or duplicate templates without agreement.
- Do not insert user-supplied URL content directly into rendered markup. Unknown identifiers and categories must have safe fallback behavior.
- Check internal links and anchors, script syntax, category filters, sorting, each product/set page, and invalid-product states after relevant changes.
- Browser verification must cover overflow, touch targets, content parity, keyboard navigation, and console errors. Record any untested platforms honestly; static checks alone are not visual verification.
- Do not add tracking, forms, personal-data collection, accounts, payments, or order processing without an agreed implementation and applicable privacy/security review.
- Commit only after acceptance. Before committing, increment the root version record by 0.1; if none exists, create it with the initial alpha version. Do not commit incomplete work.

## Decisions required before selling

1. Confirm the workshop name, real story, portrait, and contact details.
2. Confirm the editorial product names and photo grouping; supply accurate specifications, prices, and availability. All 16 supplied images are represented in 15 listings: 31613 and 31617 are treated as two views of one necklace.
3. Choose a single ordering flow and its commerce service or backend. Browser-only code must not be trusted to process payments or manage orders.
4. Confirm seller details and conditions for payment, delivery, returns, care, and relevant allergy disclosures; add the applicable legal/privacy information.
5. Select the domain and HTTPS hosting, optimize and preferably self-host assets, and prepare sharing images and verified metadata.
6. Review product discoverability: browser-rendered product details are sufficient for this prototype; consider prerendered pages or an appropriate commerce platform before launch.
7. Complete real-device, accessibility, content, and end-to-end order testing before accepting orders or money.

## Photography-led catalog update

The current catalog contains 12 individual listings (7 earrings, 4 necklaces, 1 bracelet) and 3 sets. Source-to-product mapping is documented in README.md. Use assets/products/720px JPEG derivatives for cards and 1440px derivatives for detail views; full-image containment prevents cropping the jewelry or set components. The original Pictures/ files are the source of truth.
