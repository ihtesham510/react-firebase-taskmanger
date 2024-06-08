import ProtectedRoute from 'Components/ProtectedRoute'
import UnProtectedRoute from 'Components/UnProtectedRoute'
import { Routes, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Login from 'Pages/Login'
import Dashboard from 'Pages/Dashboard'
import SignUp from './Pages/SignUp'

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/login'
						element={
							<UnProtectedRoute>
								<Login />
							</UnProtectedRoute>
						}
					/>
					<Route
						path='/signup'
						element={
							<UnProtectedRoute>
								<SignUp />
							</UnProtectedRoute>
						}
					/>
					<Route
						path='/dashboard'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route path='*' element={<>404</>} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
