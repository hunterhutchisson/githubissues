import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';


function UserCard(props) {
    // console.log(props.data);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.data.avatar_url} />
                <Card.Body>
                    <Card.Title><Link to={"/users/" + props.data.login}>{props.data.login}</Link></Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}

export default UserCard

