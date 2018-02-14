let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')

let indexRoute = require('./routes/r_index')
let messageRoute = require('./routes/r_message')


// Setting
app.set('port', process.env.app_port || 8080)
app.set('view engine', 'ejs')

// Middlewares
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({
    secret: 'zaertyjsfnmsdm',
    resave: false,
    saveUnitialized: true,
    cookie: {secure: false}
}))
app.use(require('./middlewares/flash'))

// Routes
app.use(indexRoute)
app.use(messageRoute)

// Lanch server
app.listen(app.get('port'))