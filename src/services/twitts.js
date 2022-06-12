const T = require('../helpers/twittPackage/index');

exports.getTwitter = (key) => {
    return new Promise((resolve, reject) => {
        T.get('search/tweets', { q: `${key} since:2000-01-01`, count: 100}, (err, data, response) => {
            if(err) return reject(err);
            return resolve(data.statuses);
        });
    })
}