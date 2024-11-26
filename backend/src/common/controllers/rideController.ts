import { NextFunction, Request, Response } from 'express';
import { RiderConfirmeDTO } from '../DTO/riderConfirmDTO';
import { calculateEstimate, saveRide, fetchRides } from '../services/rideService';

export const estimateRide = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { customer_id, origin, destination } = req.body;
    const result = await calculateEstimate(customer_id, origin, destination, next);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const confirmRide = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { customer_id, origin, destination, duration, distance, driver, value } = req.body;

    const rideData = new RiderConfirmeDTO(customer_id, origin, destination, duration, distance, driver, value);

    const savedRide = await saveRide(rideData, next);

    if (!savedRide) return;

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
};

export const getRides = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { customer_id } = req.params;
    const { driver_id } = req.query;
    const rides = await fetchRides(customer_id,next, driver_id as string);
    res.status(200).json(rides);
  } catch (error) {
    next(error);
  }
};


