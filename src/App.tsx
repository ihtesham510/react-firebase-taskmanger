import Auth from './Main/Login/Auth'
import Main from './Main/Main'
import Header from './Main/Header/Header'
import { useloginstate } from './utils/useloginstate'
export default function App() {
  const user = useloginstate()
  return (
    <>
      <Header />
      {user ? <Main /> : <Auth />}
    </>
  )
}
