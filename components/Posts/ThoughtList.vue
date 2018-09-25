<template>
  <section class="post-list">
    <ThoughtPreview
      v-for="thought in thoughts"
      :key="thought.id"
      :id="thought.id"
      :is-admin="isAdmin"
      :title="thought.title"
      :content="thought.content" />
  </section>
</template>

<script>
import ThoughtPreview from '@/components/Posts/ThoughtPreview'

export default {
  components: {
    ThoughtPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    },
    thoughts: {
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

