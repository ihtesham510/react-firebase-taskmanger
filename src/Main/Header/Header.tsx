import React from 'react'
import ToggleTheme from '../../Components/toggleTheme'
import { signOut } from 'firebase/auth'
import { auth } from '../../utils/firebase-config'
import { useloginstate } from '../../utils/useloginstate'
const signout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

const Header: React.FC = () => {
  const user = useloginstate()
  return (
    <header className='flex h-20 w-full items-center justify-around border-b-2 border-black bg-light-primary bg-transparent dark:border-white'>
      <h1 className='ml-16 mr-auto text-2xl dark:text-white'>
        React & Firebase Taskmanger
      </h1>
      <div className='ml-auto mr-12 flex items-center gap-3'>
        <ToggleTheme />
        <button
          onClick={signout}
          className={`btn-primary ${user ? 'block' : 'hidden'}`}
        >
          Sign out
        </button>
        <img
          src={auth.currentUser?.photoURL || ''}
          className={`w-12 rounded-full ${user ? 'block' : 'hidden'}`}
          alt=''
        />
      </div>
    </header>
  )
}

export default Header
