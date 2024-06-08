import { ReactNode } from 'react'
import useLoginState from 'Hooks/useLoginState'
import { Navigate } from 'react-router'

interface Props {
	children: ReactNode
}
const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const { isLogedIn } = useLoginState()
	if (isLogedIn) return children
	return <Navigate to={'/login'} replace />
}

export default ProtectedRoute
