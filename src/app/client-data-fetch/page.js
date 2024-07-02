'use client'

import { useEffect, useState } from "react"
import useSWR from "swr"
// useEffect hook
// swr, useSwr
// with loading state


function ClientDataFetch() {
        // const [loading, setLoading] = useState(false)
        // const [users, setUsers] = useState([])

        // async function fetchUserList() {
        //     try {
        //         setLoading(true)
        //         const res = await fetch('https://dummyjson.com/users')
        //         const data = await res.json()
        //         if (data?.users) {
        //             setUsers(data.users)
        //             setLoading(false)
        //         }
        //     } catch (e) {
        //         setUsers([])
        //         setLoading(false)
        //         console.log('Unable to fetch data');
        //     }
        // }

        // useEffect(() => {
        //     fetchUserList()
        // }, [])      // load every time on page load
        
        // if (loading) {
        //     return <h3>Loading users, please wait</h3>
        // }

        const fetcher = (...args) => fetch(...args).then(res => res.json())

        const {data, error, isLoading} = useSWR('https://dummyjson.com/users', fetcher)

        if(error) {
            return (
                <h3 className="font-bold">Failed to load</h3>
            )
        }
        if(isLoading) {
            return (
                <h3 className="font-bold">Data loading..</h3>
            )
        }
        

        return (
            <div>
                <h1 className="font-bold">Users</h1>
                <ul>
                    {data?.users && data.users.length > 0 && (
                        data.users.map(user => (
                            <li key={user.id}>
                                {user.firstName}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        )
    }

export default ClientDataFetch