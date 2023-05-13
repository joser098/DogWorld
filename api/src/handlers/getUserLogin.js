const getUserAccess = require('../controllers/dogRoutesControls/getUserAccess');

const getUserLogin = async(req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password) return res.status(400).json({ access: false, message: 'Dates incompleted' });
        
        const userFound = await getUserAccess(email, password);
        res.status(200).json({access: true, userFound});
    } catch (error) {
      return res.status(500).json({ access: false, message: error.message});
    };
};


module.exports = getUserLogin;