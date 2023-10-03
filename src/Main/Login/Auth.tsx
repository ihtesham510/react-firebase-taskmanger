import { useState } from 'react'
import { auth, googleAuth } from '../../utils/firebase-config'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
const Auth = () => {
  const [email, setemail] = useState<string>('')
  const [password, setpassword] = useState<string>('')
  const [emailerr, setemailerr] = useState<boolean>(false)
  const [passworderr, setpassworderr] = useState<boolean>(false)
  const signin = async () => {
    if (!email) {
      setemailerr(true)
    }
    if (!password) {
      setpassworderr(true)
    } else {
      setpassworderr(false)
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password) // this will add a user in firebase
    } catch (err) {
      console.error(err)
    }
  }
  const signinwithgoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth) // this will add a user in firebase
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className='my-28 flex h-full flex-col items-center justify-center  bg-transparent'>
      <h1 className='mb-8 text-center text-4xl font-semibold text-gray-800 dark:text-white'>
        Sign In
      </h1>
      <div className=' w-[400px]'>
        <input
          placeholder='Email...'
          onChange={e => {
            setemail(e.target.value)
            setemailerr(false)
          }}
          type='text'
          className={`input-primary ${emailerr ? 'input-error' : ''}`}
        />
        <p className={`${emailerr ? 'block' : 'hidden'} p-error`}>
          Enter some input
        </p>
        <input
          placeholder='Password...'
          onChange={e => {
            setpassword(e.target.value)
            setpassworderr(false)
          }}
          className={`input-primary ${emailerr ? 'input-error' : ''}`}
          type='password'
        />
        <p className={`${passworderr ? 'block' : 'hidden'} p-error`}>
          Enter some input
        </p>
        <div className='grid w-full'>
          <button onClick={signin} className='btn-primary m-3'>
            Sign In
          </button>
          <div className='flex items-center justify-center dark:text-white'>
            Or
          </div>
          <button
            onClick={signinwithgoogle}
            className='btn-primary m-3'
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Auth
