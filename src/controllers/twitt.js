const { response } = require('express');
const {getTwitter} = require('../services/twitts');
const {twitterMapper} = require('../helpers/mappers/index');

exports.getTwittByKey = async (req, res = response) => {
    const key = req.params.key;
    const twitts = await getTwitter(key);
    const formattedTweets = twitts.map(twitt=>twitterMapper(twitt));
    res.status(200).json(
        {
            total: formattedTweets.length,
            twitts: formattedTweets
        }
    );
}