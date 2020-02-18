<template>
  <Layout>
    <div class="container mt-5 pt-5">
      <div class="blogPost">
        <h1 v-html="$page.post.title" class="mb-4"/>
        <BlogContent :content="$page.post.content"/>
        <div class="float-right" v-text="new Date($page.post.date).toLocaleDateString()"/>
      </div>
    </div>
    <br/>
  </Layout>
</template>

<page-query>
query BlogPost ($path: String!) {
  post: blogPost (path: $path) {
    title
    date
    timeToRead
    content
  }
}
</page-query>

<script>
import BlogContent from '@/components/BlogContent'

export default {
  components: {
    BlogContent,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    }
  },
}
</script>

<style lang="scss" scoped>
.meta {
  display: flex;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  
  .label {
    font-weight: bold;
  }
}

.blogImage {
  max-height: 400px;
  width: 100%;
}
</style>
