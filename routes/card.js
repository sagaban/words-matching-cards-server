const Card = require("../models").Card;
const Tag = require("../models").Tag;
const all = require("../models");

module.exports = function (router) {
  router.get("/cards", (req, res) => {
    Card.findAll({
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["id"],
          through: { attributes: [] },
          where: { UserId: req.user.id },
        },
      ],
    })
      .then(cards => {
        res.json(cards);
      })
      .catch(err => res.status(500).send(err));
  });

  router.get("/cards/:id", (req, res) => {
    Card.findAll({
      where: { id: req.params.id },
      include: [
        {
          model: Tag,
          as: "tags",
          attributes: ["id"],
          through: { attributes: [] },
          where: { UserId: req.user.id },
        },
      ],
    })
      .then(cards => {
        res.json(cards[0]);
      })
      .catch(err => res.status(500).send(err));
  });

  router.post("/cards", (req, res) => {
    // const tag = req.body.tags ? req.body.tags.map((id) => ({ id })) : [];
    Card.create({
      word: req.body.word,
      translation: req.body.translation,
      notes: req.body.notes,
      UserId: req.user.id,
    })
      .then(newCard => {
        if (req.body.tags && req.body.tags.length) {
          Tag.findAll({ where: { id: req.body.tags } })
            .then(tagObjects => {
              newCard.addTags(tagObjects);
            })
            .catch(err => {
              console.log(err);
            });
        }
        res.json(newCard);
      })
      .catch(err => res.status(500).send(err));
  });

  router.put("/cards/:id", (req, res) => {
    Card.update(
      {
        word: req.body.word,
        translation: req.body.word,
        notes: req.body.notes,
        learned: req.body.learned,
      },
      { where: { id: req.params.id, UserId: req.user.id } }
    )
      .then(updatedCard => {
        res.json(updatedCard);
      })
      .catch(err => res.status(500).send(err));
  });

  router.delete("/cards/:id", (req, res) => {
    Card.destroy({
      where: { id: req.params.id, UserId: req.user.id },
    })
      .then(word => {
        res.json(word);
      })
      .catch(err => res.status(500).send(err));
  });
};
