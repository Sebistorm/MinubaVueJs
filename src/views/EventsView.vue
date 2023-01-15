<template>
    <div id="content">
        
        
        <div class="gridContainer">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
                <div class="header__left">
                    <h1>Events</h1>
                    <routerLink :to="'/createevent/'">
                        <span class="material-icons add-icon">
                            add_circle_outline
                        </span>
                    </routerLink>
                </div>
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
    .header__left{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: unset;
        text-decoration: none;
    }
    .add-icon {
        font-size: 2rem;
        margin-left: 1rem;
    }
</style>