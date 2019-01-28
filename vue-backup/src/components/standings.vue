<script>
    Vue.component('standings', {
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
    })
</script>

<style>

</style>

<template>
    <table class="table table-striped table-hover table-bordered table-skdebrug table-responsive">
        <thead>
        <tr>
            <th>
                #
            </th>
            <th title="ploeg">
                Ploeg
            </th>
            <th title="aantal wedstrijden" class="hide-portrait-mobile">
                M
            </th>
            <th title="gewonnen">
                G
            </th>
            <th title="verloren">
                V
            </th>
            <th title="gelijkspel">
                G
            </th>
            <th title="doelpunten gescoord" class="hide-portrait-mobile">
                DV
            </th>
            <th title="doelpunten tegen" class="hide-portrait-mobile">
                DT
            </th>
            <th title="doelsaldo" class="hide-portrait-mobile">
                DS
            </th>
            <th title="punten">
                P
            </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(standing, index) in standings" :key="index" class="standing">
            <td>{{index+1}}</td>
            <td>{{standing.team.name}}</td>
            <td class="hide-portrait-mobile">{{standing.games}}</td>
            <td>{{standing.wins}}</td>
            <td>{{standing.losses}}</td>
            <td>{{standing.ties}}</td>
            <td class="hide-portrait-mobile">{{standing.goalsFor}}</td>
            <td class="hide-portrait-mobile">{{standing.goalsAgainst}}</td>
            <td class="hide-portrait-mobile">{{standing.goalDifference}}</td>
            <td>{{standing.points}}</td>
        </tr>
        </tbody>
    </table>
</template>