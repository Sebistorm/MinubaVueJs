<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="event.image" :alt="event.title">
            <div class="pinnedOverlayBtn">
                <span class="material-icons">
                    star
                </span>
            </div>
        </div>
        <div class="cardBody">
            <p>{{event.date}} Kl. {{event.startTime}} - {{event.endTime}}</p>
            <h3>{{event.title}}</h3>
            <div class="cardBodyBottom">
                <span class="material-icons">
                    event
                </span>
                <p>{{event.location}}</p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "PinnedEventCard",
    props: ["event"]
}
</script>

<style scoped>

    .card {
        margin-bottom: 2rem;
    }

    .cardHeader {
        max-height: 200px;
        position: relative;
    }

    .cardHeader img {
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        object-position: top;
        border-radius: 15px 15px 0px 0px;
        border: 1px solid black;
        border-bottom: 0px;
    }

    .cardBody h3 {
        margin: 0px !important;
    }

    .cardBody {
        padding: .5rem 1rem;
        border-radius: 0px 0px 15px 15px;
        background-color: var(--primary-grey);
        border: 1px solid var(--primary-black);
        color: var(--primary-white);
        text-align: center;
    }

    .cardBody p {
        margin: .5rem 0px;
    }

    .material-icons {
        font-size: 40px;
        color: var(--primary-white);
        margin-left: -2px;
        text-align: left;
    }

    .cardBodyBottom {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .pinnedOverlayBtn {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--primary-white);
        border-radius: 0px 15px 0px 15px;
        padding: 0.2rem;
        border: 1px solid var(--primary-black);
        cursor: pointer;
    }

    .pinnedOverlayBtn:hover {
        background-color: var(--primary-grey);
    }

    .pinnedOverlayBtn .material-icons {
        color: var(--primary-orange);
    }
</style>