const { Router } = require("express");
const { ObjectId } = require("mongodb");
const { connectDB } = require("../db");
const { asyncHandler } = require("../middleware");

const router = Router();

async function getCollection() {
  const { db } = await connectDB();
  return db.collection("plants");
}

function isValidId(id) {
  try {
    new ObjectId(id);
    return true;
  } catch {
    return false;
  }
}

// GET /plants — list all
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const plants = await getCollection();
    const result = await plants.find().toArray();
    res.json(result);
  })
);

// GET /plants/:id — get one
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid plant ID" });
    }
    const plants = await getCollection();
    const plant = await plants.findOne({ _id: new ObjectId(req.params.id) });
    if (!plant) return res.status(404).json({ error: "Plant not found" });
    res.json(plant);
  })
);

// POST /plants — create
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const plants = await getCollection();
    const result = await plants.insertOne(req.body);
    res.status(201).json(result);
  })
);

// PUT /plants/:id — update (mounted at /plants-update/:id)
router.put(
  "/:id",
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid plant ID" });
    }
    const plants = await getCollection();
    const result = await plants.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: "Plant not found" });
    }
    res.json(result);
  })
);

// DELETE /plants/:id — delete
router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) {
      return res.status(400).json({ error: "Invalid plant ID" });
    }
    const plants = await getCollection();
    const result = await plants.deleteOne({ _id: new ObjectId(req.params.id) });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Plant not found" });
    }
    res.json({ success: true, message: "Plant deleted successfully" });
  })
);

module.exports = router;
