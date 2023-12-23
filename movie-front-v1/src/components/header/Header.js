import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";



const Header = () => {
    return(
        <Navbar bg="dark" variant="dark" expand="md">
            <Container fluid>
                <Navbar.Brand href="/" style={{"color": 'silver'}}>
                    <FontAwesomeIcon icon={faVideoSlash}/>Movies
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navBarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{maxHeight:'100px'}} navbarScroll>
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink  className="nav-link" to="https://mlaskowski7.github.io/mateuszLaskowski/">Check out my portfolio</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header