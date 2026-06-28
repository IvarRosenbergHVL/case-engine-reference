// @ts-check

const config = {
  title: 'Case Engine Reference',
  tagline: 'Reference specification for document-based investigation cases',
  favicon: 'img/favicon.ico',
  url: 'https://ivarrosenberghvl.github.io',
  baseUrl: '/case-engine-reference/',
  organizationName: 'IvarRosenbergHVL',
  projectName: 'case-engine-reference',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          exclude: [
            '.github/**',
            '.obsidian/**',
            'node_modules/**',
            'dist/**',
            'build/**',
            'site/**',
            'notes.txt'
          ]
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  markdown: {
    mermaid: true
  },
  themes: ['@docusaurus/theme-mermaid'],
  themeConfig: {
    navbar: {
      title: 'CER',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cerSidebar',
          position: 'left',
          label: 'Specification'
        },
        {
          href: 'https://github.com/IvarRosenbergHVL/case-engine-reference',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Case Engine Reference.`
    }
  }
};

module.exports = config;
