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
            <h1 class="title">This is a landing page!</h1>
            <div class="text-center">
              <a href="#fragment2501" class="btn btn-primary btn-icon btn-round"><i class="fab"><font-awesome :icon="['fab', 'slack']"/></i></a>
              <a href="#fragment2501" class="btn btn-primary btn-icon btn-round"><i class="fab"><font-awesome :icon="['fab', 'twitter']"/></i></a>
              <a href="#fragment2501" class="btn btn-primary btn-icon btn-round"><i class="fab"><font-awesome :icon="['fab', 'google-plus-square']"/></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-about-us">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Who we are?</h2>
              <h5 class="description">
                According to the National Oceanic and Atmospheric Administration,
                Ted, Scambos, NSIDClead scentist, puts the potentially record low
                maximum sea ice extent tihs year down to low ice extent in the
                Pacific and a late drop in ice extent in the Barents Sea.
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
                    "Over the span of the satellite record, Arctic sea ice has
                    been declining significantly, while sea ice in the
                    Antarctichas increased very slightly"
                    <br />
                    <br />
                    <small>-NOAA</small>
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
                  So what does the new record for the lowest level of winter ice
                  actually mean
                </h3>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue whatever
                  happens with climate change. Even if the Arctic continues to be
                  one of the fastest-warming regions of the world, it will always
                  be plunged into bitterly cold polar dark every winter. And
                  year-by-year, for all kinds of natural reasons, there’s huge
                  variety of the state of the ice.
                </p>
                <p>
                  For a start, it does not automatically follow that a record
                  amount of ice will melt this summer. More important for
                  determining the size of the annual thaw is the state of the
                  weather as the midnight sun approaches and temperatures rise.
                  But over the more than 30 years of satellite records, scientists
                  have observed a clear pattern of decline, decade-by-decade.
                </p>
                <p>
                  The Arctic Ocean freezes every winter and much of the sea-ice
                  then thaws every summer, and that process will continue whatever
                  happens with climate change. Even if the Arctic continues to be
                  one of the fastest-warming regions of the world, it will always
                  be plunged into bitterly cold polar dark every winter. And
                  year-by-year, for all kinds of natural reasons, there’s huge
                  variety of the state of the ice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contact-us text-center">
        <div class="container">
          <h2 class="title">Send me a message!</h2>
          <p class="description">Bored out of your mind waiting for that Pokemon Go raid to start? Still angry about how bad Hollow Man was?  Message me about it using this silly non-instant message delivery system! Hooray!</p>

          <form 
            name="contact"
            method="post"
            v-on:submit.prevent="handleSubmit"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >

            <input type="hidden" name="name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div class="row">
              <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">

                <div class="textarea-container">
                  <textarea
                    class="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    cols="80"
                    v-model="form.message"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="send-button">
                  <n-button type="primary" nativeType="submit" round block size="lg">
                    Send Message
                  </n-button>
                </div>
              </div>
            </div>

     
          </form>
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
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
    },
    handleSubmit(e) {
      console.log('Got here');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.form,
        }),
      })
        .then(() => this.$router.push('/success'))
        .catch(error => alert(error));
    }
  }

};
</script>
<style></style>

