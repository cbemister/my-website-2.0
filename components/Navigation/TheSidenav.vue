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
            <li class="nav-category js-nav-animate"><a href="/web-apps" class="nav-link">Portfolio</a></li>
            <li class="nav-category js-nav-animate"><a href="/technologies" class="nav-link">Technologies</a></li>
            <li class="nav-category js-nav-animate"><a href="/development" class="nav-link">Development</a></li>
          </ul>
          <div class="nav-sublinks js-nav-animate">
            <div class="js-nav-animate"><a class="nav-link nav-sublink" href="/posts">Blog</a><a class="nav-link nav-sublink" href="/about">About</a><a class="nav-link nav-sublink" href="/admin">Admin</a></div>
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
