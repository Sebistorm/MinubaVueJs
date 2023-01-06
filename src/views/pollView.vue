<template>
    <div id="content">
        <CoworkerOfTheMonthPoll v-show="!isOrdinaryPoll" />
        <StandardPoll v-show="isOrdinaryPoll" />
    </div> 
</template>

<script>
import CoworkerOfTheMonthPoll from "../components/poll/CoworkerOfTheMonth.vue"
import StandardPoll from "../components/poll/StandardPoll.vue";
let isOrdinaryPoll = false;
export default {
    name: "pollView",
    components: {
        CoworkerOfTheMonthPoll,
        StandardPoll
        
    },
    data () {
        return {
            isOrdinaryPoll
        }
    }
}

</script>