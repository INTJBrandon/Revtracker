import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import  Container  from 'react-bootstrap/Container'

function MainNavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">RevTracker</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#pricing">Revenue</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavBar