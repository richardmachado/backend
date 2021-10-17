const express = require("express");
const { validateProfile } = require("../middleware/profile.middleware");
const Profile = require("./profile-model");
const app = express.Router();

// adds a profile
app.post("/", validateProfile, (req, res) => {
  let userData = req.body;
  console.log("user", userData)

  Profile.insert(userData)
    .then(() => {
      res.status(200).json({
        message: "Thanks for adding your profile!",
      });
    })
    .catch((err) => {
      res.status(500).json({ Error: "failed to retrieve database", err });
    });
});

// retrieves your profile
app.get("/:id", (req, res) => {
  const { id } = req.params;

  Profile.findProfileById(id)
    .then((profile) => {
      if (profile < 1) {
        res.status(404).json({ message: "There is no profile with that id" });
      } else {
        res.json(profile);
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to get profile. ", err });
    });
});

module.exports = app;
