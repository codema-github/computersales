const formatDate = {}
formatDate.install = function (Vue, options) {
    Vue.prototype.toTime = function (time) {
        return time.getTime()
    }
}
export default formatDate
