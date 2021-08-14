const express = require('express')
const router = express.Router();

// profile home page
router.get('/', (req,res)=>{
    res.send('Profile home page');
});

// '/home' goes back to main home page
router.get('/home', (req, res)=>{
    res.redirect('/')
});

// other routers



module.exports = router