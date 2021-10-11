import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ShowCase from './ShowCase';
import styles from '@/styles/Layout.module.css';

export default function Layout({ title, keywords, description, children }) {
	const router = useRouter();
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Header />
			{router.pathname === '/' && <ShowCase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: 'Events App',
	description: 'Find events',
	keywords: 'music, events, find',
};
