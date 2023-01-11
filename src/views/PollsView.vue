<template>
    <div id="content">
        <div class="gridContainer">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
                <h1>Upcoming Polls</h1>
                <q-btn outline icon-right="keyboard_arrow_down" style="color: var(--primary-red);" label="Date" />
            </div>
            <div class="grid">
                <PollCard v-for="poll in polls" :key="poll.id" :poll="poll" />
            </div>
        </div>
    </div>
</template>

<script>
import PollCard from "../components/poll/PollCard.vue"
export default {
    name: "PollsView",
    components: {
        PollCard
    },
    data() {
        return {
            polls:[]
        }
    },
    async mounted() {
        fetch("http://localhost:8080/polls")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.polls = data;
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