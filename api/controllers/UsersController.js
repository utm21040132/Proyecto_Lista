//Registrarse
//Iniciar sesion
//Actualizar perfil

import { UserModel } from "../models/UsersModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  register: async (req, res) => {
    try {
      const hash = await bcrypt.hash(req.body.password, 10);
      const user = {
        name: req.body.name,
        email: req.body.email,
        curp: req.body.curp,
        rol: req.body.rol,
        password: hash,
      };

      await UserModel.create(user);
      res.status(200).json({ msg: "Usuario registrado con exito" });
    } catch (error) {
      res.status(500).json({ msg: "Ocurrio un error al registrarte" });
      console.log(error);
    }
  },
  login: async (req, res) => {
    // Implementar la lógica para iniciar sesión
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        return res.status(400).json({ msg: "Debes proporcionar email y contraseña" });
      }

      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(404).json({ msg: "Credenciales no validas" });
      }

      if (!bcrypt.compare(password, user.password)) {
        return res.status(401).json({ msg: "Credenciales no validas" });
      }

      // Creacion de JSON web token
      const token = await jwt.sign(JSON.stringify(user),process.env.PRIVATE_KEY);
      return res.status(202).json({ token });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Error al iniciar sesión" });
    }
  },
  updateProfile: async (req, res) => {
    try {
      const user = await UserModel.findById(req.params.id);
      if (!user) {
        return res.status(400).json({ msg: "Usuario no existe" });
      }

      user.name = req.body.name ? req.body.name : user.name; 
      user.password = req.body.password ? await bcrypt.hash(req.body.password,10) : user.password;
      user.CURP = req.body.CURP ? req.body.CURP : user.CURP; 
      user.email = req.body.email ? req.body.email : user.email;

      await UserModel.findByIdAndUpdate(user._id, user);

      return res.status(200).json({msg:"Perfil actualizado con exito"});
    } catch (error) {
      console.error(error);
      return res.status(500).json({msg:"Ocurrior un error al actualizar tu perfil "});
    }
  },
};
