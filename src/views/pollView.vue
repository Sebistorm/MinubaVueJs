<template>
    <div id="content">
        <CoworkerOfTheMonthPoll :poll="poll" v-show="poll.type == 'CoWorker of the month' " />
        <StandardPoll :poll="poll" v-show="poll.type == 'Standard Poll' " />
        <div class="eventAdminButtons">
            <routerLink :to="'/updatepoll/' + poll.pollId">
                <q-btn type="button" style="background: var(--primary-green); color: var(--primary-white);" label="Update Event" />
            </routerLink>
            <q-btn @click="confirm = true" type="button" style="background: var(--primary-grey); color: var(--primary-white);" label="Delete Event" />
        </div>
    </div> 

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure that you want to delete this event?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn @click="deletePoll" flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'
import CoworkerOfTheMonthPoll from "../components/poll/CoworkerOfTheMonth.vue"
import StandardPoll from "../components/poll/StandardPoll.vue";
export default {
    name: "pollView",
    components: {
        CoworkerOfTheMonthPoll,
        StandardPoll
        
    },
    setup () {
        return {
            confirm: ref(false),
        }
    },
    data () {
        return {
            poll: {}
        }
    },
    async mounted() {
        fetch(`http://localhost:8080/poll/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.poll = data;
            console.log(this.poll);
        })
    },
    methods: {
        async deletePoll() { 
            const fetchOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
                }
            }

            const response = await fetch(`http://localhost:8080/poll/${this.$route.params.id}`, fetchOptions);
            if (response.ok) {
                console.log(response.ok);
                router.push("/polls/");
            }
        }
    }
}

</script>

<style scoped>

#content {
    display: flex;
    flex-direction: column;
}
.eventAdminButtons {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.eventAdminButtons * {
    text-decoration: none;
}
</style>