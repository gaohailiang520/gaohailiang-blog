import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "高海亮的个人主页",
  description: "论文笔记与技术收获",
  appearance: 'light',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      { text: '论文笔记', link: '/papers/' },
      { text: '技术收获', link: '/tech/' },
    ],

    // 侧边栏
    sidebar: {
      '/papers/': [
        {
          text: '论文笔记',
          items: [
            { text: 'OSDI', link: '/papers/osdi' },
            { text: 'SOSP', link: '/papers/sosp' },
            { text: 'NSDI', link: '/papers/nsdi' },
            { text: 'EuroSys', link: '/papers/eurosys' },
          ]
        }
      ],
      '/tech/': [
        {
          text: '技术收获',
          items: [
            { text: '驱动学习', link: '/tech/driver' },
            { text: '底层知识', link: '/tech/low-level' },
          ]
        },
        {
          text: '读书笔记',
          items: [
            { text: '《原则》', link: '/tech/principles' },
            { text: '《高效能人士的七个习惯》', link: '/tech/seven-habits' },
            { text: '《程序员的自我修养》', link: '/tech/programmer-self-cultivation' },
            { text: '《纳瓦尔宝典》', link: '/tech/naval-almanack' },
            { text: '《奔跑吧Linux内核》', link: '/tech/奔跑吧linux内核' },
          ]
        }
      ],
    },

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-2026 高海亮'
    },

    // 搜索
    search: {
      provider: 'local'
    }
  },

  // GitHub Pages 配置
  base: '/gaohailiang-blog/',
  lastUpdated: true,

  // 忽略死链接检查（因为还没创建所有文件）
  ignoreDeadLinks: true,
})