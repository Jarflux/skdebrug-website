<template>
    <md-card>
        <div class="panel-heading">
            <h4>Vorige Wedstrijden</h4>
        </div>

        <div class="panel-body" v-for="game in games" :key="game">
            <div class="panel-body-match-date capitalize-first-letter">
                {{game.date | longToDate }}
            </div>

            <div>{{game.homeTeam.name}} - {{game.awayTeam.name}}</div>
            <div>{{game.homeScore}} - {{game.awayScore}}</div>
        </div>
        <div class="panel-body">
            <a href="kalender.html">Meer wedstrijden</a>
        </div>
    </md-card>
</template>

<script>
    const axios = require('axios');
    export default {
        data: function () {
            return {
                games: null
            }
        },
        mounted() {
            axios
                .get('https://api.myjson.com/bins/8g418') // /data/game/prev/3/team/1
                .then(response => (this.games = response.data))
        }
    }
</script>

<style>

</style>
