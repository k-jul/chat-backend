const router = require('express').Router();
const service = require('../services/users');

router.get('/', (req, res) => {
    return service.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err) => {
            console.log(err);
            res.sendStatus(404);
        })
});

router.get('/:id', (req, res) => {
    res.status(200).send('get user by id: ' + req.params.id);
});

router.post('/', (req, res) => {
    res.status(200).send('create new user');
});

router.put('/:id', (req, res) => {
    res.status(200).send('update user info');
});

router.delete('/:id', (req, res) => {
    res.status(200).send('delete user');
});


module.exports = router;