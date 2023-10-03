import Auth from './Main/Login/Auth'
import Main from './Main/Main'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './utils/firebase-config'
import Header from './Main/Header/Header'
export default function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <Header />
      {user ? <Main /> : <Auth />}
    </>
  )
}
