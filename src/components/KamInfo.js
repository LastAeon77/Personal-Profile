import { Figure, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';
import { Component } from 'react'
import kamPic from "../images/Kam.png"

export default class Person extends Component {
    render() {
        const data = this.props.data
        return (
            <Container fluid>
                <Row><Col><h1><b>Personal Information:</b></h1></Col></Row>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                        <Figure>
                            <Figure.Image
                                width={171}
                                height={180}
                                alt="171x180"
                                src={kamPic}
                            />
                            <Figure.Caption>
                                A picture of me winning a bronze IYPT medal, 2019
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <ListGroup>
                            <li>Name: {data?.[0].Name}</li>
                            <li>Email: {data?.[0].Email}</li>
                            <li>Github: {data?.[0].Github}</li>
                            <li>School: {data?.[0].School}</li>
                            <li>Major: {data?.[0].Major}</li>
                        </ListGroup>
                    </Col>
                </Row>
                <br></br>
                <Row className="align-items-center">
                    <Col>
                        <SocialIcon style={{ margin: '10px' }} url="http://linkedin.com/in/kamontat-swasdikulavath-44a162196" fgColor="lightgreen" />
                        <SocialIcon style={{ margin: '10px' }} url="https://github.com/LastAeon77/" fgColor="lightgreen" bgColor="black" />
                        <SocialIcon style={{ margin: '10px' }} url="https://www.facebook.com/siris.swasdikulavath" />
                    </Col>
                </Row>
            </Container >

        )
    }
}