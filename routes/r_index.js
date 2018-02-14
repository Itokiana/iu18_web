let router = require('express').Router()

router.get('/', (request, response) => {
    let Message = require('../models/message')
    Message.all((messages) => {
        response.render('pages/index', {messages: messages})
    })
})

router.post('/', (request, response) => {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash('error', "Vous n'avez pas poste de message")
        response.redirect('/')
    }else{
        let Message = require('../models/message')
        Message.create(request.body.message, () => {
            request.flash('success', "Merci !")
            response.redirect('/')
        })
    }
})


module.exports = router