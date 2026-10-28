# Color Scheme Generator

A small JavaScript app for generating five-color palettes with [The Color API](https://www.thecolorapi.com/). Choose a starting color and a scheme type, then select **Get color scheme** to see the result. Click a generated hex code to copy it to your clipboard.

## What I learned

- Using HTML color inputs, select menus, and buttons to collect user choices.
- Using `fetch()` and promises to request and read JSON data from an API.
- Building an API URL with template literals and query parameters.
- Using `map()` and `join()` to turn an array of colors into HTML.
- Updating the page with `innerHTML` and handling clicks on dynamically created buttons with event delegation.
- Copying text with the Clipboard API.
- Using CSS Flexbox to center the app and arrange controls and color panels.
- Styling a dark interface and adding a Google Font.

## Run locally

Install Node.js and npm, then run:

```bash
npm install
npm start
```

Open the local URL shown by Vite. Generating a scheme requires an internet connection; copying works on localhost or another secure context. The initial sample palette is displayed before a scheme is generated, and its hex codes become copyable after generating a scheme.

This project was built as part of the [Scrimba Fullstack Developer Path](https://scrimba.com/fullstack-path-c0fullstack).
