module.exports = {
    base: '/pmp-notes/',
    dest: './dist',
    title: 'PMP学习笔记',
    description: 'PMP学习笔记',
    themeConfig: {
        logo: '/icon.png',
        nav: [{
                text: '首页',
                link: '/'
            },
            {
                text: '基础',
                link: '/guide/'
            },
            {
                text: '练习题',
                link: '/exercises/1'
            },
            {
                text: 'Github',
                link: 'https://github.com/shibin-cli/pmp-notes'
            },
        ],
        sidebar: [{
                path: '/guide/',
                collapsable:false,
                title: '基础',
                children: [
                    ['/guide/','开始'],
                    ['/guide/1', '引论'],
                    ['/guide/2', '项目运行环境'],
                    ['/guide/3', '项目经理的角色'],
                    ['/guide/4', '项目整合管理'],
                    ['/guide/5', '项目范围管理'],
                    ['/guide/6', '项目进度管理']
                ]
            },
            {
                path: '/exercises/1',
                title: '练习题',
                children: [
                    ['/exercises/1', '引论'],
                    // ['/exercises/1', '项目运行环境']
                    // ['/exercises/3', '项目经理的角色']
                    ['/exercises/4', '项目整合管理'],
                    ['/exercises/5', '项目范围管理']
                ]
            }
        ]
    },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }]
}