<template>
  <Layout>
    <h1 class="my-4 mb-5">Blog</h1>

    <div class="row"
      v-for="item in $page.posts.edges"
      :key="item.node.id"
    >

      <div class="col-2">
        <g-image v-if="item.node.cover_image" :src="item.node.cover_image" alt="image" class="img-fluid img-thumbnail float-left"  />
        <g-image v-if="!item.node.cover_image" src="~/assets/images/darkbluething.jpg" alt="image" class="img-fluid img-thumbnail float-left"  />
      </div>
      <div class="col-10">
        <g-link :to="item.node.path">
          <h5 >{{item.node.title}}</h5>
        {{new Date(item.node.date).toLocaleDateString()}}
          <p class="text-dark">{{item.node.description}}</p>
        </g-link>
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
