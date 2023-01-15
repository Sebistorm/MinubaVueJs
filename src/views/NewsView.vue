<template>
    <div id="content">
        <div class="gridContainer">
            <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
                <div class="header__left">
                    <h1>News</h1>
                    <routerLink :to="'/createnews/'">
                        <span class="material-icons add-icon">
                            add_circle_outline
                        </span>
                    </routerLink>
                </div>
                <q-btn outline icon-right="keyboard_arrow_down" style="color: var(--primary-red);" label="Date" />
            </div>
        </div>
        <div class="grid">
            <div v-for="currentNews in news" :key="currentNews.id">
                <NewsCard v-if="currentNews.imagePath == 'null'" :news="currentNews" />
                <NewsCardWithImg v-else :news="currentNews" />
            </div>
        </div>
    </div>
</template>

<script>
import NewsCard from "../components/news/NewsCard.vue"
import NewsCardWithImg from "../components/news/NewsCardWithImg.vue"

export default {
    name: "NewsView",
    components:
    {
        NewsCard,
        NewsCardWithImg
    },
    data() {
        return {
            news:[]
        }
    },
    async mounted() {
        fetch("http://localhost:8080/news")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.news = data;
        })
    }
}
</script>

<style scoped>
    #content{
        display: block;
    }
    .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    row-gap: 2rem;
    }
    .header__left{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a {
        color: unset;
        text-decoration: none;
    }
    .add-icon {
        font-size: 2rem;
        margin-left: 1rem;
    }
</style>