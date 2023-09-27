<script >
import AppCard from './AppCard.vue';
import { cards } from '../cards'

export default {
    name: 'AppMain',
    data() {
        return {
            cards,

        }
    },
    created() {
        cards.fetchData()
    },
    components: {
        AppCard,
    },

}
</script>   

<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="found">
                    <h1>Founds n cards</h1>
                </div>
                <AppCard v-for="card in cards.listCards" :cardName="card.name" :cardImg="card.card_images[0].image_url"
                    :cardArchetype="card.archetype" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped >
main {
    background-image: url(../assets/img/hieroglyphs-bg.png);
    color: whitesmoke;
    padding: 8rem 2rem;
    padding-bottom: 2rem;


    .found {
        background-color: whitesmoke;
        color: black;
    }

}
</style>
