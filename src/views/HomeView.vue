<template>
  <div id="content">
    <div class="left">
      <h2>News</h2>
      <div v-for="oneNews in news"
        :key="oneNews.id">
        <NewsCard v-if="!oneNews.image"
          :news="oneNews"
        />
        <NewsCardWithImg v-else :news="oneNews" />
      </div>
    </div>
    <div class="right">
      <h2>Pinned</h2>

    </div>
  </div>
</template>

<script>
import {news} from "../fake-data";
import {polls} from "../fake-data";
import NewsCard from "@/components/news/NewsCard.vue";
import NewsCardWithImg from "../components/news/NewsCardWithImg.vue"


export default {
  name: 'HomeView',
  components: {
    NewsCard,
    NewsCardWithImg,

  },
  data() {
    return {
      news,
      feed: [],
      polls
    }
  },
  mounted(){
    fetch("http://localhost:8080/feed")
    .then(res => res.json())
    .then(data => {
        this.createFeed(data)
    })
  },
  methods: {
    createFeed: function (data) {
      console.log(data)
    }
  }
}
</script>


<style scoped>
.left {
  width: 60%;
  padding-right: 5%;
  border-right: 1px solid black;
}

.right {
  width: 40%;
  padding-left: 5%;
}

</style>