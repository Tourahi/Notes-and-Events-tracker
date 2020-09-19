const express = require('express');
const nodePath = require('path');
const exphbs   = require('express-handlebars');
const methodOverride = require('method-override');
const session  = require('express-session');
const morgan = require('morgan')
const connectDB = require('./database.js');
const dotenv    = require('dotenv');

// Initialisations
dotenv.config();
const app = express();
connectDB();

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
app.use(morgan('dev'))

// Global variables

// Routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));
app.use('/notes',require('./routes/notes'));
app.use('/tasks',require('./routes/tasks'));

// Static files
app.use(express.static(nodePath.join(__dirname , 'public')));
// Server is listenning

app.listen(app.get('port') , () =>{
  console.log("Server listenning on port : " , app.get('port'));
});
