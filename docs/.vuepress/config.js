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

                ]
            }
        ]
    },
    plugins: {
        plugins: {
            '@vuepress/pwa': {
               serviceWorker: true,
               updatePopup: {
                 message: "New content is available.",
                 buttonText: "Refresh"
               }
             }
          }
    }
}