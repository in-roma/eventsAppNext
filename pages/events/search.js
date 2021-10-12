import Layout from '@/components/Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';
import qs from 'qs';

export default function SearchPage({ events }) {
	const router = useRouter();
	return (
		<Layout title="Search page">
			<Link href="/events">Go back</Link>
			<h1>Search results for '{router.query.term}'</h1>
			{events.length === 0 ? (
				<h4>No events to show</h4>
			) : (
				events.map((evt) => <EventItem key={evt.id} evt={evt} />)
			)}
		</Layout>
	);
}

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [
				{ name_contains: term },
				{ performers_contains: term },
				{ description_contains: term },
				{ venue_contains: term },
			],
		},
	});

	const res = await fetch(`${API_URL}/events?${query}`);
	const events = await res.json();

	return {
		props: { events },
	};
}
