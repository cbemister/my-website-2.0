<template>
  <section class="post-list">
    <!-- <h2 class="section-header">Code.</h2> -->
    <PostPreview
      v-for="post in filteredPosts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnail"
      :title="post.title"
      :category="post.category"
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
          return post.category === this.pageType;
         } else {
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

