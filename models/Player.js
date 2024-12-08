import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({

    player_id: { type: Number, required: true, unique: true },
    player_name: { type: String, required: true, minlength: [3, 'Player Name must be at least 3 characters long'] },
    age: { type: Number, required: true },
    team: { type: String, required: true },
    jersey_num: { type: Number, required: true },
    position: { type: String, required: true },

});

// Creating schema => DB
const Player = mongoose.model("Player", playerSchema);

export default Player;