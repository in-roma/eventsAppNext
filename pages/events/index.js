import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function EventsPage({ events }) {
	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{events.length === 0 ? (
				<h4>No events to show</h4>
			) : (
				events.map((evt) => <EventItem key={evt.id} evt={evt} />)
			)}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/events?_sort=date:ASC`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
