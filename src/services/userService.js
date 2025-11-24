import Usuario from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generarAccessToken, generarRefreshToken } from "../utils/jwt.js";
import jwt from "jsonwebtoken";

export class userService {
    async register(name, surname, email, password) {
        const existUser = await Usuario.findOne({ email });
        if (existUser) {
            throw new Error("El usuario ya existe");
        }
        //hashear contraseña
        const passHashed = await bcrypt.hash(password, 10);
        //guardar usuario
        const newUser = await Usuario.create({name, surname, email, password: passHashed,});
        return newUser;
    }

    async login(email, password) {
        const user = await Usuario.findOne({ email });
        if (!user) {
            throw new Error("Email o contraseña incorrectos");
        }
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            throw new Error("Email o contraseña incorrectos");
        }
        const accesstoken = generarAccessToken({
            id: user._id,
            email: user.email,
            role: user.role,
        });
        const refreshtoken = generarRefreshToken({
            id: user._id,
            email: user.email,
            role: user.role,
        });
        return { accesstoken, refreshtoken };
    } //accesstoken y refreshtoken

    async renovarAccessToken(refreshtoken) {
        const payload = jwt.verify(refreshtoken, process.env.JWT_REFRESH);
        const user = await Usuario.findById(payload.id);
        if (!user) {
            throw new Error("No se encontro el usuario");
        }
        const accesstoken = generarAccessToken({id: user._id, email: user.email, role: user.role,});
        return accesstoken
    }
}