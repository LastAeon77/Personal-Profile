import { Component } from 'react'
import { Figure, Container, Row, Col, ListGroup } from 'react-bootstrap'
import { SocialIcon } from 'react-social-icons';

export default class Person extends Component {
    constructor(props) {
        super(props);
        this.state = { show_info: false };
    }
    render() {
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
                                src={this.props.data.Images}
                            />
                            <Figure.Caption>
                                A picture of me winning a bronze IYPT medal, 2019
                            </Figure.Caption>
                        </Figure>
                    </Col>
                    <Col>
                        <ul>
                            <li>Name: {this.props.data.Name}</li>
                            <li>Email: {this.props.data.Email}</li>
                        </ul>
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