<template>
  <v-app>
    <v-navigation-drawer app clipped permanent>
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
      <v-card flat color="rgba(63, 103, 250, 1)" to="/home">
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
    <h1>Schedule</h1>
    <div class="v-calendar">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar
                flat
            >
              <v-btn color="primary" dark @click.stop="dialog = true">
                New Event
              </v-btn>
              <v-btn
                  outlined
                  class="mr-4"
                  color="grey darken-2"
                  @click="setToday"
              >
                Today
              </v-btn>
              <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="prev"
              >
                <v-icon small>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-btn
                  fab
                  text
                  small
                  color="grey darken-2"
                  @click="next"
              >
                <v-icon small>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-spacer></v-spacer>
              <v-menu
                  bottom
                  right
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                      outlined
                      color="grey darken-2"
                      v-bind="attrs"
                      v-on="on"
                  >
                    <span>{{ typeToLabel[type] }}</span>
                    <v-icon right>
                      mdi-menu-down
                    </v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item @click="type = 'day'">
                    <v-list-item-title>Day</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'week'">
                    <v-list-item-title>Week</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = 'month'">
                    <v-list-item-title>Month</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="type = '4day'">
                    <v-list-item-title>4 days</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-toolbar>
          </v-sheet>
          <v-dialog v-model="dialog" max-width="500">
            <v-card>
              <v-container>
                <v-form @submit.prevent="addEvent">
                  <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
                  <v-text-field v-model="details" type="text" label="detail"></v-text-field>
                  <v-text-field v-model="start" type="date" label="start (required)"></v-text-field>
                  <v-text-field v-model="end" type="date" label="end (required)"></v-text-field>
                  <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
                  <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false">
                    create event
                  </v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDate" max-width="500">
            <v-card>
              <v-container>
                <v-form @submit.prevent="addEvent">
                  <v-text-field v-model="name" type="text" label="event name (required)"></v-text-field>
                  <v-text-field v-model="details" type="text" label="detail"></v-text-field>
                  <v-text-field v-model="start" type="date" label="start (required)"></v-text-field>
                  <v-text-field v-model="end" type="date" label="end (required)"></v-text-field>
                  <v-text-field v-model="color" type="color" label="color (click to open color menu)"></v-text-field>
                  <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false">
                    create event
                  </v-btn>
                </v-form>
              </v-container>
            </v-card>
          </v-dialog>
          <v-sheet height="600">
            <v-calendar
                ref="calendar"
                v-model="focus"
                color="primary"
                :events="events"
                :event-color="getEventColor"
                :type="type"
                @click:event="showEvent"
                @click:more="viewDay"
                @click:date="viewDay"
                @change="updateRange"
            ></v-calendar>
            <v-menu
                v-model="selectedOpen"
                :close-on-content-click="false"
                :activator="selectedElement"
                offset-x
            >
              <v-card
                  color="grey lighten-4"
                  min-width="350px"
                  flat
              >
                <v-toolbar
                    :color="selectedEvent.color"
                    dark
                >
                  <v-btn @click="deleteEvent(selectedEvent.id)" icon>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                  <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                  <v-spacer></v-spacer>

                </v-toolbar>
                <v-card-text>
                  <form v-if="currentlyEditing !== selectedEvent.id">
                    {{selectedEvent.details}}
                  </form>
                  <form v-else>
                    <textarea
                        v-model="selectedEvent.details"
                        type="text"
                        style="width: 100%"
                        :min-heigth="100"
                        placeholder = "add note"
                    >

                    </textarea>
                  </form>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                      text
                      color="secondary"
                      @click="selectedOpen = false"
                  >
                    Close
                  </v-btn>
                  <v-btn
                      v-if="currentlyEditing !== selectedEvent.id"
                      @click.prevent="editEvent(selectedEvent)"
                  >
                    Edit
                  </v-btn>
                  <v-btn
                       text v-else
                      @click.prevent="updateEvent(selectedEvent)"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
          </v-sheet>
        </v-col>
      </v-row>
    </div>


  </v-app>

</template>

<script>
import EventsApiServices from "../../core/services/events-api.services";

