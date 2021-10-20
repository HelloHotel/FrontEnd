<template>
  <v-app>

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
