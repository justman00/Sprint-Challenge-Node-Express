const express = require("express");
const db = require("../../data/helpers/actionModel");

const router = express.Router();

function checkForVals(req, res, next) {
  const { notes, description, project_id } = req.body;

  if (!notes || !description || !project_id) {
    res.status(400).json({ message: "Invalid Fields" });
  } else {
    next();
  }
}

router.get("/", async (req, res) => {
  try {
    const data = await db.get();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "I am so sorry :(" });
  }
});

router.post("/", checkForVals, async (req, res) => {
  try {
    const newAction = await db.insert(req.body);
    res.status(200).json(newAction);
  } catch (e) {
    res.status(500).json({ error: "I am so sorry :(" });
  }
});

module.exports = router;
