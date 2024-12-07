import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { IEvent, IMetric } from "../Types";


export const CreateEvent = () => {
  const emptyMetric = {
    description: "",
    max_points: 0,
  };
  const [event, setEvent] = useState<IEvent>({
    title: "",
    maxRound: 0,
    metrics: [emptyMetric],
  });

  const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    e.preventDefault;
    const data:any = event;
    data[e.target.name] = e.target.value;
    setEvent({...data})
  }

  const onChangeMetric = (e:React.ChangeEvent<HTMLInputElement>,i:number)=>{
    e.preventDefault
    const data:any = event;

  }

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

  const onSubmit = async ()=>{
    try {
        
    } catch (error) {
        
    }
  }
  return (
    <Container>
      <Card className="m-3">
        <Card.Body>
          <Card.Title>Crear evento</Card.Title>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Titulo del evento</Form.Label>
                  <Form.Control name="title" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Numero de rondas</Form.Label>
                  <Form.Control name="maxRound" type="number" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="text-center">
                <Form.Label>Metricas:</Form.Label>
                {event.metrics.map((metric, i) => (
                  <Row className="mb-3">
                    <Col>
                      <Form.Label>Descripción:</Form.Label>
                      <Form.Control onChange={(e:any)=>onChangeMetric} name="description" />
                    </Col>
                    <Col>
                      <Form.Label>Calificación maxima:</Form.Label>
                      <Form.Control type="number" name="max_points" />
                    </Col>
                    {
                    event.metrics.length > 1 && (
                      <Col>
                        <Button variant="danger">
                          <Trash />
                        </Button>
                      </Col>
                    )}
                  </Row>
                ))}
                <div className="text-center">
                  <Button variant="info" onClick={() => addMetric()}>
                    Agregar metrica
                  </Button>
                </div>
              </Form.Group>
            </Row>
            <hr></hr>
            <div className="text-center">
              <Button onClick={()=>onSubmit()}>Guardar evento</Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
