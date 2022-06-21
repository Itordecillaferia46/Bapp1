const express = require('express');
const router = express.Router();
const Palabra = require('../models/Palabras');

//get all routes
router.get('/', async (req, res) => {
	const palabras = await Palabra.find();

	res.json(palabras);
});

//create new word
router.post('/new', async (req, res) => {
	const newPalabra = new Palabra(req.body);
	
	const savedPalabra = await newPalabra.save();

	res.json(savedPalabra);
});

// Get specific word
router.get('/get/:id', async (req, res) => {
	const p = await Palabra.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a word
router.delete('/delete/:id', async (req, res) => {
	const result = await Palabra.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a word
router.patch('/update/:id', async (req, res) => {
	const p = await Palabra.updateOne({_id: req.params.id}, {$set: req.body});

	res.json(p);
});

// Get random word
router.get('/random', async (req, res) => {
	const count = await Palabra.countDocuments();
	const random = Math.floor(Math.random() * count);
	const p = await Palabra.findOne().skip(random);

	res.json(p);
});

module.exports = router;