const router = require("express").Router();

const {
  findAll,
  save,
  findById,
  erase,
  update
} = require("../controllers/author-controller-db");

router.get("/", findAll);

router.get("/:id",findById)

router.post("/",save)

router.delete('/:id',erase )

router.put('/:id',update)

module.exports = router