module.exports = {
    title: '落叶纷飞',
    description: '强大自己是解决问题的唯一办法',
    serviceWorker: true,
    head: [
        ['link', { rel: 'icon', href: 'logo.jpg' }],
    ],
    themeConfig: {
        editLinks: true,
        docsDir: 'docs',
        smoothScroll: true,
        nav: [
            { text: '主页', link: '/' },
            {
                text: '了解更多',
                items: [
                    { text: 'java', link: '/zh/java/' },
                    { text: '数据库', link: '/zh/database/' },
                    { text: 'NodeJs', link: '/zh/node/' },
                    { text: '前端', link: '/zh/front/' }
                ]
            },
            { text: '问答', link: '/zh/faq/' },
            { text: '关于', link: '/zh/about/' }
        ],
        sidebar: {
            '/zh/guide/':getGuideSidebar('指南', '深入')
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    }
}

function getGuideSidebar (groupA, groupB) {
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'getting-started',
          'directory-structure',
          'basic-config',
          'assets',
          'markdown',
          'using-vue',
          'i18n',
          'deploy'
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'frontmatter',
          'permalinks',
          'markdown-slot',
          'global-computed'
        ]
      }
    ]
  }
  