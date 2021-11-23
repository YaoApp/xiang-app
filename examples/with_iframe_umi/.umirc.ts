import { defineConfig } from 'umi'

export default defineConfig({
  base: '/umi/',
  publicPath: './',
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
});
