import { auth } from '@/lib/firebase-config'
import { useAuthState } from 'react-firebase-hooks/auth'
const useLoginState = () => {
	const [user] = useAuthState(auth)
	const isLogedIn = !!user
	return { isLogedIn, user }
}
export default useLoginState
