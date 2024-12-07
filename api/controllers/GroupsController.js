
import { GroupModel } from "../models/GroupsModel.js";
import { EventModel } from "../models/EventsModel.js";

export default{
    createGroup: async(res,req)=>{
        try {
            const group = {
                name: req.body.name,
                id_members:req.body.id_members,
                leader: req.body.id_leader
            };
            await GroupModel.create(group);
            return res.status(200).json({msg:"Se ha creado con exito"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Ha ocurrido un error"})
        }
    },
    registerEvent: async (res,req)=>{
        
        try {
            const idGroup = req.params.id;
            const group = await GroupModel.findById(idGroup);
            if(!group){
                return res.status(400).json({msg:"El equipo no existe"})
            }
            const idEvent = req.params.idEvent;
            const event = await EventsModel.findById(idEvent)
            if (!event) {
                return res.status(400).json({msg:"El evento no existe"})
            }

            //Registrar evento
            await EventsModel.findByIdAndUpdate(idEvent,{
                $push:{
                    "groups":idGroup
                }
            })

            return res.status(200).json({msg:"El equipo se inscribio con exito"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Ha ocurrido un error al registrar el equipo"})
        }
    },
    getGroups: async(req, res)=>{
        try {
            const groups = await GroupModel.find();
            return res.status(200).json(groups)
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg: "Ocurrio un error al obtener los equipos"});
        }
    }
}