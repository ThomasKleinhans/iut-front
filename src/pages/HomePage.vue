<template>
    <div class="homepage">
        <ReciepeCard v-for="reciepe in reciepes" :key="reciepe.id" :name="reciepe.attributes.Name" :image="reciepe.attributes.Image.data.attributes.url"/>
    </div>
</template>

<script>
import api from '@/plugins/axios'
import ReciepeCard from '@/components/ReciepeCard.vue'

export default {
    components: {
        ReciepeCard,
    },
    data() {
        return {
            reciepes: []
        }
    },
    mounted () {
        api.get('reciepes?populate=*').then((response) => {
            this.reciepes = response.data.data
        });
    },
}
</script>

<style scoped>
.homepage{
    display: flex;
    justify-content: space-around;
}
</style>