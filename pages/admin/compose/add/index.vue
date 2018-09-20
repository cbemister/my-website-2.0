<template>
    <div class="editor-page">
        <PageTitle title="Editor Page" subTitle=" Editor Landing Page " />
        <!-- <section class="new-thought">
            <button>Capture Thought</button>
        </section>
        <section class="new-post">
            <button>Create Post</button>
        </section>
        <section class="new-page">
            <button>Create Page</button>
        </section> -->

        <form @submit.prevent="onSave">
            <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
            <AppControlInput v-model="editedPost.title">Title</AppControlInput>
            <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
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

    </div>
</template>

<script>

import PageTitle from "@/components/Header/PageTitle"
import AppControlInput from "@/components/UI/AppControlInput"
import AppButton from "@/components/UI/AppButton"

export default {
  components: {
    PageTitle,
    AppControlInput,
    AppButton
  },
  data() {
      return {
          editedPost: {
              author: '',
              title: '',
              thumbnailLink: '',
              content: ''
          }
      }
  },
  methods: {
      onSave() {
          console.log(this.editedPost);
      },
      onCancel() {
          this.$router.push('/admin');
      }  
  }
};
</script>

<style>
    form {
        width: 800px;
        display: block;
        margin: 0 auto;
    }
</style>
