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
                <div class="col-3 g-3" v-for="card in cards.listCards" v-show="card.archetype === 'Alien'">
                    <AppCard />
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped >
main {
    background-image: url(../assets/img/hieroglyphs-bg.png);
    color: whitesmoke;
    padding: 8rem 2rem;


    .found {
        background-color: whitesmoke;
        color: black;
    }

}
</style>
