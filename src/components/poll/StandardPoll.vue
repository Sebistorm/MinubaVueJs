<template>
    <div class="pollContainer">
        <h1>Poll</h1>
        <form>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum explicabo quisquam ipsum inventore vel consectetur adipisicing elit. Laborum explicabo quisquam ipsum inventore velconsectetur adipisicing elit. Laborum explicabo quisquam ipsum inventore vel distinctio nobis ipsa fugit ut ex earum accusamus minus, quod, possimus impedit quia cumque. Numquam, deleniti?</p>
            <div style="display:flex;">
                <div class="left">
                    <genericRadioButtonWithLabel :value="'Answer1'" :radioName="'answer'" :slug="'answer1'" /> 
                    <genericRadioButtonWithLabel :value="'Answer2'" :radioName="'answer'" :slug="'answer2'" /> 
                    <genericRadioButtonWithLabel :value="'Answer3'" :radioName="'answer'" :slug="'answer3'" />  
                    <genericRadioButtonWithLabel :value="'Answer4'" :radioName="'answer'" :slug="'answer4'" />  
                </div>
                <div class="right">
                    <q-btn style="background: var(--primary-green); color: var(--primary-white);" label="Vote" />
                    <div class="votesContainer">
                        <h6>Votes</h6>
                        <h4>25</h4>
                    </div>
                    <q-btn style="background: var(--primary-red); color: var(--primary-white); margin-bottom: 10px;" label="Withdraw Vote" />
                </div>
            </div>
        </form> 
    </div>
</template>

<script>
import genericRadioButtonWithLabel from "../generic/RadiobuttonWithLabel.vue";
export default {
    name: "StandardPoll",
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
    justify-content: space-between;
}

.votesContainer {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 1rem;
    border-radius: 10px;
}
</style>