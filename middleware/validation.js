module.exports = {

    testCheck: function(req, res, next) {
        console.log(`Validation module passed`)
        next();
    }
    
}
