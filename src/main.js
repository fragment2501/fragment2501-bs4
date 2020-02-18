/*eslint no-unused-vars: ["error", { "args": "none" }]*/

import DefaultLayout from '~/layouts/Default.vue';

// Default bootstrap stuff.
import BootstrapVue from 'bootstrap-vue';

// Prismjs stuff.
import 'gridsome-plugin-remark-prismjs-all/themes/tomorrow.css';

// Our custom CSS stuff (Including the CSS stuff ror vue-now-kit).
import './assets/styles/main.scss';

// Creative Tim vue-now-kit stuff.
import globalDirectives from './plugins/globalDirectives';
import globalMixins from './plugins/globalMixins';
import globalComponents from './plugins/globalComponents';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
locale.use(lang);

// Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faTwitter, faGooglePlusSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
library.add(faGithub, faTwitter, faGooglePlusSquare, faDiscord);

export default function (Vue, { router, head, isClient }) {
  // Default bootstrap stuff.
  Vue.use(BootstrapVue);
  Vue.component('Layout', DefaultLayout);
  // Creative Tim vue-now-kit stuff. 
  Vue.use(globalDirectives);
  Vue.use(globalMixins);
  Vue.use(globalComponents);
  // Font awesome stuff.
  Vue.component('font-awesome', FontAwesomeIcon);
}
