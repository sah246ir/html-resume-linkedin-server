import { NextFunction,Response,Request } from "express";

export function corsHeaders(req: Request, res: Response, next: NextFunction) {
    const allowedOrigins = ['http://localhost:3000', 'https://assignment-ai.netlify.app'];
    const origin = req.headers.origin as string;

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }

    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}
