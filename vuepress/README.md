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
- 0.0.19 - VueFormatAmountInput: Fixed logic behind removing currency from value; Removed console.logs
- 0.0.20 - VueFormatAmountInput: fixed logic when on clear of value, currency would be showed; fixed setSelectionRange to only be trigger if user is focus on input
- 0.0.21 - VueFormatAmountInput: Fixed maxValue validations and handling; Fixing replacing numbers
- 0.0.22 - VueFormatAmountInput: Fixed maxValue validations for decimals and numbers with currencies
- 0.0.23 - VueFormatAmountInput: Fixed maxValue validation when number has same length; fixed validation when swapping amounts
- 0.0.24 - VueFormatAmountInput: Added watch to handleMaxValue change on input lifetime
- 0.0.25 - VueFormatAmountInput: Added logic on initial value setup, so decimals (when allowed) are showed on mounted
- 0.0.26 - VueFormatAmountInput: Fixed validation for maxValue on initial render with value
- 0.0.27 - VueFormatAmountInput: Added missing validation before trying to stringify value
- 0.0.28 - VueFormatAmountInput: Added missing validations for value on watch
- 0.0.29 - VueFormatAmountInput: Fixed blur logic when value is empty
- 0.0.30 - VueFormatAmountInput: Added inputMode to input, and option to help define inputMode specifc for iOS apps/browsers
