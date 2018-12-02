<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title" :disabled="editedPost.existingPost === true" inputTitle>Title</AppControlInput>
    <AppControlInput
      v-model="editedPost.shortDescription">Short Description</AppControlInput>


    <span>
      <label for="pageType">Page Type: </label>
      <select name="pageType" v-model="editedPost.pageType" :disabled="editedPost.existingPost === true">
        <option value="post" :selected="true">Post</option>
        <option value="page">Page</option>
      </select>
    </span>

    <span v-if="editedPost.pageType === 'page'">
      <label for="category">Category: </label>
      <select name="category" v-model="editedPost.category" :disabled="editedPost.existingPost === true">
        <option value="Web Apps">Web Apps</option>
        <option value="Technologies">Technologies</option>
        <option value="Development">Development</option>
        <option value="About">About Me</option>
      </select>
    </span>

    <label for="featured">Featured: </label>
    <input v-model="editedPost.featured" type="checkbox" id="featured " name="featured" value="false">
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput
      controlType="textarea"
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

import slugify from 'slugify'

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
        ? { ...this.post, existingPost: true  }
        : {
            author: "Chris Bemister",
            title: "",
            slug: "",
            category: "",
            pageType: "",
            featured: false,
            thumbnail: "",
            content: "",
            shortDescription: ""
          }
    };
  },
  computed: {
    isDisabled() {
      // evaluate whatever you need to determine disabled here...
      return this.form.validated;
    }
  },
  methods: {
    onSave() {
      // Save the post
      this.updateSlug();

      if (this.$store.state.formError === false) {
        this.$emit('submit', this.editedPost)
      } else {
        console.log('Please fix error')
      }


    },
    onCancel() {
      // Navigate back

      this.$router.push("/admin");
    },
    updateSlug (e) {
      const inputText = this.editedPost.title;
      const inputPageType = this.editedPost.pageType;
      const inputCategory = this.editedPost.category;
      let inputSlug = '';
      let slugPrefix = '';

      if (inputPageType === 'page') {

        inputSlug = inputCategory + '/' +  inputText;

      } else {
        inputSlug = 'posts/' + inputText;
      }

      const slug = slugify(inputSlug, {
          replacement: '-',    // replace spaces with replacement
          remove: /[*+~.()'"!:@]/g,        // regex to remove characters
          lower: true          // result in lower case
      })

    this.editedPost.slug = slugPrefix + '/' + slug;

    }
  }
};
</script>

<style>

  label {
    font-weight: bold;
  }

</style>
