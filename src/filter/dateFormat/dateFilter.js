import format from 'date-fns/format'
import Vue from 'vue'

Vue.filter('date-filter', function (value, formatStr = 'yyyy-MM-dd') {
    return format(value, formatStr)
})
