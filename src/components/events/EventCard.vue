<template>
    <routerLink :to="'/event/' + event.id">
        <div class="card">
            <div class="cardHeader">
                <img :src="event.imagePath" :alt="event.title">
            </div>
            <div class="cardBody">
                <div class="cardBodyLeft">
                    <span class="material-icons">
                    calendar_today
                    </span>
                    <div class="date">
                        {{event.publishDate[0]+event.publishDate[1]}}
                    </div>
                </div>
                <div class="cardBodyRight">
                    <p>{{event.publishDate}} Kl. {{event.startTime}} - {{event.endTime}}</p>
                    <h3>{{event.title}}</h3>
                    <p>{{event.location}}</p>
                </div>     
            </div>
        </div>
    </routerLink>
</template>

<script>
export default {
    name: "EventCard",
    props: ["event"]
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
    .card {
        height: 100%;
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
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
    }

    .cardBody p {
        margin: .5rem 0px;
    }

    .material-icons {
        font-size: 70px;
        color: var(--primary-white);
    }

    .cardBodyRight {
        text-align: left;
        padding-left: 0.5rem;
    }

    .cardBodyLeft {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .date {
        position: absolute;
        font-size: 30px;
        top: 56%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
</style>