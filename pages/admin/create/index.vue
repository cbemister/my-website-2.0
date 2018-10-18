<template>

  <div>
    <div class="admin-new-post-page">
      <section class="new-content-form">
        <h2>Add New Post</h2>
        <AdminPostForm @submit="onSubmittedPost" />
      </section>
    </div>
  </div>


</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm";


export default {
  layout: "admin",
  middleware: ['check-auth', 'auth'],
  components: {
    AdminPostForm
  },
  methods: {
    onSubmittedPost(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
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
