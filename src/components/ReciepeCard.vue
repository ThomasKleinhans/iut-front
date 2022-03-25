<template>
    <div class="card">
        <p>{{ name }}</p>
        <div class="image">
            <img :src="image">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                default: ''
            },
            image: {
                type: String,
                default: ''
            }
        },
    }
</script>

<style scoped>
.card{
    width: 20%;
    background: lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 200px;
    margin: 20px 0;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
.card p{
    font-size: 20px;
    font-weight: 500;
    text-transform: uppercase;
}

.card .image > img{
    height: 150px;
    width: 100%;
    object-fit: cover;
}
</style>