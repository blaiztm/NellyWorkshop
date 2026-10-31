# Мастерская Нелли

Russian-language, showcase-first prototype for a handmade jewelry workshop. The visual direction uses ivory, blush, and sage. No framework, package installation, build step, or backend is required.

## Preview

Open [index.html](index.html) in a browser. Navigation, catalog filters, sorting, and product pages also work when opened directly from disk. Alternatively, use your editor’s static-site preview server.

An internet connection is needed for Google Fonts and Unsplash photographs. System fonts remain available if the font service cannot load. Photography is illustrative and is not a representation of actual workshop inventory.

## Structure

- [index.html](index.html): introduction, occasion-based inspiration, maker story, and choosing guidance; no product listings.
- [catalog.html](catalog.html): category filters and price sorting.
- [product.html](product.html): shared detail-page template; each sample piece or set has its own link, selected by its identifier.
- [app.js](app.js): six sample products, prices, descriptions, specifications, and rendering behavior. Edit the catalog here to replace sample content.
- [styles.css](styles.css): shared responsive design, typography, colors, and reduced-motion support.
- [description.md](description.md): complete site structure, mandatory mobile/accessibility requirements, customer journey, and working rules.

The single browsing path is homepage → catalog → product or set. The header’s «Каталог» entry is the forward route into the only product grid; breadcrumbs provide back-navigation. There are no homepage listings or related-product grids.

All pages share responsive layouts, with readable mobile copy, 44px-high primary controls, fluid headings, and single-column catalog cards on narrow phones. See the required viewport and device checks in [description.md](description.md).

## Verification

Chromium checks covered all three page types at 320, 375, 390, 768, 1024, and 1440px: no horizontal overflow, primary controls at least 44px high, and all six sample items retained on mobile. Browsing checks covered filters, both price-sort directions, all product/set pages, care disclosures, invalid links, direct-file preview, and absence of JavaScript exceptions.

External assets were blocked during these checks to verify fallback layouts independently of third-party availability. Loaded-photo visual review, 200% browser zoom, and real iOS Safari / Android Chrome checks remain required before launch. No testing dependency is required by the site; browser tooling was installed separately in a temporary directory.

## Before public launch

- Confirm the workshop name and replace the sample maker biography with the real story and portrait.
- Replace every stock photograph and sample specification with verified product photos, materials, dimensions, prices, availability, and any relevant allergy information. Sets need accurate photos of all included pieces.
- Decide how customers contact the workshop and place orders. There is deliberately no checkout, payment collection, contact form, or simulated order confirmation in this prototype.
- Confirm delivery, payment, return, seller-information, and applicable privacy requirements before enabling sales.
- Choose a domain and static hosting with HTTPS. Add actual social-sharing imagery and production metadata. Search indexing of individual products should be reviewed before launch: this prototype renders their content in the browser; prerendered product pages or a commerce platform may be preferable for the production catalog.
- Test with actual content on mobile devices. Optimize and preferably host the approved photographs and fonts locally instead of relying on external services.

No analytics, cookies, customer accounts, or collection of customer data have been added. This is a visual and browsing foundation, not a production commerce system.
