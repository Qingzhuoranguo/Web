function check (req, res, next) {
    console.log(`validation module passed`)
    next();
}


module.exports = {check}