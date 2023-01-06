<template>
    <div id="content">
        
        
        <div class="gridContainer">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
                <h1>Upcoming Events</h1>
                <q-btn outline icon-right="keyboard_arrow_down" style="color: var(--primary-red);" label="Date" />
            </div>
            <div class="grid">
                <EventCard v-for="event in events" :key="event.id" :event="event" />
            </div>
        </div>
    </div>
</template>

<script>
//import {events} from "../fake-data"
import EventCard from "../components/events/EventCard.vue"
export default {
    name: "EventsView",
    components: {
        EventCard
    },
    data() {
        return {
            events:[]
        }
    },
    async mounted() {
        fetch("http://localhost:8080/events")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.events = data;
        })
    }
}
</script>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
}
</style>