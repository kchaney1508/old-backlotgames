// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Backlot",
  tagline: "Open Source Tagline",
  favicon: "img/favicon.ico",

  // Production URL
  url: "https://backlot.city",
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "kchaney1508",
  projectName: "backlot.city",
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
            to: "https://ko-fi.com/backlotcity",
            from: "/donate",
          },
          {
            to: "https://ko-fi.com/backlotcity",
            from: "/support",
          },
          {
            to: "https://www.youtube.com/watch?v=WJy6ESZsu48",
            from: "/niko",
          },
          {
            to: "/docs/intro",
            from: "/docs",
          },
          {
            to: "/team",
            from: "/staff",
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
          editUrl: "https://github.com/kchaney1508/backlot.city/tree/prod/",
        },
        blog: {
          path: "updates",
          routeBasePath: "updates",
          blogTitle: "Updates",
          blogDescription: "Updates",
          showReadingTime: false,
          editUrl: "https://github.com/kchaney1508/backlot.city/tree/prod/",
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
          content: "Open world roleplay community in GTAV.",
        },
      ],
      docs: {
        sidebar: {
          hideable: false,
        },
      },
      image: "img/social-card.png",
      navbar: {
        title: "Backlot",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs Portal",
          },
          { to: "/updates", label: "Updates", position: "left" },
          { to: "/rules", label: "Rules", position: "left" },
          {
            to: "/faq",
            position: "right",
            className: "header-faq-link",
          },
          {
            to: "/team",
            position: "right",
            className: "header-team-link",
          },
          {
            href: "https://ko-fi.com/backlotcity",
            position: "right",
            className: "header-kofi-link",
          },
          {
            href: "https://www.discord.gg/KGdp7X3f63",
            position: "right",
            className: "header-discord-link",
          },
          {
            href: "https://cfx.re/join/y79k5y",
            position: "right",
            className: "header-server-link",
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
          alt: "Piglins Large Banner",
          src: "img/backlot-footer-banner.png",
        },
        copyright: `Design created by <a href="https://github.com/kchaney1508" target="_blank" rel="noopener noreferrer"><b>KC1508</b></a> as <a href="https://github.com/kchaney1508/backlot.city" target="_blank" rel="noopener noreferrer"><b>Open Source</b></a>.<br>We're not affiliated with or endorsed by Rockstar Games.`,
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
