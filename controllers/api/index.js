const router = require('express').Router();
const userRoutes = require('./userRoutes');
const charaRoutes = require('./charaRoutes');

router.use('/users', userRoutes);
router.use('/charas', charaRoutes);

module.exports = router;
