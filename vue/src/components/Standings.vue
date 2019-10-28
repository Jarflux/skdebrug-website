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

<style lang="scss">
    .standings {

        .md-table-head{
            text-align: left;
            border-bottom: 1px solid #ddd;
            &-container{
                height:30px;
                padding: 5px 1px;
            }
        }

        .md-table-cell {
            text-align: left;
            border:1px solid #ddd;

            &-container{
                padding: auto;
            }

        }

        .md-table-row {
            &--even {
                background-color: white;
            }
            &--odd {
                background-color: #f5f5f5;
            }
            &--bridge {
                font-weight: 700;
                color: #000304;
                background-color: #d0efff;
            }
        }
    }
</style>

<template>
    <md-table md-card class="standings">
        <md-table-row>
            <md-table-head>
                #
            </md-table-head>
            <md-table-head title="ploeg">
                Ploeg
            </md-table-head>
            <md-table-head title="aantal wedstrijden" class="md-small-hide">
                M
            </md-table-head>
            <md-table-head title="gewonnen" class="md-xsmall-hide">
                G
            </md-table-head>
            <md-table-head title="verloren" class="md-xsmall-hide">
                V
            </md-table-head>
            <md-table-head title="gelijkspel" class="md-xsmall-hide">
                G
            </md-table-head>
            <md-table-head title="doelpunten gescoord" class="md-medium-hide">
                DV
            </md-table-head>
            <md-table-head title="doelpunten tegen" class="md-medium-hide">
                DT
            </md-table-head>
            <md-table-head title="doelsaldo" class="md-medium-hide">
                DS
            </md-table-head>
            <md-table-head title="punten">
                P
            </md-table-head>
        </md-table-row>
        <md-table-row v-for="(standing, index) in standings" :key="index"
                      :class="{'md-table-row--even': index % 2 === 0, 'md-table-row--odd': index % 2 !== 0, 'md-table-row--bridge': standing.team.name === 'SK De Brug' }">
            <md-table-cell>{{index+1}}</md-table-cell>
            <md-table-cell>{{standing.team.name}}</md-table-cell>
            <md-table-cell class="md-small-hide">{{standing.games}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.wins}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.losses}}</md-table-cell>
            <md-table-cell class="md-xsmall-hide">{{standing.ties}}</md-table-cell>
            <md-table-cell class="md-medium-hide">{{standing.goalsFor}}</md-table-cell>
            <md-table-cell class="md-medium-hide">{{standing.goalsAgainst}}</md-table-cell>
            <md-table-cell class="md-medium-hide">{{standing.goalDifference}}</md-table-cell>
            <md-table-cell>{{standing.points}}</md-table-cell>
        </md-table-row>
    </md-table>
</template>