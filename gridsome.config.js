
const collections = [
  {
    query: `{
      allBlogPost {
        edges {
          node {
            id
            title
            description
            path
            date
          }
        }
      }
    }`,
    transformer: ({ data }) => data.allBlogPost.edges.map(({ node }) => node),
    indexName: process.env.ALGOLIA_INDEX_NAME, // Algolia index name
    itemFormatter: (item) => {
      return {
        objectID: item.id,
        title: item.title,
        description: item.description,
        path: item.path,
        date: String(item.date)
      }
    }, // optional
    matchFields: ['path', 'date'], // Array<String> required with PartialUpdates
  },
];


module.exports = {
  siteName: 'Fragment2501 BS4',
  siteUrl: 'https://mystifying-edison-5d2100.netlify.com',
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
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: false, // default: false
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
}
