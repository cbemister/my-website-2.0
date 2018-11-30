<template>
  <section class="post-list">
    <h2 class="section-header">Code.</h2>
    <PostPreview
      v-for="post in filteredPosts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :category="post.category"
      :pageType="post.pageType"
      :slug="post.slug"
      :featured="post.featured"
      />
  </section>
</template>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
   computed: {
     filteredPosts: function() {
       return this.posts.filter((post) => {
         if (this.pageType === 'home') {
          return post.featured === true;
         } else if (this.pageType === 'post') {
          return post.pageType === 'post';
         } else if (this.category === 'Web Apps') {
           return post.category === 'Web Apps'
         } else if (this.category === 'Technologies') {
           return post.category === 'Technologies'
         } else if (this.category === 'Functionality') {
           return post.category === 'Functionality'
         } else if (this.category === 'Development') {
           return post.category === 'Development'
         } else if (this.category === 'About Me') {
           return post.category === 'About Me'
         } 
         else {
           return true;
         }
       })
   }
 },
//  data () {
//    return {
//      pageType: this.pageType
//    }
//  },
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    posts: {
      type: Array,
      required: true
    },
    pageType: {
      type: String,
      default: ""
    },
    category: {
      type: String,
      default: ""
    }
  }
}
</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

