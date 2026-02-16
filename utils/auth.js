const isLoggedIn = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }
  next();
};

const isAdmin = (req, res, next) => {
  if (!req.session.user) {
    return res.status(401).json({
      message: "You must be logged in",
    });
  }

  if (req.session.user.role !== "admin") {
    return res.status(403).json({
      message: "Admin access required",
    });
  }

  next();
};

module.exports = { isLoggedIn, isAdmin };
