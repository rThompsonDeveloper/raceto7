const express = require("express");
const router = express.Router();

// Authentication
const auth = require("../../middleware/auth");

// Models
const User = require("../../models/User");

// @route   GET api/follow
// @desc    gets a list of people you are following
// @access  Private
router.get("/:id", auth, async (req, res) => {
  try {
    const id = req.params.id;

    // Update the accountToFollows followedBy list
    const user = await User.findById(id).select("profilePhoto").select("name");

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
