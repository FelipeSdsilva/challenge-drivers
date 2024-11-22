import { Router } from 'express';
import { confirmRide, estimateRide, getRides } from '../controllers/rideController';

const router = Router();

/**
 * @swagger
 * /ride/estimate:
 *   post:
 *     summary: Value of a trip.
 *     tags: [Rides]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: string
 *               origin:
 *                 type: string
 *               destination:
 *                 type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *       400:
 */
router.post('/estimate', estimateRide);

/**
 * @swagger
 * /ride/confirm:
 *   patch:
 *     summary: Confirm a trip
 *     tags: [Rides]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: string
 *               origin:
 *                 type: string
 *               destination:
 *                 type: string
 *               distance:
 *                 type: number
 *                 format: float
 *               duration:
 *                 type: string
 *               driver:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                   name:
 *                     type: string
 *               value:
 *                 type: number
 *                 format: float
 *     responses:
 *       200:
 *         description: Trip confirmed successfully
 *       400:
 *         description: Bad request, invalid input
 */
router.patch('/confirm', confirmRide);

/**
 * @swagger
 * /ride/{customer_id}:
 *   get:
 *     summary: List trips of customers
 *     tags: [Rides]
 *     parameters:
 *       - in: path
 *         name: customer_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of customers
 *       - in: query
 *         name: driver_id
 *         required: false
 *         schema:
 *           type: string
 *         description: ID of drivers
 *     responses:
 *       200:
 *         
 *       404:
 *         description: "INVALID_DATA"
 */
router.get('/:customer_id', getRides);

export default router;
