
<template>
  <v-card>
    <v-bottom-nav
      color="secondary"
      class="darken-2"
      v-if="loggedIn && registeredGuest"
      :value="true"
      dark
      app
    >

      <v-btn dark>
        <span>Resume</span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Contact</span>
        <v-icon>mail</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Account</span>
        <v-icon>person</v-icon>
      </v-btn>
 
      <v-btn dark>
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>

    </v-bottom-nav>

    <v-bottom-nav
      color="secondary"
      class="darken-2"
      v-else-if="loggedIn && registeredAdmin"
      :value="true"
      dark
      app
    >

      <v-btn dark>
        <span>Dashboard</span>
        <v-icon>view_list</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Compose</span>
        <v-icon>create</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Drafts</span>
        <v-icon>inbox</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Logout</span>
        <v-icon>exit_to_app</v-icon>
      </v-btn>


    </v-bottom-nav>

    <v-bottom-nav
      color="secondary"
      class="darken-2"
      :value="true"
      v-else
      dark
      app
    >

      <v-btn dark>
        <span>Portfolio</span>
        <v-icon>apps</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Technology</span>
        <v-icon>subject</v-icon>
      </v-btn>

      <v-btn dark>
        <span>Sandbox</span>
        <v-icon>code</v-icon>
      </v-btn>



      <v-btn dark>
        <span>Login</span>
        <v-icon>person_outline</v-icon>
      </v-btn>


    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      loggedIn: true,
      registeredGuest: false,
      registeredAdmin: true,

    }
  }
}
</script>

<style>
</style>