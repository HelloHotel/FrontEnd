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
    <h1>Register</h1>
    <v-divider class="mx-4" inset></v-divider>
    <v-card height="50"
            width="200"
            flat
    >
      <v-card-actions>
        <v-dialog
            v-model="dialog"
            persistent
            max-width="400"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="rgba(63, 103, 250, 1)"
                dark
                v-bind="attrs"
                v-on="on"
            >
              Save
            </v-btn>
          </template>
          <v-card>
            <v-card-title> Do you want to save this information?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
              >
                Accept
              </v-btn>
              <v-btn
                  color="green darken-1"
                  text
                  @click="dialog = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn class="white--text" color="rgba(63, 103, 250, 1)">Clear</v-btn>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-btn class="white--text" color="rgba(63, 103, 250, 1)">Draft</v-btn>
      </v-card-actions>
    </v-card>

    <v-layout >
      <!--Information of the client-->
      <v-col md="3">
        <v-card height="500"
                width="400"
        >
          <v-card-title>Client Information</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field label="Name"
                            prepend-icon="mdi-account">
              </v-text-field>
              <v-text-field label="Last name"
                            prepend-icon="mdi-account">
              </v-text-field>
              <v-text-field label="D.N.I"
                            prepend-icon="mdi-card-account-details-outline">
              </v-text-field>
              <v-text-field label="Phone"
                            prepend-icon="mdi-phone">
              </v-text-field>
              <v-text-field label="E-mail"
                            prepend-icon="mdi-mail">
              </v-text-field>
              <v-text-field label="Age"
                            prepend-icon="mdi-account">
              </v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider class="mx-2" inset vertical></v-divider>

      <!-- Data of the room-->
      <v-col md="3">
        <v-card height="500"
                width="400"
        >
          <v-card-title>Data Room</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-text-field label="Room"
                            prepend-icon="mdi-bed-king-outline">
              </v-text-field>
              <v-menu
                  ref="menu_in"
                  v-model="menu_in"
                  :close-on-content-click="false"
                  :return-value.sync="date_in"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      v-model="date_in"
                      label="Date in"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_in" no-title scrollable>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="menu_in = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_in.save(date_in)">OK</v-btn>
                </v-date-picker>
              </v-menu>
              <v-menu
                  ref="menu_out"
                  v-model="menu_out"
                  :close-on-content-click="false"
                  :return-value.sync="date_out"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                      v-model="date_out"
                      label="Date out"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="date_out" no-title scrollable>
                  <div class="flex-grow-1"></div>
                  <v-btn text color="primary" @click="menu_out = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menu_out.save(date_out)">OK</v-btn>
                </v-date-picker>
              </v-menu>
              <v-text-field label="Cost"
                            prepend-icon="mdi-cash-multiple">
              </v-text-field>
              <v-select label="Select Method Payment"
                                       :items="methods"
                                       item-text="name"
            ></v-select>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-divider class="mx-2" inset vertical></v-divider>

      <!--Information of the room-->
      <v-col md="5">
        <v-card height="500"
                width="400"
        >
          <v-card-title>Room Information</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-form>
              <v-select append-icon="mdi-bed"
                        label="Select Number of Beds"
                        :items="beds"
                        item-text="name"
              ></v-select>
              <v-select append-icon="mdi-bed-king"
                        label="Select Number of rooms"
                        :items="rooms"
                        item-text="name"
              ></v-select>
              <v-layout md="4">
                <v-card-subtitle>Breakfast S/. 30.00</v-card-subtitle>
                <v-text-field label="Yes or Not" prepend-icon="mdi-cash-multiple"></v-text-field>
              </v-layout>
              <v-layout md="4">
                <v-card-subtitle>Package Gold S/. 100.00</v-card-subtitle>
                <v-text-field label="Yes or Not" prepend-icon="mdi-cash-multiple"></v-text-field>
              </v-layout>
              <v-layout md="4">
                <v-card-subtitle>Pool S/. 30.00</v-card-subtitle>
                <v-text-field label="Yes or Not" prepend-icon="mdi-cash-multiple"></v-text-field>
              </v-layout>
              <v-layout md="4">
                <v-card-subtitle>Events S/. 50.00</v-card-subtitle>
                <v-text-field label="Yes or Not" prepend-icon="mdi-cash-multiple"></v-text-field>
              </v-layout>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>

    </v-layout>

  </v-app>

</template>

<script>
export default {
  name: "admin-register",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    drawer: null,

    date_in: new Date().toISOString().substr(0, 10),
    menu_in: false,
    date_out: new Date().toISOString().substr(0, 10),
    menu_out: false,
    modal: false,
    menu2: false,
    method:"",

    methods: [
      { name: "Cash"},
      { name: "Card" },
    ],
    dialog: false,
    beds: [
      { name: "1"},
      { name: "2" },
      { name: "3" },
      { name: "4" },
      { name: "5" },
    ],
    rooms: [
      { name: "1"},
      { name: "2" },
    ],
  }),
}
</script>

<style scoped>

</style>