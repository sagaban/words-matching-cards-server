// const Card = require("../models").Card;
const Tag = require("../models").Tag;

module.exports = function (router) {
  router.get("/tags", (req, res) => {
    Tag.findAll({
      // include: [{ model: Card, as: "cards" }],
    })
      .then(tags => {
        res.json(tags);
      })
      .catch(err => res.status(500).send(err));
  });

  router.get("/tags/:id", (req, res) => {
    Tag.findAll({
      where: { id: req.params.id },
    })
      .then(tag => {
        res.json(tag[0]);
      })
      .catch(err => res.status(500).send(err));
  });

  router.post("/tags", (req, res) => {
    Tag.create({
      name: req.body.name,
    })
      .then(tag => {
        res.json(tag);
      })
      .catch(err => res.status(500).send(err));
  });

  router.put("/tags/:id", (req, res) => {
    Tag.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedTag => {
        res.json(updatedTag);
      })
      .catch(err => res.status(500).send(err));
  });

  router.delete("/tags/:id", (req, res) => {
    Tag.destroy({
      where: { id: req.params.id },
    })
      .then(tag => {
        res.json(tag);
      })
      .catch(err => res.status(500).send(err));
  });
};
