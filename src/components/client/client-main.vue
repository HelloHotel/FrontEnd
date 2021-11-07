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

      <v-btn plain to="/client" color="black">
        Client
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn plain to="/client-search" color="white">
        Search
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn plain to="/Home_App" color="white">
        Account
        <v-icon>mdi-account</v-icon>
      </v-btn>

    </v-app-bar>

    <v-container fluid>
      <v-col cols="12" md="5"><h1>Welcome to Hello Hotel</h1></v-col>
      <v-divider class="mx-4" inset></v-divider>
      <v-layout row wrap>
        <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
        >
          <v-card
              width="200"
              height="200"
              :to="card.path"
          >
            <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
                width="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "main",

  data: () => ({
    drawer: false,
    nav_lists:[
      {name: 'Account',icon: 'mdi-account'},
      {name: 'News',icon: 'mdi-newspaper'},
      {name: 'Configuration',icon: 'mdi-cogs'},
      {name: 'Help',icon: 'mdi-view-account-question'},
      {name: 'Contact us',icon: 'mdi-account-group'},
    ]
  })

}
</script>

<style scoped>

</style>