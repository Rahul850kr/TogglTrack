const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  if (!req.headers.authorization) {
    res.send("Please Login again");
  }
  const token = req.headers.authorization?.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.send("Please Login");
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = {
  authentication,
};
