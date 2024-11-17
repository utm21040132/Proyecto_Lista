import { Button, Card, Col, Container, Form, Row } from "react-bootstrap"

export const Login = () =>{
    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenido! Inicia Sesion</Card.Title>
                    <Row>
                        <Col>
                        <Form.Control/>
                        <Form.Control/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Button>Ingresar</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Olvidaste tu contrasena? Recuperala <a>aqui</a>
                        </Col>
                        <Col>
                            Aun no tienes cuenta? Resgistrate <a>aqui</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}