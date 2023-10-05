import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase-config'

export const useloginstate = (): boolean => {
  const [user] = useAuthState(auth)
  if(user){
    return true
  }
  return false
}
