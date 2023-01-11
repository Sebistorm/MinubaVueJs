<template>
    <div class="card">
        <div class="cardHeader">
            <h3>{{poll.title}}</h3>
        </div>
        <div class="cardBody">
            <p>{{poll.description}}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr;">
                <span class="material-icons">
                    poll
                </span>
                <routerLink :to="'/poll/' + poll.pollId">
                    <q-btn style="background: var(--primary-red); color: var(--primary-white)" label="Go Vote" />
                </routerLink>
            </div>
            <div class="cardBodyBottom">
                <div>{{poll.dateEnd}}</div>
                <div>27 votes</div>
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

    .cardBody a {
        text-decoration: none;
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
</style>