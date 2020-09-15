<template>
  <Layout>
    <div class="container mt-5 mb-3 pt-5">
      <h1>Profile</h1>
      <div v-if="auth && !auth.isAuthenticated">
        You gotta login to see your profile!
      </div>
      <div v-if="auth && auth.isAuthenticated">

        <h2>Backend API with OAuth Get/Set Example</h2>
        <p> This section gets a bearer token from the OAuth browser session and then sends ajax requests to the backend api along with the bearer token for oauth validation on the backend.</p>

        <div class="form-group">
          <label for="profile-id" >ID</label>
          <input v-model="profile._id" type="text" class="form-control" id="profile-id" disabled />
        </div>

        <div class="form-group">
          <label for="profile-name" >Name</label>
          <input v-model="profile.name" type="text" class="form-control" id="profile-name" placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="profile-age" >Age</label>
          <input v-model="profile.age" type="text" class="form-control" id="profile-age" placeholder="Enter your age">
        </div>

        <div>
          <button v-on:click="getProfile" class="btn btn-default">Refresh</button>
          <button v-on:click="setProfile" class="btn btn-primary">Save</button>
        </div>

<br/><br/>

        <div>
          <h2>Client OAuth token</h2>
          <p>This is a dump of the oauth token from your browser.</p>
          <pre>{{ JSON.stringify(auth.user, null, 2) }}</pre>
        </div>

        <div>
          <img :src="auth.user.picture">
          <p>{{ auth.user.name }}</p>
          <p>{{ auth.user.email }}</p>
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
  data() { 
    return {
      auth: {}, 
      apiMessage_get: '...', 
      apiMessage_set: '...',
      profile: {
        _id: '',
        name: '',
        age: '',
        haircolor: ''
      }
    }
  },
  watch: {
    auth: function(newauth,oldauth){
      console.log('got to watch');
      if( newauth && newauth.isAuthenticated ){
        console.log('got to watch 2');
        this.getProfile();
      }
    }
  },
  methods: {
    async getProfile(){
      const token = await this.auth.getTokenSilently();
      // Use Axios to make a call to the API
      const { data } = await axios.get(process.env.GRIDSOME_API_URL+"/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      this.profile = data;
    },
    async setProfile(){
      const token = await this.auth.getTokenSilently();
      // Use Axios to make a call to the API
      const { data } = await axios.post(process.env.GRIDSOME_API_URL+"/user/profile", 
        this.profile,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
    }
  }
}
</script>

