const { defaultTheme } = require('vuepress')

module.exports = {
    theme: defaultTheme({
        home: '/',
        sidebar: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'Components',
                collapsable: false,
                children: [
                    '/components/teste.md',
                    '/components/amount-format.md'
                ]
            }
        ],
        navbar: [
            {text: 'badjoras', link: 'https://google.com'}
        ]
    })
}
