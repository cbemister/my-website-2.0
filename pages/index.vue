<template>
  <div class="home-page portfolio">
    <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    v-show="!loggedIn"
  >
    <v-layout
      align-center
      column
      justify-center
    >
      <h2 v-if="!$vuetify.breakpoint.xs" class="display-2 font-weight-thin mb-3 text-xs-center" style="width: 600px; max-width: 80%;">I aspire to make the seemingly impossible - possible.</h2>
      <h4 v-else class="display-1 font-weight-thin mb-3 text-xs-center" style="width: 600px; max-width: 80%;">I aspire to make the seemingly impossible - possible.</h4>
      <!-- <h4 class="subheading">Build your application today!</h4> -->
    </v-layout>
  </v-parallax>
  <Dashboard v-show="loggedIn"/>
    <PostList :posts="loadedPosts" pageType="home"/>
  </div>
</template>


<script>
import Dashboard from '~/components/Dashboard.vue'

export default {
    data() {
      return {
        loggedIn: false
      }
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
    },
    components: {
      Dashboard,
    }
  }

</script>


<style scoped>

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>





