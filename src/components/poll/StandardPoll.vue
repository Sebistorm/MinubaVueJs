<template>
    <div class="pollContainer">
        <h1>{{ poll.title }}</h1>
        <form>
            <p>{{ poll.description }}</p>
            <div style="display:flex;">
                <div class="left">
                    <genericRadioButtonWithLabel v-for="answer in poll.pollAnswers" :key="answer.id" :value="answer.pollAnswers" :radioName="answer.pollAnswers" :slug="answer.pollAnswers" />  
                </div>
                <div class="right">
                    <q-btn class="mb-20" style="background: var(--primary-green); color: var(--primary-white);" label="Vote" />
                    <div class="votesContainer">
                        <h6>Votes</h6>
                        <h4>25</h4>
                    </div>
                    <q-btn class="mt-20" style="background: var(--primary-red); color: var(--primary-white); margin-bottom: 10px;" label="Withdraw Vote" />
                </div>
            </div>
        </form> 
    </div>
</template>

<script>
import genericRadioButtonWithLabel from "../generic/RadiobuttonWithLabel.vue";
export default {
    name: "StandardPoll",
    props: ["poll"],
    components: {
        genericRadioButtonWithLabel
    },
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