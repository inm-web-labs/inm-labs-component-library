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

- 0.0.13 - updated blur function when no currency is provided
- 0.0.14 - added option to have negative amounts to vue-format-amount-input
- 0.0.15 - fixed bug when clearing negative value
- 0.0.16 - VueFormatAmountInput: changed maxValue logic and default value; To prevent Scientific notation on numbers value is now returned and used as a string
- 0.0.17 - fixed bug when changing currency and input had no content
- 0.0.18 - fixed variable used to compare maxValue and validation
