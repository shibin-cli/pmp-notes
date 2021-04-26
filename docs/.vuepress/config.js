module.exports = {
    base: '/pmp-notes/',
    dest: './dist',
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
            ['/2', '项目运行环境'],
            ['/3', '项目经理的角色'],
            ['/4', '项目整合管理'],
            ['/5', '项目范围管理'],
            ['/6', '项目进度管理'],
        ]
    },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }]
}