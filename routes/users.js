var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function(req, res) {
    models.User.create({
        username: req.body.username,
    }, ['username']).success(function(user) {
        res.redirect('/');
    });
});

router.post('/:user/tasks/create', function(req, res) {
    models.Task.create({
        title: req.body.title,
        UserId: req.params.user,
    }).success(function(task) {
        res.redirect('/');
    });
});

router.delete('/:user', function(req, res) {
    models.User.find(req.params.user).success(function(user) {
        user.destroy().success(function() {
            res.send('delete');
        });
    });
});

module.exports = router;
