import Vue from 'vue'

Vue.filter('date-format', function (value) {
    return value + '2019-11-30'
});
