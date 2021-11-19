import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const { userID } = useParams();
    const [user, setUser] = useState({})
    const [userReposURL, setUserReposURL] = useState("")
    const [userRepos, setUserRepos] = useState([])
    useEffect(() => {
        const userData = async () => {
            let response = await fetch(`https://api.github.com/users/${userID}`)
            let data = await response.json()
            setUser(data)
            setUserReposURL(data.repos_url)
            let repoResponse = await fetch(`https://api.github.com/users/${userID}/repos`)
            let repoData = await repoResponse.json()
            setUserRepos(repoData)
        }
        userData()
    }, [])
    return (
        <>
            {user.login}
            <img src={user.avatar_url} alt="" />
            <ul>
                {userRepos.map(repo=> <li key={repo.name}>{repo.name}</li>)}
            </ul>
        </>
    )
}

export default UserDetails
