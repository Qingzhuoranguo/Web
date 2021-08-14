const express = require('express')
const router = express.Router();


router.get('/', (req,res)=>{
    res.send('Profile home page');
});

router.get('/resume', (req,res)=>{

    res.send('Profile resume page')
})


module.exports = router