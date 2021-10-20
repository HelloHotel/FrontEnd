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
    <h1>Staff</h1>

    <v-divider></v-divider>
    <v-col cols="12" sm="12">
      <v-data-table
          :headers="headers"
          :items="employees"
          :search="title"
          sort-by="room">
        <template v-slot:top>
          <v-toolbar
              flat
          >
            <v-text-field v-model="title" append-icon="mdi-magnify"
                          label="Enter the name of the employee"
                          single-line hide-details
            ></v-text-field>
            <v-divider
                class="mx-4"
                inset
                vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog
                v-model="dialog"
                max-width="500px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                    color="primary"
                    dark
                    class="mb-2"
                    v-bind="attrs"
                    v-on="on"
                >
                  New Employee
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <v-text-field
                            v-model="editedItem.name"
                            label="Name"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <v-text-field
                            v-model="editedItem.lastname"
                            label="LastName"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <v-text-field
                            v-model="editedItem.email"
                            label="E-mail"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="4"
                      >
                        <v-text-field
                            v-model="editedItem.phone"
                            label="Phone"
                        ></v-text-field>
                      </v-col>
                      <v-col
                          cols="12"
                          sm="6"
                          md="8"
                      >
                        <v-text-field
                            v-model="editedItem.post"
                            label="Post"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                      color="blue darken-1"
                      text
                      @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
              small
              @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn
              color="primary"
              @click="retrieveEmployees"
          >
            Reset
          </v-btn>
        </template>
      </v-data-table>
    </v-col>
  </v-app>
</template>

<script>
import EmployeesApiService from "../../core/services/employees-api.services"
import axios from "axios";

export default {
  name: "admin-staff",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    drawer: null,

    employees: [],
    title: "",
    headers: [
      { text: 'Name', value: 'name', sortable: true, align:'center'},
      { text: 'Lastname', value: 'lastname', sortable:true},
      { text: 'D.N.I.', value: 'dni', sortable:true},
      { text: 'Age', value: 'age', sortable:true},
      { text: 'Email', value: 'email', sortable:true},
      { text: 'Phone', value: 'phone', sortable:true},
      { text: 'Post', value: 'post', sortable:true},
      { text: 'Actions', value: 'actions', sortable: false },
    ],

    dialog: false,
    dialogDelete: false,

    editedIndex: -1,
    editedItem: {
      id:0,
      name: '',
      lastname: '',
      dni: 0,
      age: 0,
      email: '',
      phone: 0,
      post: '',
    },
    defaultItem: {
      id:0,
      name: '',
      lastname: '',
      dni: 0,
      age: 0,
      email: '',
      phone: 0,
      post: '',
    },

  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  mounted() {
   this.retrieveEmployees();
  },
  methods:{

    getDisplayEmployees(employees){
      return{
        name: employees.name,
        lastname: employees.lastname,
        dni: employees.dni,
        age: employees.age,
        email: employees.email,
        phone: employees.phone,
        post: employees.post,
      }
    },

    retrieveEmployees(){
      EmployeesApiService.getAll()
          .then(response => {
            this.employees = response.data.map(this.getDisplayEmployees);
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },

    editItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
      const auxId = this.editedIndex + 1
      console.log(auxId)
      console.log(this.editedIndex)
      console.log(this.editedItem)
      console.log(this.editedIndex)
      console.log(this.editedItem.name)
    },

    deleteItem (item) {
      this.editedIndex = this.employees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.employees.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      let auxId = this.editedIndex + 1;
      console.log(this.editedIndex)
      console.log(this.editedItem.name)


     axios.put('http://localhost:3000/api/employees/'+auxId, {
           id: this.editedIndex + 1,
           name: this.editedItem.name,
           lastname: this.editedItem.dni,
           dni: this.editedItem.dni,
           age: this.editedItem.age,
           email: this.editedItem.email,
           phone: this.editedItem.phone,
           post: this.editedItem.post
         }
     )
      this.retrieveEmployees()
      this.close()

     /*
      EmployeesApiService.update(
           auxId, {
           id: this.editedIndex + 1,
           name: this.editedItem.name,
           lastname: this.editedItem.dni,
           dni: this.editedItem.dni,
           age: this.editedItem.age,
           email: this.editedItem.email,
           phone: this.editedItem.phone,
           post: this.editedItem.post
          }
      )
      this.close()*/
    },
  },

}
</script>

<style scoped>

</style>