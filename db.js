const mongoose = require('mongoose');
const url=`mongodb+srv://Lina_B:turtle111@cluster0.udwzo.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});