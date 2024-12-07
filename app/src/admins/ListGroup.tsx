import { Container } from "react-bootstrap"
import { ShowList } from "../components/ShowList"

export const ListGroup = ()=>{
    return(
        <Container>
            <ShowList entity="group"/>
        </Container>
    )
}