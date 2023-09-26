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
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <h1>{{ cards.cardName }}</h1>
                        <h2>{{ cards.cardType }}</h2>
                        <img class="img-fluid" :src="cards.cardImg" alt="...">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped></style>
