
const express = require("express");

const {
    handleImageUpload,
    // addProduct,
    // editProduct,
    // fetchAllProducts,
    // deleteProduct,
  } = require("../../controllers/admin/products-controller");

const { upload } = require("../../helpers/cloudinary");
const router = express.Router();

router.post("/upload-image", upload.single("my_file"), handleImageUpload);

module.export = router;