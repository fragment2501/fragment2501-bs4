
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

      <li class="nav-item" v-if="$auth && !$auth.loading">
        <nav-link v-if="$auth.isAuthenticated" to="/profile" class="nav-link" data-cy="nav-link-profile">
          <i class="now-ui-icons users_circle-08"></i>
          <p>Profile</p>
        </nav-link>
      </li>

      <li class="nav-item" v-if="$auth && $auth.loading">
        <a href="#" v-if="!$auth.isAuthenticated" @click="login" class="nav-link" data-cy="nav-link-login">
          <i class="now-ui-icons gestures_tap-01"></i>
          <p>Login</p>
        </a>
      </li>

      <li class="nav-item" v-if="$auth && !$auth.loading">
        <a href="#" v-if="$auth.isAuthenticated" @click="logout" class="nav-link" data-cy="nav-link-logout">
          <i class="now-ui-icons sport_user-run"></i>
          <p>Logout</p>
        </a>
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
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>

<style lang="scss">

</style>
