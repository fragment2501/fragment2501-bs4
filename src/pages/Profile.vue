<template>
  <Layout>
    <div class="container mt-5 mb-3 pt-5">
      <h1>Profile</h1>
      <div v-if="auth && !auth.isAuthenticated">
        You gotta login to see your profile!
      </div>
      <div v-if="auth && auth.isAuthenticated">

        <div>
          API MESSAGE: {{ apiMessage }}
          <br/>
          <button v-on:click="callApi">call api</button>
        </div>

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
import axios from "axios";

export default{
  mounted() {
    this.auth = this.$auth || {};
  },
  data(){ return{ auth: {}, apiMessage: '...' } },
  methods: {
    async callApi(){
      const token = await this.auth.getTokenSilently();
      console.log('token: '+token);

      // Use Axios to make a call to the API
      const { data } = await axios.get("http://localhost:3001/api/private", {
        headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
        }
      });

      this.apiMessage = data;
    }
  }
}
</script>

