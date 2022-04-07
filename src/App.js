import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./frontend/pages/Home";
import About from "./frontend/pages/About";
import { AuthProvider } from './context/AuthContext';
import Login from './backend/auth/Login';
import Dashboard from "./backend/dashboard/Dashboard";


function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/admin/*" element={
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</AuthProvider>
			} />
		</Routes>
	);
}

export default App;
