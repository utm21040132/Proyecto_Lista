import axios from "axios";
import { useEffect, useState } from "react"
import Swal from "sweetalert2";
import { IEvent, IGroup, IUser } from "../Types";
import { Card, Table } from "react-bootstrap";

interface props {
  entity: "user" | "group" | "event"
}

export const ShowList = ({ entity }: props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData()
  }, []);


    const getData = async () => {
        try {
            const url = `http://localhost:4000/${entity}/list`
            const {data} = await axios.get(url)
            //data
            setData(data);
        } catch (error) {
            Swal.fire("Oops, ha occurrido un error","No se ha podido obtener la informacion")
        }
    }

    const getColumns = ()=>{
        const userColumns = ["Nombre", "Correo", "CURP", "Rol"];
        const eventColumns = ["Titulo", "Cantidad de rondas"];
        const groupColumns = ["Nombre del equipo", "Nombre del lider"];

        let columns = [];
        if (entity=="event") {
             columns = eventColumns;
        }else if (entity=="group") {
            columns = groupColumns;
        }else{
            columns = userColumns;
        };
        const HTMLColumns = columns.map((c)=>(
            <th>{c}</th>
        ));
        return HTMLColumns;
    }

    const getName = ()=>{
        let name = "";
        if (entity=="event") {
            name = "Evento";
        }else if (entity=="group") {
            name = "Grupo";
        }else{
            name = "Usuario";
        };
        return name;
    }
    return (
        <Card>
          <Card.Body>
            <Card.Title>Listado de {getName()}</Card.Title>
            <Table>
              <thead>
                {getColumns()}
              </thead>
              <tbody>
                {
                  entity == "event" && (
                    data.map((event: IEvent) => (
                      <tr>
                        <td>{event.name}</td>
                        <td>{event.maxRound}</td>
                      </tr>
                    ))
                  ) ||
                  entity == "group" && (
                    data.map((group: IGroup) => (
                      <tr>
                        <td>{group.name}</td>
                        <td>{group.leader}</td>
                      </tr>
                    ))
                  ) ||
                  entity == "user" && (
                    data.map((user: IUser) => (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.CURP}</td>
                        <td>{user.rol}</td>
                      </tr>
                    ))
                  )
    
                }
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      )
    }