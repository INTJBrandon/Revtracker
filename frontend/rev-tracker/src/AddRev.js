import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function AddRev() {
    const [subscription, setSubscription] = useState([{diamond: false, price: 0, discordId: 0}])


    return (
        <>
            <h1>Add Revenue To Track</h1>
            <div className="d-flex align-items-center justify-content-center">
                <Form style={{ position: 'absolute', left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3 center" controlId="diamondTypeForm">
                                <Form.Label className="text-center">Diamond Type</Form.Label>
                                <Form.Select className="text-muted">
                                    <option>Select Diamond Type Here</option>
                                    <option>Black Diamond</option>
                                    <option>White Diamond</option>
                                    <option>Yellow Diamond</option>
                                    <option>Blue Diamond</option>
                                    <option>Pink Diamond</option>
                                    <option>Flawed Diamond</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Discord ID</Form.Label>
                                <Form.Control size="md" type="number" placeholder="Enter Discord ID" />
                            </Form.Group>
                            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}
                            <Button variant="primary" type="submit">
                            Submit
                            </Button>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formPriceInput">
                                <Form.Label>Price</Form.Label>
                                <Form.Control size="md" type="number" placeholder="Enter Price"/>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
    );
}

export default AddRev