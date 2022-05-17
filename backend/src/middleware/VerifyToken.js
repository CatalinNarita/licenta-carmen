import jwt from "jsonwebtoken";

export const verifyToken = function (req, res, next) {
  // const token =
  //   req.body.token ||
  //   req.query.token ||
  //   req.headers["x-access-token"] ||
  //   req.cookies.token;

  // if (!token) {
  //   res.status(401).send("Unauthorized: No token provided");
  // } else {
  //   jwt.verify(token, secret, function (err, decoded) {
  //     if (err) {
  //       res.status(401).send("Unauthorized: Invalid token");
  //     } else {
  //       req.email = decoded.email;
  //       req.firstName = decoded.firstName;
  //       req.lastName = decoded.lastName;
  //       next();
  //     }
  //   });
  // }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).send("Unauthorized: No token provided");
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).send("Unauthorized: Invalid token");
    }
    req.email = decoded.email;
    next();
  });
};
