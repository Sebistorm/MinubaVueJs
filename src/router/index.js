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
import News from "../views/NewsView.vue"
import CreateNewsView from "../views/CreateNewsView.vue"
import SingleNewsView from "../views/SingleNewsView.vue";
import UpdateNews from "../views/UpdateNewsView.vue";

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
  }, {
    path: "/news",
    name: "news",
    component: News
  }, {
    path: "/news/:id",
    name: "singlenews",
    component: SingleNewsView
  }, {
    path: "/createnews",
    name: "createnews",
    component: CreateNewsView
  }, {
    path: "/updatenews/:id",
    name: "updatenews",
    component: UpdateNews
  }
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
