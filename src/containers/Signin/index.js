import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Row, Col, Button, CardGroup, Card } from 'react-bootstrap';
import Input from '../../components/UI/Input';
import { login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Logo from "../../assets/images/logo-unimak.png"
/**
* @author
* @function Signin
**/

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();




    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
    }

    if (auth.authenticate) {
        return <Redirect to={`/`} />
    }

    return (
        <>
            <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <CardGroup>
                                <Card>
                                    <Card.Body>
                                        <h4 className='text-center mb-4'>
                                            <dt>Sign In to your account</dt>
                                        </h4>
                                        <Form onSubmit={userLogin}>
                                            <Input
                                                label="Email"
                                                placeholder="Email"
                                                value={email}
                                                type="email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />

                                            <Input
                                                label="Password"
                                                placeholder="Password"
                                                value={password}
                                                type="password"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <Button variant="primary" type="submit">
                                                Submit
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                                <Card className="text-white py-5" style={{ width: '44%' }}>
                                    <Card.Body assName="text-center">
                                        <img src={Logo} style={{ width: '90%' }} alt="logo" />
                                    </Card.Body>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )

}

export default Signin