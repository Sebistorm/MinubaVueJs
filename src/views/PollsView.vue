<template>
    <div id="content">
        <div class="gridContainer">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
                <div class="header__left">
                    <h1>Polls</h1>
                    <routerLink :to="'/createpoll/'">
                        <span class="material-icons add-icon">
                            add_circle_outline
                        </span>
                    </routerLink>
                </div>
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