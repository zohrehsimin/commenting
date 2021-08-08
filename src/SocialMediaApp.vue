<script>
import SocialMediaCommenting from './SocialMediaCommenting.vue';

  export default {

components :{
  SocialMediaCommenting
},
    data(){
      return{
        // isPageShown: true
      }

    }
  }
</script>
<template>
  <div id="app">

    <!-- <social-media-login v-show="isPageShown" ></social-media-login> -->
    <Social-media-commenting></Social-media-commenting>

  </div>
</template>



<style scoped>
#app {

  width: 100%;
  height: 100vh;
  background-image: url("https://nypost.com/wp-content/uploads/sites/2/2019/12/robberies-serious-crimes-spike-in-central-park-this-year.jpg?quality=80&strip=all") ;
background-size: cover;
}
</style>
