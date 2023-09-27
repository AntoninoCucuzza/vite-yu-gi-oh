<script>
import { cards } from '../cards';

export default {
    name: 'AppFilter',
    data() {
        return {
            cards
        }
    },
    created() {
        cards.fetchArchetypes()
    },

}
</script>

<template>
    <select class="options">
        <option value="" disabled selected>Choose An Archetype</option>
        <option v-for="archetype in cards.listArchetypes" value="">{{ archetype.archetype_name }}</option>
    </select>
</template>


<style lang="scss" scoped></style>