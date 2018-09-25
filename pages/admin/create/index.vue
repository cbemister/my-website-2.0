<template>

  <div>

    <div class="admin-new-thought-page">
      <section class="new-content-form">    
        <h2>Add New Thought</h2>
        <AdminThoughtForm @submit="onSubmittedThought" />
      </section>
    </div>
    <div class="admin-new-post-page">
      <section class="new-content-form">
        <h2>Add New Post</h2>
        <AdminPostForm @submit="onSubmittedPost" />
      </section>
    </div>
    <div class="admin-new-page">
      <section class="new-content-form">
        <h2>Add New Page</h2>
        <AdminPageForm @submit="onSubmittedPage" />
      </section>
    </div>
    


  </div>


</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";
import AdminPageForm from "@/components/Admin/AdminPageForm";
import AdminThoughtForm from "@/components/Admin/AdminThoughtForm";

export default {
  layout: "admin",
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm,
    AdminPageForm,
    AdminThoughtForm,

  },
  methods: {
    onSubmittedThought(thoughtData) {
      this.$store.dispatch("addThought", thoughtData).then(() => {
        this.$router.push("/admin");
      });
    },
    onSubmittedPost(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    },
    onSubmittedPage(pageData) {
      this.$store.dispatch("addPage", pageData).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>

<style scoped>
.new-content-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-content-form {
    width: 500px;
  }
}
</style>
