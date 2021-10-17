<template>
  <v-app>
    <h1> </h1>
    <v-card width="400" class="mx-auto mt-5" >
      <v-card-title class="pb-0"><h1>Login</h1></v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username"
                        prepend-icon="mdi-account-circle">
          </v-text-field>
          <v-text-field label="Password"
                        prepend-icon="mdi-lock">
          </v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn plain to="/administrator" color="success">Register</v-btn>
        <v-btn plain to="/administrator" color="info">login</v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "admin-login"
}
</script>

<style scoped>

</style>