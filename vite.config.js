import Inspect from 'vite-plugin-inspect'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

import PostcssFixes from 'postcss-fixes'
import Autoprefixer from 'autoprefixer'
import Cssnano from 'cssnano'
import PostcssFontMagician from 'postcss-font-magician'


export default {
    plugins: [ Inspect(), ViteImageOptimizer({ png: {quality: 10} }) ],
    css: {
        postcss: {
            plugins: [ PostcssFixes({ preset: 'recommended' }), Autoprefixer(), Cssnano({ 'safe': true, 'calc': false }), PostcssFontMagician() ]
        },

        preprocessorOptions: {
            scss: {
                additionalData: `@import './src/var.scss'; 
                                 @import './src/mixins.scss';`,
            },
        },
    },
  }