
import { useState, useEffect, useContext } from 'react'
import { getOne } from '../../services/useService'
import { NameContext } from '../../context/useContext'

const One = () => {
    
    
    const {user, setUser}= useContext(NameContext)

    const handleUsers = async () => {
        const res = await getOne()
        setUser(res)
    }
    useEffect(() => {handleUsers()}, [])
    return (
     
        <div>
            <h1> One</h1>
            {user && (
              <>
                {user.name&&
                 <>
                        <p>{user.name.firstname}</p>
                        <p>{user.name.lastname}</p>
                        </> }

                        <p>{user.email}</p>
                        <p>{user.username}</p>
                        <p>{user.password}</p>
                </>
            )}
              
            
                       
                    </div>
            
    )
}

export default One