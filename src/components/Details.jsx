import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import Markdown from 'react-markdown'

function Details() {
    const { numberID } = useParams();
    const [detail, setDetail] = useState({})
    const [user, setUser] = useState({})
    useEffect(() => {
        const issueData = async () => {
            let response = await fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${numberID}`)
            let data = await response.json()
            console.log(data);
            setDetail(data)
            setUser(data.user)
        }
        issueData()
    }, [])
    // const issue = props.data.find(issue => issue.number == numberID)
    
    // console.log('issue1',issue1);
    return (
        // console.log(detail)
        <>
            <div className="container-fluid">
                <h1>{detail.title}</h1>
                by {user.login} at {detail.created_at}
                <hr />
                <div className="row">
                    <div className="col-2">
                        <img src={user.avatar_url} alt="" width="100px" />
                    </div>
                    <div className="col-10">
                        <Markdown children={detail.body}/>
                    </div>
                </div>
                <hr /> 
                <h2>Comments</h2>
            </div>
        </>
    )
}

export default Details
