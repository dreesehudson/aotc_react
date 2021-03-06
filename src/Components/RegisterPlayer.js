import React, { useState, useEffect } from 'react';
import { useBearer } from '../utilities/BearerContext'
import { axiosHelper } from '../utilities/axiosHelper'
import { Col, Row, Container, Button, Form, Label, Input, Jumbotron } from 'reactstrap';

function RegisterPlayer() {

    // const [loading, setLoading] = useState(true);
    const [teams, setTeams] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [team_id, setTeamID] = useState("");
    const [user_obj, setUserObj] = useState({});
    const { bearer } = useBearer();


    const storeTeams = (response) => {
        setTeams(response)
        console.log(response)
    }
    const storeUser = (response) => {
        setUserObj(response)
    }

    useEffect(() => {
        axiosHelper({
            url: '/api/user',
            fun: storeUser,
            bearer
        })
    }, [bearer])

    useEffect(() => {
        axiosHelper({
            url: '/getTeams',
            fun: storeTeams
        })
    }, [user_obj]);

    function handleSubmit(event) {
        // event.preventDefault();
        axiosHelper({
            method: 'post',
            url: '/PlayerRegistration',
            data: { first_name: firstName, last_name: lastName, team_id: team_id, user_id: user_obj.id },
            bearer
        });
        window.location.href = '/';
    }

    return (
        <>
            <Container className="App text-left">
                <Jumbotron>
                    <h2 className="display-4" >New Player Sign-Up</h2>
                    <Form>
                        <Row>
                            <Col className="col-md-6 col-12 mt-3">
                                <Label for="firstName">First Name</Label>
                                <Input minlength="2" name="First Name" id="firstName"
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            </Col>
                            <Col className="col-md-6 col-12 mt-3">
                                <Label for="lastName">Last Name</Label>
                                <Input placeholder="optional" name="Last Name" id="lastName"
                                    onChange={e => setLastName(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-md-6 col-12 mt-3">
                                <Label for="teamSelect">Team</Label>
                                <Input type="select" name="select" id="teamSelect"
                                    onChange={e => setTeamID(e.target.value)}
                                >
                                    <option>Pick a team...</option>
                                    {teams.map((item, idx) => {
                                        return (
                                            <option value={item.id} key={idx}>{item.name} - {item.color} - Practice: {item.practice_night}</option>
                                        )
                                    })}
                                </Input>
                            </Col>
                        </Row>
                        <Row check className="mt-3 text-center">
                            <Col >
                                <Button className="btn btn-primary" onClick={handleSubmit}>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </Jumbotron>
            </Container>
        </>
    );
}

export default RegisterPlayer;
