import{_ as e,o as n,c as t,a}from"./app.b62bfce5.js";const i={},o=a(`<h1 id="inm-labs-component-library" tabindex="-1"><a class="header-anchor" href="#inm-labs-component-library" aria-hidden="true">#</a> inm-labs-component-library</h1><p>This is mostly a library of components we use internally, so if you dont really want the whole package we also have the components as a standalone so you can pick only the one you need instead of the whole library</p><p>The full documentation can be found here : https://inm-web-labs.github.io/inm-labs-component-library/</p><h2 id="to-install" tabindex="-1"><a class="header-anchor" href="#to-install" aria-hidden="true">#</a> To Install</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save inm-labs-component-library
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have installed the package, in your entry file of the repository (main.js) if you are using it in a Vue CLI project. Write the import command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import ComponentLibrary from &#39;inm-labs-component-library&#39;

app.use(ComponentLibrary)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h2><p>Options allow you to customize how the input will format the amount as you type.</p><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td style="text-align:center;"><code>vue-format-amount-input</code></td><td style="text-align:center;">Input with format for amounts</td></tr></tbody></table><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2><ul><li>0.0.13 - updated blur function when no currency is provided</li><li>0.0.14 - added option to have negative amounts to vue-format-amount-input</li><li>0.0.15 - fixed bug when clearing negative value</li><li>0.0.16 - VueFormatAmountInput: changed maxValue logic and default value; To prevent Scientific notation on numbers value is now returned and used as a string</li><li>0.0.17 - fixed bug when changing currency and input had no content</li><li>0.0.18 - fixed variable used to compare maxValue and validation</li><li>0.0.19 - VueFormatAmountInput: Fixed logic behind removing currency from value; Removed console.logs</li><li>0.0.20 - VueFormatAmountInput: fixed logic when on clear of value, currency would be showed; fixed setSelectionRange to only be trigger if user is focus on input</li></ul>`,12),l=[o];function r(s,d){return n(),t("div",null,l)}var u=e(i,[["render",r],["__file","index.html.vue"]]);export{u as default};
