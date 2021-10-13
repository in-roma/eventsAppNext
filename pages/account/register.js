import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUser } from 'react-icons/fa';

// Components
import Layout from '@/components/Layout';
import styles from '@/styles/AuthForm.module.css';
import AuthContext from '@/context/AuthContext';

export default function RegisterPage() {
	const [userName, setUserName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const { register, error } = useContext(AuthContext);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (password !== passwordConfirm) {
			toast.error('Passwords do not match');
		}
		register({ username, email, password });
	};

	return (
		<Layout title="User Registration">
			<div className={styles.auth}>
				<h1>
					<FaUser />
					Register
				</h1>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="username">User name</label>
						<input
							type="text"
							id="username"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						></input>
					</div>
					<div>
						<label htmlFor="email">Email Address</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						></input>
					</div>
					<div>
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						></input>
					</div>
					<div>
						<label htmlFor="passwordConfirmation">
							Confirm Password
						</label>
						<input
							type="password"
							id="passwordConfirmation"
							value={passwordConfirm}
							onChange={(e) => setPasswordConfirm(e.target.value)}
						></input>
					</div>
					<input type="submit" value="Login" className="btn" />
				</form>

				<p>
					Already have an accout ?
					<Link href="/account/login">Login</Link>
				</p>
			</div>
		</Layout>
	);
}
