<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/create')">Create Post</AppButton>
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <!-- <form @submit.prevent="updateSlug" v-if="!this.slug">
      <label type="text" for="slug">Website Folder </label>
      <input id="slug" name="slug" :value="this.$store.getters.slug" @keyup.enter="updateSlug"/>
      <button type="submit" v-if="!this.slugSet">Save</button>
    </form>
    <div v-else>
      <label type="text" for="slug">Website Folder </label>  
      <input type="text" id="slug" :value="this.slug" readonly/>
    </div> -->

    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList
        isAdmin
        :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import slugify from 'slugify'

export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  data() {
    return {
      slugSet: this.$store.getters.state ? true : false
    }
  },
  computed: {
      ...mapState({
      slug: state => state.slug
  }),
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/admin/auth");
    },
    updateSlug (e) {

      const inputText = e.target.elements.slug.value

      const slug = slugify(inputText, {
          replacement: '-',    // replace spaces with replacement
          remove: /[*+~.()'"!:@]/g,        // regex to remove characters
          lower: true          // result in lower case
      })
    // To prevent the form from submitting
    e.preventDefault();

    this.$store.commit('updateSlug', slug)
    this.$store.dispatch("setSlug", {slug: slug});
    console.log(slug)
    e.target.elements.slug.value = "";
  }
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
