import { defineConfig } from '@umijs/max';
import path from 'path';
import routes from './routes';

export default defineConfig({
  routes,
  antd: {},
  access: {},
  model: {},
  request: {},
  layout: {},
  theme: {},
  initialState: {
    loading: path.join(__dirname, '../src/components/PageLoading'),
  },
  favicons: ['./favicon.png'],
  npmClient: 'pnpm',
  plugins: ['@umijs/max-plugin-openapi'],
  locale: {
    default: 'zh-CN',
    baseNavigator: true,
    baseSeparator: '-',
  },
  openAPI: {
    requestLibPath: "import { request } from '@umijs/max'",
    // TODO：切换成后端 openapi.json
    // 文档：https://pro.ant.design/zh-CN/docs/openapi/
    schemaPath: path.join(__dirname, './openApi.json'),
    mock: false,
  },
  cssLoaderModules: {
    exportLocalsConvention: 'camelCase',
  },
});
