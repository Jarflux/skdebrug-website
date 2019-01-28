<script>
    const axios = require('axios');
    export default {
        data: function () {
            return {
                standings: null
            }
        },
        mounted() {
            axios
                .get('https://api.myjson.com/bins/z3qbw')
                .then(response => (this.standings = response.data.standings))
        }
    }
</script>

<style>

</style>

<template>
    <md-table md-card>
        <md-table-row>
            <md-table-head>
                #
            </md-table-head>
            <md-table-head title="ploeg">
                Ploeg
            </md-table-head>
            <md-table-head title="aantal wedstrijden" class="hide-portrait-mobile">
                M
            </md-table-head>
            <md-table-head title="gewonnen">
                G
            </md-table-head>
            <md-table-head title="verloren">
                V
            </md-table-head>
            <md-table-head title="gelijkspel">
                G
            </md-table-head>
            <md-table-head title="doelpunten gescoord" class="hide-portrait-mobile">
                DV
            </md-table-head>
            <md-table-head title="doelpunten tegen" class="hide-portrait-mobile">
                DT
            </md-table-head>
            <md-table-head title="doelsaldo" class="hide-portrait-mobile">
                DS
            </md-table-head>
            <md-table-head title="punten">
                P
            </md-table-head>
        </md-table-row>
        <md-table-row v-for="(standing, index) in standings" :key="index" class="standing">
            <md-table-cell>{{index+1}}</md-table-cell>
            <md-table-cell>{{standing.team.name}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.games}}</md-table-cell>
            <md-table-cell>{{standing.wins}}</md-table-cell>
            <md-table-cell>{{standing.losses}}</md-table-cell>
            <md-table-cell>{{standing.ties}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.goalsFor}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.goalsAgainst}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.goalDifference}}</md-table-cell>
            <md-table-cell>{{standing.points}}</md-table-cell>
        </md-table-row>
    </md-table>
</template>