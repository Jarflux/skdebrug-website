import Vue from "vue"
import moment from 'moment'

moment.locale('nl-BE');

Vue.filter('longToDate', function (value) {
    if (value) {
        return moment(value).format('dddd D MMMM YYYY hhumm')
    }
})
