const logger = function (req, res, next){
    const url = req.url;
    const method = req.method;
    const date = new Date().getDate();
    console.log(method, url, date);
    next();
}

module.exports = logger;