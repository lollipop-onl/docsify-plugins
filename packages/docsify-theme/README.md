<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Theme</h1>
<p align="center">
  <code>@lollipop-onl/docsify-theme</code>
</p>

[![](https://data.jsdelivr.com/v1/package/npm/@lollipop-onl/docsify-theme/badge)](https://www.jsdelivr.com/package/npm/@lollipop-onl/docsify-theme)
[![npm version](https://badge.fury.io/js/@lollipop-onl%2Fdocsify-theme.svg)](https://badge.fury.io/js/@lollipop-onl%2Fdocsify-theme)
[![License](https://img.shields.io/npm/l/@lollipop-onl/docsify-theme)](https://github.com/lollipop-onl/docsify-plugins/blob/main/LICENSE)

Custom docsify theme by [@lollipop-onl](https://github.com/lollipop-onl).

## Setup

Requirement:
[docsify](https://docsify.js.org/)
[docsify-themeable](https://jhildenbiddle.github.io/docsify-themeable/)

```html
<head>
  <!-- required: docsify-themeable -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css"
  />

  <!-- optional: Mermaid -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css"
  />

  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/@lollipop-onl/docsify-theme/simple.css"
  />
</head>
```

## Custom Font

```html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css"
/>
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css"
/>

<!-- load webfont (e.g. Google Fonts) -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=IBM+Plex+Sans+JP:wght@400;700&display=swap"
  rel="stylesheet"
/>

<!-- override variables -->
<style>
  :root {
    --base-font-family: "IBM Plex Sans JP", sans-serif;
    --code-font-family: "IBM Plex Mono", monospace;
  }
</style>

<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/@lollipop-onl/docsify-theme/simple.css"
/>
```

## License

MIT
