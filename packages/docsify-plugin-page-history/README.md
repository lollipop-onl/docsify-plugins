<p align="center">
  <img src="docsify.svg" alt="Docsify Logo" height="128">
</p>
<h1 align="center">Docsify Plugins</h1>
<h3 align="center">Page History</h3>

[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-plugin-page-history/badge)](https://www.jsdelivr.com/package/npm/docsify-plugin-page-history)
[![npm version](https://badge.fury.io/js/docsify-plugin-page-history.svg)](https://badge.fury.io/js/docsify-plugin-page-history)
[![License](https://img.shields.io/npm/l/docsify-plugin-page-history)](https://github.com/lollipop-onl/docsify-plugins/blob/main/LICENSE)

## Installation

This plugin requires plugins/front-matter to function properly.

```html
<script>
  window.$docsify = {};
</script>
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<script src="//unpkg.com/docsify/lib/plugins/front-matter.min.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-plugin-page-history"></script>
```

## Usage

Add `history` field to front matter.

```md
---
history:
  - date: 2023-10-15
    message: |
      Add **awesome section**.
  - date: 2023-10-10
    message: Initial release
---

## Page Title

...
```

> **Note**
> Known Issue: cannot use list in message.

## All history

Add `@[page-history]` to your markdown file. Collection of all history will be inserted.

```md
@[page-history]
```

## License

MIT
