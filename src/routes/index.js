
const VungTrongRouter = require('./vungtrong')
const HomeRouter = require('./home')
const LichRouter = require('./lich')
const MapRouter = require('./map')
function route(app) {
    app.use('/lich', LichRouter)
    app.use('/map', MapRouter)
    app.use('/vungtrong', VungTrongRouter)
    app.use('/', HomeRouter)

}

module.exports = route;