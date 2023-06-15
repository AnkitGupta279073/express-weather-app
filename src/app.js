const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3001;

//static page
const static_path = path.join(__dirname, '../public');
// const static_path1 = path.join(__dirname, '../template');
const template_path = path.join(__dirname, '../template/views');
const partials_path = path.join(__dirname, '../template/partials');
hbs.registerPartials(partials_path);
app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path));
// app.use(express.static(static_path1));


//routing
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('*', (req, res) => {
    res.render('404error', {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log(`server is running on ${port} number`);
});