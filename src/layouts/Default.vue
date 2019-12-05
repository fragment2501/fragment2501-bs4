<template>
  <div class="layout">
    <div class="container">
      <Header :transparent="transparent" :colorOnScroll="colorOnScroll"/>
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header,
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  }
}
</script>


<style lang="scss">

</style>
