# Gridsome vue-now-ui Blog Starter Experiement

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fe47863-eb74-40df-ab56-9657968c15ec/deploy-status)](https://app.netlify.com/sites/fragment2501/deploys)

This is my new blog, but mostly its an R&D sample site for me to try out jamstack stuff.  Here's all the stuff I've plugged in so far:

## Features

1. Use [Gridsome](https://gridsome.org) as a starting point.
    1. The initial code was generated from the bootstrap starter template - https://gridsome.org/starters/bootstrap-starter/
    1. Imported my old blogger content that I had aready converted to markdown files.
1. I smashed in the creative tim vue-now-ui kit styles, components, page layouts and templates - https://github.com/creativetimofficial/vue-now-ui-kit
1. Added the gridsome PWA plugin - https://gridsome.org/plugins/gridsome-plugin-pwa 
    1. Stuck to the out of the box defaults for caching strategy. 
    1. Used `pwa-asset-generator` to create PWA image assets. The gridsome pwa plugin only uses 1 of those image icons, but I plan to add the others to the manifest file later.
1. Added fontawesome libraries and using their vuejs components for adding fonts (on top of the BS and Creative Tim stuff)
1. Hosting the site on https://www.netlify.com/ and I've been playing around with custom forms/functions that hook into netlify's platform, but all that stuff is non-essential fluff.

## Getting Started

1. Install the Gridsome CLI - https://gridsome.org/docs/#1-install-gridsome-cli-tool.
2. Clone this project.
3. Run `npm install`.
4. Run `gridsome develop`
