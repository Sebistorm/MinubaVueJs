<template>
    <div id="content">
        <div class="formContent">
            <h1>Update Poll</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="poll.title" label="Title *" lazy-rules
                    :rules="[val => val && val.length > 0 || 'Please type something']" />

                    <q-input class="mb-10" outlined type="textarea" v-model="poll.description" label="Insert description here *" lazy-rules :rules="[
                        val => val && val.length > 0 || 'Please type something'
                    ]" />
                </div>
                <div class="right">
                    <q-select class="mb-10" outlined v-model="poll.type" :options="options" label="Select Type *"
                    lazy-rules :rules="[val => val && val.length > 0|| 'Please select a type']" />

                    <q-input class="mb-10" v-model="poll.dateStart" outlined type="date" stack-label label="Start Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a start date']" />

                    <q-input class="mb-10" v-model="poll.dateEnd" outlined type="date" stack-label label="End Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a end date']" />
                </div>
                
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Update Poll" />
                </div>
            </q-form>
        </div>

    </div>
</template>

<script>
export default {
    name: "UpdatePollView",
    data() {
        return {
            poll: {},
            options: [
                'Standard Poll', 'CoWorker of the month'
            ]
        }
    },
    async mounted() {
        fetch(`http://localhost:8080/poll/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.poll = data;
            console.log(this.poll)
        })
    },
    methods: {
        async onSubmit() {
                console.log("submit!")
                console.log(this.poll);
                console.log(this.poll.pollAnswers);
                this.poll.pollAnswers[0].pollAnswers = "Ja!"
                if(this.poll.type.value != 'CoWorker of the month') {
                    this.poll.pollAnswers.forEach(answer => {
                        answer.pollId = this.poll.pollId;
                    });
                }
                console.log(this.poll);
                 
                const fetchOptions = {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(this.poll)
                }

                const response = await fetch(`http://localhost:8080/poll/${this.$route.params.id}`, fetchOptions);
                if (response.ok) {
                    console.log(response.ok);
                }
            },
            createValue (val, done) {
                done(val, 'add-unique')
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