async function fetchUserData(userId) {
    // console.log(userId);
    try {
        const res = await fetch(`https://dummyjson.com/users/${userId}`)
        const data = await res.json()
        return data;
    } catch (e) {
        console.log('Unable to fetch data');
    }
}


async function SingleUserData({params}) {
    const user = await fetchUserData(params.details)
    return (
        // <div>
        //     <img src={user.image} alt="profile pic" className="size-6" />
        //     <h2>{user.firstName}</h2>
        //     <h2>{user.lastName}</h2>
        // </div>
        <pre>
            {JSON.stringify(user, null, 4)}
        </pre>
    )
}

export default SingleUserData