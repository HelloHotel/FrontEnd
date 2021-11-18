<template>
  <v-app>

    <v-navigation-drawer app v-model="drawer" clipped permanent>
      <!-- Format for the card of every btn/picture-->
      <v-layout wrap>
        <v-col
            v-for="card in cards"
            :key="card.title"
        >
          <v-card
              :color="card.color"
              height="80"
              width="230"
              :to="card.path"
          >
            <v-img
                :src="card.src"
                class="white--text align-lg-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="70"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-layout>
    </v-navigation-drawer>
    <v-app-bar app color="rgba(63, 103, 250, 1)" clipped-left>

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

    <!-- Main-->
    <h1>Floor {{ id }}</h1>
    <v-divider></v-divider>

    <v-layout wrap>
      <v-col md="4"
             v-for="room in rooms"
             :key="room.id"
      >
        <v-card class="mx-auto"
        >
          <div v-if="room.floor === id">
          <v-list-item three-line>
            <v-list-item-content>

              <v-card-subtitle class="text-h6">Rooms: {{room.room}} | Cost: S/. {{room.cost}}0</v-card-subtitle>
              <v-card-subtitle class="text-h6">Since: 01/01/2021</v-card-subtitle>

            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="blue">
            <v-spacer></v-spacer>
            <v-btn outlined rounded color="white"
                   :to="{ name: '', params: { id: room.id } }"
            >
              See
            </v-btn>
          </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-layout>
  </v-app>
</template>

<script>

import router from '../../router/index'
export default {
  name: "admin-cost_rooms",
  data: () => ({

    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],

    drawer: null,
    id: 0,
    rooms: [],
    roomsId: [],


  }),
  created() {
    this.id = this.$route.params.id;
    fetch("http://localhost:3000/costRooms")
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.rooms = data;
        })
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  }
}
</script>

<style scoped>

</style>