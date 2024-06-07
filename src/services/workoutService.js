const { v4: uuid } = require('uuid');

const workouts = require('../database/Workout');


const getAllworkouts = () => {
  try{
    const allWorkouts = workouts.getAllWorkouts();
    return allWorkouts;
  }catch(error){
    throw error;
  }
  
};

const getOneWorkout = () => {
  return;
};

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createAt: new Date().toLocaleDateString('en-US', { timeZone: "UTC" }),
    updateAt: new Date().toLocaleDateString('en-US', { timeZone: "UTC" }),
  }

  const createWorkout = workouts.createNewWorkout(workoutToInsert);
  return createWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllworkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
};