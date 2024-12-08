import express from 'express';
import Player from '../models/Player.js';

const router = express.Router();

// CRUD (Create)
router.post('/', async (req, res) => {
    try {
        console.log(req.body);
        const { player_id, player_name, age, team, jersey_num, position } = req.body

        const newPlayer = new Player({
            player_id,
            player_name, 
            age, 
            team, 
            jersey_num, 
            position
        });
        
        const savedPlayer = await newPlayer.save();
        res.status(201).json(savedPlayer);

    } catch (error) {
        res.status(400).send({message: error.message});
    }
});

export default router;