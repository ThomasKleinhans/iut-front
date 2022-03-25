<template>
    <div class="card">
        <p>{{ reciepe.attributes.Name }}</p>
        <div class="infos">
            <p>{{ reciepe.attributes.Energy }} cal</p>
            <p><span v-for="star in  reciepe.attributes.Price" :key="star">⭐</span></p>
            <p>{{ reciepe.attributes.Duration }} sec</p>
        </div>
        <div class="image">
            <img :src="reciepe.attributes.Image.data.attributes.url">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            reciepe: {
                type: Object
            }
        },
    }
</script>

<style scoped>
.card{
    color: white;
    width: 20%;
    background: #0e0e0e;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 200px;
    margin: 20px 0;
    overflow: hidden;
}
.card .infos{
    display: flex;
    justify-content: space-around;
}
.card p{
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 5px 15px;
}

.card .image > img{
    height: 150px;
    width: 100%;
    object-fit: cover;
}
</style>