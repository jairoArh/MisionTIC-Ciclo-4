const router = require("express").Router();

const {
  findAll,
  save,
  findById
} = require("../controllers/author-controller-db");

router.get("/", findAll);

router.get("/:id",findById)

router.post("/",save)

module.exports = router