const Word = require("../models").Word;
const Tag = require("../models").Tag;
const all = require("../models");

module.exports = function (router) {
  router.get("/words", (req, res) => {
    Word.findAll({
      include: [Tag],
    })
      .then((words) => {
        res.json(words);
      })
      .catch((err) => res.json(err));
  });

  router.get("/words/:id", (req, res) => {
    Word.findAll({
      where: { id: req.params.id },
    })
      .then((word) => {
        res.json(word[0]);
      })
      .catch((err) => res.json(err));
  });

  router.post("/words", (req, res) => {
    Word.create({
      word: req.body.word,
      translation: req.body.word,
      notes: req.body.notes,
    })
      .then((data) => {
        res.json(data);
      })
      .catch((err) => res.json(err));
  });

  router.put("/words/:id", (req, res) => {
    Word.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then((updatedWord) => {
        res.json(updatedWord);
      })
      .catch((err) => res.json(err));
  });

  router.delete("/words/:id", (req, res) => {
    Word.destroy({
      where: { id: req.params.id },
    })
      .then((word) => {
        res.json(word);
      })
      .catch((err) => res.json(err));
  });
};
