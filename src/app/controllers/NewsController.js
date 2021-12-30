class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }

    // [GET] / show news details
    show(req, res) {
        res.send('INFO DETAIL!');
    }
}

module.exports = new NewsController();
