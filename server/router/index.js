const Router = require('express')
const router = new Router()

const newsRouter = require('./news_router')
const championRouter = require('./champion_router')
const historyRouter = require('./history_router')
const albumRouter = require('./album_router')
const aboutRouter = require('./about_router')
const calendarRouter = require('./calendar_router')


router.use('/news', newsRouter)
router.use('/champions', championRouter)
router.use('/history', historyRouter)
router.use('/album', albumRouter)
router.use('/about', aboutRouter)
router.use('/calendar', calendarRouter)


module.exports = router