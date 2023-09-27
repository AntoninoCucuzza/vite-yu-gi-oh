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
        cards.fetchData()
        cards.fetchArchetypes()

    },
    emits: ['changeFilterOption']

}
</script>

<template>
    <select class="options" v-model="cards.filterOption" @change="$emit('changeFilterOption')">
        <option value="" disabled selected>Choose An Archetype</option>
        <option v-for="archetype in cards.listArchetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}
        </option>
    </select>
</template>


<style lang="scss" scoped></style>