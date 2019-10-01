const express = require('express');
const app = express(); //建立一個Express伺服器
app.listen(3000,function(){
    console.log("web app start")
}); //告訴server聽取3000這個Port

app.get('/', function (req, res) {
    res.send('Express is excellent!')
  });

  app.get('/blog', function(req, res) {
    res.json({
    text: 'Send blog page!'
    });
    });