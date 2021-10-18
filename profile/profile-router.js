const express = require("express");
const { validateProfile, validateEditProfile } = require("../middleware/profile.middleware");
const Profile = require("./profile-model");
const app = express.Router();

const dbConfig = require("../data/dbConfig");

// adds a profile
app.post("/", validateProfile, (req, res) => {
  let userData = req.body;
  console.log("user", userData);

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
} );

//edits your profile

app.put("/:id", validateEditProfile, (req, res) => {
  dbConfig("profile")
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      res.status(200).json({message:"Thank you for updating your profile"});
    });
});

module.exports = app;
