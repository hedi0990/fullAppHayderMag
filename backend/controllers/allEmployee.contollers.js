const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('config').get('JWT_SECRET')


exports.logInUser = async (req, res) => {
    const { name, password } = req.body;
    try {
        const employe = await User.findOne({ name: name });
        if (!employe) { return res.status(402).json({ error: `Compte introuvable. Veuillez vérifier vos identifiants et réessayer.` }); }
        // const comparePassword = bcrypt.compareSync(password, employe.password);
        // if (!comparePassword) { return res.status(402).json({ error: `Mot de passe incorrect. Veuillez vérifier votre mot de passe et réessayer.` }) }
        
        if (password!==employe.password){ return res.status(402).json({ error: `Mot de passe incorrect. Veuillez vérifier votre mot de passe et réessayer.` })}
        
        
        employe.token = jwt.sign({ name: employe.name, _id: employe._id }, JWT_SECRET);
        await employe.save();
        res.status(200).json({
            message: 'success login',
            employe: employe,
        })
        
    } catch (error) {
        res.status(502).json({ error: error.message })
    }
}

// exports.getMyProfil = async (req, res) => {
//     const employe = req.employe;
//     const { link } = req.query
//     try {
//         if (employe.link !== link) {
//             return res.status(404).json({ error: "Not authorized" })
//         }
//         res.status(200).json({
//             message: 'success get my profil',
//             employe: employe,
//         })
//     } catch (error) {
//         res.status(502).json({ error: error.message })
//     }
// }
