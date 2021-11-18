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
    <h1>Rooms</h1>
    <v-col>
      <v-toolbar flat width="600">
        <v-text-field v-model="title" append-icon="mdi-magnify"
                      label="Number of the room"
                      single-line hide-details
        ></v-text-field>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn class="white--text" color="rgba(63, 103, 250, 1)">Available</v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn class="white--text" color="rgba(63, 103, 250, 1)" @click="retrieveRooms">Reload</v-btn>
      </v-toolbar>
    </v-col>
    <v-divider></v-divider>
    <v-col>
      <v-data-table :headers="headers" :items="rooms" :search="title" sort-by="room"></v-data-table>
    </v-col>
  </v-app>
</template>

<script>
import RoomsApiService from "../../core/services/rooms-api.services"

export default {
  name: "admin-rooms",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    drawer: null,

    rooms: [],
    title: "",
    headers: [
      { text: 'Room', value: 'room', sortable: true, align:'center'},
      { text: 'Available', value: 'available', sortable:true, align: 'star'},
      { text: 'Client', value: 'client', sortable:true},
      { text: 'Phone', value: 'phone', sortable:false},
      { text: 'Date_in', value: 'date_in', sortable:true},
      { text: 'Date_out', value: 'date_out', sortable:true},
      { text: 'Mont S/.', value: 'mont S/.', sortable:true}
    ],

  }),

  methods:{

    retrieveRooms(){
      RoomsApiService.getAll()
          .then(response => {
            this.rooms = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.retrieveRooms();
  }
}
</script>

<style scoped>
</style>