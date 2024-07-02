// fast data feching, caching, and security

import Link from "next/link";

async function fetchUserList() {
    try {
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        return data.users;
    } catch (e) {
        console.log('Unable to fetch data');
    }
}

async function ServerDataFetch() {
    const userList = await fetchUserList()
    // console.log(userList);
    return (
        <div>
            <h1 className="font-bold">Users</h1>
            <ul>
                {userList && userList.length > 0 && (
                    userList.map(user => (
                        <Link href={`/server-data-fetch/${user.id}`}
                            key={user.id}
                            className="underline block">
                            {user.firstName}
                        </Link>
                    ))
                )}
            </ul>
        </div>

    )
}

export default ServerDataFetch