// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Backlot',
  tagline: 'Open Source Tagline',
  favicon: 'img/favicon.ico',

  // Production URL
  url: 'https://backlot.city',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'kchaney1508',
  projectName: 'backlot.city',
  deploymentBranch: 'prod',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: 'https://www.discord.gg/KGdp7X3f63',
            from: '/discord',
          },
        ],
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          breadcrumbs: false,
          sidebarCollapsible: false,
          editUrl:
            'https://github.com/kchaney1508/backlot.city/tree/prod/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kchaney1508/backlot.city/tree/prod/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Backlot',
        logo: {
          alt: 'Backlot Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://cfx.re/join/y79k5y',
            label: ' ',
            position: 'right',
            className: "header-server-link",
          },
          {
            href: 'https://www.discord.gg/KGdp7X3f63',
            label: ' ',
            position: 'right',
            className: "header-discord-link",
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Piglins Large Banner',
          src: 'img/backlot-footer-banner.png',
        },
        copyright: `Design created by <a href="https://github.com/kchaney1508" target="_blank" rel="noopener noreferrer"><b>KC1508</b></a> as <a href="https://github.com/kchaney1508/backlot.city" target="_blank" rel="noopener noreferrer"><b>Open Source</b></a>.<br>We're not affiliated with or endorsed by Rockstar Games.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
