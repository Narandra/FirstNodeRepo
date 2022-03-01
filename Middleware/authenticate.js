const authenticate = (req, res, next) => {
    console.log('Inside auth module')
    console.log(req.headers);
    next();
  }

module.exports = authenticate;