import * as reservasService from '../services/reservas.service.js';

export async function crear(req, res) {
    const reserva = await reservasService.crearReserva(req.body);
    res.status(201).json(reserva);
}

export async function listar(req, res) {
    const reservas = await reservasService.listarReservas(req.query);
    res.status(200).json(reservas);
}
export async function obtener(req, res) {
    const reserva = await reservasService.obtenerReservaPorId(req.params.id);
    res.status(200).json(reserva);
}