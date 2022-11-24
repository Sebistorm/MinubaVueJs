<template>
    <div class="card">
        <div class="cardHeader">
            <h3>{{poll.title}}</h3>
            <div class="pinnedOverlayBtn">
                <span class="material-icons">
                    star
                </span>
            </div>
        </div>
        <div class="cardBody">
            <p>{{poll.description}}</p>
            <div style="display: grid;grid-template-columns: 1fr 1fr 1fr;">
                <span class="material-icons">
                    poll
                </span>
                <q-btn style="background: var(--primary-red); color: var(--primary-white)" label="Vote now" />
            </div>
            <div class="cardBodyBottom">
                <div>{{poll.endDate}}</div>
                <div>{{poll.votes}} votes</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PollCard",
    props: ["poll"]
}
</script>

<style scoped>
    .card {
            margin-bottom: 2rem;
    }
    
    .cardHeader {
        background-color: var(--primary-dustLightGreen);
        text-align: center;
        padding: 0.2rem 1rem;
        color: var(--primary-black);
        border-radius: 15px 15px 0px 0px;
        border: 1px solid var(--primary-black);
        border-bottom: 0px;
        position: relative;
    }

    .cardHeader h3 {
        margin: 0px !important;
    }

    .cardBody {
        padding: 0px 1rem .5rem;
        border-radius: 0px 0px 15px 15px;
        background-color: var(--primary-white);
        border: 1px solid var(--primary-black);
    }

    .cardBody p {
        margin: .5rem 0px;
    }

    .material-icons {
        font-size: 40px;
        color: var(--primary-black);
        margin-left: -2px;
    }

    .cardBodyBottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .pinnedOverlayBtn {
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    .pinnedOverlayBtn .material-icons:hover {
        color: var(--primary-grey);
    }

    .pinnedOverlayBtn .material-icons {
        color: var(--primary-orange);
    }
</style>