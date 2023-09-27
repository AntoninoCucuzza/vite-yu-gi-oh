<script >
export default {
    name: 'AppCard',
    data() {
        return {
        }
    },

    props: [
        'cardImg',
        'cardName',
        'cardArchetype',
    ]
}
</script>   

<template>
    <div class="col-3 g-3">
        <div class="cards">
            <img class="img-fluid" :src="cardImg" :alt="cardName">
            <h4>{{ cardName }}</h4>
            <span>{{ cardArchetype }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped ></style>

