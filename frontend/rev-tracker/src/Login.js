import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
function Login() {
    return (
        <>
            <Form>
                <Row>
                    <Col xs={{span: 3, offset: 4}}>
                        <Form.Group className="mb-3 center" controlId="formBasicEmail">
                            <Form.Label className="text-center">Email address</Form.Label>
                            <Form.Control size="md" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={{span: 3, offset: 4}}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control size="md" type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default Login;