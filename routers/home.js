const express = require('express')
const router = express.Router();


router.get('/', (req,res)=>{
    // res.send('Home page');
    console.log("home page loaded")
    res.render('home.html')
});

router.get('/profile', (req, res)=>{
    res.redirect ('/profile')
})



module.exports = router