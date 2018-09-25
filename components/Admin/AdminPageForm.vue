<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPage.title">Title</AppControlInput>
    <AppControlInput v-model="editedPage.category">Category</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedPage.content">Content</AppControlInput>
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
      editedPage: this.page
        ? { ...this.page }
        : {
            title: "",
            category: "",
            content: ""
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPage)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>
