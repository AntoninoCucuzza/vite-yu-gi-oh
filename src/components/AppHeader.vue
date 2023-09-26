<script >
export default {
    name: 'AppHeader',
    data() {
        return {
            message: 'we'
        }
    },


}

</script>

<template>
    <header class="d-flex align-items-center ">
        <img width="200" class="img-fluid ms-5 me-3" src="../assets/img/yu-gi-oh-logo.png" alt="">
        <h1>yu-gi-oh api</h1>
    </header>
</template>

<style lang="scss" scoped>
header {
    color: white;
    background-color: rgba(0, 0, 0, 0.800);
    height: 100px;

    h1 {
        text-transform: uppercase;
    }

    img {
        filter: drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff) drop-shadow(0 0 1px #fff);
    }
}
</style>
