<template>
  <Layout>
    <div class="container mt-5 mb-3 pt-5">
      <h1>Profile</h1>
      <div v-if="auth && !auth.isAuthenticated">
        You gotta login to see your profile!
      </div>
      <div v-if="auth && auth.isAuthenticated">
        <div>
          <img :src="auth.user.picture">
          <h2>{{ auth.user.name }}</h2>
          <p>{{ auth.user.email }}</p>
        </div>

        <div>
          <pre>{{ JSON.stringify(auth.user, null, 2) }}</pre>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default{
  mounted() {
    this.auth = this.$auth || {};
  },
  data(){ return{ auth: {}} }
}
</script>

