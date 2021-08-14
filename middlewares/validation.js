module.exports = {

    sessionCheck: function(req, res, next) {
        console.log(`sessionCheck module passed`)
        next();
    }
    
}
