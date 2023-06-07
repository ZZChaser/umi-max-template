import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: 'prod',
      API_BASE: '',
    },
  },
});
