const Word = require("../models").Word;
const Tag = require("../models").Tag;

module.exports = function(router) {
  router.get("/api/tags", (req, res) => {
    Tag.findAll({
      include: [Word]
    })
      .then(tags => {
        res.json(tags);
      })
      .catch(err => res.json(err));
  });

  router.get("/api/tags/:id", (req, res) => {
    Tag.findAll({
      where: { id: req.params.id }
    })
      .then(tag => {
        res.json(tag[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/api/tags", (req, res) => {
    Tag.create({
      name: req.body.name
    })
      .then(tag => {
        res.json(tag);
      })
      .catch(err => res.json(err));
  });

  router.put("/api/tags/:id", (req, res) => {
    Tag.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedTag => {
        res.json(updatedTag);
      })
      .catch(err => res.json(err));
  });

  router.delete("/api/tags/:id", (req, res) => {
    Tag.destroy({
      where: { id: req.params.id }
    })
      .then(tag => {
        res.json(tag);
      })
      .catch(err => res.json(err));
  });
};
