<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/create')">Create Post</AppButton>
      <AppButton style="margin-left: 10px" @click="onLogout">Logout</AppButton>
    </section>
    <form  @submit.prevent="updateSlug">
      <label type="text" for="slug">Slug</label>
      <input id="slug" name="slug" :value="slug" @keyup.enter="updateSlug">
      <button type="submit" v-if="!this.slugSet"> Submit</button>
    </form>

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

    // To prevent the form from submitting
    e.preventDefault();

    this.$store.commit('updateSlug', e.target.elements.slug.value)
    this.$store.dispatch("setSlug", slug);
    console.log(e.target.elements.slug.value)
    this.text = "";


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
