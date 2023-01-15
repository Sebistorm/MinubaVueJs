<template>
    <div id="content">
        <div class="formContent">
            <h1>Create News</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="title" label="Title"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Type Title']" />
                    <q-input class="mb-10" outlined v-model="description" type="textarea" label="Description"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Type Description']" />
                </div>
                <div class="right">
                    <q-input class="mb-10" outlined v-model="publishDate" stack-label type="date" label="Publish Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a date']" />
                    <q-input class="mb-10" outlined v-model="imagePath" label="imagePath"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Link Image']" />

                    <q-checkbox size="50px" v-model="pinned" label="pinned"/>
                </div>
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Create News" />
                </div>
            </q-form>
        </div>
    </div>
</template>

<script>
//import router from '@/router'
import { ref } from 'vue'

export default {
    name: "CreateNewsView",

    setup() {
        const title = ref(null)
        const imagePath = ref(null)
        const description = ref(null)
        const publishDate = ref(null)
        const pinned = ref(false)

        return {
            title,
            imagePath,
            description,
            publishDate,
            pinned,


            async onSubmit(){
                let news = {};
                news.title = title.value;
                news.imagePath = imagePath.value;
                news.description = description.value;
                news.publicDate = publishDate.value;
                news.pinned = pinned.value;

                console.log(news)

                const fetchOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(news)
                }

                const response = await fetch("http://localhost:8080/news", fetchOptions);
                if (response.ok) {
                    console.log(response.ok);
                    //router.push(`/poll/${data.id}`);
                }
            }
        }
    }
}
</script>

<style>

.formContent {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.left, .right {
    width: 50%;
}

.left {
    padding-right: 2rem;
}

.right {
    padding-left: 2rem;
}

.form {
    display: flex;
    flex-wrap: wrap;
}
.checkbox{
    width: 50%;
}
</style>