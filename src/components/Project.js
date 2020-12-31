import React from 'react'
import { Component } from 'react'
import { Container, Pagination, Media, Col, Row } from 'react-bootstrap'

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { show_img: false };
    }
    render() {
        //Map out all related_skills
        let list_of_skills = this.props.data?.Related_Skills
        const list_items = list_of_skills?.map((list_of_skills) => <strong>{list_of_skills}, </strong>)
        return (
            <Container>
                <Media>
                    <Media.Body>
                        <h2 id="hover"><a href={this.props.data.Link}>{this.props.data.Name}</a></h2>
                        <p>
                            {this.props.data.Description}
                        </p>
                        <div id="control-size">
                            <p>
                                Related Skills: {list_items}
                            </p>
                        </div>
                    </Media.Body>
                    <a href={this.props.data.Link}>
                        <img
                            width={80}
                            height={80}
                            className="ml-3"
                            src={this.props.data.ImgLink}
                            alt="-"
                            id="hover"
                        />
                    </a>
                </Media>
            </Container>

        )
    }
}

export default class ProjectDisplay extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            todosPerPage: 2,
        };
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(event) {
        if (event.target.id > 0 && event.target.id <= Math.ceil(this.props.data?.length / this.state.todosPerPage)) {
            this.setState({
                currentPage: Number(event.target.id)
            });
        }
    }

    render() {
        const { currentPage, todosPerPage } = this.state;
        const projx = this.props.data
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = projx?.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderprojs = currentTodos?.map((proj, index) => {
            return (
                <div id="bordering">
                    <Project data={proj} />
                </div>)
        });
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(projx?.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <Pagination.Item
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    active={number === this.state.currentPage}
                >
                    {number}
                </Pagination.Item>
            );
        });

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col>
                            <h1><b>Projects</b></h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={1}>
                            <button onClick={this.handleClick} id={this.state.currentPage - 1} key={this.state.currentPage - 1}>
                                Prev
                            </button>
                        </Col>
                        <Col sm={10}>
                            <div id="bordering">{renderprojs}</div>
                        </Col>
                        <Col sm={1}>
                            <button onClick={this.handleClick} id={this.state.currentPage + 1} key={this.state.currentPage + 1}>
                                NEXT
                            </button>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Pagination size="sm"> {renderPageNumbers}</Pagination>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}