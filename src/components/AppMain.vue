<script >
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

}
</script>   

<template>
    <main>
        <div class="container">
            <select class="options">
                <option>Alien</option>
            </select>
            <div class="row">
                <div class="found">
                    <h1>Founds n cards</h1>
                </div>
                <div class="col-3 g-3" v-for="card in cards.listCards" v-show="card.archetype === 'Alien'">
                    <div class="cards">
                        <img class="img-fluid" :src="card.card_images[0].image_url" :alt="card.name">
                        <h4>{{ card.name }}</h4>
                        <span>{{ card.archetype }}</span>
                    </div>
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


    .options {
        padding: 0.5rem 2rem;
        margin: 1rem 0rem;

        border-radius: 5px;

    }

    .found {
        background-color: whitesmoke;
        color: black;
    }

}
</style>
