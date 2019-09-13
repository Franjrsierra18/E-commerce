const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://franjrsierra18:Sierra2991@registro-travel-agency-bhwrc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));