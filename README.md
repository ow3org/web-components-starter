# Web Component Library Starter Kit

"Why create components for a specific framework when it can be written to be understood by all — including browsers?"

## 👋🏼 Introduction

Before you get started, it's is important to understand what a Web Component is. Think of it as a (custom) HTML element. That being said, this is an opinionated starter kit to help you expedite the development of your component library.

### 👩🏽‍💻 Tech Stack

- TypeScript
- Vue - write your Web Components the same way you would write your SFCs
- Vitest - a fast A Vite-native test framework
- ESLint & Prettier - lint & format your code efficiently without the mental overhead
- GitHub Actions - to automatically commit code style fixes & tag releases
- Vitebook - an OS Storybook alternative

## 💡 Get Started

It's very easy to get started, especially if you have designed/developed Vue Single File Components before. Check out the index.html and how the `HelloWorld`-component is defined within this repo. Feel free to create any component.

The `package.json` contains some useful snippets but ones you need to be aware of are:

```bash
yarn dev # starts the local server at http://localhost:3000/ & watches for changes
yarn build # builds the library
```

## 🖥️ Browsers

This starter kit is built for the modern web and avoids bloated polyfills and outdated environments as much as possible. Currently, it supports all browsers that fully implement the [Custom Elements V1][caniuse-custom-el-v1].

- Edge 79+
- Firefox 63+
- Chrome 67+
- Safari 13.1+
- Opera 64+
- iOS Safari 13.7+
- Android Browser 81+
- Opera Mobile 59+
- Chrome for Android 88+

[caniuse-custom-el-v1]: https://caniuse.com/custom-elementsv1

## 🧪 Testing

```bash
yarn test
```

## 📈 Changelog

Please see our [releases](https://github.com/meemalabs/web-components-library-starter/releases) page for more information on what has changed recently.

## 💪🏼 Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) for details.

## 🏝 Community

For help, discussion about best practices, or any other conversation that would benefit from being searchable:

[Discussions on GitHub](https://github.com/meemalabs/web-components-library-starter/discussions)

For casual chit-chat with others using this package:

[Join the Meema Discord Server](https://discord.meema.io)

## 📄 License

The MIT License (MIT). Please see [LICENSE](LICENSE.md) for more information.

Made with ❤️ by Meema, Inc.
