<template>
    <div class="pollContainer">
        <h1>{{ poll.title }}</h1>
        <form>
            <p>{{ poll.description }}</p>
            <div style="display:flex;">
                <div class="left">
                    <GenericRadioButtonWithLabel v-for="answer in poll.pollAnswers" :key="answer.id" :value="answer.pollAnswers" :radioName="'answers'" :slug="answer.id" />  
                </div>
                <div class="right">
                    <q-btn @click="voteNow" class="mb-20" style="background: var(--primary-green); color: var(--primary-white);" label="Vote" />
                    <div class="votesContainer">
                        <h6>Votes</h6>
                        <h4>25</h4>
                    </div>
                    <q-btn @click="confirm = true" class="mt-20" style="background: var(--primary-red); color: var(--primary-white); margin-bottom: 10px;" label="Withdraw Vote" />
                </div>
            </div>
            <q-btn @click="icon = true" class="mt-10" style="background: var(--primary-orange); color: var(--primary-white); margin-bottom: 10px;" label="Show result" />
        </form> 
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure that you want to withdraw your vote?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn @click="withdrawVote" flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="icon">
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Poll Result</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-separator />

        <q-card-section style="max-height: 50vh" class="scroll">
          <GenericSliderPoolVotes v-for="element in pollResult" :key="element[1]" :votesCount="element[1]" :answer="element[0]" :totalVotes="totalVotesCount" />  
        </q-card-section>
      </q-card>
    </q-dialog>

</template>

<script>
import { ref } from 'vue'
import GenericRadioButtonWithLabel from "../generic/RadiobuttonWithLabel.vue";
import GenericSliderPoolVotes from "../generic/SliderPollVotes.vue"; 
export default {
    name: "StandardPoll",
    props: ["poll", "coWorkerId"],
    components: {
        GenericRadioButtonWithLabel,
        GenericSliderPoolVotes
    },
    setup () {
        return {
            confirm: ref(false),
            icon: ref(false),
            pollResult: [],
            totalVotesCount: 0
        }
    },
    async mounted() {
        fetch(`http://localhost:8080/pollResult/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.pollResult = data;
            console.log(this.pollResult)
            this.pollResult.forEach(element => {
                this.totalVotesCount = this.totalVotesCount + element[1]
            });
        })
    },
    methods: {
        async voteNow() {            
            if(document.querySelector('input[name="answers"]:checked')) {  
                let pollAnswerId = document.querySelector('input[name="answers"]:checked').value
                let pollVotes = {
                    pollAnswers: {
                        id: Number(pollAnswerId)
                    },
                    polls: {
                        pollId: this.poll.pollId
                    },
                    coWorkers: {
                        id: this.coWorkerId
                    }
                };
                const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(pollVotes)
                }
                const response = await fetch("http://localhost:8080/pollvote", fetchOptions);
                if (response.ok) {
                    console.log(response.ok);
                }
            }   
        },
        async withdrawVote() {
            const fetchOptions = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
                }
            }
            const response = await fetch(`http://localhost:8080/pollvote/${this.$route.params.id}/coworker/${this.coWorkerId}`, fetchOptions);
            if (response.ok) {
                console.log(response.ok);
            }
        }
    }
}
</script>

<style scoped>
.pollContainer {
    display: flex;
    flex-direction: column;
}

form {
    background-color: var(--primary-white);
    padding: 2rem;
    border: 1px solid var(--primary-black);
    border-radius: 10px;
}

.left, .right {
    width: 50%;
}

.right {
    display: flex;
    flex-direction: column;
    max-width: 241px;
    margin-left: auto;
    padding-right: 5rem;
    box-sizing: content-box;
    justify-content: center;
}

.votesContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;
}
</style>