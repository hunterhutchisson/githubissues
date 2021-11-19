import React from 'react'
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Issue(props) {
    return (
        <Card>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    <Link to={"/" + props.data.number}>{props.data.title}</Link>
                    {' '}
                </p>
                <footer className="blockquote-footer">
                    #{props.data.number} opened at {props.data.created_at} by {props.data.user.login}
                </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}

export default Issue
