const mongoose = require('mongoose');
const url=`mongodb+srv://user_name:password@cluster0.udwzo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});
