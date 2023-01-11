import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PollsView from "../views/PollsView.vue"
import PollView from "../views/PollView.vue"
import CreatePollView from "../views/CreatePollView.vue";
import UpdatePollView from "../views/UpdatePollView.vue";
import EventsView from "../views/EventsView.vue";
import EventView from "../views/EventView.vue";
import CreateEventView from "../views/CreateEventView.vue";
import UpdateEventView from "../views/UpdateEventView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: "/polls/",
    name: "polls",
    component: PollsView
  }, {
    path: "/poll/:id",
    name: "poll",
    component: PollView
  }, {
    path: "/createpoll",
    name: "createpoll",
    component: CreatePollView
  }, {
    path: "/updatepoll/:id",
    name: "updatepoll",
    component: UpdatePollView
  }, {
    path: "/events",
    name: "events",
    component: EventsView
  }, {
    path: "/event/:id",
    name: "event",
    component: EventView
  }, {
    path: "/createevent",
    name: "createevent",
    component: CreateEventView
  }, {
    path: "/updateevent/:id",
    name: "updateevent",
    component: UpdateEventView
  }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
