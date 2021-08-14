import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { toast } from 'react-toastify';

const CompleteRegister = ({ history }) => {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	useEffect(() => {
		setEmail(window.localStorage.getItem('emailForRegistration'));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	const registerFormComplete = () => (
		<form onSubmit={handleSubmit}>
			<input type="email" className="form-control" value={email} disabled />

			<input
				type="text"
				className="form-control"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				autoFocus
				placeholder="password"
			/>

			<button type="submit" className="btn btn-raised">
				CompleteRegister
			</button>
		</form>
	);

	return (
		<div className="container p-5">
			<div className="row">
				<div className="col-md-6 offset-md-3">
					<h4>Complete Register</h4>
					{registerFormComplete()}
				</div>
			</div>
		</div>
	);
};

export default CompleteRegister;