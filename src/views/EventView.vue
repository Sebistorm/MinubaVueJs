<template>
    <div id="content">
        <div class="left">
            <h1>{{events[0].title}}</h1>
            <p>{{events[0].date}} Kl. {{events[0].startTime}} - {{events[0].endTime}}</p>
            <p>{{events[0].location}}</p>
            <p>{{events[0].description}}</p>
            <div class="participantsBox">
                <p>23 Participants</p>
                <p>12 Invited</p>
            </div>
        </div>
        <div class="right">
            <img :src="events[0].image" :alt="events[0].title">
        </div>
    </div>
</template>

<script>
import { events } from '@/fake-data';
export default {
    name: "EventView",
    data() {
        return {
            events
        }
    }
}
</script>

<style scoped>

.left {
    width:50%;
    padding-right: 2rem;
}

.left p:not(:last-of-type) {
    font-size: 18px;
}

.right {
    width:50%;
    padding-left: 2rem;
}

.right img {
    width:100%;
    border-radius: 5px;
}

p {
    margin-bottom: 10px;
}

.participantsBox {
    display: flex;
    background-color: var(--primary-red);
    color: var(--primary-white);
    border-radius: 10px;
    margin-top: 30px;
}

.participantsBox p {
    margin-bottom: 0px;
    width: 50%;
    text-align: center;
    font-size: 30px !important;
    padding: 1rem;
}

.participantsBox p:first-of-type {
    border-right: 1px solid var(--primary-white);
}

.participantsBox p:last-of-type {
    border-left: 1px solid var(--primary-white);
}

</style>