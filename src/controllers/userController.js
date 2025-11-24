import { userService } from "../services/userService.js"
import { logger } from "../config/Winston.js";

const us = new userService();

export const registerController = async (req, res) => {
    try {
        const {name, surname, email, password } = req.body;
        const newUser = await us.register(name, surname, email, password);
        res.status(201).json({
            mensage: "Success",
            code: 201,
            data: newUser,
        });
        logger.info(`Nuevo usuario registrado - ID: ${newUser._id}`);
    } catch (error) {
        logger.error(`Error al registrar usuario: ${error.message}`);
        res.status(500).json(error.message);
    }
};

export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { accesstoken, refreshtoken } = await us.login(email, password);
        res.set({
            Authorization: `Bearer ${accesstoken}`,
            "x-refresh-token": refreshtoken,
        });
        res.status(200).json({
            mensage: "success",
            code: 200,
            data: { accesstoken, refreshtoken },
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};

export const renovarTokenController = async (req, res) => {
    try {
        const refreshtoken = req.headers["x-refresh-token"];
        const accesstoken = await us.renovarAccessToken(refreshtoken);
        res.set({
            "Authorization": `Bearer ${accesstoken}`,
            "x-refresh-token": refreshtoken,
        });
        res.status(200).json({
            mensage: "success",
            code: 200,
            data: { accesstoken, refreshtoken },
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
};