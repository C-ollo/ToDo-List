const express = require('express');
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');

var items = [];
app.get('/',function(req,res) {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let today = new Date();

    day = today.toLocaleDateString('en-US',options);
    res.render('list',{day:day,newListItem:items});

});  

app.post("/",function (req,res) {
    item = req.body.newItem;
    items.push(item);
    res.redirect('/');
    
});


app.listen(3000,function() {
    console.log('Server is running on 3000');
});