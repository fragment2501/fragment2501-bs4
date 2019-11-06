<template>
  <Layout>
    <h1>Blog</h1>

    <div class="row justify-content-center"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
    >

      <div class="col-md-8 mb-3">
        <div class="card" >
          <g-image v-if="item.node.cover_image" :src="item.node.cover_image" alt="image" class="card-img-top"  />
          <div class="card-body">
            <h5 class="card-title">{{item.node.title}}</h5>
            <p class="card-text">{{item.node.description}}</p>
            <g-link :to="item.node.path" class="btn btn-primary">Continue Reading</g-link>
          </div>
        </div>
      </div>

    </div>
  </Layout>
</template>

<page-query>
query Blog {
	posts: allBlogPost(sortBy: "date", filter: { published: { eq: true }}) {
    edges {
      node {
        id,
        date,
        path,
        title,
        description,
        cover_image (width: 480)
      }
    }
  }
}
</page-query>

<style lang="scss" scoped>
.media {
  img {
    width: 120px;
    height: 120px;
  }
}

.media-body {
  margin: auto;
}
</style>
