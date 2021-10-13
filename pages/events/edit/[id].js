import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { API_URL } from '@/config/index';
import styles from '@/styles/Form.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from '@/components/Layout';

export default function Edit() {
	const [values, setValues] = useState({
		name: '',
		performers: '',
		venue: '',
		address: '',
		description: '',
		date: '',
		time: '',
	});
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		// Validation
		const hasEmptyFields = Object.values(values).some((el) => el === '');
		if (hasEmptyFields) {
			toast.error('Please fill in all fields');
		}
		const res = await fetch(`${API_URL}/events`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
		if (!res.ok) {
			toast.error('Something went wrong');
		} else {
			const event = await res.json();
			router.push(`/events/${event.slug}`);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<Layout title="Add new event page">
			<Link href="/events">Go back</Link>
			<h1>Add Event</h1>
			<ToastContainer />
			<form onSubmit={handleSubmit} className={styles.form}>
				<div className={styles.grid}>
					<div>
						<label htmlFor="name">Event Name</label>
						<input
							type="text"
							id="name"
							name="name"
							value={values.name}
							onChange={handleChange}
						></input>
					</div>
					<div>
						<label htmlFor="performers">Performers</label>
						<input
							type="text"
							name="performers"
							id="performers"
							value={values.performers}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="venue">Venue</label>
						<input
							type="text"
							name="venue"
							id="venue"
							value={values.venue}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="address">Address</label>
						<input
							type="text"
							name="address"
							id="address"
							value={values.address}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="date">Date</label>
						<input
							type="date"
							name="date"
							id="date"
							value={values.date}
							onChange={handleChange}
						/>
					</div>
					<div>
						<label htmlFor="time">Time</label>
						<input
							type="text"
							name="time"
							id="time"
							value={values.time}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div>
					<label htmlFor="description">Event Description</label>
					<textarea
						type="text"
						name="description"
						id="description"
						value={values.description}
						onChange={handleChange}
					></textarea>
				</div>

				<input type="submit" value="Add Event" className="btn" />
			</form>
		</Layout>
	);
}