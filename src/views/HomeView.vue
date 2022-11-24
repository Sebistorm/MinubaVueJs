<template>
  <div id="main">
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
        <PinnedNewsCard :news="news[1]" />
        <PinnedEventCard :event="events[0]" />
        <PinnedPollCard :poll="polls[0]" />
      </div>
    </div>
  </div>
</template>

<script>
import {news} from "../fake-data";
import {events} from "../fake-data";
import {polls} from "../fake-data";
import NewsCard from "@/components/news/NewsCard.vue";
import NewsCardWithImg from "../components/news/NewsCardWithImg.vue"
import PinnedEventCard from "../components/pinnedContent/EventCard.vue"
import PinnedNewsCard from "../components/pinnedContent/NewsCard.vue"
import PinnedPollCard from "../components/pinnedContent/PollCard.vue"

export default {
  name: 'HomeView',
  components: {
    NewsCard,
    NewsCardWithImg,
    PinnedEventCard,
    PinnedNewsCard,
    PinnedPollCard
  },
  data() {
    return {
      news,
      events,
      polls
    }
  }
}
console.log(news)
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