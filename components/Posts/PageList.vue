<template>
  <section class="post-list">
    <PagePreview
      v-for="page in pages"
      :key="page.id"
      :id="page.id"
      :is-admin="isAdmin"
      :title="page.title"
      :content="page.content" />
  </section>
</template>

<script>
import PagePreview from '@/components/Posts/PagePreview'

export default {
  components: {
    PagePreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Array,
      required: true
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

