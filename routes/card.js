const Card = require("../models").Card;
const Tag = require("../models").Tag;
const all = require("../models");

module.exports = function (router) {
  router.get("/cards", (req, res) => {
    Card.findAll({
      include: [Tag],
    })
      .then((cards) => {
        res.json(cards);
      })
      .catch((err) => res.json(err));
  });

  router.get("/cards/:id", (req, res) => {
    Card.findAll({
      where: { id: req.params.id },
    })
      .then((cards) => {
        res.json(cards[0]);
      })
      .catch((err) => res.json(err));
  });

  router.post("/cards", (req, res) => {
    Card.create({
      word: req.body.word,
      translation: req.body.word,
      notes: req.body.notes,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  });

  router.put("/cards/:id", (req, res) => {
    Card.update(
      {
        word: req.body.word,
        translation: req.body.word,
        notes: req.body.notes,
      },
      { where: { id: req.params.id } }
    )
      .then((updatedCard) => {
        res.json(updatedCard);
      })
      .catch((err) => res.json(err));
  });

  router.delete("/cards/:id", (req, res) => {
    Card.destroy({
      where: { id: req.params.id },
    })
      .then((word) => {
        res.json(word);
      })
      .catch((err) => res.json(err));
  });
};
