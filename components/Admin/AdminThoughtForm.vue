<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedThought.title">Title</AppControlInput>
    <AppControlInput v-model="editedThought.category">Category</AppControlInput>
    <AppControlInput
      control-type="textarea"
      v-model="editedThought.content">Content</AppControlInput>
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
      editedThought: this.thought
        ? { ...this.thought }
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
      this.$emit('submit', this.editedThought)
    },
    onCancel() {
      // Navigate back
      this.$router.push("/admin");
    }
  }
};
</script>
