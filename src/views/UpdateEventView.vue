<template>
    <div id="content">
        <div class="formContent">
            <h1>Update Event</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="event.title" label="Title *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input class="mb-10" outlined type="textarea" v-model="event.description" label="Insert description here *" lazy-rules :rules="[
                        val => val && val.length > 0 || 'Please type something'
                    ]" />

                    <q-input class="mb-10" outlined v-model="event.location" label="Location *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />
                </div>
                <div class="right">
                    <q-input class="mb-10" v-model="event.date" outlined type="date" stack-label label="Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a date']" />

                    <q-input class="mb-10" v-model="event.startTime" outlined type="time" stack-label label="Start Time"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a start time']" />

                    <q-input class="mb-10" v-model="event.endTime" outlined type="time" stack-label label="End Time"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a end time']" />
                </div>
                
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Update Event" />
                </div>
            </q-form>
        </div>

    </div>
</template>

<script>
export default {
    name: "UpdateEventView",
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
            console.log(this.event.date);
        })
    },
    methods: {
        async onSubmit() {
                console.log("submit!")
                console.log(this.event);

                const fetchOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.event)
                }

                const response = await fetch(`http://localhost:8080/event/${this.$route.params.id}`, fetchOptions);
                if (response.ok) {
                    console.log(response.ok);
                }
            }
    }, 
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