import jwt from "jsonwebtoken";
import { logger } from "../config/Winston.js"; 

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const accesstoken = authHeader?.split(" ")[1];

    if (!accesstoken) {
        logger.warn("Intento de acceso con token inexistente");
        return res.status(401).json({ message: "Token no encontrado" }),
        console.log(err)
    }

    jwt.verify(accesstoken, process.env.JWT_ACCESS, (err, user) => {
        if (err) {
            logger.warn("Intento de acceso con token inválido o inexistente");
            return res.status(403).json({ message: "Token inválido o expirado" });
        }
        req.user = user;
        next();
    });
};
