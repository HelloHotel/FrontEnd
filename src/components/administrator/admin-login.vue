<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="log_in">

                <!--First scenario: Sign In-->
                <v-window-item :value="1">
                  <v-row>
                    <!--sign in-->
                    <v-col cols="12" md="8">
                      <v-card-text>
                        <v-btn icon color="black" to="/Home_App">
                          <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                        <h1 class="text-center display-2 text--accent-3 blue--text"
                        >Sign in</h1>
                        <v-form>
                          <v-text-field
                              label="User"
                              name="User"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                          />

                          <v-text-field
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="teal accent-3"
                          />
                        </v-form>
                        <h4 class="text-center mt-4"> - Or sign in with   -</h4>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="indigo" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue lighten-2" outlined>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn to="/administrator" rounded color="info">SIGN IN</v-btn>
                      </div>
                    </v-col>

                    <!--sign up and forgot password-->
                    <v-col>
                      <!--sign up-->
                      <v-col class="blue accent-3">
                        <v-card-text class="white--text ">
                          <h1 class="text-center display-1">Hello, Friend!</h1>
                          <h5 class="text-center">Enter your personal information and start your journey with us</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="log_in++">SIGN UP</v-btn>
                        </div>
                      </v-col>

                      <!--forgot password-->
                      <v-col class="black">
                        <v-card-text class="white--text">
                          <h1 class="text-center display-1">Hello, Costumer!</h1>
                          <h5 class="text-center">Did you forget your password?, please let us help you</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-dialog
                              v-model="dialog"
                              persistent
                              max-width="400px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn rounded outlined dark
                                  v-bind="attrs"
                                  v-on="on"
                              >
                                RESET
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5 ">Restore Password</span>
                              </v-card-title>
                              <v-divider></v-divider>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col md="8">
                                      <v-text-field
                                          label="E-mail"
                                          required
                                      ></v-text-field>
                                      <v-text-field
                                          label="New Password"
                                          required
                                      ></v-text-field>
                                      <v-text-field
                                          label="Confirm New Password"
                                          required
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue" text
                                    @click="dialog = false"
                                >
                                  Close
                                </v-btn>
                                <v-btn color="blue" text
                                       @click="dialog = false"
                                       to="/administrator"
                                >
                                  Save
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </v-col>

                    </v-col>
                  </v-row>
                </v-window-item>

                <!--Second scenario: Sign Up-->
                <v-window-item :value="2">
                  <v-row class="fill-height">

                    <!--sign in and forgot password-->
                    <v-col>
                      <!--sign in-->
                      <v-col class="blue accent-3">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Welcome Back!</h1>
                          <h5
                              class="text-center"
                          >To Keep connected with us please login with your personnel info</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-btn rounded outlined dark @click="log_in--">Sign in</v-btn>
                        </div>
                      </v-col>

                      <!--forgot password-->
                      <v-col class="black">
                        <v-card-text class="white--text mt-12">
                          <h1 class="text-center display-1">Hello, Costumer!</h1>
                          <h5 class="text-center">Did you forget your password?, please let us help you</h5>
                        </v-card-text>
                        <div class="text-center">
                          <v-dialog
                              v-model="dialog"
                              persistent
                              max-width="400px"
                          >
                            <template v-slot:activator="{ on, attrs }">
                              <v-btn rounded outlined dark
                                     v-bind="attrs"
                                     v-on="on"
                              >
                                RESET
                              </v-btn>
                            </template>
                            <v-card>
                              <v-card-title>
                                <span class="text-h5 ">Restore Password</span>
                              </v-card-title>
                              <v-divider></v-divider>
                              <v-card-text>
                                <v-container>
                                  <v-row>
                                    <v-col md="8">
                                      <v-text-field
                                          label="E-mail"
                                          required
                                      ></v-text-field>
                                      <v-text-field
                                          label="New Password"
                                          required
                                      ></v-text-field>
                                      <v-text-field
                                          label="Confirm New Password"
                                          required
                                      ></v-text-field>
                                    </v-col>
                                  </v-row>
                                </v-container>
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue" text
                                       @click="dialog = false"
                                >
                                  Close
                                </v-btn>
                                <v-btn color="blue" text
                                       @click="dialog = false"
                                       to="/administrator"
                                >
                                  Save
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-dialog>
                        </div>
                      </v-col>
                    </v-col>

                    <!--sign up-->
                    <v-col cols="12" md="8">
                      <v-card-text>
                        <v-btn icon color="black" to="/Home_App">
                          <v-icon>mdi-arrow-left</v-icon>
                        </v-btn>
                        <h1 class="text-center display-2 blue--text text--accent-3">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="indigo" outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="red" outlined>
                            <v-icon>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="blue lighten-2" outlined>
                            <v-icon>mdi-twitter</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field
                              label="Name"
                              name="Name"
                              prepend-icon="mdi-account"
                              type="text"
                              color="teal accent-3"
                          />
                          <v-text-field
                              label="Email"
                              name="Email"
                              prepend-icon="mdi-email"
                              type="text"
                              color="teal accent-3"
                          />
                          <v-text-field
                              id="password"
                              label="Password"
                              name="password"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="teal accent-3"
                          />
                          <v-text-field
                              id="password"
                              label="Confirm Password"
                              name="confirm password"
                              prepend-icon="mdi-lock"
                              type="password"
                              color="teal accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-dialog
                            v-model="dialog_sign_up"
                            persistent
                            max-width="350"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn rounded color="blue accent-3" dark v-bind="attrs" v-on="on">
                              SIGN UP
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="text-h6">
                              Thanks for be part of our family!
                            </v-card-title>
                            <v-card-actions>
                              <v-spacer></v-spacer>
                              <v-btn
                                  color="green darken-1"
                                  text
                                  @click="dialog_sign_up = false"
                                  :disabled="loading"
                                  to="/administrator"
                              >
                                Continue
                              </v-btn>
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "admin-login",
  data: () => ({
    log_in: 1,
    dialog: false,
    dialog_sign_up: false,
    loading: false
  }),

  methods: {
    async remove () {
      this.loading = true

      await new Promise(resolve => setTimeout(resolve, 3000))

      this.loading = false
    },
  },

  props: {
    source: String
  }
}
</script>

<style scoped>

</style>