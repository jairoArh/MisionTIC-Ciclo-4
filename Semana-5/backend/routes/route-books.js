const router = require("express").Router();

const {
  findAll,
  findById,
  save,
  update,
  erase
} = require("../controllers/book-controller");

router.get("/", findAll);

router.get("/:id", findById);

router.post("/", save);

router.put('/:idAux',update)

router.delete('/:id',erase)

module.exports = router;
