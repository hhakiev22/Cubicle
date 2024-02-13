const jwt = require("../lib/jwt");
const { SECRET } = require("../config/config");

//Authorization: logged in or not logged in
exports.auth = async (req, res, next) => {
  const token = req.cookies["auth"];

  if (token) {
    try {
      // validate token
      const user = await jwt.verify(token, SECRET);

      req.user = user;

      next();
    } catch (err) {
      res.clearCookie("auth");

      return res.redirect("/users/login");
    }
  } else {
    next(); // for not logged in users, continue to scroll in our site, but not as user
  }
};
