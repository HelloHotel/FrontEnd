<template>
  <app>
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
      <v-layout v-for="hotel in hotels"
                :key="hotel.city"
                row>
        <v-col md="4">
          <v-card
              class="mx-auto"
              max-width="400"
              height="350"
              outlined
          >
            <v-card-title class="text-h5 mb-1" v-text="hotel.name"></v-card-title>
            <v-card-subtitle class="text-overline mb-1" v-text="hotel.city"></v-card-subtitle>
            <v-col>
              <v-img
                  :src="hotel.src"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="150px"
                  width="300px"
              ></v-img>
            </v-col>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn to="client-search" fab x-small class="white--text" color="rgba(63, 103, 250, 1)">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
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
              <v-btn rounded disabled class="white--text" color="rgba(63, 103, 250, 1)">See Offer</v-btn>
              <v-btn fab x-small class="white--text" color="rgba(63, 103, 250, 1)">
                <v-icon>mdi-google-maps</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-divider vertical></v-divider>
        <v-col md="3">
          <v-card height="500"
                  width="400"
          >
            <v-card-title>Room Data</v-card-title>
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
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-divider inset vertical></v-divider>
        <v-col md="4">
          <v-card height="500"
                  width="400"
          >
            <v-card-title>Complements</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-form>
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
                <v-card-title>Total: S/.1,700.00</v-card-title>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-dialog
                  v-model="dialog1"
                  width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn rounded class="white--text" color="rgba(63, 103, 250, 1)"
                         v-bind="attrs"
                         v-on="on"
                  >
                    Register
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title class="text-h5 lighten-2">Payment</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col md="10">
                          <v-text-field label="Name and Last Name" append-icon="mdi-account"></v-text-field>
                        </v-col>
                        <v-col md="10">
                          <v-text-field label="E-mail" append-icon="mdi-email"></v-text-field>
                        </v-col>
                        <v-col md="4">
                          <v-text-field label="Phone" append-icon="mdi-cellphone"></v-text-field>
                        </v-col>
                        <v-col md="6">
                          <v-text-field label="Card" append-icon="mdi-credit-card-outline"></v-text-field>
                        </v-col>
                        <v-col md="4">
                          <v-text-field label="Date" append-icon="mdi-calendar"></v-text-field>
                        </v-col>
                        <v-col md="4">
                          <v-text-field label="CVV" append-icon="mdi-credit-card-settings"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn to="client-search" rounded class="white--text" color="rgba(63, 103, 250, 1)">Pay</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-layout>
    </v-container>
  </app>

</template>

<script>
export default {
  name: "client-offer",

  data: () => ({
    drawer: false,

    nav_lists:[
      {name: 'Account',icon: 'mdi-account'},
      {name: 'News',icon: 'mdi-newspaper'},
      {name: 'Configuration',icon: 'mdi-cogs'},
      {name: 'Help',icon: 'mdi-view-account-question'},
      {name: 'Contact us',icon: 'mdi-account-group'},
    ],

    hotels: [
      { city: 'Lima', name: 'Holiday Inn Lima Miraflores',star: 5, src: require('@/assets/img/hotels/holiday_Inn_Lima.png'),description: "Hotel reconocido internacionalmente, cuenta con habitaciones totalmente equipadas, sala de conferencias, piscinas exteriores e interiores, servicios de limpieza y lavanderia" },
     ],
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
    date_in: new Date().toISOString().substr(0, 10),
    menu_in: false,
    date_out: new Date().toISOString().substr(0, 10),
    menu_out: false,
    modal: false,
    menu2: false,

    dialog1:false,

  })
}
</script>

<style scoped>

</style>