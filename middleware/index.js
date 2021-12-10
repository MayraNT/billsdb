const jwt = require("jsonwebtoken");
const jwksRsa = require("jwks-rsa");

const checkJwt = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const [bearer, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch(error) {
    res.sendStatus(401);
  }
};

module.exports = { checkJwt };
