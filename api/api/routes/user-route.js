const { Router } = require("express");

const UserController = require("../controllers/user-controller");
const upload = require("../middlewares/upload");
const auth = require("../middlewares/auth");

const router = Router();

router
  .get("/", auth, UserController.get)
  .get("/:id", auth, UserController.getById)
  .put("/:id", auth, upload.single("image"), UserController.updateById)
  .delete("/i/:id", auth, UserController.deleteImage);

module.exports = router;
