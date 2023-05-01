const express = require('express');
const bodyParser = require('body-parser');

const app= express();
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');


app.get('/',function(req,res) {
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let today = new Date();

    day = today.toLocaleDateString('en-US',options);
    res.render('list',{day:day});

});


app.listen(3000,function() {
    console.log('Server is running on 3000');
});