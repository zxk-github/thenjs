var express = require('express');
var nunjucks = require('nunjucks');

const app = new express();

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

// var env = new nunjucks.Environment();
// env.addFilter('cut', function(str, count){
//   return str.replace('a', count);
// })

app.get('/', function(req, res) {
  res.render('index.html', {a: 'zhang', b: 'aaa'})
})

app.listen(4000);
