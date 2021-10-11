import Link from 'next/Link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; events app2021</p>
			<p>
				<Link href="/about">About this project</Link>
			</p>
		</footer>
	);
}
