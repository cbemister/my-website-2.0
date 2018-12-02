<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Category: <br />{{ loadedPost.category }}</div>
        <div class="post-detail">Featured: <br />{{ loadedPost.featured }}</div>
        <div class="post-detail">Last updated on <br />{{ loadedPost.updatedDate | date }}</div>
        <div class="post-detail">Written by <br />{{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@my-awesome-domain.com">feedback@my-awesome-domain.com</a>.</p>
    </section>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    
    if (context.payload) {
      
      return {
        loadedPost: context.payload.postData
      }
    }

 return context.app.$axios
        .$get("https://chrisbemister83.firebaseio.com/posts.json")
        .then(res => {

          for (const key in res) {

            let slug = res[key].slug

            if (context.route.fullPath == slug) {

                  return context.app.$axios.$get('/posts/' + key + '.json')
                    .then(data => {

                      return {
                        loadedPost: data
                      }
                    })
                    .catch(e => context.error(e))

            } 

          }

        }).catch(e => context.error(e));

  },
  head: {
    title: 'A Blog Post'
  }
};
</script>


<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
