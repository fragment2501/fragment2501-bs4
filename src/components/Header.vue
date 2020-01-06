
<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link class="navbar-brand" to="/" data-cy="nav-brand-home">
        <g-image src="~/assets/images/bio-photo.svg" width="21" />
      </router-link>
    </template>
    <template slot="navbar-menu">
      <li class="nav-item">
        <nav-link to="/blog" class="nav-link" data-cy="nav-link-blog">
          <i class="now-ui-icons education_paper"></i>
          <p>Blog</p>
        </nav-link>
      </li>
      <li class="nav-item">
        <nav-link to="/contact" class="nav-link" data-cy="nav-link-contact">
          <i class="now-ui-icons ui-1_send"></i>
          <p>Contact</p>
        </nav-link>
      </li>
    </template>
  </navbar>
</template>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>


<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  props: {
    transparent: Boolean,
    colorOnScroll: Number
  },
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover
  }
};
</script>

<style lang="scss">

</style>
