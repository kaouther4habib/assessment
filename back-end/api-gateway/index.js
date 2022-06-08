const express = require('express')
const bodyParser = require('body-parser')
const cote = require('cote') //node library for building microservices
const axios = require('axios')

const app = express()

app.use(bodyParser.json())

const emailsRequester = new cote.Requester({ name: 'email requester', key: 'email' })
const analyticsRequester = new cote.Requester({ name: 'analytic requester', key: 'analytic' })



app.get('/email', async (req, res) => {
    const emails = await emailsRequester.console.log('works')
    res.send(emails);
})

app.post('/email', async (req, res) => {
    const email = await emailsRequester.send({ type: 'create email', order: req.body })
    const analytic = await analyticsRequester.send({ type: 'create analytic', analytic })

    res.send({ email, analytic })
})

app.listen(3000, () => console.log('listening'))