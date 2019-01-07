<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="600">
      <!-- <v-btn slot="activator" class="secondary darken-1 px-5 ml-4" style="height: 80px" flat dark >Login</v-btn> -->
      <v-btn
        slot="activator"
        class="secondary darken-1 pl-5 pr-4 mr-1"
        style="height: 80px; -webkit-clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%); clip-path: polygon(20% 0%, 100% 0, 100% 100%, 0% 100%);"
        left
        dark
      >
        <span class="mr-2">Compose</span>
        <v-icon>create</v-icon>
      </v-btn>
      <v-card>
        <v-form v-model="valid" @submit.prevent="onSubmit">
          <v-card-title>
            <span class="headline">Post Details</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-layout wrap>       
                <v-flex xs12>
                  <AdminPostForm @submit="onSubmittedPost"></AdminPostForm>
                </v-flex>
              </v-layout>
            </v-container>
            <small>*indicates required field</small>
          </v-card-text>
          <!-- <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="dialog = false">Submit</v-btn>
          </v-card-actions> -->
        </v-form>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";

export default {
  data() {
    return {
      dialog: false
    };
  },
  components: {
    AdminPostForm
  }
};
</script>

<style>
</style>