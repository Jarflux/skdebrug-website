<template>
    <div>
        <div class="panel-heading">
            <h4>Volgende Wedstrijd</h4>
        </div>
        <div class="panel-body">
            <h4 class="text-center">{{game.date | longToDate }}</h4>
            <div class="panel-body-next-match">
                <div class="in">
                    <!--<img src="{{game.awayTeam.name}}">-->
                    <h5>{{game.homeTeam.name}}</h5>
                </div>
                <div class="divider">VS</div>
                <div class="out">
                    <!--<img src="assets/team/{{game.awayTeam.name}}.png">-->
                    <h5>{{game.awayTeam.name}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios');

    export default {
        data: function () {
            return {
                game: null
            }
        },
        mounted() {
            axios
                .get('https://api.myjson.com/bins/1dj0rw') // /data/game/next/1/team/1
                .then(response => (this.game = response.data[0]))
        }
    }
</script>

<style>

</style>
