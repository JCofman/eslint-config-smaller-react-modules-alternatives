# ESLint-config-smaller-react-modules-alternative

React smaller modules alternative recommendation specific linting rules for ESLint _only based on bundle size_.
⚠️ _Be aware that some alternatives are not as feature rich as others but in many cases are good or equivalent alternatives to larger modules_ ⚠️

There are other aspects like runtime performance which are not necessary are taken into account.

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
or
$ yarn eslint --dev
```

If you installed `ESLint` globally, you have to install React plugin globally too. Otherwise, install it locally.

```sh
$ npm eslint-config-smaller-react-modules-alternative --save-dev
or
$ yarn eslint-config-smaller-react-modules-alternative --dev
```

# Configuration

Use it

```json
  "extends": [
    "eslint-config-smaller-react-module-alternatives",
  ]
```

See [ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information about extending configuration files.

# License

ESLint-config-smaller-react-modules-alternative is licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
