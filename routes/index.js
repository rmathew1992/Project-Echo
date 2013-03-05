
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index',{title:'yo'})
  console.log('There are things appearing')
 };