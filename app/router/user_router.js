const user = require("../controller/user_controller")

const router = require("express").Router()

router.get("/", user.findAll)
router.get("/:id", user.findId)

module.exports = router