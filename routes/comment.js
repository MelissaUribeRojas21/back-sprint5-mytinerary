let router = require('express').Router();
let { read, create } = require('../controllers/comment');
const schema = require('../schemas/comment');
const validator = require('../middlewares/validator');
const passport = require('../config/passport')

router.get('/', read);
router.post("/", passport.authenticate("jwt", { session: false }), validator(schema), create);

module.exports = router;