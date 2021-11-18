<template>
  <v-app>
    <v-app-bar app color="rgba(63, 103, 250, 1)" >

      <!--logo/redirect to home-->
      <v-card flat color="rgba(63, 103, 250, 1)" to="/Home_App">
        <v-img max-height="50"
               max-width="50"
               src="@/assets/HelloHotel_logo_blue.png"></v-img>

      </v-card>
      <!--name of the session-->
      <v-toolbar-title>
        <v-divider inset vertical class="mx-1"></v-divider>
        <span class="display-1">HELLO HOTEL</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn plain to="/administrator" color="white">Administrator</v-btn>
      <v-btn plain to="/Home_App" color="white">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>

    </v-app-bar>

    <v-container fluid>
      <v-col cols="12" md="5"><h1>Welcome back, What do you want to do today?</h1></v-col>
      <v-divider class="mx-4" inset vertical></v-divider>
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
    cards: [
      { title: 'Register', src: require('@/assets/img/register.jpg'), flex: 2, path: '/admin-register' },
      { title: 'Rooms', src: require('@/assets/img/rooms.jpg'), flex: 2, path: '/admin-rooms'},
      { title: 'Inventory', src: require('@/assets/img/inventory.png'), flex: 2, path: '/admin-inventory' },
      { title: 'Client', src: require('@/assets/img/client.jpg'), flex: 2 , path: '/admin-client'},
      { title: 'Schedule', src: require('@/assets/img/schedule.jpg'), flex: 2, path: '/admin-schedule' },
      { title: 'Staff', src: require('@/assets/img/staff.jpg'), flex: 2, path: '/admin-staff' },
      { title: 'Costs', src: require('@/assets/img/costs.jpg'), flex: 2, path: '/admin-costs' },
      { title: 'Feedback', src: require('@/assets/img/feedback.jpg'), flex: 2, path: '/admin-feedback' },
      { title: 'Publicity', src: require('@/assets/img/publicity.jpeg'), flex: 2, path: '/admin-publicity' },
    ],
  })
}
</script>

<style scoped>

</style>