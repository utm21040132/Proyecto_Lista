import axios from "axios";
import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { IEvent } from "../Types";

export const CreateGroups = () => {
  const emptyMetric = {
    description: "",
    max_points: 0,
  };
  const [event, setEvent] = useState<IEvent>({
    name: "",
    maxRound: 0,
    metrics: [emptyMetric],
  });

  const onChangeBasicFields = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data: any = event;
    data[e.target.name] = e.target.value;
    setEvent({ ...data });
  };

  const onChangeMetric = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number
  ) => {
    e.preventDefault();
    const data: any = event;
    data.metrics[i][e.target.name] = e.target.value;
    setEvent({ ...data });
  };

  const addMetric = () => {
    const data = event;
    data.metrics.push(emptyMetric);
    setEvent({ ...data });
  };

  const removeMetric = (iM: number) => {
    const data = event;
    const metricsFiltered = data.metrics.filter((_, i) => i != iM);
    data.metrics = metricsFiltered;
    setEvent({ ...data });
  };

  const onSubmit = async () => {
    try {
      Swal.fire("Guardando evento...");
      Swal.showLoading();
      await axios.post("http://localhost:4000/event/create", event);
      Swal.fire("Evento registrado con exito", "", "success");
    } catch (error) {
      console.log(error);
      Swal.fire("Ocurrio un error", "", "error");
    }
  };
  return (
    <Container>
      <Card className="m-3">
        <Card.Body>
          <Card.Title>Registrar Equipo</Card.Title>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Nombre del Equipo</Form.Label>
                  <Form.Control onChange={onChangeBasicFields} name="name" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Lider del Equipo</Form.Label>
                  <Form.Control
                    onChange={onChangeBasicFields}
                    name="leader"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="text-center">
                <Form.Label>Integrantes (No incluir al lider):</Form.Label>
                {event.metrics.map((metric, i) => (
                  <Row className="mb-3" key={i}>
                    <Col>
                      <Form.Label>Nombre:</Form.Label>
                      <Form.Control
                        onChange={(e: any) => onChangeMetric(e, i)}
                        name="participantName"
                      />
                    </Col>
                    <Col>
                      <Form.Label>Correo:</Form.Label>
                      <Form.Control
                        onChange={(e: any) => onChangeMetric(e, i)}
                        name="correo"
                      />
                    </Col>
                    {event.metrics.length > 1 && (
                      <Col xs={1}>
                        <Button
                          onClick={() => removeMetric(i)}
                          variant="danger"
                        >
                          <Trash />
                        </Button>
                      </Col>
                    )}
                  </Row>
                ))}
                <div className="text-center">
                  <Button variant="info" onClick={() => addMetric()}>
                    Agregar paricipante
                  </Button>
                </div>
              </Form.Group>
            </Row>
            <hr></hr>
            <div className="text-center">
              <Button onClick={() => onSubmit()}>Guardar Equipo</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
