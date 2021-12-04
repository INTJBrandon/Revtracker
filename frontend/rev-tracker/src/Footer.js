import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



function MainFooter() {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="bottom">
                <Container className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#pricing">Revenue</Nav.Link>
                    </Nav>
                    <p style={{color: 'white'}}>Designed for MF 2021™</p>
                </Container>
            </Navbar>
        </>
    );
}

export default MainFooter