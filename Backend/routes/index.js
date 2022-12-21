const express = require("express");
const logger = require("../lib/logger");
const authRouter = require("./auth");
const mailRouter = require("./mail");
const userRouter = require("./user");
const deviceRouter = require("./device");
const manageRouter = require("./manage");
const logRouter = require("./log");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Express" });
});

// logTest
router.get("/log-test", (req, res, next) => {
  logger.error("This message is error");
  logger.warn("This message is warn");
  logger.info("This message is info");
  logger.verbose("This message is verbose");
  logger.debug("This message is debug");
  logger.silly("This message is silly");

  res.send("log test");
});

router.use("/auths", authRouter);
router.use("/users", userRouter);
router.use("/mails", mailRouter);
router.use("/devices", deviceRouter);
router.use("/manages", manageRouter);
router.use("/logs", logRouter);

module.exports = router;
