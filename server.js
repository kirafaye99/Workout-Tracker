const express= require('express');
const mongoose= require('mongoose');

const PORT= process.env.PORT || 3001;

const app= express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

app.use(require('./public/api'));

app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}!`);
});