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
              <v-btn to="/client-offer" rounded class="white--text" color="rgba(63, 103, 250, 1)">See Offer</v-btn>
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
  name: "client-search",

  data: () =>({
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
     { city: 'Lima', name: 'Swissôtel Lima',star: 5, src: require('@/assets/img/hotels/Swissôtel.png'),description: "Diseñado pensando en el hombre de negocios o de placer, nuestras habitaciones están decoradas con un elegante estilo y equipadas con acceso a Internet de alta velocidad, y tendra acceso a modernas salas de reunion privadas" },
      { city: 'Piura', name: 'Best Western Plus Urban Larco',star: 3, src: require('@/assets/img/hotels/Best Western.png'),description: "Hermoso Hotel que cuenta con una hermosa vista del Océano Pacifico, en los alrededores podrá encontrar museos, restaurantes, cafés, cines, salones de belleza, entre otros" },
      { city: 'Lima', name: 'Manto Hotel Lima - Mgallery By Sofitel',star: 5, src: require('@/assets/img/hotels/Manto Hotel.png'),description: "Disfruta del auténtico lujo de recargar energías en el corazón financiero, comercial de Perú, rodeado de zonas verdes, y dar un paseo agradable y seguro hasta los mejores restaurantes de San Isidro y Miraflores" },
      { city: 'Arequipa', name: 'Jose Antonio Deluxe',star: 3, src: require('@/assets/img/hotels/Jose Antonio.png'),description: "Las instalaciones incluyen un restaurante, un bar, servicio de habitaciones, una lavandería, una sala de conferencias y un centro de negocios" },
      { city: 'Cuzco', name: 'Best Western Los Andes de America',star: 4, src: require('@/assets/img/hotels/Western Los Andes.png'),description: "Hotel que tiene una singular combinación de infraestructura de hotel moderno y arquitectura colonial, disponen de televisión por cable con mando a distancia, canales de películas, minibar y puertos de datos" },
      { city: 'Cuzco', name: 'Xima Cusco Hotel',star: 4, src: require('@/assets/img/hotels/Xima Cusco.png'),description: "Hotel ecológico ya que cuenta con acabados naturales en construcción, luz natural en corredores, uso de sistema solar para agua caliente e iluminación externa, además servicio de habitación y servicio de lavandería" },
      { city: 'Cuzco', name: 'Esplendor Cusco',star: 4, src: require('@/assets/img/hotels/Esplendor Cusco.png'),description: "Hotel con habitaciones decoradas a medida, combinando historia, patrimonio y modernidad, elevando al huésped a una experiencia sensorial única, y un patio histórico con un exclusivo hidromasaje" },
      { city: 'Piura', name: 'Punta Pacífico Bungalows',star: 5, src: require('@/assets/img/hotels/Punta Pacífico Bungalows.png'),description: "Hotel que cuenta con internet vía Wi-Fi gratuito en todas las instalaciones, así con un gazebo con 8 hamacas y una sala de estar. Estacionamiento dentro de las instalaciones. Área de fogatas y de barbacoa" },
    ],
    items: [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' },
      { id: 3, name: 'foo' },
      { id: 4, name: 'fizz' },
      { id: 5, name:  'bar' }],
    value: null,
  }),

}
</script>

<style scoped>

</style>