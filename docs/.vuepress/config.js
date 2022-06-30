const { defaultTheme } = require('vuepress')

module.exports = {
    base: '/inm-labs-component-library/',
    theme: defaultTheme({
        home: '/',
        logo: 'https://www.inm.pt/media/1002/logo.svg',
        colorModeSwitch: false,
        colorMode: 'dark',
        repo: 'inm-web-labs/inm-labs-component-library',
        sidebar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Components',
                collapsable: true,
                children: [
                    '/components/vue-amount-format-input.md'
                ]
            }
        ],
        navbar: [
            {text: 'About us', link: 'https://www.inm.pt/'}
        ]
    })
}
