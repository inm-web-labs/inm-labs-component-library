import{_ as n,r as a,o as l,c as d,b as e,d as o,e as t,a as r}from"./app.40059420.js";const s={},c=e("h1",{id:"vue-format-amount-input",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-format-amount-input","aria-hidden":"true"},"#"),t(" vue-format-amount-input")],-1),u=t("Inspired by "),h={href:"https://github.com/autoNumeric/autoNumeric/",target:"_blank",rel:"noopener noreferrer"},m=t("AutoNumeric"),p=t(", after using it for many years, decided to create my own amount format input for Vue3. Made this focused on my needs for my personal projects, but feel free to open issues for new behaviours or problems you found, I'll try my best to help you."),v=r(`<h2 id="to-install" tabindex="-1"><a class="header-anchor" href="#to-install" aria-hidden="true">#</a> To Install</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save vue-format-amount-input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have installed the package, in your entry file of the repository (main.js) if you are using it in a Vue CLI project. Write the import command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import AmountFormatInputInstall from &#39;vue-format-amount-input&#39;

app.use(AmountFormatInputInstall)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options-this-input-supports-and-it-s-default-values" tabindex="-1"><a class="header-anchor" href="#options-this-input-supports-and-it-s-default-values" aria-hidden="true">#</a> Options this input supports and it&#39;s default values:</h2><p>Options allow you to customize how the input will format the amount as you type.</p><table><thead><tr><th style="text-align:center;">Option</th><th style="text-align:center;">Description</th><th style="text-align:center;">Default Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>digitGroupSeparator</code></td><td style="text-align:center;">Thousands group separator</td><td style="text-align:center;"><code>null</code></td></tr><tr><td style="text-align:center;"><code>decimalChar</code></td><td style="text-align:center;">Decimal separator character. Allowed values: <code>.</code> <code>,</code> <code>\u066B</code></td><td style="text-align:center;"><code>.</code></td></tr><tr><td style="text-align:center;"><code>alwaysAllowDecimalCharacter</code></td><td style="text-align:center;">Allows/Disables decimals in amounts</td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;"><code>allowNegativeValues</code></td><td style="text-align:center;">Allows/Disables negative amounts</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>showCurrencyOnFocus</code></td><td style="text-align:center;">Defines if currency should be shown on input focus</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>showCurrencyOnHover</code></td><td style="text-align:center;">Defines if currency should be shown on input hover</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>currencySymbol</code></td><td style="text-align:center;">Defines currency symbol to display</td><td style="text-align:center;"><code>null</code></td></tr><tr><td style="text-align:center;"><code>currencySymbolPlacement</code></td><td style="text-align:center;">Defines where currencySymbol will be displayed. Possible values <code>p</code> for prefix and <code>s</code> for suffix</td><td style="text-align:center;"><code>p</code></td></tr><tr><td style="text-align:center;"><code>maxValue</code></td><td style="text-align:center;">The maximum value that can be entered</td><td style="text-align:center;"><code>999999999999999999999999.99</code></td></tr><tr><td style="text-align:center;"><code>isIOS</code></td><td style="text-align:center;">Boolean to set inputMode when used on mobile apps/browsers</td><td style="text-align:center;"><code>false</code></td></tr></tbody></table><p>Our Input will receive these options as an Object in prop <code>options</code> as the example below:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>options = {
	digitGroupSeparator: &#39;&#39;,
	decimalChar: &#39;.&#39;,
	alwaysAllowDecimalCharacter: true,
	allowNegativeValues: false,
	showCurrencyOnFocus: false,
	showCurrencyOnHover: false,
	currencySymbolPlacement: &#39;p&#39;,
	currencySymbol: &#39;&#39;,
	maxValue: 99999999999999999999999.99
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="todo-list" tabindex="-1"><a class="header-anchor" href="#todo-list" aria-hidden="true">#</a> TODO List</h2><h4 id="options-to-be-added-to-input" tabindex="-1"><a class="header-anchor" href="#options-to-be-added-to-input" aria-hidden="true">#</a> Options to be added to input:</h4><ul><li>emptyInputBehavior</li><li>decimalsLengthAllowed</li></ul><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2><ul><li>0.1.13 - update vue-format-amount-input component blurEvent</li><li>0.1.14 - build fixing</li><li>0.1.15 - fixed behaviour of hover/focus when no currency is provided</li><li>0.1.16 - fixed currency length validator when no currency is provided</li><li>0.1.17 - updated blur function when no currency is provided</li><li>0.1.18 - added option to have negative amounts</li><li>0.1.19 - fixed bug when clearing negative value</li><li>0.2.00 - changed maxValue logic and default value; To prevent Scientific notation on numbers value is now returned and used as a string</li><li>0.2.01 - fixed bug when changing currency and input had no content</li><li>0.2.02 - fixed variable used to compare maxValue and validation</li><li>0.2.03 - fixed logic behind removing currency from value</li><li>0.2.04 - removed console.logs</li><li>0.2.05 - fixed logic when on clear of value, currency would be showed; fixed setSelectionRange to only be trigger if user is focus on input</li><li>0.2.06 - Fixed maxValue validations and handling; Fixing replacing numbers</li><li>0.2.07 - Fixed maxValue validations for decimals and numbers with currencies</li><li>0.2.08 - Fixed maxValue validation when number has same length; fixed validation when swapping amounts</li><li>0.2.09 - Added watch to handleMaxValue change on input lifetime</li><li>0.2.10 - Added logic on initial value setup, so decimals (when allowed) are showed on mounted</li><li>0.2.11 - Fixed validation for maxValue on initial render with value</li><li>0.2.12 - Added missing validation before trying to stringify value</li><li>0.2.13 - Added missing validations for value on watch</li><li>0.2.14 - Fixed blur logic when value is empty</li><li>0.2.15 - Added inputMode to input, and option to help define inputMode specifc for iOS apps/browsers</li><li>0.2.16 - Added logic for pasted values when they fall out of maxValue</li><li>0.2.17 - Fixed validation for decimalsChars; Fixed maxValue logic when having decimals</li><li>0.2.18 - Fixed formating value before emiting it when its value is negative</li></ul>`,14);function g(f,x){const i=a("ExternalLinkIcon");return l(),d("div",null,[c,e("p",null,[u,e("a",h,[m,o(i)]),p]),v])}var b=n(s,[["render",g],["__file","vue-format-amount-input.html.vue"]]);export{b as default};
