var app = new Vue({
    el: '#app',
    data () {
        return {
          standings: null
        }
      },
    mounted () {
        axios
        .get('https://api.myjson.com/bins/z3qbw')
        .then(response => (this.standings = response.data.standings))
    }
})