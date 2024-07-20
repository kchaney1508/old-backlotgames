// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Backlot",
  tagline: "Roleplay-Focused Gaming Community in GTAV",
  favicon: "img/favicon.ico",

  // Production URL
  url: "https://backlotgames.com",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "backlotgames",
  projectName: "backlotgames.com",
  deploymentBranch: "prod",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "https://www.discord.gg/KGdp7X3f63",
            from: "/discord",
          },
          {
            to: "https://github.com/backlotgames/niko",
            from: "/niko",
          },
          {
            to: "/docs/portal",
            from: "/docs",
          },
          {
            to: "https://forum.backlotgames.com/",
            from: "/forum",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
          sidebarCollapsible: false,
          editUrl: "https://github.com/backlotgames/backlotgames.com/tree/prod/",
        },
        blog: {
          path: "updates",
          routeBasePath: "updates",
          blogTitle: "Updates",
          blogDescription: "Updates",
          showReadingTime: false,
          editUrl: "https://github.com/backlotgames/backlotgames.com/tree/prod/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: "en",
        indexPages: true,
        blogDir: "updates",
        searchBarShortcut: false,
        blogRouteBasePath: "/updates",
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'content <a target="_blank" rel="noopener noreferrer" href="#">example</a>',
      //   backgroundColor: '#FF5555',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        { name: "keywords", content: "five, backlot, roleplay" },
        {
          name: "og:description",
          content: "Roleplay-Focused Gaming Community in GTAV",
        },
      ],
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      image: "img/social-card.png",
      navbar: {
        logo: {
          alt: 'Site Logo',
          src: 'img/navbar.png',
        },
        items: [
          {
            href: "https://forum.backlotgames.com/",
            position: "left",
            label: "Forum/Home",
            target: '_self',
          },
          { to: "/updates", label: "Updates", position: "left" },
          { to: "/rules", label: "Rules", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://discord.gg/KGdp7X3f63",
            position: "right",
            className: "header-discord-link",
          },
          {
            href: "https://cfx.re/join/y79k5y",
            position: "right",
            className: "header-server-link",
          },
          {
            to: "/legal",
            position: "right",
            className: "header-legal-link",
          },
          {
            type: "search",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Backlot Footer Banner",
          src: "img/backlot-footer-banner.png",
        },
        copyright: `Not affiliated with Rockstar Games.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

export default config;
