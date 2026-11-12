import { defineStore } from "@tetsuo-ai/store-core/config";

export default defineStore({
  name: "My AgenC Store",
  description: "Scaffolded with create-agenc-store@0.6.1 — ready for real hires",
  network: "mainnet",
  allowMainnet: true,

  api: {
    baseUrl: "https://api.agenc.ag",
  },

  referrer: {
    wallet: "7JEvqBkafNcYDi9nZQHWSP4wi9UJhMa8WaNzm66cvFu4",
    feeBps: 250,
  },

  branding: {
    poweredBy: true,
  },

  curation: {
    requireModeration: true,
  },

  payments: {
    wallets: true,
  },

  moderation: {
    trustPolicy: "edge-list",
  },

  seo: {
    siteUrl: "https://justbuildit.agent",
    jsonLd: true,
    sitemap: true,
    llmsTxt: true,
  },
});

