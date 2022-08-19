import{_ as a,r as i,o,c as d,b as e,d as l,e as t,a as r}from"./app.0eb12ffd.js";const s={},c=e("h1",{id:"vue-format-amount-input",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-format-amount-input","aria-hidden":"true"},"#"),t(" vue-format-amount-input")],-1),u=t("Inspired by "),h={href:"https://github.com/autoNumeric/autoNumeric/",target:"_blank",rel:"noopener noreferrer"},m=t("AutoNumeric"),p=t(", after using it for many years, decided to create my own amount format input for Vue3. Made this focused on my needs for my personal projects, but feel free to open issues for new behaviours or problems you found, I'll try my best to help you."),v=r(`<h2 id="to-install" tabindex="-1"><a class="header-anchor" href="#to-install" aria-hidden="true">#</a> To Install</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install --save vue-format-amount-input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Once you have installed the package, in your entry file of the repository (main.js) if you are using it in a Vue CLI project. Write the import command</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import AmountFormatInputInstall from &#39;vue-format-amount-input&#39;

app.use(AmountFormatInputInstall)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options-this-input-supports-and-it-s-default-values" tabindex="-1"><a class="header-anchor" href="#options-this-input-supports-and-it-s-default-values" aria-hidden="true">#</a> Options this input supports and it&#39;s default values:</h2><p>Options allow you to customize how the input will format the amount as you type.</p><table><thead><tr><th style="text-align:center;">Option</th><th style="text-align:center;">Description</th><th style="text-align:center;">Default Value</th></tr></thead><tbody><tr><td style="text-align:center;"><code>digitGroupSeparator</code></td><td style="text-align:center;">Thousands group separator</td><td style="text-align:center;"><code>null</code></td></tr><tr><td style="text-align:center;"><code>decimalChar</code></td><td style="text-align:center;">Decimal separator character. Allowed values: <code>.</code> <code>,</code> <code>\u066B</code></td><td style="text-align:center;"><code>.</code></td></tr><tr><td style="text-align:center;"><code>alwaysAllowDecimalCharacter</code></td><td style="text-align:center;">Allows/Disables decimals in amounts</td><td style="text-align:center;"><code>true</code></td></tr><tr><td style="text-align:center;"><code>allowNegativeValues</code></td><td style="text-align:center;">Allows/Disables negative amounts</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>showCurrencyOnFocus</code></td><td style="text-align:center;">Defines if currency should be shown on input focus</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>showCurrencyOnHover</code></td><td style="text-align:center;">Defines if currency should be shown on input hover</td><td style="text-align:center;"><code>false</code></td></tr><tr><td style="text-align:center;"><code>currencySymbol</code></td><td style="text-align:center;">Defines currency symbol to display</td><td style="text-align:center;"><code>null</code></td></tr><tr><td style="text-align:center;"><code>currencySymbolPlacement</code></td><td style="text-align:center;">Defines where currencySymbol will be displayed. Possible values <code>p</code> for prefix and <code>s</code> for suffix</td><td style="text-align:center;"><code>p</code></td></tr><tr><td style="text-align:center;"><code>maxValue</code></td><td style="text-align:center;">The maximum value that can be entered</td><td style="text-align:center;"><code>99999999999999.98</code></td></tr></tbody></table><p>Our Input will receive these options as an Object in prop <code>options</code> as the example below:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>options = {
	digitGroupSeparator: &#39;&#39;,
	decimalChar: &#39;.&#39;,
	alwaysAllowDecimalCharacter: true,
	allowNegativeValues: false,
	showCurrencyOnFocus: false,
	showCurrencyOnHover: false,
	currencySymbolPlacement: &#39;p&#39;,
	currencySymbol: &#39;&#39;,
	maxValue: 99999999999999.98
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="todo-list" tabindex="-1"><a class="header-anchor" href="#todo-list" aria-hidden="true">#</a> TODO List</h2><h4 id="options-to-be-added-to-input" tabindex="-1"><a class="header-anchor" href="#options-to-be-added-to-input" aria-hidden="true">#</a> Options to be added to input:</h4><ul><li>emptyInputBehavior</li><li>decimalsLengthAllowed</li></ul><h2 id="changelog" tabindex="-1"><a class="header-anchor" href="#changelog" aria-hidden="true">#</a> Changelog</h2><ul><li>0.1.13 - update vue-format-amount-input component blurEvent</li><li>0.1.14 - build fixing</li><li>0.1.15 - fixed behaviour of hover/focus when no currency is provided</li><li>0.1.16 - fixed currency length validator when no currency is provided</li><li>0.1.17 - updated blur function when no currency is provided</li><li>0.1.18 - added option to have negative amounts</li></ul>`,14);function y(f,g){const n=i("ExternalLinkIcon");return o(),d("div",null,[c,e("p",null,[u,e("a",h,[m,l(n)]),p]),v])}var b=a(s,[["render",y],["__file","vue-format-amount-input.html.vue"]]);export{b as default};
