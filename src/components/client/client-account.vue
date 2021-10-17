<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" clipped >
      <v-container>
        <v-list-item>
          OPTIONS
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="nav_list in nav_lists" :key="nav_list.name">
            <v-list-item-icon>
              <v-icon>{{ nav_list.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
    <v-app-bar app color="rgba(248, 208, 62, 1)" clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <!--name of the session-->
      <v-toolbar-title>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span class="display-1">HELLO HOTEL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/client-search" color="black">
        Search
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn plain to="/client" color="white">
        Client
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn plain to="/Home_App" color="white">
        Account
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <!--Main-->
    <v-container fluid>
      <h1>Hotels</h1>
      <v-col md="6">
        <v-toolbar flat>
          <v-text-field v-model="title" append-icon="mdi-magnify"
                        label="Name of the hotel or place of destiny"
                        single-line hide-details
          ></v-text-field>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-btn class="white--text" color="rgba(63, 103, 250, 1)">Search</v-btn>
          <v-divider class="mx-2" inset vertical></v-divider>
          <v-btn class="white--text" color="rgba(63, 103, 250, 1)" >Reload</v-btn>
        </v-toolbar>
      </v-col>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-layout row>
        <v-col md="4"
               v-for="hotel in hotels"
               :key="hotel.city"
        >
          <v-card
              class="mx-auto"
              max-width="400"
              height="320"
              outlined
          >
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="text-h5 mb-1" v-text="hotel.name">
                </v-list-item-title>
                <v-list-item-subtitle class="text-overline mb-8" v-text="hotel.city"></v-list-item-subtitle>
                <v-img
                    :src="hotel.src"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="150px"
                    width="300px"
                ></v-img>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>

              <v-dialog
                  v-model="dialog"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn rounded class="white--text" color="rgba(63, 103, 250, 1)"
                         v-bind="attrs"
                         v-on="on"
                  >
                    Info
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 grey lighten-2" v-text="hotel.name"></v-card-title>
                  <v-card-text v-text="hotel.star">
                  </v-card-text>
                  <v-card-text v-text="hotel.description"></v-card-text>
                </v-card>
              </v-dialog>
              <v-btn to="/client-offer" rounded class="white--text" color="rgba(63, 103, 250, 1)">Se Offer</v-btn>
              <v-btn fab x-small class="white--text" color="rgba(63, 103, 250, 1)">
                <v-icon>mdi-google-maps</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>

</template>

<script>
export default {
  name: "client-account"
}
</script>

<style scoped>

</style>