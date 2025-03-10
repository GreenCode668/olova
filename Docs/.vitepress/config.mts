import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
  title: "Olova",
  description: "Olova A smooth, minimal JavaScript framework",
  appearance: "dark", // Changed from "force-dark" to "dark"
  outDir: ".vitepress/dist",
  cacheDir: ".vitepress/.vite",

  themeConfig: {
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Nazmul Hossain",
    },
    logo: "/olova.png",

    nav: [
      {
        text: `version`,
        items: [
          {
            text: "v2.0.0 (Current)",
            link: "/",
          },
          {
            text: "v1.9.0",
            link: "https://olovajs-git-master-seraprogrammers-projects.vercel.app/",
          },
          {
            text: "v0.9.9",
            link: "https://deshijs.vercel.app/",
          },
        ],
      },
      { text: "Home", link: "/" },
      { text: "Guide", link: "/learn" },
    ],

    sidebar: {
      "/": [
        {
          text: "🚀 Quick Start",
          collapsed: false,
          items: [{ text: "🚀 Learn Olova", link: "/learn" }],
        },
        {
          text: "🛠️ Hooks Guide",
          collapsed: false,
          items: [
            { text: "🔄 setSignal hook", link: "/hooks/setSignal" },
            { text: "⚡ setEffect hook", link: "/hooks/setEffect" },
            { text: "📌 setRef hook", link: "/hooks/setRef" },
            { text: "🚀 setMemo hook", link: "/hooks/setMemo" },
            { text: "🧩 Fragment hook", link: "/hooks/Fragment" },
            { text: "🔄 Render hook", link: "/hooks/Render" },
            { text: "🎨 Components hook", link: "/hooks/Components" },
            { text: "🔄 LifeCycle hook", link: "/hooks/LifeCycle" },
            { text: "🧱 HTML hook", link: "/hooks/HTML" },
          ],
        },
        {
          text: "without build",
          collapsed: false,
          items: [{ text: "🎨 HTML", link: "/hooks/NoBuild" }],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/olovajs/olova" },
      { icon: "discord", link: "https://discord.gg/ZUcKggZhga" },
      { icon: "x", link: "https://x.com/olova_js" },
      { icon: "facebook", link: "https://www.facebook.com/olovajs/" },
    ],
  },

  head: [
    // Favicon
    ["link", { rel: "icon", type: "image/x-icon", href: "/olova.png" }],

    // Google verification
    [
      "meta",
      {
        name: "google-site-verification",
        content: "awzIlCvmcfmInAfL5Y7mwoKBQr3NqHx0431qWKPddZs",
      },
    ],

    // Basic meta
    [
      "meta",
      {
        name: "description",
        content:
          "Discover Olova, the first JavaScript framework from Bangladesh by Nazmul Hossain. Built for blazing-fast performance, only 5KB in size, and supports JSX for modern web development.",
      },
    ],
    ["meta", { name: "author", content: "Nazmul Hossain" }],
    [
      "meta",
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    ],
    ["meta", { name: "robots", content: "index, follow" }],
    ["meta", { name: "theme-color", content: "#00dc82" }],

    // Open Graph
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:title",
        content:
          "Olova Framework - Bangladesh's First Lightweight 5KB JavaScript Framework",
      },
    ],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Olova is a blazing-fast, 5KB JavaScript framework developed by Nazmul Hossain. It features JSX support and is perfect for building modern web applications.",
      },
    ],
    ["meta", { property: "og:url", content: "https://olovajs.dev" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://olovajs.dev/images/og-image.png",
      },
    ],
    ["meta", { property: "og:locale", content: "en" }],
    ["meta", { property: "og:site_name", content: "Olova" }],

    // Twitter Card
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    [
      "meta",
      {
        name: "twitter:title",
        content:
          "Olova Framework - Bangladesh's First Lightweight 5KB JavaScript Framework",
      },
    ],
    [
      "meta",
      {
        name: "twitter:description",
        content:
          "Experience Olova, a lightweight, 5KB JavaScript framework with JSX support. Made in Bangladesh by Nazmul Hossain for modern web developers.",
      },
    ],
    [
      "meta",
      {
        name: "twitter:image",
        content: "https://olovajs.dev/images/twitter-card.png",
      },
    ],

    // Extensive keywords
    [
      "meta",
      {
        name: "keywords",
        content:
          "Olova Framework, JavaScript Framework, Bangladeshi JS Framework, Lightweight Framework, JSX Framework, Nazmul Hossain, 5KB JavaScript Framework, Web Development, Bangladesh Tech, Frontend Framework, Olova JS, Frontend Framework, Modern Web Development, Fast JavaScript Framework, Olova Bangladesh, JSX Support Framework, Minimal JS Framework, Single Page Applications Framework, SPA Framework, Developer-Friendly Framework",
      },
    ],
  ],

  lastUpdated: true,

  markdown: {
    lineNumbers: true,
  },

  cleanUrls: true,

  sitemap: {
    hostname: "https://olovajs.vercel.app",
  },
});
