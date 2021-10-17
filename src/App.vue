<template>
  <v-app>
    <v-app-bar app color="black green--text">
      <v-app-bar-title>
        <!--<span class="display-1">Hello Hotel</span>-->
        <v-img max-height="50"
               max-width="50"
               src="./assets/HelloHotel.png"></v-img>
      </v-app-bar-title>
      <v-btn plain to="/home" color="green" class="display-1">Hello Hotel</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain to="/client" color="yellow">Client</v-btn>
      <v-btn plain to="/administrator" color="blue">Administrator</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>

    </v-app-bar>
    <v-main>
      <v-container fluid>
        <router-view/>

      </v-container>
    </v-main>
    <v-footer padless>
      <v-col
          class="blue text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>HelloHotel</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    cards: [
      { title: 'Una app para brindar un sistema de gestión de hoteles y clientes.', src: require('@/assets/Hotel1.jpg')},
      { title: 'La aplicación permitirá monitorear los registros de los hoteles como datos de los huéspedes', src: require('@/assets/Hotel2.jpg')},
      { title: 'Estancia, control de salidas. Asimismo facilita la gestion de los hoteles!', src: require('@/assets/hoteles3.jpg')},
    ],
  }),
}
</script>

<style>
</style>
