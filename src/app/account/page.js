import { redirect } from "next/navigation";

function Account() {
    // assume that profile info is null
    const userProfileInfo = null;

    if (userProfileInfo === null) {
        redirect('/products?search=1')
    }

    return (
        <div>Account</div>
    )
}

export default Account