<template>
    <div id="content">
        <div class="formContent">
            <h1>Create News</h1>
            <q-form @submit="onSubmit" class="form">
                <div class="left">
                    <q-input class="mb-10" outlined v-model="news.title" label="Title"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Type Title']" />
                    <q-input class="mb-10" outlined v-model="news.description" type="textarea" label="Description"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Type Description']" />
                </div>
                <div class="right">
                    <q-input class="mb-10" outlined v-model="news.publishDate" stack-label type="date" label="Publish Date"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please select a date']" />
                    <q-input class="mb-10" outlined v-model="news.imagePath" label="imagePath"
                    lazy-rules :rules="[val => val && val.length > 0 || 'Please Link Image']" />

                    <q-checkbox size="50px" v-model="news.pinned" label="pinned"/>
                </div>
                <div>
                    <q-btn type="submit" style="background: var(--primary-red); color: var(--primary-white);" label="Update News" />
                </div>
            </q-form>
        </div>
    </div>
</template>

<script>

export default {
    name: "UpdateNewsView",
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
        async onSubmit() {
            console.log("submit!")
            console.log(this.event);

            const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.news)
            }

            const response = await fetch(`http://localhost:8080/news/${this.$route.params.id}`, fetchOptions);
            if (response.ok) {
                console.log(response.ok);
            }
        }
    }
}
</script>

<style>

</style>