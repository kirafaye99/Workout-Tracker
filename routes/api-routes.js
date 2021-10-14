const path = require("path");
const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: {$sum: "$exercises.duration"}},
        }
    ])
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
})

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {totalDuration: {$sum: "$exercises.duration"}},
        },
    ])
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
})


//html routes
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
});

module.exports = router;