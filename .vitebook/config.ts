import { clientPlugin, defineConfig } from '@vitebook/client/node';
import { vueMarkdownPlugin } from '@vitebook/markdown-vue/node';
import { vuePlugin } from '@vitebook/vue/node';
import {
  defaultThemePlugin,
  DefaultThemeConfig
} from '@vitebook/theme-default/node';

export default defineConfig<DefaultThemeConfig>({
  include: ['src/**/*.md', 'src/**/*.story.vue'],
  plugins: [
    vueMarkdownPlugin(),
    vuePlugin({ appFile: 'App.vue' }),
    clientPlugin(),
    defaultThemePlugin()
  ],
  site: {
    title: 'Meema',
    description:
      'The easiest way to ensure your media/data is always displayed quickly, securely and at the highest quality possible.',
    theme: {}
  }
});
