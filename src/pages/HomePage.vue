<template>
    <div class="homepage">
        <ReciepeCard 
            v-for="reciepe in reciepes" 
            :key="reciepe.id" 
            :reciepe="reciepe"/>
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
            console.log(this.reciepes)
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