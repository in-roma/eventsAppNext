import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '@/styles/Search.module.css';

export default function Search() {
	const [input, setInput] = useState('');
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();
		router.push(`/events/search?term=${input}`);
		setInput('');
	};

	return (
		<div className={styles.search}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search event"
				></input>
			</form>
		</div>
	);
}
