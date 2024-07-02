'use client'

// all componenets server by default: data fetching can be fast, data can be cached, and better security
// clients component: in case of interactivity(using hooks): 'use client'
// folder structure is strict: folder defines browser routing, by default: this page.js(file naming is also strict) is rendered when on localhost:3000, if we created an about folder and a page.js in about folder then that page will rendered when on localhost:3000/about (all this folders should be created in app directory)
// [] dynamic routes(/product/1), [...] catch all routes(product/45/23) => 23rd review for 45th product


import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
	const router = useRouter()
	// make component client

	return (
		<main className="flex min-h-screen flex-col items-center justify-center">
			<h1>welcome</h1>
			<Link href={'/products'}>Navigate to products page</Link>
			<Link href={'/account'}>Navigate to account page</Link>

			<h2 className="font-bold mt-4 text-lg">Alternating way of navigating</h2>
			<button onClick={() => router.push('/products')}>Navigate to products page</button>
			<button onClick={() => router.push('/account')}>Navigate to account page</button>
		</main>
	);
}
