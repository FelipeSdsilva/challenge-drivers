import { RequestHandler } from 'express';

export const notFoundRequest: RequestHandler = (req, res) => {
    res.status(500).json({
        status: 500,
        error_code: 'NOT_FOUND',
        error_description: `The requested resource '${req.originalUrl}' was not found.`,
    });
};