const express = require("express");
const db = require("../../data/helpers/projectModel");

const router = express.Router();

function checkForVals(req, res, next) {
  const { name, description } = req.body;

  if (!name || !description) {
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
    res.status(201).json(newAction);
  } catch (e) {
    res.status(500).json({ error: "I am so sorry :(" });
  }
});

router.put("/:id", checkForVals, async (req, res) => {
  try {
    const updatedAction = await db.update(req.params.id, req.body);
    res.status(201).json(updatedAction);
  } catch (e) {
    res.status(500).json({ error: "I am so sorry :(" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedAction = await db.remove(req.params.id);
    res.status(200).json(deletedAction);
  } catch (e) {
    res.status(500).json({ error: "I am so sorry :(" });
  }
});

module.exports = router;
