var Mock = require('mockjs');
var Random = Mock.Random;
const DEFAULTS = {
    "returnCode": "00000000",
    "data": [],
    "total": 0
};

module.exports = function() {
    let data = {
        news: []
    }
    let images = [1, 2, 3].map(x => Random.image('100x100', Random.color(), Random.word(2, 6)));
    for (let i = 0; i < 100; i++) {

        let content = Random.cparagraph(0, 10);

        data.news.push({
            id: i,
            title: Random.cword(8, 20),
            desc: content.substr(0, 40),
            tag: Random.cword(2, 6),
            views: Random.integer(100, 5000),
            images: images.slice(0, Random.integer(1, 3))
        })
    }

    return data;
}
