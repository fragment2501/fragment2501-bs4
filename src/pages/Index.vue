<template>
  <Layout :colorOnScroll="400">
    <div>
      <div class="page-header page-header-small">
        <parallax
          class="page-header-image"
          style="background-image: url('/images/barbg.jpg')"
        >
        </parallax>
        <div class="content-center">
          <div class="container">
            <h1 class="title">Bryan's Blog!</h1>
            <div class="text-center">
              <a href="https://github.com/fragment2501/fragment2501-bs4" title="Checkout the website repository!" class="btn btn-primary btn-icon btn-round" target="_blank" rel="noopener"><i class="fab"><font-awesome :icon="['fab', 'github']"/></i></a>
              <a href="https://discord.gg/mSseSDD" title="Chat with me on discord!" class="btn btn-primary btn-icon btn-round" target="_blank" rel="noopener"><i class="fab"><font-awesome :icon="['fab', 'discord']"/></i></a>
              <a href="https://twitter.com/Fragment2501" title="Poke me on twitter!" class="btn btn-primary btn-icon btn-round" target="_blank" rel="noopener"><i class="fab"><font-awesome :icon="['fab', 'twitter']"/></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">My little blog R&D site</h2>
              <h5 class="description">
                Every now and then I come back to my blog, dust off the cobwebs and completely rebuild it from the ground up.
                The goal is to just to take a step back from my usual toolset at work and try something new. This time I used Gridsome.
              </h5>
            </div>
          </div>
          <div class="separator separator-primary"></div>
          <div class="section-story-overview">
            <div class="row">
              <div class="col-md-6">
                <div
                  class="image-container image-left"
                  style="background-image: url('images/sfbridge.jpg')"
                >
                  <!-- First image on the left side -->
                  <p class="blockquote blockquote-primary">
JAMStack: Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.
                  </p>
                </div>
                <!-- Second image on the left side of the article -->
                <div
                  class="image-container"
                  style="background-image: url('images/b3.jpg')"
                ></div>
              </div>
              <div class="col-md-5">
                <!-- First image on the right side, above the article -->
                <div
                  class="image-container image-right"
                  style="background-image: url('images/mt.jpg')"
                ></div>
                <h3>
Built using Gridsome, a JAMStack framework. 
                </h3>
                <p>
I was looking for something I could use like a CMS, but with no back end (I do enough of that at work!). That way I can focus on building front end apps.
Thats where a JAMStack approach seemed like the right way to go.
                </p>
                <p>
A friend pointed me to Gridsome and that ended up fitting me perfectly. The local development experience is easy to setup and use. I'm using github and netlify's build hooks for PR review sites and publishing on master branch pushes.
                </p>
                <p>
With Gridsome I went with content pages as markdown files that are manged along with code in git.
The developer workflow with PR approval suddnely becomes the same for workflow for content authors.
For a simple CMS, we remove the need for any heavy infrastructure to support content editing - all you need is git, a text editor and nodejs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import { Button, FormGroupInput  } from '@/components';
export default {
  name: 'landing',
  bodyClass: 'landing-page',
  components: {
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    };
  }
};
</script>
<style></style>

