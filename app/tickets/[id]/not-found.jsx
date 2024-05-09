import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='text-center'>
			<h2 className='text-3xl'> We hit a brick wall. </h2>
			<p>We could not find the ticket you are looking for</p>
			<span>
				Go back to the <Link href='/'>Dashboard</Link>
			</span>
		</main>
	)
}
