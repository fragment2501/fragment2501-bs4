# Gridsome vue-now-ui Blog Starter Experiement

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fe47863-eb74-40df-ab56-9657968c15ec/deploy-status)](https://app.netlify.com/sites/fragment2501/deploys)

This is my new blog, but mostly its an R&D sample site for me to try out jamstack stuff.  Here's all the stuff I've plugged in so far:

## Features

1. [Gridsome](https://gridsome.org) as the foundation.
    1. The initial code was generated from the bootstrap starter template - https://gridsome.org/starters/bootstrap-starter/
    1. Imported my old blogger content that I had aready converted to markdown files (included in this repo).
1. For a custom theme, smashed in the super sexy creative tim vue-now-ui kit styles, components, page layouts and templates - https://github.com/creativetimofficial/vue-now-ui-kit
1. Added the gridsome PWA plugin - https://gridsome.org/plugins/gridsome-plugin-pwa 
    1. Stuck to the out of the box defaults for PWA caching strategy. 
    1. Used `pwa-asset-generator` to create PWA image assets. The gridsome pwa plugin only uses 1 of those image icons, but I plan to add the others to the manifest file later.
1. Added fontawesome as described in the gridsome documentation - https://gridsome.org/docs/assets-svg/#fontawesome-svg-icons.
1. Hosting the site on https://www.netlify.com since it just works with gridsome and the free plan is plenty for R&D sites.

## Getting Started

1. Install the Gridsome CLI - https://gridsome.org/docs/#1-install-gridsome-cli-tool.
2. Clone this project.
3. Run `npm install`.
4. Run `gridsome develop`
