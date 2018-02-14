let router = require('express').Router()

router.get('/message/:id', (request, response, next) => {
    let Message = require('../models/message')

    Message.find(request.params.id, (message) => {
        response.render('messages/show', {messages: message})
    })
})

module.exports = router