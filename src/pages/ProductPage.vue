<template>
    <p>Reciepe : {{currentItem}}</p>
</template>

<script>
export default {
    computed: {
        currentItem () {
            return this.$route.params.id
        }
    },
}
</script>