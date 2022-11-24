<template>
    <div class="card">
        <div class="cardHeader">
            <img :src="news.image" :alt="news.title">
            <div class="pinnedOverlayBtn">
                <span class="material-icons">
                    star
                </span>
            </div>
        </div>
        <div class="cardBody">
            <h3>{{news.title}}</h3>
            <p>{{news.description}}</p>
            <div class="cardBodyBottom">
                <span class="material-icons">
                    newspaper
                </span>
                <div>{{news.date}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PinnedNewsCardWithImg",
    props: ["news"]
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