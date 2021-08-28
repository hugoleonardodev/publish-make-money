# Make Money

Real time application to track stocks on the New York Stock Exchange

- Database from [IEX API](https://cloud.iexapis.com/)

This applications is configured with:

- [Typescript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Next](https://nextjs.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- Components and styles from [material-ui](https://material-ui.com/) and [styled-components](https://styled-components.com/) for customize Carousels
- Carousels from [react-elastic-carousel](https://sag1v.github.io/react-elastic-carousel/)
- Chart [recharts](https://recharts.org/en-US/)

More details on devDependencies check package.json file.

# How to use

- Install - install the application modules

```bash
  yarn install
```

- Analyze - analyzes both server and browser bundles

```bash
  yarn run analyze
```

- Analyze Browser - analyzes browser bundles

```bash
  yarn run analyze:browser
```

- Analyze Server - analyzes server bundles

```bash
  yarn run analyze:server
```

- Build - builds the application with next build

```bash
  yarn build
```

- Dev - runs the application with next dev on local environment

```bash
  yarn dev
```

- Format - prettier formater for code

```bash
  yarn run format
```

- Lint - eslint check linter

```bash
  yarn run lint
```

- Start - next start

```bash
  yarn start
```

- Type Check - typescript check types

```bash
  yarn run type:check
```

- Test - tests with jest

```bash
  yarn test
```

- Test All - linter, type checking, and jest tests

```bash
  yarn run test-all
```
