<template>
  <section class="post-list">
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
         if (this.isAdmin) {
           return true
         } else if (this.pageType === 'home') {
          return post.featured === true;
        //  } else if (this.pageType === 'post') {
        //   return post.pageType === 'post';
         } else if (this.category === 'portfolio') {
           return post.category === 'portfolio'
         } else if (this.category === 'technology') {
           return post.category === 'technology'
         } else if (this.category === 'sandbox') {
           return post.category === 'sandbox'
         } else if (this.category === 'about') {
           return post.category === 'about'
         } 
       })
   }
 },
//  data () {
//    return {
//      pageType: this.pageType,
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
      default: "home"
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
  text-transform: capitalize;
}
</style>

