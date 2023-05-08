const { Router } = require('express');
const dogsRouter = require('./dogsRoutes/dogsRoutes');
const temperamentsRouter = require('./temperamentsRoutes/temperamentsRoutes');
const userRoutes = require('./userRoutes/userRoutes');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogsRouter);
router.use('/temperaments', temperamentsRouter);
router.use('/user', userRoutes);


module.exports = router;
