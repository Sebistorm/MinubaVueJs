<template>
    <div id="content">
        <div class="left">
            <h1>{{event.title}}</h1>
            <p>{{event.date}} Kl. {{event.startTime}} - {{event.endTime}}</p>
            <p>{{event.location}}</p>
            <p>{{event.description}}</p>
            <div class="participantsBox">
                <p>23 Participants</p>
                <p>12 Invited</p>
            </div>
        </div>
        <div class="right">
            <img :src="event.imagePath" :alt="event.title">
            <div class="eventAdminButtons">
                <routerLink :to="'/updateevent/' + event.id">
                    <q-btn type="button" style="background: var(--primary-green); color: var(--primary-white);" label="Update Event" />
                </routerLink>
                <q-btn @click="confirm = true" type="button" style="background: var(--primary-grey); color: var(--primary-white);" label="Delete Event" />
            </div>
        </div>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure that you want to delete this event?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn @click="deleteEvent" flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'
export default {
    name: "EventView",
    setup () {
        return {
            confirm: ref(false),
        }
    },
    data() {
        return {
            event: {}
        }
    },
    async mounted() {
        fetch(`http://localhost:8080/events/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.event = data;
        })
    },
    methods: {
        async deleteEvent() { 
            const fetchOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
                }
            }

            const response = await fetch(`http://localhost:8080/event/${this.$route.params.id}`, fetchOptions);
            if (response.ok) {
                console.log(response.ok);
                router.push("/events/");
            }
        }
    }   
}
</script>

<style scoped>

.left {
    width:50%;
    padding-right: 2rem;
}

.left p:not(:last-of-type) {
    font-size: 18px;
}

.right {
    width:50%;
    padding-left: 2rem;
}

.right img {
    width:100%;
    border-radius: 5px;
}

p {
    margin-bottom: 10px;
}

.participantsBox {
    display: flex;
    background-color: var(--primary-red);
    color: var(--primary-white);
    border-radius: 10px;
    margin-top: 30px;
}

.participantsBox p {
    margin-bottom: 0px;
    width: 50%;
    text-align: center;
    font-size: 30px !important;
    padding: .5rem;
}

.participantsBox p:first-of-type {
    border-right: 1px solid var(--primary-white);
}

.participantsBox p:last-of-type {
    border-left: 1px solid var(--primary-white);
}

.eventAdminButtons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.eventAdminButtons * {
    text-decoration: none;
}

</style>