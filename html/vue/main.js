var app = new Vue({
    el: '#app',
    data () {
        return {
          product: 'Socks',
          description: 'Something to wear on your feet.',
          image: './img/ploeg.jpg',
          standings: null
        }
      },
    mounted () {
        axios
        .get('https://api.myjson.com/bins/z3qbw')
        .then(response => (this.standings = response.data.standings))
    }
})