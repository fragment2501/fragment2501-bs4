<template>
  <component
    :is="componentType"
    :to="to"
    class=""
    @click.native.stop="closeNav"
  >
    <slot></slot>
  </component>
</template>
<script>
export default {
  name: 'nav-link',
  inject: ['closeNavbar'],
  props: {
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  computed: {
    componentType() {
      return this.to ? 'router-link' : 'a';
    }
  },
  methods: {
    closeNav() {
      if (this.closeNavbar) {
        this.closeNavbar();
      }
      if (this.closeDropDown) {
        this.closeDropDown()
      }
    }
  }
};
</script>
<style></style>
