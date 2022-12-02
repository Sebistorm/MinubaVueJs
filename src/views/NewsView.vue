<template>
    <div class="content">
        <div class="newsPage">
                <div class="newsPage__left">
                <h1>Julefrokost 2022</h1>
                <h4>14-12-22. KL. 16:00</h4>
                    <div class="newsPage__author">
                        <div class="author__imageContainer">
                            <img class="author__image" src="https://www.brandebladet.dk/sites/default/files/styles/full_image_12_col/public/artikler/helle_mathiasen_5.jpg?itok=P2RJazTB" alt="" />
                        </div>
                        <div class="author">
                            <p class="author__name">Gertrud Jensen</p>
                            <p class="author__title">SoMe Manager</p>
                        </div>
                    </div>
                    <p class="newsPage__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores quidem vitae. In qui quos dolore, vero impedit sed non officiis! Earum reprehenderit voluptatum ratione ducimus consectetur dolorum saepe fugiat.</p>
                </div>
            <div class="newsPage__image">
                <img src="https://indkast.dk/i/640/24578.jpg">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .content {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .newsPage{
        display: flex;
        gap: 5rem;
        text-align: initial;
        width: 100%;
        justify-content: space-between;
        max-width: 1080px;
    }
    .newsPage__image > img{
        border-radius: 10px;
        max-width: 30rem;
    }

    .author__imageContainer{
        height: 4rem;
        width: 4rem;
        border-radius: 100%;
        object-fit: cover;
        position: relative;
        
    }
    .author__imageContainer:after {
        content: "";
        display: block;
        padding-bottom: 100%; /* The padding depends on the width, not on the height, so with a padding-bottom of 100% you will get a square */
        
    }
    .author__image {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        border-radius: 100%;
    }
    .newsPage__author{
        display: flex;
        align-items: center;
        gap: .5rem;
    }
    .author__name{
        margin-bottom: 0;
        color: #AD637C;
    }
    .author__title{
        color: rgb(0, 0, 0, 0.4);
    }
    .newsPage__content{
        margin-top: 1rem;
    }
</style>