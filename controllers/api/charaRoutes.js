const router = require('express').Router();
const { Chara } = require('../../models');
const withAuth = require('../../utils/auth.js');

router.post('/',withAuth, async (req, res) => {
  try {
    const newChara = await Chara.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newChara);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id',withAuth, async (req, res) => {
  try {
    const CharaData = await Chara.update(req.body, {
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    if (!CharaData[0]) {
      res.status(404).json({ message: 'No Character with this id!' });
      return;
    }
    res.status(200).json(CharaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const CharaData = await Chara.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!CharaData) {
      res.status(404).json({ message: 'No Character found with this id!' });
      return;
    }

    res.status(200).json(CharaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;