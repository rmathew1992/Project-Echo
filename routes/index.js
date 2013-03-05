
/*
 * GET home page.
 */

var echojs = require('echojs');

var echo = echojs({
  key: "XCVC9ZYTCHJC5TMUI"
});

	exports.index = function(req, res){
	echo('song/search').get({
	  artist: '2pac',
	  title: "thugz mansion",
	  bucket: 'audio_summary'
	}, function (err, json) {
	  var url = json.response.songs[0].audio_summary.analysis_url;
	  res.render('index', { title: 'yo' , audioUrl: url});
	});
	console.log('There are things appearing')
 };