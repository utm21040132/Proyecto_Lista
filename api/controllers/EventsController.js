import { EventModel } from "../models/EventsModel.js";

export const createEvent = async(req,res)=>{
        try {

            //Validar que metricas es un arrglo
            if (!Array.isArray(req.body.metrics)) {
                return res.status(400).json({msg:"Metricas no es un arrgeglo"})
            }
            //Validar que tiene al menos una metrica
            if (!(req.body.metric.length > 0)) {
                return res.status(400).json({msg:"Metricas estan vacias"})
            }
             // Validar que descripcion si sea string
            const invalidMetrics = req.body.metrics.filter(metric => metric.description.length === 0 || metric.max_points === 0)
            if (invalidMetrics.length > 0) {
            return res.status(400).json({message: "Metricas invalidas", invalidMetrics})
            }
            //Validar que descripcion y mex puntos existen
            const negativePointsMetrics = req.body.metrics.filter(metric => metric.max_points < 0);
            if (negativePointsMetrics.length > 0) {
            return res.status(400).json({message: "Los puntos máximos deben ser positivos", negativePointsMetrics})
            }
            const event = {
                name: req.body.name,
                metrics: req.body.metrics,
                maxRound: req.body.maxRound
            }

            await EventModel.createa(event);
            return res.status(200).json({msg:"Evento registrado"})
        } catch (error) {
            console.log(error);
            return res.status(500).json({msg:"Evento no registrado, algo malio sal"})
        }
    }
