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

    </v-app-bar>
    <!-- Main-->
    <h1>Client</h1>
    <v-col>
      <v-toolbar flat width="600">
        <v-text-field v-model="title" append-icon="mdi-magnify"
                      label="Name of Client"
                      single-line hide-details
        ></v-text-field>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-btn class="white--text" color="rgba(63, 103, 250, 1)">Search</v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>


        <v-btn class="white--text" color="rgba(63, 103, 250, 1)" @click="retrieveClients">Reload</v-btn>

      </v-toolbar>

    </v-col>
    <v-divider></v-divider>
    <v-col cols="12" sm="12">
      <v-data-table :headers="headers" :items="clients" :search="title" sort-by="name"></v-data-table>
    </v-col>


  </v-app>

</template>

<script>
import ClientApiService from "../../core/services/client-api.services";

export default {
  name: "admin-client",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    drawer: null,

    clients: [],
    title: "",
    headers: [
      { text: 'Name', value: 'name', sortable: true, align:'center'},
      { text: 'Lastname', value: 'lastname', sortable:true},
      { text: 'D.N.I.', value: 'dni', sortable:true},
      { text: 'Age', value: 'age', sortable:true},
      { text: 'Email', value: 'email', sortable:true},
      { text: 'Phone', value: 'phone', sortable:true},
      { text: 'Room', value: 'room', sortable:true}
    ],
  }),

  methods:{

    retrieveClients(){
      ClientApiService.getAll()
          .then(response => {
            this.clients = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.retrieveClients();
  }
}
</script>

<style scoped>

</style>