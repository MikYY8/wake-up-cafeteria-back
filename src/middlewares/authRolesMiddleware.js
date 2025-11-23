export const authRoles = (roles = []) =>{ //admin, user
    return (req,res,next) =>{
        if(!req.user){
            return res.status(401).json({message: "Usuario no logueado"})
        }
        if (!roles.includes(req.user.role)){
            return res.status(401).json({message: "Usuario sin permiso para acceder a la ruta"})
        }
        next()
    }
}
