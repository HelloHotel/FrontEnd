<template>
  <v-app>
    <v-app-bar app color="black green--text">
      <v-app-bar-title>
        <!--<span class="display-1">Hello Hotel</span>-->
        <v-img max-height="50"
               max-width="50"
               src="@/assets/HelloHotel.png"></v-img>
      </v-app-bar-title>
      <v-btn plain to="/home" color="green" class="display-1">Hello Hotel</v-btn>
      <v-spacer></v-spacer>
      <v-btn plain to="/client-login" color="yellow">Client</v-btn>
      <v-btn plain to="/admin-login" color="blue">Administrator</v-btn>
      <v-btn plain to="/about" color="white">About</v-btn>
    </v-app-bar>
    <v-main>
      <v-content>
        <v-container fluid>
          <router-view/>
          <v-carousel v-model="model">
            <v-carousel-item
                v-for="card in cards"
                :key="card.title"
            >
              <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="500px"
                  width="2000px"
              >
                <v-card-text v-text="card.title"></v-card-text>
              </v-img>
              <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
              >
                <div class="text-h2">
                  Slide {{ i + 1 }}
                </div>
              </v-row>
            </v-carousel-item>
          </v-carousel>

          <!--Services-->
          <v-divider></v-divider>
          <v-col>
            <v-card-title class="layout justify-center">Services</v-card-title>
          </v-col>
          <v-layout>
            <v-divider></v-divider>
            <v-col md="4">
              <v-card color="black"
                      height="500"
              >
                <v-card-title class="blue--text layout justify-center">Gestion de Hoteles</v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle class="white--text text-center">Hello hotel te permite gestionar tu hotel en tiempo real desde cualquier lugar!</v-card-subtitle>
                <v-img
                    class="mx-auto"
                    contain
                    src="@/assets/landingPage/gestion.png"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    max-height="300px"
                    max-width="400px"
                >
                </v-img>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card color="black"
                      height="500"
              >
                <v-card-title class="blue--text layout justify-center">Localización Hoteles</v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle class="white--text text-center">Hello hotel ubica a los hoteles más cercanos a ti y así puedas reservar uno!</v-card-subtitle>
                <v-img
                    class="mx-auto"
                    contain
                    src="@/assets/landingPage/Gps.png"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    max-height="300px"
                    max-width="400px"
                >
                </v-img>
              </v-card>
            </v-col>
            <v-col md="4">
              <v-card color="black"
                      height="500"
              >
                <v-card-title class="blue--text layout justify-center">Calificación de Expericia</v-card-title>
                <v-divider></v-divider>
                <v-card-subtitle class="white--text text-center">Hello hotel te ofrece un sistema para compartir tus experiencias!</v-card-subtitle>
                <v-img
                    class="mx-auto"
                    contain
                    src="@/assets/landingPage/calificar.png"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    max-height="300px"
                    max-width="400px"
                >
                </v-img>
              </v-card>
            </v-col>
          </v-layout>

          <!--Plans HelloHotel-->
          <v-divider></v-divider>
          <v-card color="grey lighten-3">
            <v-col>
              <v-card-title class="layout justify-center">Plans Hello Hotel</v-card-title>
            </v-col>
            <v-layout>
              <!--Standard-->
              <v-col md="4">
                <v-card
                    height="400"
                    color="yellow" rounded
                >
                  <v-card-title class="white--text layout justify-center">Standard</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto">$ 6/m</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="white--text text-center">Busqueda de hoteles</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Servicio de chat</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Sección de valoranciones</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">1 Email Account</v-card-subtitle>
                  <v-divider inset class="white--text"></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto" to="/client-login">Sign Up Now</v-btn>
                  </v-card-actions>

                </v-card>
              </v-col>
              <!--Administrator-->
              <v-col md="4">
                <v-card
                    height="450"
                    color="blue" rounded
                >
                  <v-card-title class="white--text layout justify-center">Administrator</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto">$ 29/m</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="white--text text-center">Gestion de hotel</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Generador de reportes</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Base de datos</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">1 Email Account admin</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">24/7 Technical Support</v-card-subtitle>
                  <v-divider inset class="white--text"></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto" to="/admin-login">Sign Up Now</v-btn>
                  </v-card-actions>

                </v-card>
              </v-col>
              <!--Corporative-->
              <v-col md="4">
                <v-card
                    height="400"
                    color="orange" rounded
                >
                  <v-card-title class="white--text layout justify-center">Corporative</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto">$ 49/m</v-btn>
                  </v-card-actions>
                  <v-card-subtitle class="white--text text-center">Cadenas de hoteles</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Gestion de hoteles</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">Base de datos</v-card-subtitle>
                  <v-card-subtitle class="white--text text-center">24/7 Technical Support</v-card-subtitle>
                  <v-divider inset class="white--text"></v-divider>
                  <v-card-actions>
                    <v-btn color="white" class="black--text mx-auto" to="/admin-login">Sign Up Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-layout>
          </v-card>

          <!--Service Data Team-->
          <v-divider></v-divider>
          <v-card color="black">
            <v-col>
              <v-card-title class="layout justify-center white--text">Service Data Team</v-card-title>
            </v-col>
            <v-layout wrap>
              <v-col md="3">
                <v-card
                    height="350"
                    outlined color="transparent" rounded
                >
                  <v-card-text class="blue--text text-center">Software Engineer</v-card-text>
                  <v-card-text class="white--text text-center">Josue Cartagena</v-card-text>
                  <v-img
                      class="mx-auto"
                      src="@/assets/team/josue.jpeg"
                      contain
                      max-height="200px"
                      max-width="300px"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col md="3">
                <v-card
                    height="350"
                    outlined color="transparent" rounded
                >
                  <v-card-text class="blue--text text-center">Software Engineer</v-card-text>
                  <v-card-text class="white--text text-center">Miner Lozano</v-card-text>
                  <v-img
                      class="mx-auto"
                      src="@/assets/team/Miner.jpeg"
                      contain
                      max-height="200px"
                      max-width="300px"
                  >
                  </v-img>
                </v-card>
              </v-col>
              <v-col md="3">
                <v-card
                    height="350"
                    outlined color="transparent" rounded
                >
                  <v-card-text class="blue--text text-center">Software Engineer</v-card-text>
                  <v-card-text class="white--text text-center">Alonso Paredes</v-card-text>
                  <v-img
                      class="mx-auto"
                      src="@/assets/team/Alonso.jpeg"
                      contain
                      max-height="200px"
                      max-width="300px"
                  >
                  </v-img>
                </v-card>
              </v-col>

            </v-layout>
          </v-card>

          <!--Contact Us-->
          <v-divider></v-divider>
          <v-card color="white">
            <v-col>
              <v-card-title class="layout justify-center black--text">Contact Us</v-card-title>
              <v-card-subtitle class="layout justify-center black--text">Leave us your doubts or questions. Tell us what you want to know more!</v-card-subtitle>
            </v-col>
            <v-layout class="justify-center" >
              <v-card width="900">
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col md="6">
                        <v-text-field label="First Name"></v-text-field>
                      </v-col>
                      <v-col md="6">
                        <v-text-field label="Last Name"></v-text-field>
                      </v-col>
                      <v-col md="6">
                        <v-text-field label="E-mail"></v-text-field>
                      </v-col>
                    </v-row><v-textarea></v-textarea>
                    <v-card-actions>
                      <v-btn color="yellow" class="white--text mx-auto">Enviar</v-btn>
                    </v-card-actions>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-layout>
          </v-card>

        </v-container>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Home_App",
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

<style scoped>

</style>