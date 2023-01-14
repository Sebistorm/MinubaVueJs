<template>
    <routerLink :to="'/news/' + news.id">
    <div class="card">
        <div class="cardHeader">
            <img :src="news.imagePath" :alt="news.title">
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
    </routerLink>
</template>

<script>
export default {
    name: "NewsCardWithImg",
    props: ["news"]
}
</script>

<style scoped>
    .card {
        margin-bottom: 2rem;
    }
    a {
        text-decoration: none;
        color: unset;
    }
    .cardHeader {
        max-height: 200px;
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
</style>