export default {

  name: "admin-schedule",

  data: () => ({
    cards: [
      { title: 'Register', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/register.jpg'), path: '/admin-register' },
      { title: 'Rooms', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/rooms.jpg'), path: '/admin-rooms'},
      { title: 'Inventory', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/inventory.png'), path: '/admin-inventory' },
      { title: 'Client', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/client.jpg'), path: '/admin-client'},
      { title: 'Schedule', color: 'rgba(63, 103, 250, 1)', src: require('@/assets/img/schedule.jpg'), path: '/admin-schedule' },
      { title: 'Staff', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/staff.jpg'), path: '/admin-staff'},
      { title: 'Costs', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/costs.jpg'), path: '/admin-costs' },
      { title: 'Feedback', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/feedback.jpg'), path: '/admin-feedback' },
      { title: 'Publicity', color: 'rgba(63, 103, 250, 0.3)', src: require('@/assets/img/publicity.jpeg'), path: '/admin-publicity' },
    ],
    focus: '',
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    id:null,
    name:null,
    details: null,
    start:null,
    end:null,
    color:"#1976D2",
    dialog:false,
    dialogDate:false,
    currentlyEditing:null,
    currentlyDeleting:null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    eventsAux:[],
    colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
    names: ['Cooking', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
  }),
  mounted () {
    this.$refs.calendar.checkChange()
  },
  methods: {
    viewDay ({ date }) {
      this.focus = date
      this.type = 'day'
    },
    getEventColor (event) {
      return event.color
    },
    setToday () {
      this.focus = ''
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    editEvent(event){
      this.currentlyEditing = event.id;
    },
    showEvent ({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        console.log(event);
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }

      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }

      nativeEvent.stopPropagation()
    },
    addEvent(){
      EventsApiServices.create({
        name: this.name,
        details: this.details,
        start: this.start,
        end: this.end,
        color: this.color,
        timed: true
      })
      console.log(this.name);
    },
    deleteEvent(event){
      EventsApiServices.delete(event);
    },
    updateEvent(event){
      event =this.selectedEvent;
      console.log(event);
      EventsApiServices.update(this.selectedEvent.id,{
        name: this.selectedEvent.name,
        details: this.selectedEvent.details,
        start: this.selectedEvent.start,
        end: this.selectedEvent.end,
        color: this.selectedEvent.color,
        timed: true
      })
    },
    getDisplayEvents(events){
      return{
        name: events.name,
        details: events.details,
        start: events.start,
        end: events.end
      }
    },
    updateRange () {
      if(!this.$route.params.id) {
        EventsApiServices.getAll()
            .then(response => {

              for (let i = 0; i < response.data.length; i++) {
                const id = response.data[i].id;
                const name = response.data[i].name;
                const details = response.data[i].details;
                const start = new Date(response.data[i].start);
                const end = new Date(response.data[i].end);
                const color = response.data[i].color;
                //const timed= response.data[i].timed
                this.events.push({
                  id: id,
                  name: name,
                  details: details,
                  start: start,
                  end: end,
                  timed: true,
                  color: color
                });
              }

              console.log(this.eventsAux);
              //console.log( response.data[0]);
            })
            .catch(e => {
              console.log(e);
            });
        this.events = this.eventsAux;

        console.log(this.events);
      } else{
        EventsApiServices.getAll()
            .then(response => {

              for (let i = 0; i < response.data.length &&  response.data[i].staffId === this.$route.params.id; i++) {
                const id = response.data[i].id;
                const name = response.data[i].name;
                const details = response.data[i].details;
                const start = new Date(response.data[i].start);
                const end = new Date(response.data[i].end);
                const color = response.data[i].color;
                //const timed= response.data[i].timed
                this.events.push({
                  id: id,
                  name: name,
                  details: details,
                  start: start,
                  end: end,
                  timed: true,
                  color: color
                });
              }

              console.log(this.eventsAux);
              //console.log( response.data[0]);
            })
            .catch(e => {
              console.log(e);
            });
      }
    //  console.log(this.events);
    },

    rnd (a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a
    },
  },
}
</script>

<style scoped>

</style>
