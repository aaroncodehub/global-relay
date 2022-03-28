const router = require('express').Router();
const needle = require('needle');
require('dotenv').config()

const token = process.env.BEARER_TOKEN;

const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

router.get('/:query', async (req,res) => {
    
    const params = {
        'query': req.params.query,
        'tweet.fields': 'author_id,created_at,entities,in_reply_to_user_id',
    }
    const response = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (response.body) {
        res.status(200).json(response.body.data);
    } else {
        res.status(500).json({msg: 'Unsuccessful request'});
    }
})

module.exports = router; 