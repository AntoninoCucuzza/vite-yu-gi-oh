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
    <header class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center">
            <img width="200" class="img-fluid ms-5 me-3" src="../assets/img/yu-gi-oh-logo.png" alt="">
            <h1>yu-gi-oh api</h1>
        </div>
        <div>
            <select class="options">
                <option>Alien</option>
            </select>
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
