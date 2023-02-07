require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const app = express();


app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true
}));

app.use(express.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://127.0.0.1/fullStack", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database Connected...")
})

const UserSchema = new mongoose.Schema({
    googleId: String,
    username: String,
    password: String
})

UserSchema.plugin(passportLocalMongoose);
UserSchema.plugin(findOrCreate);

const User = mongoose.model("users", UserSchema);

passport.use(User.createStrategy());

passport.use(
    new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSECRET: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/devBlogs",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},

    (accessToken, refreshToken, profile, cb) => {
        User.findOrCreate({ googleId: profile.id }, (err, user) => {
            return cb(err, user)
        })
    }
))

passport.serializeUser((user, done) => {
    done(null, user.id)
});


passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
});

app.get("/", (req, res) => {
    res.send("Connected...")
})


app.get("/auth/google", passport.authenticate("google", { scope: ['profile'] }))


app.get("/login/success", (req, res) =>{
    if(req.user){
        res.status(200).json({

            error:false,
            message: "Successfully Logged in",
            user: req.user
        })

    }else{
        res.status(403).json({error:true, message: "Not Authorized!"})
    }
})

app.get("/login/failed", (req, res) =>{
    res.status(401).json({
        error: true,
        message: "Log in Failure"
    });

})


app.get("/auth/google/devBlogs", passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL
    ,failureRedirect: "/login/failed"}),

    (req, res) =>{
        res.send("Authenticated")
    }
    )

app.post("/register", (req, res) => {

    User.register({ username: req.body.username }, req.body.password, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send(JSON.stringify({ 'value': 'Registration Successful' }))
            })
        }
    })
})

app.post("/login", (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    })

    req.login(user, (err) => {
        if (err) {
            console.log(err)
            res.send("Not Authenticated")
        } else {
            passport.authenticate("local")(req, res, () => {
                res.send(JSON.stringify({ "value": "Authenticated" }))
            })
        }
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on ${PORT}`))