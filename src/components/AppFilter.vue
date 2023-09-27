<script>
import { cards } from '../cards';

export default {
    name: 'AppFilter',
    emits: ['performSearch'],
    data() {
        return {
            cards
        }
    },
    created() {
        cards.fetchData()
        cards.fetchArchetypes()

    },

}
</script>

<template>
    <select class="options" v-model="cards.filterOption" @change="$emit('performSearch')">
        <option value="" disabled selected>Choose An Archetype</option>
        <option v-for="archetype in cards.listArchetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}
        </option>
    </select>
</template>


<style lang="scss" scoped></style>