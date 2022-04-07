// import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "../../lib/axios";

// import { useAuth } from '../../contexts/Backend/AuthContext';
import avatar from "../assets/user.svg";
import "./Login.css";
// axios.defaults.baseURL = 'http://localhost:8000';
// // axios.defaults.headers.common['Authorization'] = '';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

const Login = ()  => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [remember, setRemember] = useState(false);
	const { login, currentUser } = useAuth();
	const navigate = useNavigate();


	useEffect(() => {
		if (currentUser) {
			navigate('/admin/dashboard');
		}
	}, [currentUser, navigate]);

	const login_handle = async () => {
		login(email, password);
	}

	return (
		<div className="wrap">
			<div className="frm">
				<div className="had">
					<img src={avatar} alt="" />
				</div>
				<h2 style={{ textAlign: "center" }}>Admin Login</h2>
				<br />
				<input
					className="fld"
					type="email"
					name="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<input
					style={{ marginBottom: "20px" }}
					className="fld"
					type="password"
					name="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<div style={{ marginBottom: "20px" }}>
					<input
						className="remember"
						type="checkbox"
						id="remember"
						onChange={(e) => setRemember(e.target.checked)}
						checked={remember}
						name="remember"
					/>
					<label htmlFor="remember" className="fre">
						<span className="fre_check"></span>
						Remember me
					</label>
				</div>
				<button className="lgn" type="submit" onClick={() => login_handle()}>Login</button>
			</div>
		</div>
	);

}

export default Login;