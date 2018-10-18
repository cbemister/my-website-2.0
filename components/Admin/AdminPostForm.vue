<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput
      v-model="editedPost.shortDescription">Short Description</AppControlInput>
    <label for="featured">Category: </label>
    <select name="category" v-model="editedPost.category">
      <option value="post" selected>Post</option>
      <option value="page">Page</option>
      <option value="thought">Thought</option>
    </select>
    <label for="featured">Featured: </label>
    <input v-model="editedPost.featured" type="checkbox" id="featured "name="featured" value="false">
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel</AppButton>
  </form>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            author: "Chris Bemister",
            title: "",
            category: "",
            featured: false,
            thumbnail: "",
            content: "",
            shortDescription: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>

<style>

  label {
    font-weight: bold;
  }

</style>