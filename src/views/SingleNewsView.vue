<template>
    <div id="content">
        <div class="left">
            <h1>{{news.title}}</h1>
            <p>{{news.description}}</p>
            <p>{{news.publishDate}}</p>
            <p>Er den pinned?: {{news.pinned}}</p>
        </div>
        <dig class="right">
            <img v-if="news.imagePath != 'null'" :src="news.imagePath" :alt="news.title">
            <div class="eventAdminButtons">
                <routerLink :to="'/updatenews/' + news.id">
                    <q-btn type="button" style="background: var(--primary-green); color: var(--primary-white);" label="Update News" />
                </routerLink>
                <q-btn @click="confirm = true" class="cy-btnDelete" type="button" style="background: var(--primary-grey); color: var(--primary-white);" label="Delete News" />
            </div>
        </dig>
    </div>

    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">Are you sure that you want to delete this news article?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn @click="deleteNews" class="cy-btnConfirm" flat label="Confirm" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import router from '@/router'
import { ref } from 'vue'

export default {
    name: "SingleNewsView",
    setup () {
        return {
            confirm: ref(false),
        }
    },
    data() {
        return {
            news: {}
        }
    },
    async mounted() {
        fetch(`http://localhost:8080/news/${this.$route.params.id}`)
        .then(res => res.json())
        .then(data => {
            this.news = data;
        })
    },
    methods: {
        async deleteNews() {
            const fetchOptions = {
                method: "DELETE",
                Headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await fetch(`http://localhost:8080/news/${this.$route.params.id}`, fetchOptions);
            if(response.ok) {
                router.push("/news/");
            }
        }
    }
}
</script>

<style scoped>

.left {
    width:50%;
    padding-right: 2rem;
}

.left p:not(:last-of-type) {
    font-size: 18px;
}

.right {
    width:50%;
    padding-left: 2rem;
}

.right img {
    width:100%;
    border-radius: 5px;
}

p {
    margin-bottom: 10px;
}

.eventAdminButtons {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    gap: 1rem;
}

.eventAdminButtons * {
    text-decoration: none;
}

</style>