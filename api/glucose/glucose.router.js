const express = require("express");
const {
  validateUserID,
  validateGlucoseFields,
} = require("../middleware/glucose-middleware");

const Glucose = require("./glucose-model");
const app = express.Router();

app.get("/", (req, res) => {
  Glucose.getAllReadings()
    .then((readings) => {
      res.status(200).json(readings);
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to get readings. ", err });
    });
});

// retrieves your readings
app.get("/:id", (req, res) => {
  const { id } = req.params;

  Glucose.getMyReadings(id)
    .then((profile) => {
      if (profile < 1) {
        res.status(404).json({ message: "There are no readings with that id" });
      } else {
        res.json(profile);
      }
    })
    .catch((err) => {
      res.status(500).json({ errorMessage: "Failed to get readings. ", err });
    });
});

// adds a reading
app.post("/", validateGlucoseFields, validateUserID, (req, res) => {
  let glucoseData = req.body;
  Glucose.insertReading(glucoseData)
    .then(() => {
      res.status(200).json({
        message: "Thanks for adding a reading!",
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ Error: "failed to retrieve glucose database", err });
    });
});

//deletes a reading
app.delete("/:id", (req, res) => {
  const { id } = req.params;
  Glucose.deleteReading(id)
    .then( ( deleted ) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: "No reading with that id exists" });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .json( { errorMessage: "Failed to delete reading. You done mest up" } );
    });
});

module.exports = app;
