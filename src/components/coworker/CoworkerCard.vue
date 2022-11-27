<template>
    <div>
        <form class="card">
            <div class="imgContainer">
                <img src="https://www.shutterstock.com/image-photo/silhouette-studio-shot-isolated-on-260nw-246672304.jpg" alt="">
            </div>
            <h4>{{coworker.name}}</h4>
            <h6>{{coworker.role}}</h6>
            <textarea placeholder="Write a comment"></textarea>
            <q-btn class="mt-10" style="background: var(--primary-red); color: var(--primary-white); width: 100%;" label="Vote" />
        </form>
    </div>
</template>

<script>
export default {
    name: "coworkerCard",
    props: ["coworker"]
}
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border: 1px solid var(--primary-black);
    padding: 1.5rem 1rem;
    border-radius: 5px;
    background-color: var(--primary-lightGrey);
}

.imgContainer {
    height: 70px;
    display: flex;
    width: 70px;
    justify-content: center;
    background-color: var(--primary-white);
    align-items: center;
    border: 1px solid;
    border-radius: 100%;
}

.imgContainer img {
    height: 60px;
    width: 60px;
    border-radius: 100%;
    border: 1px solid var(--primary-black);
}

.card textarea {
    background: transparent;
    padding: 0.3rem;
    border-radius: 5px;
    width: 100%;
}
</style>