import { defineConfig } from '@umijs/max';

export default defineConfig({
  define: {
    'process.env': {
      NODE_ENV: 'test',
      API_BASE: '',
    },
  },
});
