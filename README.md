# Koruny

Mini PWA: převod **ISK → CZK** v reálném čase (a menší opačný převod CZK → ISK).

- Kurz z ECB přes [frankfurter.dev](https://frankfurter.dev); poslední známý kurz se ukládá do `localStorage`, takže appka funguje i offline.
- Service worker cachuje app shell → jde nainstalovat na plochu (iOS: Safari → Sdílet → Přidat na plochu; Android: Chrome → Instalovat aplikaci).
- Bez buildu a bez závislostí — `index.html`, `sw.js`, `manifest.json`.

## Lokálně
```
python3 -m http.server 8000
```

## Deploy
GitHub Pages z branche `main` (root).
