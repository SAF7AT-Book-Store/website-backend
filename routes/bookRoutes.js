const express = require("express");
const router = express.Router();
const {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} = require("../controllers/bookController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });
const verifyAdmin2 = require("../middleware/verifyAdmin2");

router.get("/", getAllBooks);

router.get("/:id", getBookById);

router.post(
  "/",
  verifyAdmin2,
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "cover", maxCount: 1 },
    { name: "sample", maxCount: 1 },
  ]),
  createBook
);

router.put(
  "/:id",
  verifyAdmin2,
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "cover", maxCount: 1 },
    { name: "sample", maxCount: 1 },
  ]),
  updateBookById
);

router.delete("/:id", verifyAdmin2, deleteBookById);

module.exports = router;
