<template>
  <div>


      <v-container>
        <v-btn color="success">Success</v-btn>
        <v-btn color="error">Error</v-btn>
        <v-btn color="warning">Warning</v-btn>
        <v-btn color="info">Info</v-btn>
    </v-container>


 

        <!-- <v-app>
  <v-navigation-drawer app></v-navigation-drawer>
  <v-toolbar app></v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app></v-footer>
</v-app> -->

    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false" />
    <nuxt/>
    <ContactCard />
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import ContactCard from '@/components/Footer/ContactCard'

export default {
  // middleware: 'log',
  components: {
    TheHeader,
    TheSidenav,
    ContactCard
  },
  data() {
    return {
      displaySidenav: false
    }
  }
}
</script>


<style>
html {
  font-family: 'Open Sans', sans-serif;
}

body {
  margin: 0;
}
</style>
