import express from "express";
import { getAllWorkouts, createWorkout, getSingleWorkout, deleteWorkout, updateWorkout} from "../controllers/workoutController.js";

const router = express.Router();


// Get all workouts
router.get("/", getAllWorkouts);

// een workout ophalen
router.get("/:id", getSingleWorkout);

//post een workout
router.post('/', createWorkout );

//delete een workout
router.delete('/:id', deleteWorkout );

//update een workout
router.update('/:id', updateWorkout );

export default router;