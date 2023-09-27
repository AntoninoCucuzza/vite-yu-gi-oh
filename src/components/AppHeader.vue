<script >
import AppFilter from './AppFilter.vue';
import { cards } from '../cards';

AppFilter
export default {
    name: 'AppHeader',
    data() {
        return {
            cards
        }
    },
    created() {
        cards.fetchData()
        cards.fetchArchetypes()
    },
    components: {
        AppFilter
    },
    methods: {

        lookingFor() {
            const newUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${cards.filterOption}&num=500&offset=0`;
            this.cards.base_url = newUrl
            cards.fetchData(newUrl)

            console.log(newUrl);
            console.log(cards.filterOption)
        }
    }

}

</script>

<template>
    <header class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img width="200" class="img-fluid ms-5 me-3" src="../assets/img/yu-gi-oh-logo.png" alt="">
            <h1>yu-gi-oh api</h1>
        </div>
        <div>
            <AppFilter @performSearch="lookingFor()" />
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    color: white;
    position: fixed;
    width: 100%;
    z-index: 60;
    background-color: #000000e6;
    box-shadow: 0 0px 10px 5px #000000bf;
    height: 100px;

    .options {
        padding: 0.5rem 2rem;
        margin-right: 3rem;
        border-radius: 5px;

    }

    h1 {
        text-transform: uppercase;
    }

    img {
        filter: drop-shadow(0 0 2px #d7dace) drop-shadow(0 0 2px #ffe9b3) drop-shadow(0 0 2px #ffdc74) drop-shadow(0 0 2px #ffc176);
    }
}
</style>
