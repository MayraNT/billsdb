// const jwt = require("jsonwebtoken");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// const checkJwt = (req, res, next) => {
//   const authHeader = req.headers["authorization"];
//   const [bearer, token] = authHeader.split(" ");

//   const decoded = jwt.verify(token, "secret");

//   if (!decoded) {
//       throw new Error("Invalid token");
//     }
//     req.user = decoded;
//     next();
//    if (error) {
//     res.sendStatus(401);
//   }
// };

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
  }),
  // Validate the audience and the issuer.
  audience: process.env.AUTH0_IDENTITY,
  issuer: `https://${process.env.AUTH0_DOMAIN}/`,
  algorithms: ["RS256"],
});

module.exports = { checkJwt };
