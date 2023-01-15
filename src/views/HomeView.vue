<template>
  <div id="content">
    <div class="left">
      <h2>News</h2>
      <div v-for="oneNews in feed.news"
        :key="oneNews.id">
        <NewsCard v-if="oneNews.imagePath == 'null' && !oneNews.pinned"
          :news="oneNews"
        />
        <NewsCardWithImg v-else-if="oneNews.imagePath != 'null' && !oneNews.pinned" :news="oneNews" />
      </div>

      <div v-for="onePoll in feed.polls" 
      :key="onePoll.id">
        <PollCard v-if="!onePoll.pinned" :poll="onePoll"/>
      </div>
      <div v-for="oneEvent in feed.events"
      :key="oneEvent.id">
        <EventCard v-if="!oneEvent.pinned" :event="oneEvent"/>
      </div>
    </div>
    <div class="right">
      <h2>Pinned</h2>
      <div v-for="oneNews in feed.news"
        :key="oneNews.id">
        <NewsCard v-if="oneNews.imagePath == 'null' && oneNews.pinned"
          :news="oneNews"
        />
        <NewsCardWithImg v-else-if="oneNews.imagePath != 'null' && oneNews.pinned" :news="oneNews" />
      </div>

      <div v-for="onePoll in feed.polls" 
      :key="onePoll.id">
        <PollCard v-if="onePoll.Pinned" :poll="onePoll"/>
      </div>
      <div v-for="oneEvent in feed.events"
      :key="oneEvent.id">
        <EventCard v-if="oneEvent.Pinned" :event="oneEvent"/>
      </div>
    </div>
  </div>
</template>

<script>
import NewsCard from "@/components/news/NewsCard.vue";
import NewsCardWithImg from "../components/news/NewsCardWithImg.vue"
import PollCard from "../components/poll/PollCard.vue"
import EventCard from "../components/events/EventCard.vue"


export default {
  name: 'HomeView',
  components: {
    NewsCard,
    NewsCardWithImg,
    PollCard,
    EventCard,
  },
  data() {
    return {
      feed: [],
    }
  },
  mounted(){
    fetch("http://localhost:8080/feed")
    .then(res => res.json())
    .then(data => {
        this.feed = data;
        console.log(data)
    })
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