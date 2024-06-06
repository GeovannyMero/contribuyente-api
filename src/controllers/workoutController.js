const workoutService = require('../services/workoutService');

const getAllworkouts = (req, res) => {
    const allWorkouts = workoutService.getAllworkouts();
     res.send({status: 'OK', data: allWorkouts});

}

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout();
    res.send("Get an existing workout");
}

const createNewWorkout = (req, res) => {
    const { body } = req;

    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercise ||
        !body.trainerTips
    ){
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
      };

    const createdWorkout = workoutService.updateOneWorkout(newWorkout);
    res.status(201).send({status:'OK',data: createdWorkout});
};

const updateOneWorkout = (req, res) => {
    const updateWorkout = workoutService.updateOneWorkout();
    res.send("Update an existing workout");
};

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
};

module.exports = {
    getAllworkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}