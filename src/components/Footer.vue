<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <g-link to="/">
              Home
            </g-link>
          </li>
          <li>
            <g-link to="/blog">
              Blog
            </g-link>
          </li>
          <li>
            <g-link to="/contact">
              Contact
            </g-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Coded by 
        <a href="https://github.com/fragment2501" target="_blank" rel="noopener">
          Bryan
        </a>. 
        Base theme created by 
        <a href="https://www.creative-tim.com" target="_blank" rel="noopener">
          Creative Tim
        </a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>

