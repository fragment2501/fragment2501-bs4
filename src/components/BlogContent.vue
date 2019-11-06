<template>
  <div class="card">
  <div class="blog-content card-body" v-html="$page.post.content" />
  </div>
</template>

<script>
export default {
  props: {
    content: String,
  },
}
</script>


