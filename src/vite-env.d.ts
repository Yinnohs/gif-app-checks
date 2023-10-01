/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_GIFPHY_KEY: string;
  readonly VITE_API_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface GiftItem {
  id: string;
  url: string;
  title: string;
}
