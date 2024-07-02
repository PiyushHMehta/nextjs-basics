'use client'

import { usePathname, useSearchParams } from "next/navigation"


function Cart() {
    // http://localhost:3000/cart?search=pro&value=12
    const pathname = usePathname()
    const searchParams = useSearchParams()
    // console.log(pathname);      // '/cart'
    // console.log(searchParams.get('search'));    // pro
    // console.log(searchParams.get('value'));     // 12

    return (
        <div>
            Cart 
        </div>
    )
}

export default Cart