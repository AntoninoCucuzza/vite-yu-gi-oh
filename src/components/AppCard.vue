<script >
export default {
    name: 'AppCard',
    data() {
        return {
            cards,

        }
    },
    created() {
        cards.fetchData()
    },

}
</script>   

<template>
    <div class="col-3 g-3" v-for="card in cards.listCards" v-show="card.archetype === 'Alien'">
        <div class="cards">
            <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
            <h4>{{ card.name }}</h4>
            <span>{{ card.archetype }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped ></style>
