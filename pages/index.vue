<template>
  <div class="home-page portfolio">
    <div class="portfolio-intro">
      <h2 class="single-page-header portfolio-intro-header">I aspire to make the seemingly impossible - possible.</h2>
    </div>
    <PostList :posts="loadedPosts" pageType="home"/>
  </div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
};
</script>


<style scoped>

.home-page {
  position: relative;
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
