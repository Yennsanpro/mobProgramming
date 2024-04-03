import { useState, useEffect } from 'react'
import { getAll } from '../../services/useService'

const All = () => {
    const [users, setUsers] = useState([])

    const handleUsers = async () => {
        const res = await getAll()
        setUsers(res)
    }
    useEffect(() => {handleUsers()}, [])
    return (
        <div>
            <h1> All</h1>
            {users && users.map((user, idx) => {
                
               return <>
                    <div key={idx}>
                        <p>{user._id}</p>
                        {user.name &&
                        <>
                        <p>{user.name.firstname}</p>
                        <p>{user.name.lastname}</p>
                        </>
                        }
                        <p>{user.email}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                    </div>
                </>

            })}
        </div>
    )
}

export default All
