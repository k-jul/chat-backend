const router = require('express').Router();
const service = require('../services/messages');

router.get('/', (req, res) => {
    res.status(200).send('get all messages');
});

router.get('/:id', (req, res) => {
    res.status(200).send('get message by id: ' + req.params.id);
});

router.post('/', (req, res) => {
    res.status(200).send('create new message');
});

router.put('/:id', (req, res) => {
    res.status(200).send('update message');
});

router.delete('/:id', (req, res) => {
    res.status(200).send('delete message');
});

module.exports = router;