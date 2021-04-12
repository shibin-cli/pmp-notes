module.exports = {
    base:'/pmp-notes/',
    dest:'./dist',
    title: 'PMP学习笔记',
    description: 'PMP学习笔记',
    themeConfig: {
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/shibin-cli/pmp-notes'
            },
        ],
        sidebar: [
            ['/1', '引论'],
        ]
    },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
  }