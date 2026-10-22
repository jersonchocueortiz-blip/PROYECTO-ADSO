import express from 'express';
import recursosRoutes from './routes/recursos.routes.js';
import usuariosRoutes from './routes/usuarios.routes.js';
import reservasRoutes from './routes/reservas.routes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({mensaje: 'API de SENA Reservas funcionando correctamente'});
});
app.use('/api/recursos', recursosRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/usuarios', usuariosRoutes);
export default app;

import { rutaNoEncontrada, manejadorErrores } from './middlewares/manejadorErrores.js';
app.use(rutaNoEncontrada);
app.use(manejadorErrores);
