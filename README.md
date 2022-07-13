# inm-labs-component-library

This is mostly a library of components we use internally, so if you dont really want the whole package we also have
the components as a standalone so you can pick only the one you need instead of the whole library

The full documentation can be found here : https://inm-web-labs.github.io/inm-labs-component-library/

## To Install
```
npm install --save inm-labs-component-library
```
Once you have installed the package, in your entry file of the repository (main.js) if you are using it in a Vue CLI project. Write the import command

```
import ComponentLibrary from 'inm-labs-component-library'

app.use(ComponentLibrary)
```

## Components

Options allow you to customize how the input will format the amount as you type.

| Name | Description |
| :----------------: | :-----------:  |
| `vue-format-amount-input` | Input with format for amounts |

## Changelog

- 0.0.10 - update vue-format-amount-input component blurEvent
