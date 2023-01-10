<template>
    <div id="content">
        <div class="formContent">
            <h1>Create Event</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="title" label="Title *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input class="mb-10" outlined type="textarea" v-model="description" label="Insert description here *" lazy-rules :rules="[
                        val => val && val.length > 0 || 'Please type something'
                    ]" />

                    <q-input class="mb-10" outlined v-model="location" label="Location *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />
                </div>
                <div class="right">
                    <q-input class="mb-10" v-model="date" outlined type="date" stack-label label="Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a date']" />

                    <q-input class="mb-10" v-model="startTime" outlined type="time" stack-label label="Start Time"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a start time']" />

                    <q-input class="mb-10" v-model="endTime" outlined type="time" stack-label label="End Time"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a end time']" />
                </div>
                
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Create Event" />
                </div>
            </q-form>
        </div>

    </div>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
    name: "CreateEventView",
    
    setup() {
        const title = ref(null)
        const description = ref(null)
        const date = ref(null)
        const startTime = ref(null)
        const endTime = ref(null)
        const location = ref(null)

        return {
            title,
            description,
            date,
            startTime,
            endTime,
            location,

            async onSubmit() {
                console.log("submit!")
                let event = {};
                event.title = title.value;
                event.description = description.value;
                event.date = date.value;
                event.startTime = startTime.value;
                event.endTime = endTime.value;
                event.location = location.value;
                event.imagePath = "https://www.vcs.ca/wp-content/uploads/2020/04/events.jpg";
                console.log(event);

                const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(event)
                }

                const response = await fetch("http://localhost:8080/event", fetchOptions);
                if (response.ok) {
                const data = await response.json();
                console.log(data);
                router.push(`/event/${data.id}`);
                
                }
            }
        }
    }
}
</script>

<style scoped>

.formContent {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.left, .right {
    width: 50%;
}

.left {
    padding-right: 2rem;
}

.right {
    padding-left: 2rem;
}

.form {
    display: flex;
    flex-wrap: wrap;
}

</style>