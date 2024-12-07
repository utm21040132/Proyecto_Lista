import { EventModel } from "../models/EventsModel";
import { GradesModel } from "../models/GradesModel";
import { GroupModel } from "../models/GroupsModel";

//Crear calificaciones 
//Devolverlas

export default {
    createGrade: async (req,res) => {
        try {
            const idGroup = req.params.idGroup;
            const group = await GradesModel.findById(idGroup);
            if (!group) {
                return res.status(400).json({msg:"Grupo no encontrado"})
            }
            
            const round = req.body.round;
            if (!round) {
                return res.status(400).json({msg:"La ronda no es valida"})
            }

            const idEvent = req.params.idEvent;
            const event = await EventModel.findById(idEvent);
            if (!event) {
                return res.status(400).json({msg:"Evento no encontrado"})
            }
            //Validar que el equipo si este registrado al evento
            if (!event.groups.includes(group._id)) {
                return res.status(400).json({msg:"No esta el grupo en este evento"})
            }

            
            //Filtro para traer las calificaciones de este evento
            const gradesFromDb = await GradesModel.findOne({ id_event: event._id, round: round, id_group: group._id });
            gradesFromDb.grades.filter((grade) => {
                grade.id_judge == req.body.id_judge
            })

            //Calificacioes
            const grade = req.body.grade;


        } catch (error) {
            
        }
    }
}