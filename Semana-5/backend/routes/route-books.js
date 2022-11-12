const router = require("express").Router();

const {
  findAll,
  save,
  findById,
  erase
} = require("../controllers/book-controller-db");

router.get("/", findAll);

router.post("/:id", save);

router.get("/:id", findById);

router.delete('/:id',erase)

/*router.put('/:idAux',update)
*/

module.exports = router;
