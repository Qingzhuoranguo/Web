module.exports = function (app) {
    // host_address/ goes to host_address/home
    app.get ('/', (req, res)=>{
        res.redirect('/home')
    })

    app.use('/home', require('./home'))
    app.use('/profile', require('./profile'))
}