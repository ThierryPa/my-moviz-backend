var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`).then(response => response.json()).then(data => {
        console.log(data);
        res.json({ movies: data.results });
    });
    //https://api.themoviedb.org/3/movie/550?api_key={$process.env.TMDB_API_KEY}
});

module.exports = router;
