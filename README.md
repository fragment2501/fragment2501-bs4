# Gridsome vue-now-ui Blog Starter Experiment

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fe47863-eb74-40df-ab56-9657968c15ec/deploy-status)](https://app.netlify.com/sites/fragment2501/deploys)

[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/Fragment2501/fragment2501-bs4

This is my new blog, which is really just a jamstack playground for me.

## Features
Here's all the stuff I've smashed in so far.

1. [Gridsome](https://gridsome.org) as the static site generation foundation with VueJS.
    1. The initial code was generated from the bootstrap starter template - https://gridsome.org/starters/bootstrap-starter/
    1. Markdown blog data was copied over from my old Jekyll site from a few years ago.
1. [Creative Tim's vue-now-ui kit](https://github.com/creativetimofficial/vue-now-ui-kit) is smashed in for a custom site theme. 
1. [Gridsome PWA plugin](https://gridsome.org/plugins/gridsome-plugin-pwa)
    1. Stuck to the out of the box defaults for PWA caching strategy. 
    1. Used `pwa-asset-generator` to create PWA image assets. The gridsome pwa plugin only uses 1 of those image icons, but I plan to add the others to the manifest file later.
1. [Fontawesome](https://fontawesome.com/changelog/latest). 
    1. Added as described in the gridsome documentation so we only locally load icons that we need - https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons.
    1. This is in addition to the nucleo icons included in the creative tim template.  (I'm thinking down the road I'll remove the nucleo icons in favor of the fontawesome ones)
1. [Netlify](https://www.netlify.com) for hosting.  And dude, their build/preview/deploy workflow is super sexy <3
1. PR/CI checks
    1. ESLint Checks via [GitHub Actions](https://github.com/features/actions)
        - [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
        - [eslint-plugin-gridsome](https://github.com/gridsome/eslint-plugin-gridsome)
    1. [Cypress](https://www.cypress.io/) browser tests.

## Getting Started

1. Install the Gridsome CLI - https://gridsome.org/docs/#1-install-gridsome-cli-tool.
2. Clone this project.
3. Run `npm install`.
4. Run `gridsome develop`
