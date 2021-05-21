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
                text: 'PMBOK整理',
                link: '/pmbok/1'
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
                collapsable: false,
                title: '基础',
                children: [
                    ['/guide/', '开始'],
                    ['/guide/1', '引论'],
                    ['/guide/2', '运行环境'],
                    ['/guide/3', '项目经理的角色'],
                    ['/guide/4', '整合管理'],
                    ['/guide/5', '范围管理'],
                    ['/guide/6', '进度管理'],
                    ['/guide/7', '成本管理'],
                    ['/guide/8', '质量管理'],
                    ['/guide/9', '资源管理'],
                    ['/guide/10', '沟通管理'],
                    ['/guide/11', '风险管理'],
                    ['/guide/12', '采购管理'],
                    ['/guide/13', '相关方管理']
                ]
            },
            {
                path: '/pmbok/1',
                title: 'PMBOK整理',
                children: [
                    ['/pmbok/1', '引论'],
                    // ['/pmbok/1', '项目运行环境']
                    // ['/pmbok/3', '项目经理的角色']
                    ['/pmbok/4', '整合管理'],
                    ['/pmbok/5', '范围管理'],
                    ['/pmbok/6', '进度管理'],
                    ['/pmbok/7', '成本管理'],
                    ['/pmbok/8', '质量管理'],
                    ['/pmbok/9', '资源管理'],
                    ['/pmbok/10', '沟通管理'],
                    ['/pmbok/11', '风险管理'],
                    ['/pmbok/12', '采购管理'],
                    ['/pmbok/13', '相关方管理'],
                ]
            },
            {
                path: '/exercises/1',
                title: '练习题',
                children: [
                    ['/exercises/1', '引论'],
                    // ['/exercises/1', '项目运行环境']
                    // ['/exercises/3', '项目经理的角色']
                    ['/exercises/4', '整合管理'],
                    ['/exercises/5', '范围管理'],
                    ['/exercises/6', '进度管理'],
                    ['/exercises/7', '成本管理'],
                    ['/exercises/8', '质量管理'],
                    ['/exercises/9', '资源管理'],
                    ['/exercises/10', '沟通管理'],
                    ['/exercises/11', '风险管理'],
                    ['/exercises/12', '采购管理'],
                    ['/exercises/13', '相关方管理'],
                ]
            }
        ]
    },
    plugins: [
        [
            '@vuepress/pwa',
            {
                serviceWorker: true,
                updatePopup: {
                    '/': {
                        message: '新内容可用',
                        buttonText: '刷新'
                    }
                }
            }
        ]
    ]
}