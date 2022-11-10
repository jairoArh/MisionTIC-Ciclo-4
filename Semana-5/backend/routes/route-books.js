const router = require("express").Router();

const {
  findAll,
  save
} = require("../controllers/book-controller-db");

router.get("/", findAll);

router.post("/:id", save);

/*router.get("/:id", findById);

router.put('/:idAux',update)

router.delete('/:id',erase)*/

module.exports = router;
