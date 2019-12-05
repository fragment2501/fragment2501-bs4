import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

import globalDirectives from './plugins/globalDirectives';
import globalMixins from './plugins/globalMixins';
import globalComponents from './plugins/globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
  Vue.use(globalDirectives);
  Vue.use(globalMixins);
  Vue.use(globalComponents);
}
