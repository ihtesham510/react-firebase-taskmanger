import { Button } from '@/components/ui/button'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router'

const Dashboard = () => {
	const auth = getAuth()
	const navigation = useNavigate()
	const logOut = () => {
		auth.signOut()
		navigation('/login')
	}

	return (
		<div>
			<Button onClick={logOut}>Sign out</Button>
		</div>
	)
}

export default Dashboard
