const express = require('express');
const router = express.Router();
const Palabra = require('../models/Palabras');

//get all routes

router.get('/', async (req, res) => {
	const palabras = await Palabra.find();

	res.json(palabras);
});

router.post('/new', async (req, res, next) => {
	try{
		const {termino, comuna} = req.body;
		const terminoNuevo = Palabra({
			termino,
			comuna
		})
		const guardar = await terminoNuevo.save()
		res.send(terminoNuevo)
	} catch(err){
		next(err)
	}
})


// Get specific word
router.get('/:id', async (req, res) => {
	const p = await Palabra.findById({ _id: req.params.id });

	res.json(p);
});

// Delete a word
router.delete('/:id', async (req, res) => {
	const result = await Palabra.findByIdAndDelete({ _id: req.params.id });

	res.json(result);
});

// Update a word
router.patch('/:id', async (req, res) => {
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