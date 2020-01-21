<template>
  <Layout :colorOnScroll="400">

    <div class="profile-page">
      <div filter-color="orange" class="page-header page-header-small clear-filter">
        <parallax
          class="page-header-image"
          style="background-image: url('/images/mt_bg1.jpg')"
        >
        </parallax>

        <div class="content-center">
          <div class="container">
            <h1 class="title">My Blog!</h1>
          </div>
        </div>
      </div>

      <br/>

      <div class="container">
        <div class="card" 
          v-for="item in $page.posts.edges"
          :key="item.node.id"
        >
          <div class="card-body">
            <h2 class="card-title">{{item.node.title}}</h2>
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
