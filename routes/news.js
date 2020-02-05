const express = require('express');
const router = express.Router();
const News = require('../models/news_model');

router.post('/yeniHaber', (req, res) => {

    News.create(req.body).then((doc) => {
        res.send("News Created: " + doc.id);
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Error creating post");
    })
});

router.get('/haberler', (req, res) => {
    News.find().then((doc) => {
        console.log(doc);
        res.send(doc);
    }).catch((err) => {
        res.status(400).send(err);
    })
});
router.put('/:news_id', (req, res, next) => {
    const promise = News.findByIdAndUpdate(
        req.params.news_id,
        req.body,
        {
            new: true
        }
    );

    promise.then((news) => {
        if (!news)
            next({ message: 'The news was not found.', code: 99 });

        console.log(req.params.news_id);
        console.log(req.body);
        console.log(news);


        res.json(news);
    }).catch((err) => {
        res.json(err);
    });
});
router.delete('/:news_id', (req, res, next) => {
    const promise = News.findByIdAndRemove(req.params.news_id);

    promise.then((news) => {
        if (!news)
            next({ message: 'The news was not found.', code: 99 });

        res.json({ status: 1 });
    }).catch((err) => {
        res.json(err);
    });
});
module.exports = router;