## ☁️ The Axle Public Webpage.

### Getting started

install Gatsby CLI - [more info](https://www.gatsbyjs.org/tutorial/part-zero/)

```sh
npm install -g gatsby-cli
```

or

```sh
yarn global add gatsby-cli
```

install the starter locally:

```sh
gatsby new gatsby-starter-saas-marketing https://github.com/keegn/gatsby-starter-saas-marketing
```

install dependencies:

```sh
yarn install
```

start the development server:

```sh
gatsby develop
```

At the project root, compile your application for deployment:

```sh
gatsby build
```

Clean the cache to fix certain errors - run the clean command before starting the dev server:

```sh
gatsby clean
```

At the project root, serve the production build of your site:

```sh
gatsby serve
```

Deploy to Github Pages:

```sh
npm run deploy
```

### Styles

This starter uses [styled-components](https://www.styled-components.com/). The theme file contains the base styles `src/styles/theme.js` and the global styles file contains basic element styles and a style reset `src/styles/GlobalStyles.js`.

### Navigation

This starter uses [react-anchor-link-smooth-scroll](https://github.com/mauricevancooten/react-anchor-link-smooth-scroll#readme) and [react-scrollspy](https://github.com/makotot/react-scrollspy).
To link a navigation item to a section simply add an id and string value to a section parent element that corresponds to the same navigation string value in `navigation.js`