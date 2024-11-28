import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

export const CreateEvent = () => {
    const [inputValues, setInputValues] = useState<(number | null)[]>([null]); // Iniciar con un input

    // Función para agregar un nuevo input
    const addInput = () => {
        setInputValues([...inputValues, null]); // Agregar un nuevo input con valor inicial null
    };

    // Función para manejar el cambio en un input
    const handleInputChange = (index: number, value: string) => {
        const newValues = [...inputValues];
        newValues[index] = value ? parseInt(value) : null; // Convertir a número o dejar como null
        setInputValues(newValues); // Actualizar el estado
    };

    return (
        <Container>

            <Card>
                <Card.Body>
                    <Card.Title>Crear Evento</Card.Title>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Titulo del evento</Form.Label>
                                    <Form.Control name="title" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group>
                                    <Form.Label>Numero de rondas </Form.Label>
                                    <Form.Control name="rounds" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Card.Subtitle className="text-center mt-4 mb-3">Metricas</Card.Subtitle>

                        {inputValues.map((value, i) => (

                            <div key={i} className="mb-3">
                                <Row>
                                    <Col>
                                        <Form.Label>Descripcion</Form.Label>
                                        <Form.Control
                                            onChange={(e) => handleInputChange(i, e.target.value)} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Calificacion maxima</Form.Label>
                                        <Form.Control onChange={(e) => handleInputChange(i, e.target.value)} />
                                    </Col>
                                </Row>

                            </div>
                        ))}
                        <Row className="text-center">
                            <Col>
                                <Button className="m-3" onClick={addInput}>Añadir Metrica</Button>
                            </Col>
                        </Row>
                        <Row className="text-center">
                            <Col>
                                <Button className="m-3">Ingresar</Button>
                            </Col>
                        </Row>
                    </Form>

                </Card.Body>
            </Card>
        </Container>
    );
};
