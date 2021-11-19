import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'


const Users = () => {
    const [textValue, setTextValue] = useState("")
    const [searchedUser, setSearchedUser] = useState({})
    const [userList, setUserList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        const usersData = async () => {
            let response = await fetch(`https://api.github.com/users/${textValue}`)
            let data = await response.json()
            setTextValue("")
            setSearchedUser(data)
            setUserList([...userList, data])
        }
        usersData()
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>User Search</h1>
                <input type="text" placeholder="Username to search" value={textValue} onChange={(e)=> setTextValue(e.target.value)}/>
                <input type="submit" />
            </form>
            <h1>Results</h1>
            {(userList.length > 0) ? userList.map((user, index)=> <UserCard key={index} data={user}/>) : "nothing searched yet"}
        </>
    )
}

export default Users
