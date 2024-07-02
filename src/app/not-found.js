'use client'

import { useRouter } from 'next/navigation'; // Import from 'next/navigation'

function NotFound() {
  const router = useRouter();

  const goBack = () => {
    router.back(); // Navigate back one step in the browser history
  };

  return (
    <>
      <div>This page doesn't exist</div>
      <button onClick={goBack}>Go back</button>
    </>
  );
}

export default NotFound;


/*
import Link from "next/link"

function NotFound() {
    return (
        <>
            <div>This page doesn't exist</div>
            <Link href={'/'}>Go back to home page</Link>
        </>
    )
}

export default NotFound
*/