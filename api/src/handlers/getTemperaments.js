const temperamentToDb = require('../controllers/temperamentsControls/temperamentToDb');

const getTemperaments = async (req, res) =>{
    try {
        const allTemperaments = await temperamentToDb();
        return res.status(200).json({message: allTemperaments});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

module.exports = getTemperaments;