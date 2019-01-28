<template>
    <div id="app" class="md-layout md-gutter">
        <div class="md-layout-item md-small-size-100 md-medium-size-50">
            <NextGame/>
            <PrevGame/>
        </div>
        <div class="md-layout-item md-small-size-100 md-medium-size-50">
            <Standings/>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.min.css'

    import Standings from './components/Standings.vue'
    import NextGame from './components/NextGame.vue'
    import PrevGame from './components/PrevGame.vue'

    Vue.use(VueMaterial);

    export default {
        name: 'app',
        components: {
            Standings, NextGame, PrevGame
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
