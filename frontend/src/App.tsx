import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import ProjectDashboard from "./components/ProjectDashboard";
import DataActivity from "./DataActivity";
import DashNavbar from "./components/Navbar";

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />

					{/* Protected Route: Only authenticated users can access /dashboard */}
					<Route
						path="/dashboard"
						element={
							<>
								<DashNavbar />
								<ProjectDashboard />
							</>
						}
						// element={
						//   isAuthenticated ? <ProjectDashboard /> : <Navigate to="/login" />
						// }
					/>

					{/* Login Page Route */}
					<Route path="/login" element={<Login />} />

					{/* DataActivity Page */}
					<Route
						path="/dataActivity/:projectId"
						element={
							<div>
								<DashNavbar />
								<DataActivity />
							</div>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};
export default App;
