import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: 'dev',
      API_BASE: '',
    },
  },
  proxy: {
    '/api': {
      target: 'https://4b44875u87.imdo.co',
      changeOrigin: true,
    },
  },
});
