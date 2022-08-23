const express = require('express');
const router = express.Router();
const Cita = require('../models/Citas');

// Get All citas route
router.get('/', async (req, res) => {
  const citas = await Cita.find();
  res.json(citas);
});

// crear nueva cita
router.post('/nuevo', async (req, res) => {
  const nuevaCita = new Cita(
    req.body // What the Vue App is sending
    /* { // pass in body content to be stored in DB
        author:"Flanders", 
        todo:"Go to canada"
      } */
  );
  const guardarCita = await nuevaCita.save(); // mongodb metodo para guardar en db
  res.json(guardarCita); // respond with json to our post endpoint
});

// Getter by id
router.get('/buscar/:id', async (req, res) => {
  const t = await Cita.findById({ _id: req.params.id });
  res.json(t);
});

// Eliminar una cita por id
router.delete('/eliminar/:id', async (req, res) => {
  const tDelete = await Cita.findByIdAndDelete({ _id: req.params.id });
  res.json(tDelete);
});

// Actualizar cita por id
router.put('/actualizar/:id', async (req, res) => {
  const tUpdate = await Cita.updateOne(
    { _id: req.params.id },

    { $set: req.body }
  );
  res.json(tUpdate);
});

module.exports = router;
