/* global module */

module.exports = {
  siteName: 'Fragment2501 BS4',
  siteUrl: 'https://fragment2501.netlify.com',
  siteDescription: 'A blog experiment with gridsome BS4 starter template.',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'BlogPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        },
      },
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-99999999-99'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Fragment2501',
        startUrl: '/',
        display: 'standalone',
        statusBarStyle: 'default',
        manifestPath: 'manifest.json',
        serviceWorkerPath: 'service-worker.js',
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
        shortName: 'Fragment2501',
        themeColor: '#666600',
        backgroundColor: '#ffffff',
        icon: './src/assets/images/icons/manifest-icon-192.png', // must be provided
        msTileImage: '',
        msTileColor: '#666600'
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  }
};
