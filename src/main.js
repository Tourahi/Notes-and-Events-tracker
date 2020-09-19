const express = require('express');
const nodePath = require('path');
const exphbs   = require('express-handlebars');
const methodOverride = require('method-override');
const session  = require('express-session');
// Initialisations
const app = express();

// Options Objects
const exphbsOpt = { // handlebars options
  defaultLayout : 'main',
  layoutsDir    : nodePath.join(app.get('views') , 'layouts'),
  partialsDir   : nodePath.join(app.get('views') , 'partials'),
  extname       : '.hbs'
}

const sessionOpt = { // session options
  secret : 'MySEcret',
  resave : true,
  saveUninitialized : true
}

// Settings
app.set('port' , process.env.PORT || 3030);
app.set('views', nodePath.join(__dirname , 'views'));
app.engine('.hbs' , exphbs(exphbsOpt));
app.set('view engine' , '.hbs');

// Middlewares
app.use(express.urlencoded({ extended : false }));
app.use(methodOverride('_method'));
app.use(session(sessionOpt));
// Global variables

// Routes

// Static files

// Server is listenning

app.listen(app.get('port') , () =>{
  console.log("Server listenning on port : " , app.get('port'));
});
