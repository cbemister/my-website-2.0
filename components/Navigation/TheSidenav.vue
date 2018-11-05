<template>
<div class="sidenav-container">

  <!-- <div
    v-if="show"
    class="sidenav-backdrop"
    @click="$emit('close')"></div>
    <div
      v-if="show"
      class="sidenav">
      <ul
        class="nav-list"
        @click="$emit('close')">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/profile">Profile</nuxt-link></li>
        <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
      </ul>
    </div> -->

    <div class="full-menu full-menu--open" v-if="show" @click="$emit('close')">
      <div class="nav js-nav nav-active" >
        <div class="nav-content">
          <div class="js-nav-header nav-header"><span class="nav-header-text">Chris Bemister</span>
            <div class="nav-header-line js-nav-header-line"></div>
          </div>
          <ul class="nav-categories" @click="$emit('close')">
            <li class="nav-category js-nav-animate" href="/"><a href="/" class="nav-link">Home</a></li>
            <li class="nav-category js-nav-animate" href="/apps/"><a href="/apps" class="nav-link">Apps</a></li>
            <li class="nav-category js-nav-animate" href="/roadmap/"><a href="/roadmap" class="nav-link">Roadmap</a></li>
          </ul>
          <div class="nav-sublinks js-nav-animate">
            <div class="js-nav-animate"><a class="nav-link nav-sublink" href="/sandbox/">Sandbox</a><a class="nav-link nav-sublink" href="/contact/">Contact</a><a class="nav-link nav-sublink" href="/login/">Login</a></div>
          </div>
        </div>
      </div>
    </div>

</div>
</template>

<script>
export default {
  name: "TheSidenav",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style scoped>

</style>
