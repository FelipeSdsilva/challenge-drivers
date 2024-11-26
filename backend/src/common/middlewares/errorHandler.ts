import { Request, Response, NextFunction } from 'express';

type Error_code = 'INVALID_DATA' | 'DRIVER_NOT_FOUND' | 'INVALID_DISTANCE' | 'NO_RIDES_FOUND';

interface CustomError extends Error {
    status?: number;
    error_code?: Error_code;
    error_description?: string;
}

export const errorHandler = (
    err: CustomError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status = err.status || 500;
    const error_code = err.error_code || 'UNKNOWN_ERROR';
    const error_description =
        err.error_description || 'An unexpected error occurred';
    res.status(status).json({
        error_code: error_code,
        error_description: error_description,
    });
};

export const invalidDataError = (description: string): CustomError => ({
    name: 'InvalidDataError',
    message: 'Invalid data provided in the request body',
    status: 400,
    error_code: 'INVALID_DATA',
    error_description: description,
});

export const driverNotFoundError = (description: string): CustomError => ({
    name: 'DriverNotFoundError',
    message: 'Driver not found',
    status: 404,
    error_code: 'DRIVER_NOT_FOUND',
    error_description: description,
});

export const invalidDistanceError = (description: string): CustomError => ({
    name: 'InvalidDistanceError',
    message: 'Invalid distance for the selected driver',
    status: 406,
    error_code: 'INVALID_DISTANCE',
    error_description: description,
});


export const ridersNotFoundError = (description: string): CustomError => ({
    name: 'InvalidDistanceError',
    message: 'Invalid distance for the selected driver',
    status: 404,
    error_code: 'NO_RIDES_FOUND',
    error_description: description,
});