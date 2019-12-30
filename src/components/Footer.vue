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
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Coded by 
        <g-link to="https://github.com/fragment2501" target="_blank" rel="noopener">
          Bryan
        </g-link>. 
        Base theme created by 
        <g-link to="https://www.creative-tim.com" target="_blank" rel="noopener">
          Creative Tim
        </g-link>.
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

