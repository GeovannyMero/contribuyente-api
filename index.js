const express = require('express');
const bodyParser = require('body-parser');
//v1
const v1WorkoutRouter = require('./src/v1/routes/workoutRoutes');
//contribuyente API
const v1ContriRouter = require('./src/v1/routes/contribuyenteRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use('/api/v1', v1Router);

// app.use('/api/v1/workouts', v1WorkoutRouter);
app.use('/api/v1/contribuyentes', v1ContriRouter);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
})