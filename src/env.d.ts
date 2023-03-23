// declare global {
//   namespace NodeJS {
//     interface ProcessEnv {
//       VITE_APP_NAME: string;
//     }
//   }
// }

// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
