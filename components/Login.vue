<template>
  <v-layout>
    <v-dialog v-model="dialog" width="600">
    <div class="absolute" v-if="drawer" slot="activator">
          <v-list-tile>
            <v-list-tile-action style="min-width: 45px;">
              <v-icon>person_outline</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Login</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
    </div>
    <v-btn v-else slot="activator" class="secondary darken-1 px-4 ml-2" style="height: 80px" left flat dark>
        <span class="mr-2">Login</span>
        <v-icon>person_outline</v-icon>
      </v-btn>
      

      <v-card>
        <v-card-title>
          <span class="headline">Login Form</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-form v-model="valid" @submit.prevent="onSubmit">
              <v-layout wrap>
                <v-flex xs12>
                  <v-text-field label="Email*" type="email" v-model="email" :rules="emailRules" required></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field label="Password*" type="password" v-model="password" required></v-text-field>
                </v-flex>
                <v-card-actions class="layout row justify-end">
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" type="submit" dark lowercase @click="dialog = false && onSubmit">Submit</v-btn>
                </v-card-actions>
              </v-layout>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>

// import AppButton from "@/components/UI/AppButton";
// import AppControlInput from "@/components/UI/AppControlInput";

export default {
  data() {
    return {
      dialog: false,
      isLogin: true,
      email: "",
      password: "",
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
    };
  },
  props: {
    drawer: {
      type: Boolean,
      required: false
    }

  },
  methods: {
    onSubmit() {
      this.$store.dispatch("authenticateUser", {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.$router.push('/admin');
      });
    }
  }
};
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>

