const express = require("express");
const router = express.Router();
const {
    uploadImageHandler,
    getAllImageHandler,
    getImageHandler,
    updateImageHandler,
    deleteImageHandler,
  } = require("../../controllers/v1/imageController")
const upload = require("../../middlewares/v1/mutlerUpload");
const { validateToken } = require("../../middlewares/v1/auth");
const { authorize } = require("../../middlewares/v1/authorize");


router.post("/upload", validateToken, upload.single("image"), uploadImageHandler);
router.get("", getAllImageHandler);
router.get("/:id", getImageHandler);
router.put("/:id", validateToken, updateImageHandler);
router.delete("/:id", validateToken, deleteImageHandler);

module.exports = router;

